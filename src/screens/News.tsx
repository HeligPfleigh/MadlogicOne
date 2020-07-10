import React from 'react';
import {observer} from 'mobx-react-lite';
import {SafeAreaView} from 'react-native';

import TabHeader from '../components/TabHeader';

function News() {
  return (
    <SafeAreaView>
      <TabHeader />
    </SafeAreaView>
  );
}

export default observer(News);
