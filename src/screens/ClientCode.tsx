import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {TextInput, Button, Text, Checkbox, useTheme} from 'react-native-paper';
import {Colors} from 'react-native-paper';
import {useIntl} from 'react-intl';
import {StackScreenProps} from '@react-navigation/stack';

import {Madlogic} from '../assets/images';
import NavigatorMap from '../navigations/NavigatorMap';
import {AuthStackParamsList} from '../navigations/types';
import {RegistrationType} from '../core/const';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
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
  btnContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  next: {
    width: '50%',
    backgroundColor: Colors.red500,
    color: Colors.white,
  },
});

type ClientCodeScreenNavigationProps = StackScreenProps<
  AuthStackParamsList,
  NavigatorMap.ClientCode
>;

export default function ClientCode({
  navigation,
}: ClientCodeScreenNavigationProps) {
  const theme = useTheme();
  const [clientCode, setClientCode] = useState<string>('');
  const [agreeWithPolicy, setAgreeWithPolicy] = useState<boolean>(false);
  const {formatMessage} = useIntl();

  const toggleAgreeWithPolicy = () => setAgreeWithPolicy((prev) => !prev);

  const handlePressNext = () => {
    // TODO
    navigation.navigate(NavigatorMap.Login, {
      registrationType: RegistrationType.ACCOUNT,
    });
  };

  const handlePressPolicy = () => {
    navigation.navigate(NavigatorMap.Privacy);
  };

  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <View style={styles.imageContainer}>
        <Madlogic width={500} height={100} />
      </View>
      <View style={styles.content}>
        <Text>{formatMessage({id: 'clientcode.instruction'})}</Text>
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
          <Text>{formatMessage({id: 'clientcode.agree'})}</Text>
          <TouchableOpacity onPress={handlePressPolicy}>
            <Text style={styles.privacyTxt}>
              {formatMessage({id: 'clientcode.policy'})}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <Button
          onPress={handlePressNext}
          mode="contained"
          disabled={!agreeWithPolicy}
          uppercase={false}
          style={styles.next}>
          {formatMessage({id: 'clientcode.next'})}
        </Button>
      </View>
    </View>
  );
}
