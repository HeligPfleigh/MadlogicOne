import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {useTheme} from 'react-native-paper';
import {observer} from 'mobx-react-lite';
import {useIntl} from 'react-intl';
import {Image, StyleSheet, ImageSourcePropType} from 'react-native';

import {AppTabParamsList} from './types';
import NavigatorMap from './NavigatorMap';
import DefaultScreen from '../screens/Default';
import {useStores} from '../core/hooks/useStores';
import {Broadcast, Channel, Journey} from '../assets/images';
import NewsScreen from '../screens/News';
import ChannelsScreen from '../screens/Channels';

const Tab = createMaterialBottomTabNavigator<AppTabParamsList>();

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});

interface IConfig {
  id: number;
  name: keyof AppTabParamsList;
  defaultLabelId: string;
  defaultIcon: ImageSourcePropType;
  component: React.ComponentType<any>;
}

const tabConfigs: IConfig[] = [
  {
    id: 1,
    name: NavigatorMap.Broadcasts,
    defaultLabelId: 'broadcasts.title',
    defaultIcon: Broadcast,
    component: NewsScreen,
  },
  {
    id: 2,
    name: NavigatorMap.Channels,
    defaultLabelId: 'channels.title',
    defaultIcon: Channel,
    component: ChannelsScreen,
  },
  {
    id: 3,
    name: NavigatorMap.Programs,
    defaultLabelId: 'programs.title',
    defaultIcon: Journey,
    component: DefaultScreen,
  },
  {
    id: 4,
    name: NavigatorMap.HTML,
    defaultLabelId: 'html.title',
    defaultIcon: Journey,
    component: DefaultScreen,
  },
];

const AppStackNavigator = () => {
  const theme = useTheme();
  const store = useStores();
  const {formatMessage} = useIntl();
  const tabs = store?.ternantStore.tabs;
  return (
    <Tab.Navigator barStyle={{backgroundColor: theme.colors.background}}>
      {tabConfigs
        .filter(({name}) => tabs?.[name].enable)
        .map(({id, name, defaultLabelId, defaultIcon, component}) => (
          <Tab.Screen
            key={`tab-${id}`}
            name={name}
            component={component}
            options={{
              tabBarLabel:
                tabs?.[name].title || formatMessage({id: defaultLabelId}),
              tabBarIcon: ({color}) => (
                <Image
                  source={
                    tabs?.[name].icon ? {uri: tabs?.[name].icon} : defaultIcon
                  }
                  style={[styles.icon, {tintColor: color}]}
                />
              ),
            }}
          />
        ))}
    </Tab.Navigator>
  );
};

export default observer(AppStackNavigator);
