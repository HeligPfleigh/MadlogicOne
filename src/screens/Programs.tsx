import React, {useEffect, useState, useCallback} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  View,
} from 'react-native';
import {useTheme, Text} from 'react-native-paper';
import {getPrograms, Program} from 'react-native-madlogic';
import {MaterialBottomTabScreenProps} from '@react-navigation/material-bottom-tabs';

import TabHeader from '../components/TabHeader';
import {useGlobalStyles} from '../core/hooks/useGlobalStyle';
import {observer} from 'mobx-react-lite';
import {AppTabParamsList} from '../navigations/types';
import NavigatorMap from '../navigations/NavigatorMap';

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
});

type ProgramsScreenProps = MaterialBottomTabScreenProps<
  AppTabParamsList,
  NavigatorMap.Programs
>;

function Programs({navigation}: ProgramsScreenProps) {
  const [programs, setPrograms] = useState<Program[]>([]);
  const theme = useTheme();
  const [globalStyles] = useGlobalStyles(theme);

  const loadData = useCallback(async () => {
    try {
      const list = await getPrograms();
      setPrograms(list);
    } catch (error) {
      console.error(error);
    }
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
