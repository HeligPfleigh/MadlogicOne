import React from 'react';
import {SafeAreaView} from 'react-native';
import {observer} from 'mobx-react-lite';
import WebView from 'react-native-webview';
import {useTheme} from 'react-native-paper';

import {useGlobalStyles} from '../../core/hooks/useGlobalStyle';
import {useStores} from '../../core/hooks/useStores';

function ADFS() {
  const theme = useTheme();
  const [globalStyles] = useGlobalStyles(theme);
  const store = useStores();
  return (
    <SafeAreaView style={globalStyles.safeview}>
      <WebView
        source={{
          uri: store?.ternantStore.registration?.baseUrl || '',
        }}
      />
    </SafeAreaView>
  );
}

export default observer(ADFS);
