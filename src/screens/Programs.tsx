import React, {useEffect, useState, useCallback} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  View,
  RefreshControl,
} from 'react-native';
import {useTheme, Text, Colors} from 'react-native-paper';
import {
  getPrograms,
  Program,
  eventEmitter,
  MADLOGIC_SDK_EVENTS,
  sync,
} from 'react-native-madlogic';
import {MaterialBottomTabScreenProps} from '@react-navigation/material-bottom-tabs';
import {observer} from 'mobx-react-lite';

import TabHeader from '../components/TabHeader';
import {useGlobalStyles} from '../core/hooks/useGlobalStyle';
import {AppTabParamsList} from '../navigations/types';
import NavigatorMap from '../navigations/NavigatorMap';
import {useStores} from '../core/hooks/useStores';
import {event} from 'react-native-reanimated';
import {CommonActions} from '@react-navigation/native';

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
    position: 'absolute',
    width: 30,
    height: 20,
  },
  eventAmountUpper: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 24,
    right: 24,
    backgroundColor: Colors.white,
  },
  eventAmount: {
    top: 20,
    right: 20,
    backgroundColor: Colors.indigo100,
  },
  text2: {
    color: Colors.black,
  },
});

type ProgramsScreenProps = MaterialBottomTabScreenProps<
  AppTabParamsList,
  NavigatorMap.Programs
>;

function Programs({navigation}: ProgramsScreenProps) {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const theme = useTheme();
  const [globalStyles] = useGlobalStyles(theme);
  const store = useStores();

  const loadData = useCallback(async () => {
    try {
      setRefreshing(true);
      const list = await getPrograms();
      setPrograms(list);
    } catch (error) {
      store?.snackStore.setError('programs.error.loadData');
    } finally {
      setRefreshing(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const synced = eventEmitter.addListener(
      MADLOGIC_SDK_EVENTS.EVENT_SYNC_OK,
      loadData,
    );

    loadData();
    return () => {
      synced.remove();
    };
  }, [loadData]);

  const _renderItem = ({name, thumbnail, events}: Program) => {
    const handlePressJourney = () =>
      navigation.dispatch(
        CommonActions.navigate({
          name: NavigatorMap.Events,
          params: {
            events,
            name,
          },
        }),
      );
    return (
      <TouchableOpacity style={styles.item} onPress={handlePressJourney}>
        <ImageBackground
          source={{uri: thumbnail}}
          style={styles.imageContainer}
          imageStyle={styles.image}
        />
        {event.length && (
          <>
            <View style={[styles.icon, styles.eventAmount]} />
            <View style={[styles.icon, styles.eventAmountUpper]}>
              <Text style={styles.text2}>{events.length}</Text>
            </View>
          </>
        )}
        <Text>{name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={globalStyles.safeview}>
      <View style={globalStyles.container}>
        <TabHeader />
        <FlatList
          refreshControl={
            <RefreshControl onRefresh={sync} refreshing={refreshing} />
          }
          data={programs}
          renderItem={({item}) => _renderItem(item)}
          keyExtractor={({id}: Program) => id}
        />
      </View>
    </SafeAreaView>
  );
}

export default observer(Programs);
