import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors, useTheme, Button} from 'react-native-paper';
import {observer} from 'mobx-react-lite';
import {useIntl} from 'react-intl';
import {close} from 'react-native-madlogic';

import {useGlobalStyles} from '../core/hooks/useGlobalStyle';
import {useStores} from '../core/hooks/useStores';
import WifiOnlySetting from '../components/WifiOnlySetting';
import MaxStorageSetting from '../components/MaxStorageSetting';

const styles = StyleSheet.create({
  item: {
    marginVertical: 8,
    padding: 16,
  },
  btnContainer: {
    marginVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logout: {
    width: '50%',
    color: Colors.white,
  },
});

const Setting = () => {
  const theme = useTheme();
  const {formatMessage} = useIntl();
  const [globalStyles] = useGlobalStyles(theme);
  const store = useStores();

  const handleLogout = () => {
    close();
    store?.authorizationStore.logout();
  };
  return (
    <View style={globalStyles.container}>
      <View style={[styles.item, globalStyles.shadowBox]}>
        <WifiOnlySetting />
      </View>
      <View style={[styles.item, globalStyles.shadowBox]}>
        <MaxStorageSetting />
      </View>
      <View style={styles.btnContainer}>
        <Button
          onPress={handleLogout}
          mode="contained"
          uppercase={false}
          color={Colors.red500}
          style={styles.logout}>
          {formatMessage({id: 'setting.logout'})}
        </Button>
      </View>
    </View>
  );
};

export default observer(Setting);
