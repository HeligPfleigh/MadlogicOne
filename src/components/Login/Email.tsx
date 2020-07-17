import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Button, Colors, useTheme} from 'react-native-paper';
import {useIntl} from 'react-intl';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {observer} from 'mobx-react-lite';
import {
  registerWithEmail,
  eventEmitter,
  MADLOGIC_SDK_EVENTS,
} from 'react-native-madlogic';

import {useStores} from '../../core/hooks/useStores';
import {useGlobalStyles} from '../../core/hooks/useGlobalStyle';
import TextInputFormik from '../Form/TextInput';

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

  const handleRegisterByEmail = ({email}: EmailFormValue) => {
    registerWithEmail(email);
    setDisable(true);
  };

  return (
    <View style={globalStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={globalStyles.fullFlexImage}
          source={{uri: store?.ternantStore.logo?.logo}}
        />
      </View>
      <Formik
        initialValues={{
          email: '',
        }}
        validationSchema={EmailSchema}
        onSubmit={handleRegisterByEmail}>
        {({handleSubmit, isValid}) => (
          <>
            <View style={styles.content}>
              <TextInputFormik
                name="email"
                style={styles.input}
                label={formatMessage({id: 'login.email'})}
                mode="outlined"
              />
            </View>
            <View style={styles.btnContainer}>
              <Button
                onPress={handleSubmit}
                mode="contained"
                disabled={!isValid || disableBtn}
                uppercase={false}
                color={Colors.red500}
                style={styles.login}>
                {formatMessage({id: 'login.login'})}
              </Button>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
}

export default observer(LoginByEmail);
