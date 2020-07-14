import React from 'react';
import {View, FlatList, SafeAreaView} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {useTheme} from 'react-native-paper';
import {Event} from 'react-native-madlogic';

import {AppStackParamsList} from '../navigations/types';
import NavigatorMap from '../navigations/NavigatorMap';
import EventItem from '../components/EventItem';
import {useGlobalStyles} from '../core/hooks/useGlobalStyle';

type EventsScreenProps = StackScreenProps<
  AppStackParamsList,
  NavigatorMap.Events
>;

export default function Events({route}: EventsScreenProps) {
  const events = route.params.events;
  const theme = useTheme();
  const [globalStyles] = useGlobalStyles(theme);

  return (
    <View style={globalStyles.container}>
      <SafeAreaView>
        <FlatList
          data={events}
          renderItem={({item}) => <EventItem {...item} />}
          keyExtractor={({id}: Event) => id}
        />
      </SafeAreaView>
    </View>
  );
}
