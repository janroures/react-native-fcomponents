import React from 'react';
import { View } from 'react-native';
import Button from './Button';
import { BLACK_NEUTRAL } from '../../styles/colors';

const MyButtonMeta = {
  title: 'Button',
  component: Button,
  decorators: [
    (Story: any) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default MyButtonMeta;

export const Basic = {
  args: {
    text: 'Button test',
    bc: 'lightblue',
    textColor: BLACK_NEUTRAL,
    disabled: false,
    shadow: false,
    h: 40,
    w: '80%',
  },
};

export const Icon = {
  args: {
    type: 'icon',
    icon: require('../../img/check.png'),
    bc: 'lightblue',
    size: 48,
    shadow: false,
  },
};
