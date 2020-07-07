import React from 'react';
import {View, StyleSheet, KeyboardAvoidingView} from 'react-native';
import {TextInput, Button, Colors} from 'react-native-paper';
import {useIntl} from 'react-intl';
import {SvgUri} from 'react-native-svg';
import {useFormik} from 'formik';
import {noop, isEmpty} from 'lodash';

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
    validate: (values) => {
      if (!values.username) {
        return {username: 'login.errors.username.required'};
      }
      if (!values.password) {
        return {password: 'login.errors.password.required'};
      }
    },
    onSubmit: (values) => {
      // TODO
      console.log(values);
    },
  });

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
          onChangeText={handleChange(username) || noop}
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
          disabled={isEmpty(errors)}
          uppercase={false}
          style={styles.login}>
          {formatMessage({id: 'login.login'})}
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
}
