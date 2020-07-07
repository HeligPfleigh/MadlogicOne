import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';

import {AuthStackParamsList} from '../navigations/types';
import NavigatorMap from '../navigations/NavigatorMap';
import LoginFactory from '../components/Login/LoginFactory';

type LoginScreenNavigationProps = StackScreenProps<
  AuthStackParamsList,
  NavigatorMap.Login
>;

export default function Login({route}: LoginScreenNavigationProps) {
  const {registrationType} = route.params;

  return <LoginFactory registrationType={registrationType} />;
}
