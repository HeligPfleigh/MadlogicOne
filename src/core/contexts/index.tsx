import React, {createContext, ReactNode} from 'react';
import {useLocalStore} from 'mobx-react-lite';

import LanguageStore from '../stores/LanguageStore';
import ThemeStore from '../stores/ThemeStore';

type TStore = {
  languageStore: LanguageStore;
  themeStore: ThemeStore;
};

export const StoresContext = createContext<TStore | null>(null);

export const StoreProvider = ({children}: {children: ReactNode}) => {
  const languageStore = new LanguageStore();
  const themeStore = new ThemeStore();

  const store = useLocalStore<TStore>(() => ({
    themeStore,
    languageStore,
  }));

  return (
    <StoresContext.Provider value={store}>{children}</StoresContext.Provider>
  );
};
