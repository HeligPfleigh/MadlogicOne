import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {TextInput, Button, Colors, useTheme, Text} from 'react-native-paper';
import {useIntl} from 'react-intl';
import {useFormik} from 'formik';
import noop from 'lodash/noop';
import * as Yup from 'yup';
import {observer} from 'mobx-react-lite';
import {
  registerWithEmail,
  eventEmitter,
  MADLOGIC_SDK_EVENTS,
} from 'react-native-madlogic';

import {useStores} from '../../core/hooks/useStores';
import {useGlobalStyles} from '../../core/hooks/useGlobalStyle';

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  input: {
    marginBottom: 16,
  },
  btnContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  login: {
    width: '50%',
    color: Colors.white,
  },
});

type EmailFormValue = {
  email: string;
};

const EmailSchema = Yup.object().shape({
  email: Yup.string()
    .email('login.errors.email.invalid')
    .required('login.errors.email.required'),
});

function LoginByEmail() {
  const {formatMessage} = useIntl();
  const theme = useTheme();
  const store = useStores();
  const [globalStyles] = useGlobalStyles(theme);
  const [disableBtn, setDisable] = useState(false);

  const {
    handleSubmit,
    handleChange,
    values: {email},
    errors,
    setFieldTouched,
    touched,
  } = useFormik<EmailFormValue>({
    initialValues: {
      email: '',
    },
    initialErrors: {
      email: 'login.errors.email.required',
    },
    validationSchema: EmailSchema,
    onSubmit: () => {
      registerWithEmail(email);
      setDisable(true);
    },
  });

  useEffect(() => {
    const registerError = eventEmitter.addListener(
      MADLOGIC_SDK_EVENTS.EVENT_REGISTER_ERROR,
      () => {
        store?.snackStore.setError('login.fail');
        setDisable(false);
      },
    );
    return () => {
      registerError.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangeText = (field: string) => (value: string) => {
    setFieldTouched(field, true);
    (handleChange(field) || noop)(value);
  };

  return (
    <View style={globalStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={globalStyles.fullFlexImage}
          source={{uri: store?.ternantStore.logo?.logo}}
        />
      </View>
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          label={formatMessage({id: 'login.email'})}
          value={email}
          onChangeText={handleChangeText('email')}
          mode="outlined"
          error={touched.email && Boolean(errors.email)}
        />
        {touched.email && errors.email && (
          <Text style={globalStyles.formError}>
            {formatMessage({id: errors.email})}
          </Text>
        )}
      </View>
      <View style={styles.btnContainer}>
        <Button
          onPress={handleSubmit}
          mode="contained"
          disabled={Boolean(errors.email) || disableBtn}
          uppercase={false}
          color={Colors.red500}
          style={styles.login}>
          {formatMessage({id: 'login.login'})}
        </Button>
      </View>
    </View>
  );
}

export default observer(LoginByEmail);
