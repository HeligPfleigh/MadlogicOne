import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import {Button, Colors, useTheme} from 'react-native-paper';
import {useIntl} from 'react-intl';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useNavigation} from '@react-navigation/native';
import {observer} from 'mobx-react-lite';

import NavigatorMap from '../../navigations/NavigatorMap';
import {useStores} from '../../core/hooks/useStores';
import {useGlobalStyles} from '../../core/hooks/useGlobalStyle';
import TextInputFormik from '../Form/TextInput';
import {
  registerWithAccount,
  eventEmitter,
  MADLOGIC_SDK_EVENTS,
} from 'react-native-madlogic';

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
  const theme = useTheme();
  const navigation = useNavigation();
  const store = useStores();
  const [globalStyles] = useGlobalStyles(theme);
  const [disableBtn, setDisable] = useState(false);

  const handlePressForgotPwd = () =>
    navigation.navigate(NavigatorMap.ForgotPassword);

  const handleRegisterByAccount = ({username, password}: AccountFormValue) => {
    registerWithAccount(username, password);
    setDisable(true);
  };

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

  return (
    <KeyboardAvoidingView style={globalStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={globalStyles.fullFlexImage}
          source={{uri: store?.ternantStore.logo?.logo}}
        />
      </View>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        validationSchema={AccountSchema}
        onSubmit={handleRegisterByAccount}>
        {({handleSubmit, isValid}) => (
          <>
            <View style={styles.content}>
              <TextInputFormik
                style={styles.input}
                label={formatMessage({id: 'login.username'})}
                mode="outlined"
                name="username"
                autoCapitalize="none"
              />
              <TextInputFormik
                style={styles.input}
                label={formatMessage({id: 'login.password'})}
                mode="outlined"
                name="password"
                secureTextEntry
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
              <TouchableOpacity onPress={handlePressForgotPwd}>
                <Text style={styles.forgotTxt}>
                  {formatMessage({id: 'login.forgotPassword'})}
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </KeyboardAvoidingView>
  );
}

export default observer(LoginByAccount);
