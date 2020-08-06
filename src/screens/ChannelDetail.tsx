import React, {useEffect, useState, useCallback} from 'react';
import {FlatList, View, RefreshControl} from 'react-native';
import {
  Broadcast,
  getBroadcastsOfChannel,
  eventEmitter,
  MADLOGIC_SDK_EVENTS,
  sync,
} from 'react-native-madlogic';
import {StackScreenProps} from '@react-navigation/stack';
import {useTheme} from 'react-native-paper';

import {AppStackParamsList} from '../navigations/types';
import NavigatorMap from '../navigations/NavigatorMap';
import NewsItemFactory from '../components/NewsItem/NewsItemFactory';
import {useStores} from '../core/hooks/useStores';
import {useGlobalStyles} from '../core/hooks/useGlobalStyle';

type ChannelDetailScreenProps = StackScreenProps<
  AppStackParamsList,
  NavigatorMap.ChannelDetail
>;

export default function ChannelDetail({route}: ChannelDetailScreenProps) {
  const [broadcasts, setBroadcasts] = useState<Broadcast[]>([]);
  const store = useStores();
  const theme = useTheme();
  const [globalStyles] = useGlobalStyles(theme);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const loadData = useCallback(async () => {
    try {
      const id = route.params.segmentId;
      setRefreshing(true);
      if (id) {
        const list = await getBroadcastsOfChannel(id);
        setBroadcasts(list);
      } else {
        setBroadcasts([]);
      }
      setRefreshing(false);
    } catch (error) {
      store?.snackStore.setError('channel.detail.error.loadData');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route.params.segmentId]);

  useEffect(() => {
    const triggersChanged = eventEmitter.addListener(
      MADLOGIC_SDK_EVENTS.EVENT_TRIGGERS_CHANGED,
      loadData,
    );

    loadData();

    return () => {
      triggersChanged.remove();
    };
  }, [loadData]);

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={broadcasts}
        refreshControl={
          <RefreshControl onRefresh={sync} refreshing={refreshing} />
        }
        renderItem={({item}) => (
          <NewsItemFactory
            style={store?.ternantStore.tabs[NavigatorMap.Broadcasts].style}
            {...item}
          />
        )}
        keyExtractor={({id}: Broadcast) => id}
        ListFooterComponent={() => <View style={globalStyles.flatlistFooter} />}
      />
    </View>
  );
}
