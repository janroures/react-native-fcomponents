import React from 'react';
import { View } from 'react-native';
import { ProgressBar } from './ProgressBar';

const MyProgressBarMeta = {
  title: 'ProgressBar',
  component: ProgressBar,
  decorators: [
    (Story: any) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default MyProgressBarMeta;

export const Basic = {
  args: {
    steps: 3,
    currentStep: 1,
    arrows: true,
  },
};
