import 'intl';
import 'intl/locale-data/jsonp/en';
import 'intl/locale-data/jsonp/vi';
import 'react-native-gesture-handler';
import 'mobx-react-lite/batchingForReactNative';

import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Provider as PaperProvider} from 'react-native-paper';
import {IntlProvider} from 'react-intl';
import * as RNLocalize from 'react-native-localize';
import {I18nManager} from 'react-native';
import {observer} from 'mobx-react-lite';

import RootNavigator from './navigations/RootNavigator';
import {StoreProvider} from './core/contexts';
import {SupportedLanguages} from './core/const';
import {useStores} from './core/hooks/useStores';
import CustomSnackbar from './components/CustomSnackbar';

MaterialIcons.loadFont();
MaterialCommunityIcons.loadFont();

function App() {
  const store = useStores();

  const handleLocalizationChange = () => {
    const fallback = {languageTag: SupportedLanguages.EN, isRTL: false};
    const {languageTag, isRTL} =
      RNLocalize.findBestAvailableLanguage(Object.keys(SupportedLanguages)) ||
      fallback;

    // update layout direction
    I18nManager.forceRTL(isRTL);
    store?.languageStore.changeLanguage(languageTag);
  };

  useEffect(() => {
    RNLocalize.addEventListener('change', handleLocalizationChange);
    return () =>
      RNLocalize.removeEventListener('change', handleLocalizationChange);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <IntlProvider
      locale={store?.languageStore.language || SupportedLanguages.EN}
      messages={store?.languageStore.messages}>
      <PaperProvider theme={store?.themeStore.theme}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
        <CustomSnackbar />
      </PaperProvider>
    </IntlProvider>
  );
}

const AppWithLocale = observer(App);

export default function () {
  return (
    <StoreProvider>
      <AppWithLocale />
    </StoreProvider>
  );
}
