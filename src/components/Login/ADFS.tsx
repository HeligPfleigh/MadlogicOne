import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {observer} from 'mobx-react-lite';
import WebView, {WebViewNavigation} from 'react-native-webview';
import {useTheme} from 'react-native-paper';
import {registerMicrosoft} from 'react-native-madlogic';

import {useGlobalStyles} from '../../core/hooks/useGlobalStyle';
import {useStores} from '../../core/hooks/useStores';
import Loader from '../Loader';

function ADFS() {
  const theme = useTheme();
  const [globalStyles] = useGlobalStyles(theme);
  const store = useStores();
  const [visible, setVisible] = useState(true);

  const hideSpinner = () => setVisible(false);

  const getQueryParams = (params: string, url: string) => {
    let href = url;
    //this expression is to get the query strings
    let reg = new RegExp('[?&]' + params + '=([^&#]*)', 'i');
    let queryString = reg.exec(href);
    return queryString ? queryString[1] : null;
  };

  const handleNavigationStateChange = ({url}: WebViewNavigation) => {
    const callbackPrefix = store?.ternantStore.registration?.callbackPrefix;
    if (callbackPrefix && url.startsWith(callbackPrefix)) {
      const code = getQueryParams('code', url);
      if (code) {
        registerMicrosoft(code);
      }
    }
  };

  return (
    <SafeAreaView style={globalStyles.safeview}>
      <WebView
        source={{
          uri: store?.ternantStore.registration?.baseUrl || '',
        }}
        onNavigationStateChange={handleNavigationStateChange}
        onLoad={hideSpinner}
      />
      <Loader loading={visible} />
    </SafeAreaView>
  );
}

export default observer(ADFS);
