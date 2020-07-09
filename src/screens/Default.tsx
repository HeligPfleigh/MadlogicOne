import React from 'react';
import {View, StyleSheet} from 'react-native';

import {Madlogic} from '../assets/images';
import {useTheme, Text} from 'react-native-paper';
import {useIntl} from 'react-intl';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function Default() {
  const theme = useTheme();
  const {formatMessage} = useIntl();
  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <Madlogic width={200} height={100} />
      <Text>{formatMessage({id: 'default.message'})}</Text>
    </View>
  );
}
