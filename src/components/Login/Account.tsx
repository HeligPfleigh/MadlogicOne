import React, {useState} from 'react';
import {View, StyleSheet, KeyboardAvoidingView} from 'react-native';
import {TextInput, Button, Colors} from 'react-native-paper';
import {useIntl} from 'react-intl';
import {SvgUri} from 'react-native-svg';

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

export default function LoginByAccount() {
  const {formatMessage} = useIntl();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handlePressRegister = () => {};

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
          onChangeText={setUsername}
          mode="outlined"
        />
        <TextInput
          style={styles.input}
          label={formatMessage({id: 'login.password'})}
          value={password}
          onChangeText={setPassword}
          mode="outlined"
          secureTextEntry
        />
      </View>
      <View style={styles.btnContainer}>
        <Button
          onPress={handlePressRegister}
          mode="contained"
          uppercase={false}
          style={styles.login}>
          {formatMessage({id: 'login.login'})}
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
}
