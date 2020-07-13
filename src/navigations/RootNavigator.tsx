import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {observer} from 'mobx-react-lite';
import {reaction} from 'mobx';
import {setup, eventEmitter, MADLOGIC_SDK_EVENTS} from 'react-native-madlogic';

import {RootStackParamsList} from './types';
import NavigatorMap from './NavigatorMap';
import AuthStack from './AuthStackNavigator';
import AppStack from './AppStackNavigator';
import {useStores} from '../core/hooks/useStores';
import Bootstrap from '../screens/Bootstrap';

const Stack = createStackNavigator<RootStackParamsList>();

function RootNavigator() {
  const store = useStores();

  useEffect(() => {
    reaction(
      () => store?.ternantStore.registration,
      (registration) => {
        if (registration && registration?.baseUrl) {
          setup(registration?.baseUrl, '1.0.0', registration?.secret);
        }
      },
    );

    const registerOk = eventEmitter.addListener(
      MADLOGIC_SDK_EVENTS.EVENT_REGISTER_OK,
      () => store?.authorizationStore.authorize(),
    );
    return () => {
      registerOk.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
