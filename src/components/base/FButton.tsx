import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import {
  BoxStyleProps,
  parseStylePropsToViewProps,
} from '../../styles/interfaces';

type Props = BoxStyleProps &
  TouchableOpacityProps & {
    ao?: number;
  };

const FButton = (props: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={props.ao || 0.5}
      {...props}
      style={[parseStylePropsToViewProps(props), props.style]}
    >
      {props.children}
    </TouchableOpacity>
  );
};

export default FButton;
