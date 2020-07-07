import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {TextInput, Button} from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
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
    marginTop: 10,
    marginBottom: 10,
  },
});

function validateEmail(email: string) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export default function LoginByEmail() {
  const [email, setEmail] = useState('test@1.com');
  const [disableBtn, setDisable] = useState(false);

  const handlePressRegister = () => {
    // TODO
    setDisable(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri:
              'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          label="Email"
          value={email}
          onChangeText={setEmail}
          mode="outlined"
        />
        <Button
          onPress={handlePressRegister}
          mode="contained"
          disabled={!validateEmail(email) || disableBtn}>
          Register
        </Button>
      </View>
    </View>
  );
}
