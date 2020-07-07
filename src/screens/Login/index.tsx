import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {StackScreenProps} from '@react-navigation/stack';
import {AuthStackParamsList} from '../../navigations/types';
import NavigatorMap from '../../navigations/NavigatorMap';
import LoginFactory from '../../components/Login/LoginFactory';

type LoginScreenNavigationProps = StackScreenProps<
  AuthStackParamsList,
  NavigatorMap.Login
>;

export default function Login({navigation, route}: LoginScreenNavigationProps) {
  const {registrationType} = route.params;

  return <LoginFactory registrationType={registrationType} />;
}
