import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Switch, Text, Colors} from 'react-native-paper';
import noop from 'lodash/noop';
import Slider from '@react-native-community/slider';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  item: {
    marginVertical: 8,
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  switch: {
    marginRight: 16,
  },
});

const Setting = () => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Switch
            value={false}
            onValueChange={noop}
            style={styles.switch}
            color={Colors.blue500}
          />

          <Text>Sync only via wifi</Text>
        </View>
      </View>
      <View style={styles.item}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Switch
            value={true}
            onValueChange={noop}
            style={styles.switch}
            color={Colors.blue500}
          />
          <Text>Max storage use</Text>
        </View>
        <Slider
          style={{width: '100%', height: 40, marginTop: 8}}
          minimumTrackTintColor={Colors.blue500}
          thumbTintColor={Colors.blue500}
        />
        <Text style={{textAlign: 'center'}}>100MB</Text>
      </View>
    </View>
  );
};

export default Setting;
