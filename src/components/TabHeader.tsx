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

import {useStores} from '../core/hooks/useStores';
import {MadlogicLogo} from '../assets/images';
import NavigatorMap from '../navigations/NavigatorMap';

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
  image: {
    flex: 1,
    width: null as any,
    height: null as any,
    resizeMode: 'contain',
  },
  noIcon: {
    width: 20,
    height: 20,
  },
  menu: {
    width: 100,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
});

function TabHeader() {
  const store = useStores();
  const navigation = useNavigation();
  const {formatMessage} = useIntl();

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

  return (
    <View style={styles.root}>
      <View style={styles.noIcon} />
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
            style={styles.image}
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
        <MenuOptions optionsContainerStyle={styles.menu}>
          <MenuOption
            onSelect={handleNavigateToAbout}
            text={formatMessage({id: 'about.title'})}
          />
          <MenuOption
            onSelect={handleNavigateToSetting}
            text={formatMessage({id: 'setting.title'})}
          />
        </MenuOptions>
      </Menu>
    </View>
  );
}

export default observer(TabHeader);
