import React from 'react';
import FButton from '../base/FButton';
import { BoxStyleProps } from '../../styles/interfaces';
import FIcon from '../base/FIcon';
import FText from '../base/FText';
import { BLACK_NEUTRAL } from '../../styles/colors';

type Props = BoxStyleProps & {
  type?: 'text' | 'icon';
  text?: string;
  textColor?: string;
  icon?: any;
  iconColor?: string;
  size?: number;
  disabled?: boolean;
  onPress: () => void;
};

const Button = (props: Props) => {
  if (props.type === 'icon') {
    const size = props.size || 32;
    return (
      <FButton
        w={size}
        h={size}
        o={props.disabled ? 0.5 : 1}
        ai="center"
        jc="center"
        br={size / 2}
        {...props}
      >
        <FIcon
          src={props.icon}
          c={props.iconColor || BLACK_NEUTRAL}
          size={size / 2}
        />
      </FButton>
    );
  }
  const text = props.text !== undefined ? props.text : 'Button';
  return (
    <FButton
      pv={6}
      ph={12}
      o={props.disabled ? 0.5 : 1}
      ai="center"
      jc="center"
      br={4}
      {...props}
    >
      <FText c={props.textColor || BLACK_NEUTRAL}>{text}</FText>
    </FButton>
  );
};

export default Button;
