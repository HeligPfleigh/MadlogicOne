import 'intl';
import 'intl/locale-data/jsonp/en';
import 'react-native-gesture-handler';

import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Provider as PaperProvider} from 'react-native-paper';
import {IntlProvider} from 'react-intl';
import * as RNLocalize from 'react-native-localize';
import {I18nManager} from 'react-native';

import en from './assets/translations/en.json';
import vi from './assets/translations/vi.json';
import theme from './core/theme';

MaterialIcons.loadFont();
MaterialCommunityIcons.loadFont();

import RootNavigator from './navigations/RootNavigator';

const translationGetters: Record<string, any> = {
  en,
  vi,
};

export default function App() {
  const [locale, setLocale] = useState<string>('en');
  const [messages, setMessages] = useState(en);

  const handleLocalizationChange = () => {
    const fallback = {languageTag: 'en', isRTL: false};
    const {languageTag, isRTL} =
      RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
      fallback;

    // update layout direction
    I18nManager.forceRTL(isRTL);
    setLocale(languageTag);
    setMessages(translationGetters[languageTag]);
  };

  useEffect(() => {
    RNLocalize.addEventListener('change', handleLocalizationChange);
    return () =>
      RNLocalize.removeEventListener('change', handleLocalizationChange);
  }, []);

  return (
    <IntlProvider locale={locale} messages={messages}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </PaperProvider>
    </IntlProvider>
  );
}
