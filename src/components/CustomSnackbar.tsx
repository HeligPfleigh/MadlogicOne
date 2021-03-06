import React from 'react';
import {Snackbar, Colors} from 'react-native-paper';
import {useIntl} from 'react-intl';
import {observer} from 'mobx-react-lite';
import {StyleSheet} from 'react-native';

import {useStores} from '../core/hooks/useStores';

const styles: Record<string, any> = StyleSheet.create({
  error: {
    backgroundColor: Colors.red200,
  },
  info: {
    backgroundColor: Colors.blue200,
  },
  success: {
    backgroundColor: Colors.green200,
  },
});

function CustomSnackbar() {
  const store = useStores();
  const {formatMessage} = useIntl();

  if (!store?.snackStore.titleId) {
    return null;
  }

  const action = store?.snackStore.action;

  return (
    <Snackbar
      duration={2000}
      visible={Boolean(store?.snackStore.titleId)}
      onDismiss={store?.snackStore.clearSnack}
      action={action}
      style={styles[store?.snackStore.type]}>
      {formatMessage({id: store?.snackStore.titleId})}
    </Snackbar>
  );
}

export default observer(CustomSnackbar);
