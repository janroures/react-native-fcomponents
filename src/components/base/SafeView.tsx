import React from 'react';
import { Platform, SafeAreaView } from 'react-native';
import { BoxStyleProps } from '../../styles/interfaces';
import FBox from './FBox';

type Props = BoxStyleProps & {
  children?: React.ReactNode;
  iosOnly?: boolean;
};

const SafeView = (props: Props) => {
  return (
    <FBox pt={Platform.OS === 'ios' ? 0 : props.iosOnly ? 0 : 20} {...props}>
      <SafeAreaView>{props.children}</SafeAreaView>
    </FBox>
  );
};

export default SafeView;
