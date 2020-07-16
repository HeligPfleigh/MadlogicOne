import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {observer} from 'mobx-react-lite';
import {useNavigation} from '@react-navigation/native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import {useIntl} from 'react-intl';
import {Text, useTheme} from 'react-native-paper';

import {useStores} from '../core/hooks/useStores';
import {MadlogicLogo} from '../assets/images';
import NavigatorMap from '../navigations/NavigatorMap';
import {useGlobalStyles} from '../core/hooks/useGlobalStyle';

const styles = StyleSheet.create({
  root: {
    maxHeight: 80,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: 50,
    height: 50,
  },
  noIcon: {
    width: 20,
    height: 20,
  },
  menu: {
    width: 120,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  menuOptionContainer: {
    flexDirection: 'row',
  },
  menuOptionTxt: {
    marginLeft: 16,
  },
});

function TabHeader() {
  const store = useStores();
  const navigation = useNavigation();
  const {formatMessage} = useIntl();
  const theme = useTheme();
  const [globalStyles] = useGlobalStyles(theme);

  const handlePressLogo = () => {
    if (store?.ternantStore.logo?.logoURL) {
      navigation.navigate(NavigatorMap.Logo, {
        uri: store?.ternantStore.logo?.logoURL,
      });
    }
  };

  const handleNavigateToAbout = () => navigation.navigate(NavigatorMap.About);
  const handleNavigateToSetting = () =>
    navigation.navigate(NavigatorMap.Setting);

  const QR_FEATURE = 'qr';

  const isSupportScanQRCode = store?.ternantStore.features?.find(
    (feature: string) => feature === QR_FEATURE,
  );

  const handlePressScan = () => navigation.navigate(NavigatorMap.QRScanner);

  return (
    <View style={styles.root}>
      {isSupportScanQRCode ? (
        <TouchableOpacity style={styles.noIcon} onPress={handlePressScan}>
          <MaterialCommunityIcons name="qrcode-scan" size={20} color="red" />
        </TouchableOpacity>
      ) : (
        <View style={styles.noIcon} />
      )}
      <View style={styles.title}>
        <TouchableOpacity
          style={styles.imageContainer}
          onPress={handlePressLogo}>
          <Image
            source={
              store?.ternantStore.logo?.logo
                ? {uri: store?.ternantStore.logo?.logo}
                : MadlogicLogo
            }
            style={globalStyles.fullFlexImage}
          />
        </TouchableOpacity>
      </View>
      <Menu>
        <MenuTrigger>
          <MaterialCommunityIcons
            name="dots-horizontal"
            size={20}
            color="red"
          />
        </MenuTrigger>
        <MenuOptions
          optionsContainerStyle={[
            styles.menu,
            {backgroundColor: theme.colors.background},
          ]}>
          <MenuOption onSelect={handleNavigateToAbout}>
            <View style={styles.menuOptionContainer}>
              <MaterialCommunityIcons
                name="account-question"
                size={20}
                color={theme.colors.text}
              />
              <Text style={styles.menuOptionTxt}>
                {formatMessage({id: 'about.title'})}
              </Text>
            </View>
          </MenuOption>
          <MenuOption onSelect={handleNavigateToSetting}>
            <View style={styles.menuOptionContainer}>
              <MaterialCommunityIcons
                name="cog"
                size={20}
                color={theme.colors.text}
              />
              <Text style={styles.menuOptionTxt}>
                {formatMessage({id: 'setting.title'})}
              </Text>
            </View>
          </MenuOption>
        </MenuOptions>
      </Menu>
    </View>
  );
}

export default observer(TabHeader);
