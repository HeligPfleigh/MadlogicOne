import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput, Button, Text, Checkbox} from 'react-native-paper';

import {Madlogic} from '../assets/images';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  imageContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 3,
  },
  input: {
    marginTop: 10,
    marginBottom: 10,
  },
});

export default function ClientCode() {
  const [email, setEmail] = useState('');
  const [disableBtn] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Madlogic width={500} height={100} />
      </View>
      <View style={styles.content}>
        <Text>Please write down your client code</Text>
        <TextInput
          style={styles.input}
          label="Email"
          value={email}
          onChangeText={setEmail}
          mode="outlined"
        />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Checkbox status="checked" onPress={() => {}} />
          <Text>I agree with the privacy policy</Text>
        </View>
        <Button
          onPress={() => {}}
          mode="contained"
          disabled={disableBtn}
          style={{width: '50%', marginLeft: '25%', marginTop: 50}}>
          Register
        </Button>
      </View>
    </View>
  );
}
