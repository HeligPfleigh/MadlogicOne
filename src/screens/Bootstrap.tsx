import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';
import {observer} from 'mobx-react-lite';

import {Madlogic} from '../assets/images';
import {useGlobalStyles} from '../core/hooks/useGlobalStyle';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function Bootstrap() {
  const theme = useTheme();
  const [globalStyles] = useGlobalStyles(theme);
  return (
    <View style={[styles.container, globalStyles.container]}>
      <Madlogic width={500} height={100} />
    </View>
  );
}

export default observer(Bootstrap);
