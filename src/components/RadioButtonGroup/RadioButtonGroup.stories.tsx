import React from 'react';
import { View } from 'react-native';
import RadioButtonGroup from './RadioButtonGroup';

const MyRadioButtonGroupMeta = {
  title: 'RadioButtonGroup',
  component: RadioButtonGroup,
  decorators: [
    (Story: any) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default MyRadioButtonGroupMeta;

export const Basic = {
  args: {
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
  },
};
