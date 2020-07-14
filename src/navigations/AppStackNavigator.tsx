import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {AppStackParamsList} from './types';
import NavigatorMap from './NavigatorMap';
import AppTab from './AppTabNavigator';
import LogoScreen from '../screens/Logo';
import AboutScreen from '../screens/About';
import SettingScreen from '../screens/Setting';
import ChannelDetailScreen from '../screens/ChannelDetail';
import EventsScreen from '../screens/Events';

const Stack = createStackNavigator<AppStackParamsList>();

const AppStackNavigator = () => (
  <Stack.Navigator screenOptions={{headerBackTitleVisible: false}}>
    <Stack.Screen
      name={NavigatorMap.AppTab}
      component={AppTab}
      options={{header: () => null}}
    />
    <Stack.Screen name={NavigatorMap.About} component={AboutScreen} />
    <Stack.Screen name={NavigatorMap.Setting} component={SettingScreen} />
    <Stack.Screen name={NavigatorMap.Logo} component={LogoScreen} />
    <Stack.Screen
      name={NavigatorMap.ChannelDetail}
      component={ChannelDetailScreen}
      options={({route}) => ({
        title: route.params.name || NavigatorMap.ChannelDetail,
      })}
    />
    <Stack.Screen
      name={NavigatorMap.Events}
      component={EventsScreen}
      options={({route}) => ({
        title: route.params.name || NavigatorMap.Events,
      })}
    />
  </Stack.Navigator>
);

export default AppStackNavigator;
