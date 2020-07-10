import React, {createContext, ReactNode} from 'react';
import {useLocalStore} from 'mobx-react-lite';
import AsyncStorage from '@react-native-community/async-storage';
import {create} from 'mobx-persist';

import LanguageStore from '../stores/LanguageStore';
import ThemeStore from '../stores/ThemeStore';
import TernantStore from '../stores/TernantStore';
import SnackStore from '../stores/SnackStore';
import AuthorizationStore from '../stores/AuthorizationStore';

type TStore = {
  languageStore: LanguageStore;
  themeStore: ThemeStore;
  ternantStore: TernantStore;
  snackStore: SnackStore;
  authorizationStore: AuthorizationStore;
};

export const StoresContext = createContext<TStore | null>(null);

export const StoreProvider = ({children}: {children: ReactNode}) => {
  const hydrate = create({
    storage: AsyncStorage,
    jsonify: true,
  });

  const languageStore = new LanguageStore();
  const themeStore = new ThemeStore();
  const ternantStore = new TernantStore();
  const snackStore = new SnackStore();
  const authorizationStore = new AuthorizationStore();

  Promise.all([
    hydrate('authorizationStore', authorizationStore),
    hydrate('ternantStore', ternantStore),
  ]).then(() => {
    authorizationStore.finishLoadPersistData();
  });

  const store = useLocalStore<TStore>(() => ({
    themeStore,
    languageStore,
    ternantStore,
    snackStore,
    authorizationStore,
  }));

  return (
    <StoresContext.Provider value={store}>{children}</StoresContext.Provider>
  );
};
