import React, {createContext, ReactNode} from 'react';
import {useLocalStore} from 'mobx-react-lite';

import LanguageStore from '../stores/LanguageStore';
import ThemeStore from '../stores/ThemeStore';
import TabsStore from '../stores/TabsStore';

type TStore = {
  languageStore: LanguageStore;
  themeStore: ThemeStore;
  tabsStore: TabsStore;
};

export const StoresContext = createContext<TStore | null>(null);

export const StoreProvider = ({children}: {children: ReactNode}) => {
  const languageStore = new LanguageStore();
  const themeStore = new ThemeStore();
  const tabsStore = new TabsStore();

  const store = useLocalStore<TStore>(() => ({
    themeStore,
    languageStore,
    tabsStore,
  }));

  return (
    <StoresContext.Provider value={store}>{children}</StoresContext.Provider>
  );
};
