import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput, Button, Colors, useTheme} from 'react-native-paper';
import {useIntl} from 'react-intl';
import {useFormik} from 'formik';
import noop from 'lodash/noop';
import * as Yup from 'yup';
import {SvgUri} from 'react-native-svg';

import {useGlobalStyles} from '../core/hooks/useGlobalStyle';

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
  submit: {
    width: '50%',
    color: Colors.white,
  },
});

type EmailFormValue = {
  email: string;
};

const EmailSchema = Yup.object().shape({
  email: Yup.string()
    .email('forgotPassword.errors.email.invalid')
    .required('forgotPassword.errors.email.required'),
});

export default function ForgotPassword() {
  const theme = useTheme();
  const {formatMessage} = useIntl();
  const [globalStyles] = useGlobalStyles(theme);

  const {
    handleSubmit,
    handleChange,
    values: {email},
    errors,
  } = useFormik<EmailFormValue>({
    initialValues: {
      email: '',
    },
    validationSchema: EmailSchema,
    onSubmit: (values) => {
      // TODO
      console.log(values);
    },
  });

  return (
    <View style={globalStyles.container}>
      <View style={styles.imageContainer}>
        <SvgUri
          width="100%"
          height="100%"
          uri="http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg"
        />
      </View>
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          label={formatMessage({id: 'login.email'})}
          value={email}
          onChangeText={handleChange('email') || noop}
          mode="outlined"
        />
      </View>
      <View style={styles.btnContainer}>
        <Button
          onPress={handleSubmit}
          mode="contained"
          disabled={Boolean(errors.email)}
          uppercase={false}
          color={Colors.red500}
          style={styles.submit}>
          {formatMessage({id: 'forgotPassword.submit'})}
        </Button>
      </View>
    </View>
  );
}
