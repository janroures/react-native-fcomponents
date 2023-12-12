import React from 'react';
import { ViewStyle } from 'react-native';
import { BoxStyleProps } from '../../styles/interfaces';
import FImage from './FImage';

type Props = BoxStyleProps & {
  src: number;
  c?: string;
  size?: number;
  style?: ViewStyle;
};

const FIcon = (props: Props) => {
  const size = props.size || 24;

  return (
    <FImage
      style={props.style}
      tc={props.c}
      rm="contain"
      w={size}
      h={size}
      {...props}
    />
  );
};

export default FIcon;
