import {StyleSheet} from 'react-native';
import {Theme, Colors} from 'react-native-paper';

export const useGlobalStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: theme.colors.background,
    },
    shadowBox: {
      shadowColor: Colors.black,
      shadowOffset: {
        width: 0,
        height: -1,
      },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 5,
      backgroundColor: Colors.white,
    },
    fullFlexImage: {
      flex: 1,
      width: null as any,
      height: null as any,
      resizeMode: 'contain',
    },
    flatlistFooter: {
      marginBottom: 100,
    },
  });

  return [styles];
};
