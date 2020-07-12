import React from 'react';
import {View, StyleSheet} from 'react-native';

import {Madlogic} from '../assets/images';
import {useTheme, Text} from 'react-native-paper';
import {useIntl} from 'react-intl';
import {useGlobalStyles} from '../core/hooks/useGlobalStyle';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function Default() {
  const theme = useTheme();
  const {formatMessage} = useIntl();
  const [globalStyles] = useGlobalStyles(theme);
  return (
    <View style={[styles.container, globalStyles.container]}>
      <Madlogic width={200} height={100} />
      <Text>{formatMessage({id: 'default.message'})}</Text>
    </View>
  );
}
