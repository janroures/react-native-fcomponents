import React from 'react';
import FBox from '../base/FBox';
import FButton from '../base/FButton';
import FCircle from '../base/FCircle';
import FText from '../base/FText';
import { BLACK_NEUTRAL, BLUE, GRAY_NEUTRAL_30 } from '../../styles/colors';
import { BoxStyleProps } from '../../styles/interfaces';

type Props = BoxStyleProps & {
  disabled?: boolean;
  checked?: boolean;
  label?: string;
  light?: boolean;
  labelSize?: number;
  onPress: () => void;
};

const RadioButton = (props: Props) => {
  return (
    <FButton
      row
      ai="center"
      br={4}
      p={12}
      lightShadow={props.label !== undefined && props.checked}
      style={{
        borderWidth: props.label !== undefined ? 1 : 0,
        borderColor: props.checked ? BLUE : GRAY_NEUTRAL_30,
      }}
      {...props}
    >
      <FBox
        w={20}
        h={20}
        br={10}
        ai="center"
        jc="center"
        style={{
          borderWidth: 2,
          borderColor: props.checked ? BLUE : BLACK_NEUTRAL,
        }}
      >
        {props.checked && <FCircle size={10} color={BLUE} />}
      </FBox>
      {props.label !== undefined && (
        <FText s={props.labelSize || 14} ml={12} c={BLACK_NEUTRAL}>
          {props.label}
        </FText>
      )}
    </FButton>
  );
};

export default RadioButton;
