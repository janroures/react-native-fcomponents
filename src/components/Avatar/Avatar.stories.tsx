import React from 'react';
import { View } from 'react-native';
import { Avatar } from './Avatar';

const MyAvatarMeta = {
  title: 'Avatar',
  component: Avatar,
  decorators: [
    (Story: any) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default MyAvatarMeta;

export const Basic = {
  args: {
    size: 120,
    isPlaceholder: false,
    src: 'https://avatars.githubusercontent.com/u/17571969?v=4',
  },
};
