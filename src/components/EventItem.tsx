import React from 'react';
import {
  TouchableOpacity,
  ImageBackground,
  Text,
  StyleSheet,
  Platform,
} from 'react-native';
import {Event, triggerEvent} from 'react-native-madlogic';

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
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});

export default function EventItem({name, contents}: Event) {
  const handlePressEvent = () => triggerEvent(name, Platform.OS === 'android');
  const image = contents?.[0].thumbnail;

  return (
    <TouchableOpacity style={styles.item} onPress={handlePressEvent}>
      <ImageBackground
        source={{uri: image}}
        style={styles.imageContainer}
        imageStyle={styles.image}>
        <Text>Play</Text>
      </ImageBackground>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
}
