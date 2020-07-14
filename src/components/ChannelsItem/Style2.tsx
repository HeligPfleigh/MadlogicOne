import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
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
  text: {
    fontSize: 16,
    fontWeight: '400',
  },
  itemFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    width: '50%',
  },
  unsubscribe: {
    color: Colors.redA700,
  },
});

function Style2({
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
    <View style={styles.item}>
      <TouchableOpacity disabled={!joined} onPress={onPressSegment}>
        <ImageBackground
          source={{uri: image}}
          style={styles.imageContainer}
          imageStyle={[styles.image, {opacity}]}>
          {!joined && (
            <Button
              onPress={joined ? onUnsubscribe : onSubscribe}
              mode="contained"
              uppercase={false}
              color={Colors.black}
              style={styles.button}>
              {formatMessage({id: 'channels.subscribe'})}
            </Button>
          )}
        </ImageBackground>
      </TouchableOpacity>
      <View style={styles.itemFooter}>
        <Text style={styles.text}>{name}</Text>
        {joined && (
          <Button onPress={onUnsubscribe} mode="text" uppercase={false}>
            <Text style={styles.unsubscribe}>
              {formatMessage({id: 'channels.unsubscribe'})}
            </Text>
          </Button>
        )}
      </View>
    </View>
  );
}

export default observer(Style2);
