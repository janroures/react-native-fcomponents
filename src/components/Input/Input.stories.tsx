import React from 'react';
import { View } from 'react-native';
import { Input } from './Input';

const MyInputMeta = {
  title: 'Input',
  component: Input,
  decorators: [
    (Story: any) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default MyInputMeta;

export const Basic = {
  args: {
    type: 'text',
    topLabel: 'Text',
    placeholder: 'Type text here',
  },
};

export const Textbox = {
  args: {
    type: 'textbox',
    topLabel: 'Box',
    placeholder: 'Type text here',
  },
};

export const Email = {
  args: {
    type: 'email',
    topLabel: 'Email',
    placeholder: 'Type email here',
  },
};

export const Password = {
  args: {
    type: 'password',
    topLabel: 'Password',
    placeholder: 'Type password here',
  },
};

export const Number = {
  args: {
    type: 'number',
    topLabel: 'Number input',
    placeholder: 'Type number here',
  },
};

export const Date = {
  args: {
    type: 'date',
    topLabel: 'Date input',
    placeholder: 'Insert date',
  },
};

export const Time = {
  args: {
    type: 'time',
    topLabel: 'Time input',
    placeholder: 'Insert time',
  },
};

export const DateTime = {
  args: {
    type: 'datetime',
    topLabel: 'DateTime input',
    placeholder: 'Insert datetime',
  },
};
