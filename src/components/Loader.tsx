import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import Modal from 'react-native-modal';
import {Colors} from 'react-native-paper';

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  activityIndicatorWrapper: {
    backgroundColor: Colors.white,
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

interface LoaderProps {
  loading: boolean;
}

const Loader: React.FC<LoaderProps> = ({loading}: LoaderProps) => {
  return (
    <Modal isVisible={loading} animationIn="fadeIn" animationOut="fadeOut">
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator
            animating={loading}
            size="large"
            color={Colors.red500}
          />
        </View>
      </View>
    </Modal>
  );
};

export default Loader;
