import React from 'react';
import { GRAY_NEUTRAL_30 } from '../../styles/colors';
import FBox from './FBox';
import { BoxStyleProps } from '../../styles/interfaces';

type Props = BoxStyleProps & {
  size: number;
  color?: string;
  strokeWidth?: number;
  strokeColor?: string;
};

const FCircle = (props: Props) => {
  const size = props.size || 8;
  const radius = size / 2;
  return (
    <FBox
      {...props}
      w={size}
      h={size}
      br={radius}
      bc={props.color || GRAY_NEUTRAL_30}
    />
  );
};

export default FCircle;
