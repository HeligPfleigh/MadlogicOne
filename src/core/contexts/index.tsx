import {createContext} from 'react';
// import {useLocalStore} from 'mobx-react-lite';

import LanguageStore from '../stores/LanguageStore';
import ThemeStore from '../stores/ThemeStore';

export const StoresContext = createContext({
  languageStore: new LanguageStore(),
  themeStore: new ThemeStore(),
});

// export const StoreProvider = ({children}: {children: ReactNode}) => {
//   const store = useLocalStore(createStore);
//   return (
//     <StoresContext.Provider value={store}>{children}</StoresContext.Provider>
//   );
// };
