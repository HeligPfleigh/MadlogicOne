import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import {AppTabParamsList} from './types';
import NavigatorMap from './NavigatorMap';
import DefaultScreen from '../screens/Default';

const Tab = createMaterialBottomTabNavigator<AppTabParamsList>();

const AppStackNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name={NavigatorMap.Broadcasts} component={DefaultScreen} />
    <Tab.Screen name={NavigatorMap.Channels} component={DefaultScreen} />
    <Tab.Screen name={NavigatorMap.Journeys} component={DefaultScreen} />
  </Tab.Navigator>
);

export default AppStackNavigator;
