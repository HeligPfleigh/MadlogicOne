import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Colors, RadioButton} from 'react-native-paper';
import {useIntl} from 'react-intl';
import {observer} from 'mobx-react-lite';

import {useStores} from '../../core/hooks/useStores';
import {SupportedThemes} from '../../core/const';

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  switch: {
    marginRight: 16,
  },
});

function ThemeSetting() {
  const {formatMessage} = useIntl();
  const store = useStores();

  const handleValueChange = (value: string) =>
    store?.themeStore.setTheme(value as SupportedThemes);

  return (
    <View style={styles.itemContainer}>
      <Text>{formatMessage({id: 'setting.theme'})}</Text>
      <RadioButton.Group
        onValueChange={handleValueChange}
        value={store?.themeStore.themeName || SupportedThemes.LIGHT}>
        <Text>{formatMessage({id: 'setting.theme.light'})}</Text>
        <RadioButton.Android
          value={SupportedThemes.LIGHT}
          color={Colors.redA700}
        />
        <Text>{formatMessage({id: 'setting.theme.darcula'})}</Text>
        <RadioButton.Android
          value={SupportedThemes.DACULAR}
          color={Colors.redA700}
        />
      </RadioButton.Group>
    </View>
  );
}

export default observer(ThemeSetting);
