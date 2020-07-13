import React from 'react';
import {
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors, Text} from 'react-native-paper';

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
    justifyContent: 'flex-end',
    minHeight: 200,
    padding: 16,
  },
  image: {
    borderRadius: 12,
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    color: 'white',
  },
  remove: {
    position: 'absolute',
    top: 16,
    right: 16,
    zIndex: 2,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default function BroadcastItem({
  name,
  image,
  onPlayBroadcast,
  onDeleteBroadcast,
  onShareBroadcast,
}: INewsItem) {
  return (
    <TouchableOpacity style={styles.item} onPress={onPlayBroadcast}>
      <ImageBackground
        source={{uri: image}}
        style={styles.imageContainer}
        imageStyle={styles.image}>
        <TouchableOpacity style={styles.remove} onPress={onDeleteBroadcast}>
          <MaterialCommunityIcons
            name="window-close"
            size={20}
            color={Colors.redA700}
          />
        </TouchableOpacity>
        <View style={styles.bottom}>
          <Text style={styles.text}>{name}</Text>
          <TouchableOpacity onPress={onShareBroadcast}>
            <MaterialCommunityIcons
              name="share"
              size={20}
              color={Colors.redA700}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}
