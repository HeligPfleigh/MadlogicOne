import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Text, Colors, useTheme} from 'react-native-paper';
import {
  Menu,
  MenuTrigger,
  MenuOptions,
  MenuOption,
} from 'react-native-popup-menu';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {INewsItem} from './NewsItemFactory';
import {observer} from 'mobx-react-lite';
import {useIntl} from 'react-intl';

const styles = StyleSheet.create({
  item: {
    flex: 1,
    width: '100%',
    borderRadius: 16,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
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

function Style1({
  name,
  image,
  onPlayBroadcast,
  onDeleteBroadcast,
  onShareBroadcast,
}: INewsItem) {
  const {formatMessage} = useIntl();
  const theme = useTheme();
  return (
    <TouchableOpacity style={styles.item} onPress={onPlayBroadcast}>
      <Image
        source={{uri: image}}
        style={[styles.image, {backgroundColor: theme.colors.background}]}
      />
      <View style={styles.content}>
        <Text>{name}</Text>
      </View>
      <Menu>
        <MenuTrigger>
          <MaterialCommunityIcons
            name="dots-vertical"
            size={20}
            color={Colors.redA700}
          />
        </MenuTrigger>
        <MenuOptions
          optionsContainerStyle={[
            styles.menu,
            {backgroundColor: theme.colors.background},
          ]}>
          <MenuOption onSelect={onDeleteBroadcast}>
            <View style={styles.menuOptionContainer}>
              <MaterialCommunityIcons
                name="delete"
                size={20}
                color={theme.colors.text}
              />
              <Text style={styles.menuOptionTxt}>
                {formatMessage({id: 'news.delete'})}
              </Text>
            </View>
          </MenuOption>
          <MenuOption onSelect={onShareBroadcast}>
            <View style={styles.menuOptionContainer}>
              <MaterialCommunityIcons
                name="share"
                size={20}
                color={theme.colors.text}
              />
              <Text style={styles.menuOptionTxt}>
                {formatMessage({id: 'news.share'})}
              </Text>
            </View>
          </MenuOption>
        </MenuOptions>
      </Menu>
    </TouchableOpacity>
  );
}

export default observer(Style1);
