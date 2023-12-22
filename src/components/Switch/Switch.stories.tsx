import React from 'react';
import { View } from 'react-native';
import Switch from './Switch';

const MySwitchMeta = {
  title: 'Switch',
  component: Switch,
  decorators: [
    (Story: any) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default MySwitchMeta;

export const Basic = {
  args: {
    checked: false,
    onChange: (value: boolean) => {
      console.log('value', value);
    },
  },
};
