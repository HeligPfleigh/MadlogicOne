import {DefaultTheme, Colors} from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    background: '#1D2330',
    text: Colors.indigo100,
  },
};

export default theme;
