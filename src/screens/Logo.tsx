import React from 'react';
import {WebView} from 'react-native-webview';
import {observer} from 'mobx-react-lite';
import {StackScreenProps} from '@react-navigation/stack';

import {AppStackParamsList} from '../navigations/types';
import NavigatorMap from '../navigations/NavigatorMap';

type LogoScreenNavigationProps = StackScreenProps<
  AppStackParamsList,
  NavigatorMap.Logo
>;

function Logo({route}: LogoScreenNavigationProps) {
  const uri = route.params.uri;

  return <WebView source={{uri}} />;
}

export default observer(Logo);
