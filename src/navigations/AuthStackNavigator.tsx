import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {AuthStackParamsList} from './types';
import NavigatorMap from './NavigatorMap';
import DefaultScreen from '../screens/Default';

const Stack = createStackNavigator<AuthStackParamsList>();

const AuthStackNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name={NavigatorMap.ClientCode} component={DefaultScreen} />
    <Stack.Screen name={NavigatorMap.Login} component={DefaultScreen} />
    <Stack.Screen name={NavigatorMap.Privacy} component={DefaultScreen} />
    <Stack.Screen
      name={NavigatorMap.ForgotPassword}
      component={DefaultScreen}
    />
  </Stack.Navigator>
);

export default AuthStackNavigator;
