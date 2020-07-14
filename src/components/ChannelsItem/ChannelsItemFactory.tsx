import React from 'react';
import {Segment, joinSegment, leaveSegment} from 'react-native-madlogic';

import {ChannelsItemStyle} from '../../core/const';
import Style2 from './Style2';
import Style1 from './Style1';

interface IChannelsItemFactory extends Segment {
  style?: number;
}

export interface IChannelsItem
  extends Pick<Segment, 'joined' | 'name' | 'image'> {
  onSubscribe: () => void;
  onUnsubscribe: () => void;
  onPressSegment: () => void;
}

export default function ChannelItemFactory({
  style,
  // id,
  name,
  ...props
}: IChannelsItemFactory) {
  const handlePressSubscribe = () => joinSegment(name);
  const handlePressUnsubscribe = () => leaveSegment(name);
  const handlePressSegment = () => {};

  let ChannelsItem;
  switch (style) {
    case ChannelsItemStyle.STYLE1:
      ChannelsItem = Style1;
      break;
    case ChannelsItemStyle.STYLE2:
    default:
      ChannelsItem = Style2;
  }
  return (
    <ChannelsItem
      {...props}
      name={name}
      onSubscribe={handlePressSubscribe}
      onUnsubscribe={handlePressUnsubscribe}
      onPressSegment={handlePressSegment}
    />
  );
}
