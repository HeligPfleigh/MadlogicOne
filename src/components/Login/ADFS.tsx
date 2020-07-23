import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {observer} from 'mobx-react-lite';
import WebView from 'react-native-webview';
import {useTheme} from 'react-native-paper';

import {useGlobalStyles} from '../../core/hooks/useGlobalStyle';
import {useStores} from '../../core/hooks/useStores';
import Loader from '../Loader';

function ADFS() {
  const theme = useTheme();
  const [globalStyles] = useGlobalStyles(theme);
  const store = useStores();
  const [visible, setVisible] = useState(true);

  const hideSpinner = () => setVisible(false);

  return (
    <SafeAreaView style={globalStyles.safeview}>
      <WebView
        source={{
          uri: store?.ternantStore.registration?.baseUrl || '',
        }}
        onLoad={hideSpinner}
      />
      <Loader loading={visible} />
    </SafeAreaView>
  );
}

export default observer(ADFS);
