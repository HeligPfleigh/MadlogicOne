import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {TextInput, Button, Text, Checkbox, useTheme} from 'react-native-paper';

import {Madlogic} from '../assets/images';
import {Colors} from 'react-native-paper';

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
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  privacyTxt: {
    color: Colors.blue500,
  },
  next: {
    width: '50%',
    marginLeft: '25%',
    marginTop: 50,
  },
});

export default function ClientCode() {
  const theme = useTheme();
  const [clientCode, setClientCode] = useState<string>('');
  const [agreeWithPolicy, setAgreeWithPolicy] = useState<boolean>(false);

  const toggleAgreeWithPolicy = () => setAgreeWithPolicy((prev) => !prev);

  const handlePressNext = () => {};

  const handlePressPolicy = () => {};

  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <View style={styles.imageContainer}>
        <Madlogic width={500} height={100} />
      </View>
      <View style={styles.content}>
        <Text>Please write down your client code</Text>
        <TextInput
          style={styles.input}
          label="Client Code"
          value={clientCode}
          onChangeText={setClientCode}
          mode="outlined"
        />
        <View style={styles.checkbox}>
          <Checkbox.Android
            status={agreeWithPolicy ? 'checked' : 'unchecked'}
            onPress={toggleAgreeWithPolicy}
          />
          <Text>I agree with the </Text>
          <TouchableOpacity onPress={handlePressPolicy}>
            <Text style={styles.privacyTxt}>privacy policy</Text>
          </TouchableOpacity>
        </View>
        <Button
          onPress={handlePressNext}
          mode="contained"
          disabled={!agreeWithPolicy}
          style={styles.next}>
          Next
        </Button>
      </View>
    </View>
  );
}
