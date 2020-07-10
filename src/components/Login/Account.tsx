import React from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import {TextInput, Button, Colors} from 'react-native-paper';
import {useIntl} from 'react-intl';
import {useFormik} from 'formik';
import noop from 'lodash/noop';
import * as Yup from 'yup';
import {useNavigation} from '@react-navigation/native';
import {observer} from 'mobx-react-lite';

import NavigatorMap from '../../navigations/NavigatorMap';
import {useStores} from '../../core/hooks/useStores';

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
    color: Colors.white,
  },
  forgotTxt: {
    marginTop: 16,
    color: Colors.blue500,
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

function LoginByAccount() {
  const {formatMessage} = useIntl();
  const navigation = useNavigation();
  const store = useStores();

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
    onSubmit: () => {
      store?.authorizationStore.authorize();
    },
  });

  const handlePressForgotPwd = () =>
    navigation.navigate(NavigatorMap.ForgotPassword);

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{uri: store?.ternantStore.logo?.logo}}
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
          color={Colors.red500}
          style={styles.login}>
          {formatMessage({id: 'login.login'})}
        </Button>
        <TouchableOpacity onPress={handlePressForgotPwd}>
          <Text style={styles.forgotTxt}>
            {formatMessage({id: 'login.forgotPassword'})}
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

export default observer(LoginByAccount);
