import React, {createContext, ReactNode} from 'react';
import {useLocalStore} from 'mobx-react-lite';

import LanguageStore from '../stores/LanguageStore';
import ThemeStore from '../stores/ThemeStore';
import TernantStore from '../stores/TernantStore';
import SnackStore from '../stores/SnackStore';

type TStore = {
  languageStore: LanguageStore;
  themeStore: ThemeStore;
  ternantStore: TernantStore;
  snackStore: SnackStore;
};

export const StoresContext = createContext<TStore | null>(null);

export const StoreProvider = ({children}: {children: ReactNode}) => {
  const languageStore = new LanguageStore();
  const themeStore = new ThemeStore();
  const ternantStore = new TernantStore();
  const snackStore = new SnackStore();

  const store = useLocalStore<TStore>(() => ({
    themeStore,
    languageStore,
    ternantStore,
    snackStore,
  }));

  return (
    <StoresContext.Provider value={store}>{children}</StoresContext.Provider>
  );
};
