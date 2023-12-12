import React from 'react';
import { View } from 'react-native';
import { UserRow } from './UserRow';
import FButton from '../base/FButton';
import FText from '../base/FText';
import { BLACK_NEUTRAL } from '../../styles/colors';

const MyUserRowMeta = {
  title: 'UserRow',
  component: UserRow,
  decorators: [
    (Story: any) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default MyUserRowMeta;

export const Basic = {
  args: {
    onPress: () => {},
    username: 'User 1',
    userDetail: 'Age: 24',
    rightComponent: (
      <FButton onPress={() => {}}>
        <FText t="bold" c={BLACK_NEUTRAL}>
          Add
        </FText>
      </FButton>
    ),
  },
};
