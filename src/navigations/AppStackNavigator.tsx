import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {AppStackParamsList} from './types';
import NavigatorMap from './NavigatorMap';
import AppTab from './AppTabNavigator';
import LogoScreen from '../screens/Logo';
import AboutScreen from '../screens/About';
import SettingScreen from '../screens/Setting';

const Stack = createStackNavigator<AppStackParamsList>();

const AppStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={NavigatorMap.AppTab}
      component={AppTab}
      options={{header: () => null}}
    />
    <Stack.Screen name={NavigatorMap.About} component={AboutScreen} />
    <Stack.Screen name={NavigatorMap.Setting} component={SettingScreen} />
    <Stack.Screen name={NavigatorMap.Logo} component={LogoScreen} />
  </Stack.Navigator>
);

export default AppStackNavigator;
