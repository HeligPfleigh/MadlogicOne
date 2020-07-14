import React from 'react';
import {WebView} from 'react-native-webview';
import {observer} from 'mobx-react-lite';
import {useTheme} from 'react-native-paper';
import {View, SafeAreaView} from 'react-native';

import {useStores} from '../core/hooks/useStores';
import {useGlobalStyles} from '../core/hooks/useGlobalStyle';
import TabHeader from '../components/TabHeader';
import NavigatorMap from '../navigations/NavigatorMap';

function HTML() {
  const store = useStores();
  const theme = useTheme();
  const [globalStyles] = useGlobalStyles(theme);

  const uri = store?.ternantStore.tabs[NavigatorMap.HTML].url;

  return (
    <View style={globalStyles.container}>
      <SafeAreaView>
        <TabHeader />
      </SafeAreaView>

      {uri && <WebView source={{uri}} />}
    </View>
  );
}

export default observer(HTML);
