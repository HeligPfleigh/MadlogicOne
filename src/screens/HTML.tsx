import React, {useState} from 'react';
import {WebView} from 'react-native-webview';
import {observer} from 'mobx-react-lite';
import {useTheme} from 'react-native-paper';
import {View, SafeAreaView} from 'react-native';

import {useStores} from '../core/hooks/useStores';
import {useGlobalStyles} from '../core/hooks/useGlobalStyle';
import TabHeader from '../components/TabHeader';
import NavigatorMap from '../navigations/NavigatorMap';
import Loader from '../components/Loader';

function HTML() {
  const store = useStores();
  const theme = useTheme();
  const [globalStyles] = useGlobalStyles(theme);
  const [loading, setLoading] = useState(true);

  const hideSpinner = () => setLoading(false);

  const uri = store?.ternantStore.tabs[NavigatorMap.HTML].url;

  return (
    <SafeAreaView style={globalStyles.safeview}>
      <View style={globalStyles.container}>
        <TabHeader />

        {uri && <WebView source={{uri}} onLoad={hideSpinner} />}

        <Loader loading={loading} />
      </View>
    </SafeAreaView>
  );
}

export default observer(HTML);
