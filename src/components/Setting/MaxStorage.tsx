import React, {useState, useEffect} from 'react';
import {observer} from 'mobx-react-lite';
import Animated, {
  Value,
  timing,
  Easing,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import {Switch, Text, Colors} from 'react-native-paper';
import Slider from '@react-native-community/slider';
import {useIntl} from 'react-intl';
import {StyleSheet} from 'react-native';

const AnimatedSlider = Animated.createAnimatedComponent(Slider);
const SLIDER_HEIGHT = 60;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switch: {
    marginRight: 16,
  },
  slider: {
    width: '100%',
    marginTop: 8,
  },
  storageTxt: {
    textAlign: 'center',
  },
});

function MaxStorageSetting() {
  const {formatMessage} = useIntl();
  const [isSwitchStorageOn, setIsSwitchStorageOn] = useState<boolean>(false);

  const height = new Value(isSwitchStorageOn ? 0 : SLIDER_HEIGHT);

  const anim = timing(height, {
    duration: 200,
    toValue: isSwitchStorageOn ? SLIDER_HEIGHT : 0,
    easing: Easing.inOut(Easing.linear),
  });

  const toggleSwitch = () => setIsSwitchStorageOn((prev) => !prev);
  const opacity = interpolate(height, {
    inputRange: [0, SLIDER_HEIGHT],
    outputRange: [0, 1],
    extrapolate: Extrapolate.CLAMP,
  });

  useEffect(() => {
    anim.start();
  }, [isSwitchStorageOn, anim]);
  return (
    <>
      <Animated.View style={styles.itemContainer}>
        <Switch
          value={isSwitchStorageOn}
          onValueChange={toggleSwitch}
          style={styles.switch}
          color={Colors.blue500}
        />
        <Text>{formatMessage({id: 'setting.max.storage'})}</Text>
      </Animated.View>
      <Animated.View style={{height, justifyContent: 'center'}}>
        <AnimatedSlider
          style={[styles.slider, {opacity}]}
          minimumTrackTintColor={Colors.blue500}
          thumbTintColor={Colors.blue500}
          onValueChange={console.log}
        />
        <Animated.Text style={[styles.storageTxt, {opacity}]}>
          100MB
        </Animated.Text>
      </Animated.View>
    </>
  );
}

export default observer(MaxStorageSetting);
