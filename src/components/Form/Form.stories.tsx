import React from 'react';
import { View } from 'react-native';
import Form from './Form';

const MyFormMeta = {
  title: 'Form',
  component: Form,
  decorators: [
    (Story: any) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default MyFormMeta;

export const Basic = {
  args: {
    scrolls: false,
    structure: [
      {
        type: 'text',
        topLabel: 'Full Name',
        name: 'name',
        placeholder: 'Enter your full name',
        mandatory: true,
      },
      {
        type: 'email',
        topLabel: 'Email',
        name: 'email',
        placeholder: 'Enter your email',
        mandatory: true,
      },
      {
        type: 'date',
        topLabel: 'Birthdate',
        name: 'birthdate',
        placeholder: 'Enter birthdate',
      },
      {
        type: 'password',
        topLabel: 'Password',
        name: 'password',
        placeholder: 'Enter your password',
        mandatory: true,
      },
    ],
    onSubmit: (data: any) => console.log('data: ', data),
  },
};
