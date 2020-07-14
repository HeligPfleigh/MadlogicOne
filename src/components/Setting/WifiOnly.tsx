import React, {useEffect, useState} from 'react';
import {setDownloadPolicy, getDownloadPolicy} from 'react-native-madlogic';
import {View, StyleSheet} from 'react-native';
import {Switch, Text, Colors} from 'react-native-paper';
import {useIntl} from 'react-intl';
import {observer} from 'mobx-react-lite';

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switch: {
    marginRight: 16,
  },
});

function WifiOnlySetting() {
  const [isSwitchWifiOnlyOn, setIsSwitchWifiOnlyOn] = useState<boolean>(false);
  const {formatMessage} = useIntl();

  const onToggleSwitch = () =>
    setIsSwitchWifiOnlyOn((prev: boolean) => {
      setDownloadPolicy(!prev);
      return !prev;
    });

  useEffect(() => {
    const loadData = async () => {
      const {wifiOnly} = await getDownloadPolicy();
      setIsSwitchWifiOnlyOn(wifiOnly);
    };
    loadData();
  }, []);
  return (
    <View style={styles.itemContainer}>
      <Switch
        value={isSwitchWifiOnlyOn}
        onValueChange={onToggleSwitch}
        style={styles.switch}
        color={Colors.blue500}
      />
      <Text>{formatMessage({id: 'setting.sync.wifi'})}</Text>
    </View>
  );
}

export default observer(WifiOnlySetting);
