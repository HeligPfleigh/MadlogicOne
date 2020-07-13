import React, {useCallback, useState, useEffect} from 'react';
import {observer} from 'mobx-react-lite';
import {SafeAreaView, FlatList, RefreshControl, View} from 'react-native';
import {
  Broadcast,
  eventEmitter,
  MADLOGIC_SDK_EVENTS,
  getBroadcasts,
} from 'react-native-madlogic';
import {useTheme} from 'react-native-paper';

import TabHeader from '../components/TabHeader';
import {useGlobalStyles} from '../core/hooks/useGlobalStyle';
import NewsItemFactory from '../components/NewsItem/NewsItemFactory';
import {useStores} from '../core/hooks/useStores';
import NavigatorMap from '../navigations/NavigatorMap';

function News() {
  const [broadcasts, setBroadcasts] = useState<Broadcast[]>([]);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const theme = useTheme();
  const [globalStyles] = useGlobalStyles(theme);
  const store = useStores();

  const loadData = useCallback(async () => {
    try {
      setRefreshing(true);
      const list = await getBroadcasts();
      setBroadcasts(list);
      setRefreshing(false);
    } catch (error) {
      console.error(error);
    }
  }, [setBroadcasts]);

  useEffect(() => {
    const triggersChanged = eventEmitter.addListener(
      MADLOGIC_SDK_EVENTS.EVENT_TRIGGERS_CHANGED,
      loadData,
    );

    const searchChanged = eventEmitter.addListener(
      MADLOGIC_SDK_EVENTS.EVENT_SEARCH_BROADCAST_OK,
      setBroadcasts,
    );

    const broadcastWatched = eventEmitter.addListener(
      MADLOGIC_SDK_EVENTS.EVENT_BROADCAST_WATCHED,
      loadData,
    );

    const segmentChanged = eventEmitter.addListener(
      MADLOGIC_SDK_EVENTS.EVENT_SEGMENT_CHANGED,
      loadData,
    );
    loadData();
    return () => {
      triggersChanged.remove();
      searchChanged.remove();
      broadcastWatched.remove();
      segmentChanged.remove();
    };
  }, [loadData]);

  return (
    <View style={globalStyles.container}>
      <SafeAreaView>
        <TabHeader />
        <FlatList
          refreshControl={
            <RefreshControl onRefresh={loadData} refreshing={refreshing} />
          }
          data={broadcasts}
          renderItem={({item}) => (
            <NewsItemFactory
              style={store?.ternantStore.tabs[NavigatorMap.Broadcasts].style}
              {...item}
            />
          )}
          keyExtractor={({id}: Broadcast) => id}
          ListFooterComponent={() => <View style={{marginBottom: 100}} />}
        />
      </SafeAreaView>
    </View>
  );
}

export default observer(News);
