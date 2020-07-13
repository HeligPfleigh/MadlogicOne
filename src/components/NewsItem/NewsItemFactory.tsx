import React from 'react';
import {
  Broadcast,
  playBroadcast,
  deleteBroadcast,
  share,
} from 'react-native-madlogic';

import {NewsItemStyle} from '../../core/const';
import Style2 from './Style2';
import Style3 from './Style3';
import Style1 from './Style1';

interface INewsItemFactory extends Broadcast {
  style?: number;
}

export interface INewsItem
  extends Pick<Broadcast, 'viewed' | 'name' | 'image'> {
  onPlayBroadcast: () => void;
  onDeleteBroadcast: () => void;
  onShareBroadcast: () => void;
}

export default function NewsItemFactory({
  style,
  id,
  ...props
}: INewsItemFactory) {
  const handlePlayBroadcast = () => playBroadcast(id);
  const handleDeleteBroadcast = () => deleteBroadcast(id);
  const handleShareBroadcast = () => share(id);
  switch (style) {
    case NewsItemStyle.STYLE1:
      return (
        <Style1
          {...props}
          onPlayBroadcast={handlePlayBroadcast}
          onDeleteBroadcast={handleDeleteBroadcast}
          onShareBroadcast={handleShareBroadcast}
        />
      );
    case NewsItemStyle.STYLE2:
      return (
        <Style2
          {...props}
          onPlayBroadcast={handlePlayBroadcast}
          onDeleteBroadcast={handleDeleteBroadcast}
          onShareBroadcast={handleShareBroadcast}
        />
      );
    case NewsItemStyle.STYLE3:
    default:
      return (
        <Style3
          {...props}
          onPlayBroadcast={handlePlayBroadcast}
          onDeleteBroadcast={handleDeleteBroadcast}
          onShareBroadcast={handleShareBroadcast}
        />
      );
  }
}
