import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {useTheme} from 'react-native-paper';
import {observer} from 'mobx-react-lite';
import {useIntl} from 'react-intl';
import {Image, StyleSheet} from 'react-native';

import {AppTabParamsList} from './types';
import NavigatorMap from './NavigatorMap';
import DefaultScreen from '../screens/Default';
import {useStores} from '../core/hooks/useStores';
import {Broadcast, Channel, Journey} from '../assets/images';

const Tab = createMaterialBottomTabNavigator<AppTabParamsList>();

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});

const AppStackNavigator = () => {
  const theme = useTheme();
  const store = useStores();
  const {formatMessage} = useIntl();
  const tabs = store?.tabsStore.tabs;
  return (
    <Tab.Navigator barStyle={{backgroundColor: theme.colors.background}}>
      {tabs?.[NavigatorMap.Broadcasts].enable && (
        <Tab.Screen
          name={NavigatorMap.Broadcasts}
          component={DefaultScreen}
          options={{
            tabBarLabel:
              tabs?.[NavigatorMap.Broadcasts].title ||
              formatMessage({id: 'broadcasts.title'}),
            tabBarIcon: ({color}) => (
              <Image
                source={
                  tabs?.[NavigatorMap.Broadcasts].icon
                    ? {uri: tabs?.[NavigatorMap.Broadcasts].icon}
                    : Broadcast
                }
                style={[styles.icon, {tintColor: color}]}
              />
            ),
          }}
        />
      )}
      {tabs?.[NavigatorMap.Channels].enable && (
        <Tab.Screen
          name={NavigatorMap.Channels}
          component={DefaultScreen}
          options={{
            tabBarLabel:
              tabs?.[NavigatorMap.Channels].title ||
              formatMessage({id: 'channels.title'}),
            tabBarIcon: ({color}) => (
              <Image
                source={
                  tabs?.[NavigatorMap.Channels].icon
                    ? {uri: tabs?.[NavigatorMap.Channels].icon}
                    : Channel
                }
                style={[styles.icon, {tintColor: color}]}
              />
            ),
          }}
        />
      )}
      {tabs?.[NavigatorMap.Programs].enable && (
        <Tab.Screen
          name={NavigatorMap.Programs}
          component={DefaultScreen}
          options={{
            tabBarLabel:
              tabs?.[NavigatorMap.Programs].title ||
              formatMessage({id: 'programs.title'}),
            tabBarIcon: ({color}) => (
              <Image
                source={
                  tabs?.[NavigatorMap.Programs].icon
                    ? {uri: tabs?.[NavigatorMap.Programs].icon}
                    : Journey
                }
                style={[styles.icon, {tintColor: color}]}
              />
            ),
          }}
        />
      )}
      {tabs?.[NavigatorMap.HTML].enable && (
        <Tab.Screen
          name={NavigatorMap.HTML}
          component={DefaultScreen}
          options={{
            tabBarLabel:
              tabs?.[NavigatorMap.HTML].title ||
              formatMessage({id: 'html.title'}),
          }}
        />
      )}
    </Tab.Navigator>
  );
};

export default observer(AppStackNavigator);
