import React from 'react';
import {
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors, Text} from 'react-native-paper';
import {observer} from 'mobx-react-lite';
import {useIntl} from 'react-intl';

import {INewsItem} from './NewsItemFactory';

const styles = StyleSheet.create({
  item: {
    flex: 1,
    width: '100%',
    borderRadius: 16,
    padding: 8,
  },
  imageContainer: {
    marginBottom: 8,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 200,
  },
  image: {
    borderRadius: 12,
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
  },
  watched: {
    color: 'white',
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  action: {
    flexDirection: 'row',
  },
  actionBtn: {
    marginLeft: 16,
  },
});

function Style2({
  viewed,
  name,
  image,
  onPlayBroadcast,
  onDeleteBroadcast,
  onShareBroadcast,
}: INewsItem) {
  const {formatMessage} = useIntl();

  return (
    <TouchableOpacity style={styles.item} onPress={onPlayBroadcast}>
      <ImageBackground
        source={{uri: image}}
        style={styles.imageContainer}
        imageStyle={styles.image}>
        <MaterialCommunityIcons size={60} name="play" color={Colors.white} />
        {viewed && (
          <Text style={styles.watched}>
            {formatMessage({id: 'news.watched'})}
          </Text>
        )}
      </ImageBackground>
      <View style={styles.bottom}>
        <Text style={styles.text}>{name}</Text>
        <View style={styles.action}>
          <TouchableOpacity style={styles.actionBtn} onPress={onShareBroadcast}>
            <MaterialCommunityIcons
              size={20}
              name="share"
              color={Colors.red900}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionBtn}
            onPress={onDeleteBroadcast}>
            <MaterialCommunityIcons
              size={20}
              name="delete"
              color={Colors.red900}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default observer(Style2);
