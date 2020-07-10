import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {observer} from 'mobx-react-lite';

import {RootStackParamsList} from './types';
import NavigatorMap from './NavigatorMap';
import AuthStack from './AuthStackNavigator';
import AppStack from './AppStackNavigator';
import {useStores} from '../core/hooks/useStores';
import Bootstrap from '../screens/Bootstrap';

const Stack = createStackNavigator<RootStackParamsList>();

function RootNavigator() {
  const store = useStores();

  return (
    <Stack.Navigator headerMode="none">
      {store?.authorizationStore.loadingPersistData && (
        <Stack.Screen name={NavigatorMap.Bootstrap} component={Bootstrap} />
      )}
      {store?.authorizationStore.isAuthorized ? (
        <Stack.Screen name={NavigatorMap.AppStack} component={AppStack} />
      ) : (
        <Stack.Screen name={NavigatorMap.AuthStack} component={AuthStack} />
      )}
    </Stack.Navigator>
  );
}

export default observer(RootNavigator);
