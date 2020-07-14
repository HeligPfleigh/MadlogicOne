import React, {useEffect, useState, useCallback} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {
  Broadcast,
  getBroadcastsOfChannel,
  eventEmitter,
  MADLOGIC_SDK_EVENTS,
} from 'react-native-madlogic';
import {StackScreenProps} from '@react-navigation/stack';

import {AppStackParamsList} from '../navigations/types';
import NavigatorMap from '../navigations/NavigatorMap';
import NewsItemFactory from '../components/NewsItem/NewsItemFactory';
import {useStores} from '../core/hooks/useStores';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});

type ChannelDetailScreenProps = StackScreenProps<
  AppStackParamsList,
  NavigatorMap.ChannelDetail
>;

export default function ChannelDetail({route}: ChannelDetailScreenProps) {
  const [broadcasts, setBroadcasts] = useState<Broadcast[]>([]);
  const store = useStores();

  const loadData = useCallback(async () => {
    try {
      const id = route.params.segmentId;
      if (id) {
        const list = await getBroadcastsOfChannel(id);
        setBroadcasts(list);
      } else {
        setBroadcasts([]);
      }
    } catch (error) {
      console.error(error);
    }
  }, [route.params.segmentId]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  useEffect(() => {
    const segmentChanged = eventEmitter.addListener(
      MADLOGIC_SDK_EVENTS.EVENT_SEGMENT_CHANGED,
      loadData,
    );

    return () => {
      segmentChanged.remove();
    };
  }, [loadData]);

  return (
    <View style={styles.container}>
      <FlatList
        data={broadcasts}
        renderItem={({item}) => (
          <NewsItemFactory
            style={store?.ternantStore.tabs[NavigatorMap.Broadcasts].style}
            {...item}
          />
        )}
        keyExtractor={({id}: Broadcast) => id}
      />
    </View>
  );
}
