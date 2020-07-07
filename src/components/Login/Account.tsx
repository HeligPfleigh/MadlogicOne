import React from 'react';
import {View, StyleSheet, KeyboardAvoidingView} from 'react-native';
import {TextInput, Button, Colors} from 'react-native-paper';
import {useIntl} from 'react-intl';
import {SvgUri} from 'react-native-svg';
import {useFormik} from 'formik';
import noop from 'lodash/noop';
import * as Yup from 'yup';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: null as any,
    height: null as any,
    resizeMode: 'contain',
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
    backgroundColor: Colors.red500,
    color: Colors.white,
  },
});

type AccountFormValue = {
  username: string;
  password: string;
};

const AccountSchema = Yup.object().shape({
  username: Yup.string().required('login.errors.username.required'),
  password: Yup.string().required('login.errors.password.required'),
});

export default function LoginByAccount() {
  const {formatMessage} = useIntl();

  const {
    handleSubmit,
    handleChange,
    values: {username, password},
    errors,
  } = useFormik<AccountFormValue>({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: AccountSchema,
    onSubmit: (values) => {
      // TODO
      console.log(values);
    },
  });

  console.log(errors);

  return (
    <KeyboardAvoidingView style={styles.container}>
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
          label={formatMessage({id: 'login.username'})}
          value={username}
          onChangeText={handleChange('username') || noop}
          mode="outlined"
        />
        <TextInput
          style={styles.input}
          label={formatMessage({id: 'login.password'})}
          value={password}
          onChangeText={handleChange('password') || noop}
          mode="outlined"
          secureTextEntry
        />
      </View>
      <View style={styles.btnContainer}>
        <Button
          onPress={handleSubmit}
          mode="contained"
          disabled={Boolean(errors.password) || Boolean(errors.username)}
          uppercase={false}
          style={styles.login}>
          {formatMessage({id: 'login.login'})}
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
}
