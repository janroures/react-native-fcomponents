import React from 'react';
import { View, ViewProps } from 'react-native';
import {
  BoxStyleProps,
  parseStylePropsToViewProps,
} from '../../styles/interfaces';

type Props = BoxStyleProps & ViewProps;

const FBox = (props: Props) => {
  return (
    <View
      onLayout={props.onLayout}
      pointerEvents={props.pointerEvents}
      style={[parseStylePropsToViewProps(props), props.style]}
    >
      {props.children}
    </View>
  );
};

export default FBox;
