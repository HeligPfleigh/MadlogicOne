import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';
import {observer} from 'mobx-react-lite';

import {Madlogic} from '../assets/images';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function Bootstrap() {
  const theme = useTheme();
  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <Madlogic width={500} height={100} />
    </View>
  );
}

export default observer(Bootstrap);
