import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import QRCodeScanner, {Event} from 'react-native-qrcode-scanner';
import Animated, {
  Clock,
  Value,
  block,
  not,
  clockRunning,
  set,
  cond,
  startClock,
  timing,
  stopClock,
  Easing,
} from 'react-native-reanimated';
import {observer} from 'mobx-react-lite';
import {useIntl} from 'react-intl';

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    color: '#fff',
  },
  zeroContainer: {
    height: 0,
    flex: 0,
  },
  topContainer: {
    flex: 0,
    height: 20,
  },
  cameraContainer: {
    height: Dimensions.get('window').height,
  },
});

function runTiming(clock: Clock, value: number, dest: number) {
  const state: Animated.TimingState = {
    finished: new Value(0),
    position: new Value(value),
    time: new Value(0),
    frameTime: new Value(0),
  };

  const config = {
    duration: 5 * 1000,
    toValue: new Value(0),
    easing: Easing.linear,
  };

  return block([
    cond(not(clockRunning(clock)), [
      set(config.toValue, dest),
      set(state.frameTime, 0),
      set(state.finished, 0),
      set(state.time, 0),
      set(state.position, value),
      startClock(clock),
    ]),
    // we run the step here that is going to update position
    timing(clock, state, config),
    // if the animation is over we stop the clock
    cond(state.finished, stopClock(clock)),
    // we made the block return the updated position
    state.position,
  ]);
}

const QRCode = () => {
  const onSuccess = (e: Event) => {
    // TODO
    console.info(e);
  };

  const clock = new Clock();
  const progress = runTiming(clock, 1, 0);
  const {formatMessage} = useIntl();

  return (
    <QRCodeScanner
      onRead={onSuccess}
      topViewStyle={styles.zeroContainer}
      bottomViewStyle={styles.topContainer}
      cameraStyle={styles.cameraContainer}
      bottomContent={
        <Animated.Text style={[styles.centerText, {opacity: progress}]}>
          {formatMessage({id: 'qrcode.instruction'})}
        </Animated.Text>
      }
    />
  );
};

export default observer(QRCode);
