import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Button, Colors, useTheme} from 'react-native-paper';
import {useIntl} from 'react-intl';
import {Formik} from 'formik';
import * as Yup from 'yup';

import {useGlobalStyles} from '../core/hooks/useGlobalStyle';
import {useStores} from '../core/hooks/useStores';
import TextInputFormik from '../components/Form/TextInput';

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
  const store = useStores();

  const handleSubmitEmail = () => {};

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
        onSubmit={handleSubmitEmail}>
        {({handleSubmit, isValid}) => (
          <>
            <View style={styles.content}>
              <TextInputFormik
                style={styles.input}
                label={formatMessage({id: 'login.email'})}
                mode="outlined"
                name="email"
              />
            </View>
            <View style={styles.btnContainer}>
              <Button
                onPress={handleSubmit}
                mode="contained"
                disabled={!isValid}
                uppercase={false}
                color={Colors.red500}
                style={styles.submit}>
                {formatMessage({id: 'forgotPassword.submit'})}
              </Button>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
}
