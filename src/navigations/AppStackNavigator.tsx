import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {AppStackParamsList} from './types';
import NavigatorMap from './NavigatorMap';
import AppTab from './AppTabNavigator';
import DefaultScreen from '../screens/Default';
import LogoScreen from '../screens/Logo';

const Stack = createStackNavigator<AppStackParamsList>();

const AppStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={NavigatorMap.AppTab}
      component={AppTab}
      options={{header: () => null}}
    />
    <Stack.Screen name={NavigatorMap.About} component={DefaultScreen} />
    <Stack.Screen name={NavigatorMap.Setting} component={DefaultScreen} />
    <Stack.Screen name={NavigatorMap.Logo} component={LogoScreen} />
  </Stack.Navigator>
);

export default AppStackNavigator;
