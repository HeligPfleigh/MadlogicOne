import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Text, Colors} from 'react-native-paper';
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
});

function Style1({
  name,
  image,
  onPlayBroadcast,
  onDeleteBroadcast,
  onShareBroadcast,
}: INewsItem) {
  const {formatMessage} = useIntl();
  return (
    <TouchableOpacity style={styles.item} onPress={onPlayBroadcast}>
      <Image source={{uri: image}} style={styles.image} />
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
        <MenuOptions>
          <MenuOption
            onSelect={onDeleteBroadcast}
            text={formatMessage({id: 'news.delete'})}
          />
          <MenuOption
            onSelect={onShareBroadcast}
            text={formatMessage({id: 'news.share'})}
          />
        </MenuOptions>
      </Menu>
    </TouchableOpacity>
  );
}

export default observer(Style1);
