import React, {useEffect, useState, useCallback} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  View,
} from 'react-native';
import {useTheme, Text, Colors} from 'react-native-paper';
import {getPrograms, Program} from 'react-native-madlogic';
import {MaterialBottomTabScreenProps} from '@react-navigation/material-bottom-tabs';
import {observer} from 'mobx-react-lite';

import TabHeader from '../components/TabHeader';
import {useGlobalStyles} from '../core/hooks/useGlobalStyle';
import {AppTabParamsList} from '../navigations/types';
import NavigatorMap from '../navigations/NavigatorMap';
import {useStores} from '../core/hooks/useStores';
import {event} from 'react-native-reanimated';

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
});

type ProgramsScreenProps = MaterialBottomTabScreenProps<
  AppTabParamsList,
  NavigatorMap.Programs
>;

function Programs({navigation}: ProgramsScreenProps) {
  const [programs, setPrograms] = useState<Program[]>([]);
  const theme = useTheme();
  const [globalStyles] = useGlobalStyles(theme);
  const store = useStores();

  const loadData = useCallback(async () => {
    try {
      const list = await getPrograms();
      setPrograms(list);
    } catch (error) {
      store?.snackStore.setError('programs.error.loadData');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const _renderItem = ({name, thumbnail, events}: Program) => {
    const handlePressJourney = () =>
      navigation.navigate(NavigatorMap.Events as any, {events, name});
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
              <Text>{events.length}</Text>
            </View>
          </>
        )}
        <Text>{name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={globalStyles.container}>
      <SafeAreaView>
        <TabHeader />
        <FlatList
          data={programs}
          renderItem={({item}) => _renderItem(item)}
          keyExtractor={({id}: Program) => id}
        />
      </SafeAreaView>
    </View>
  );
}

export default observer(Programs);
