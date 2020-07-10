import React from 'react';
import {WebView} from 'react-native-webview';
import {observer} from 'mobx-react-lite';
import {useStores} from '../core/hooks/useStores';

function About() {
  const store = useStores();

  return <WebView source={{html: store?.ternantStore.about || '<div/>'}} />;
}

export default observer(About);
