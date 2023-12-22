import React from 'react';
import { View } from 'react-native';
import DropdownMenu from './DropdownMenu';

const MyDropdownMenuMeta = {
  title: 'DropdownMenu',
  component: DropdownMenu,
  decorators: [
    (Story: any) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default MyDropdownMenuMeta;

export const Basic = {
  args: {
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
    onOptionSelect: (value: boolean) => {
      console.log('value', value);
    },
  },
};
