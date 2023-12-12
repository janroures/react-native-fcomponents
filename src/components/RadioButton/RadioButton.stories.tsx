import React from 'react';
import { View } from 'react-native';
import { RadioButton } from './RadioButton';

const MyRadioButtonMeta = {
  title: 'RadioButton',
  component: RadioButton,
  decorators: [
    (Story: any) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default MyRadioButtonMeta;

export const Basic = {
  args: {
    checked: false,
    isRound: true,
    size: 24,
    label: 'Placeholder label',
  },
};
