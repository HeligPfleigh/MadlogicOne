import React from 'react';
import {observer} from 'mobx-react-lite';
import HTML from 'react-native-render-html';
import {ScrollView, Dimensions} from 'react-native';
import {useTheme} from 'react-native-paper';

import {useStores} from '../core/hooks/useStores';
import {useGlobalStyles} from '../core/hooks/useGlobalStyle';

function About() {
  const store = useStores();
  const theme = useTheme();
  const [globalStyles] = useGlobalStyles(theme);

  return (
    <ScrollView style={globalStyles.container}>
      <HTML
        html={store?.ternantStore.about || '<div />'}
        imagesMaxWidth={Dimensions.get('window').width}
      />
    </ScrollView>
  );
}

export default observer(About);
