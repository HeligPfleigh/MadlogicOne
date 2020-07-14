import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Colors, RadioButton} from 'react-native-paper';
import {useIntl} from 'react-intl';
import {observer} from 'mobx-react-lite';

import {useStores} from '../../core/hooks/useStores';
import {SupportedLanguages} from '../../core/const';

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

function LanguageSetting() {
  const {formatMessage} = useIntl();
  const store = useStores();

  const handleValueChange = (value: string) =>
    store?.languageStore.changeLanguage(value as SupportedLanguages);

  return (
    <View style={styles.itemContainer}>
      <Text>{formatMessage({id: 'setting.language'})}</Text>
      <RadioButton.Group
        onValueChange={handleValueChange}
        value={store?.languageStore.language || SupportedLanguages.EN}>
        <Text>{formatMessage({id: 'setting.language.english'})}</Text>
        <RadioButton.Android
          value={SupportedLanguages.EN}
          color={Colors.redA700}
        />
        <Text>{formatMessage({id: 'setting.language.vietnam'})}</Text>
        <RadioButton.Android
          value={SupportedLanguages.VI}
          color={Colors.redA700}
        />
      </RadioButton.Group>
    </View>
  );
}

export default observer(LanguageSetting);
