import React, {createContext, ReactNode} from 'react';
import {useLocalStore} from 'mobx-react-lite';

import LanguageStore from '../stores/LanguageStore';
import ThemeStore from '../stores/ThemeStore';
import TernantStore from '../stores/TernantStore';

type TStore = {
  languageStore: LanguageStore;
  themeStore: ThemeStore;
  ternantStore: TernantStore;
};

export const StoresContext = createContext<TStore | null>(null);

export const StoreProvider = ({children}: {children: ReactNode}) => {
  const languageStore = new LanguageStore();
  const themeStore = new ThemeStore();
  const ternantStore = new TernantStore();

  const store = useLocalStore<TStore>(() => ({
    themeStore,
    languageStore,
    ternantStore,
  }));

  return (
    <StoresContext.Provider value={store}>{children}</StoresContext.Provider>
  );
};
