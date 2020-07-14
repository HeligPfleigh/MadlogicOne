import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

import {AppStackParamsList} from '../navigations/types';
import NavigatorMap from '../navigations/NavigatorMap';
import {Event} from 'react-native-madlogic';
import EventItem from '../components/EventItem';

type EventsScreenProps = StackScreenProps<
  AppStackParamsList,
  NavigatorMap.Events
>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
});

export default function Events({route}: EventsScreenProps) {
  const events = route.params.events || [];

  return (
    <View style={styles.container}>
      <FlatList
        data={events as any}
        renderItem={({item}) => <EventItem {...item} />}
        keyExtractor={({id}: Event) => id}
      />
    </View>
  );
}
