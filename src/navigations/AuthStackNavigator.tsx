import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useIntl} from 'react-intl';
import {useTheme} from 'react-native-paper';

import {AuthStackParamsList} from './types';
import NavigatorMap from './NavigatorMap';
import ClientCodeScreen from '../screens/ClientCode';
import LoginScreen from '../screens/Login';
import PrivacyScreen from '../screens/Privacy';
import ForgotPasswordScreen from '../screens/ForgotPassword';

const Stack = createStackNavigator<AuthStackParamsList>();

const AuthStackNavigator = () => {
  const {formatMessage} = useIntl();
  const theme = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerStyle: {backgroundColor: theme.colors.background},
        headerTitleStyle: {color: theme.colors.text},
      }}>
      <Stack.Screen
        name={NavigatorMap.ClientCode}
        component={ClientCodeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={NavigatorMap.Login}
        component={LoginScreen}
        options={{
          headerShown: false,
          // title: formatMessage({id: 'login.title'}),
        }}
      />
      <Stack.Screen
        name={NavigatorMap.Privacy}
        component={PrivacyScreen}
        options={{
          title: formatMessage({id: 'privacy.title'}),
        }}
      />
      <Stack.Screen
        name={NavigatorMap.ForgotPassword}
        component={ForgotPasswordScreen}
        options={{
          title: formatMessage({id: 'forgotPassword.title'}),
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
