import {DefaultTheme, Colors} from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    background: 'rgba(0, 0, 0, 1)',
    text: Colors.white,
  },
};

export default theme;
