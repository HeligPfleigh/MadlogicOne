import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {useTheme} from 'react-native-paper';

import {AppTabParamsList} from './types';
import NavigatorMap from './NavigatorMap';
import DefaultScreen from '../screens/Default';
import {useStores} from '../core/hooks/useStores';

const Tab = createMaterialBottomTabNavigator<AppTabParamsList>();

const AppStackNavigator = () => {
  const theme = useTheme();
  const store = useStores();
  return (
    <Tab.Navigator barStyle={{backgroundColor: theme.colors.background}}>
      <Tab.Screen
        name={NavigatorMap.Broadcasts}
        component={DefaultScreen}
        options={{}}
      />
      <Tab.Screen name={NavigatorMap.Channels} component={DefaultScreen} />
      <Tab.Screen name={NavigatorMap.Journeys} component={DefaultScreen} />
    </Tab.Navigator>
  );
};

export default AppStackNavigator;
