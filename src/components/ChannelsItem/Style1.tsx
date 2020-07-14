import React from 'react';
import {StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import {Text, Colors, Button} from 'react-native-paper';
import {observer} from 'mobx-react-lite';
import {useIntl} from 'react-intl';

import {IChannelsItem} from './ChannelsItemFactory';

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
  button: {
    width: '50%',
  },
});

function Style1({
  name,
  image,
  joined,
  onSubscribe,
  onUnsubscribe,
  onPressSegment,
}: IChannelsItem) {
  const {formatMessage} = useIntl();
  const opacity = joined ? 1 : 0.6;
  return (
    <TouchableOpacity
      disabled={!joined}
      onPress={onPressSegment}
      style={styles.item}>
      <ImageBackground
        source={{uri: image}}
        style={styles.imageContainer}
        imageStyle={[styles.image, {opacity}]}>
        <Button
          onPress={joined ? onUnsubscribe : onSubscribe}
          mode="contained"
          uppercase={false}
          color={joined ? Colors.white : Colors.black}
          style={styles.button}>
          {formatMessage({
            id: joined ? 'channels.unsubscribe' : 'channels.subscribe',
          })}
        </Button>
      </ImageBackground>
      <Text>{name}</Text>
    </TouchableOpacity>
  );
}

export default observer(Style1);
