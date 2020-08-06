import React, {useEffect, useState, useCallback} from 'react';
import {SafeAreaView, FlatList, View, RefreshControl} from 'react-native';
import {
  Segment,
  getChannels,
  MADLOGIC_SDK_EVENTS,
  eventEmitter,
  sync,
} from 'react-native-madlogic';
import {useTheme} from 'react-native-paper';
import {observer} from 'mobx-react-lite';

import NavigatorMap from '../navigations/NavigatorMap';
import TabHeader from '../components/TabHeader';
import {useGlobalStyles} from '../core/hooks/useGlobalStyle';
import ChannelItemFactory from '../components/ChannelsItem/ChannelsItemFactory';
import {useStores} from '../core/hooks/useStores';

function Channels() {
  const [channels, setChannels] = useState<Segment[]>([]);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const theme = useTheme();
  const [globalStyles] = useGlobalStyles(theme);
  const store = useStores();

  const loadData = useCallback(async () => {
    try {
      setRefreshing(true);
      const list = await getChannels();
      setChannels(list);
      setRefreshing(false);
    } catch (error) {
      store?.snackStore.setError('channels.error.loadData');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setChannels]);

  useEffect(() => {
    const segmentChanged = eventEmitter.addListener(
      MADLOGIC_SDK_EVENTS.EVENT_SEGMENT_CHANGED,
      loadData,
    );
    loadData();

    return () => {
      segmentChanged.remove();
    };
  }, [loadData]);

  return (
    <SafeAreaView style={globalStyles.safeview}>
      <View style={globalStyles.container}>
        <TabHeader />
        <FlatList
          refreshControl={
            <RefreshControl onRefresh={sync} refreshing={refreshing} />
          }
          data={channels}
          renderItem={({item}) => (
            <ChannelItemFactory
              style={store?.ternantStore.tabs[NavigatorMap.Channels].style}
              {...item}
            />
          )}
          keyExtractor={({id}: Segment) => id}
          ListFooterComponent={() => (
            <View style={globalStyles.flatlistFooter} />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

export default observer(Channels);
