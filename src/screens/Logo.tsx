import React, {useState} from 'react';
import {WebView} from 'react-native-webview';
import {observer} from 'mobx-react-lite';
import {StackScreenProps} from '@react-navigation/stack';

import {AppStackParamsList} from '../navigations/types';
import NavigatorMap from '../navigations/NavigatorMap';
import Loader from '../components/Loader';

type LogoScreenNavigationProps = StackScreenProps<
  AppStackParamsList,
  NavigatorMap.Logo
>;

function Logo({route}: LogoScreenNavigationProps) {
  const uri = route.params.uri;

  const [loading, setLoading] = useState(true);

  const hideSpinner = () => setLoading(false);

  return (
    <>
      <WebView source={{uri}} onLoad={hideSpinner} />
      <Loader loading={loading} />
    </>
  );
}

export default observer(Logo);
