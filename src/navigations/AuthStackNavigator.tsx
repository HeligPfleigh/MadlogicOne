import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {AuthStackParamsList} from './types';
import NavigatorMap from './NavigatorMap';
import DefaultScreen from '../screens/Default';
import ClientCodeScreen from '../screens/ClientCode';
import LoginScreen from '../screens/Login';
import PrivacyScreen from '../screens/Privacy';

const Stack = createStackNavigator<AuthStackParamsList>();

const AuthStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name={NavigatorMap.ClientCode} component={ClientCodeScreen} />
    <Stack.Screen name={NavigatorMap.Login} component={LoginScreen} />
    <Stack.Screen
      name={NavigatorMap.Privacy}
      component={PrivacyScreen}
      options={{headerShown: true}}
    />
    <Stack.Screen
      name={NavigatorMap.ForgotPassword}
      component={DefaultScreen}
      options={{headerShown: true}}
    />
  </Stack.Navigator>
);

export default AuthStackNavigator;
