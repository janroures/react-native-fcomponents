import React, { useEffect, useState } from 'react';
import FButton from '../base/FButton';
import { BLACK_NEUTRAL, BLUE } from '../../styles/colors';
import FImage from '../base/FImage';
import FCircle from '../base/FCircle';
import { BoxStyleProps } from '../../styles/interfaces';
import FText from '../base/FText';
import FBox from '../base/FBox';

type Props = BoxStyleProps & {
  disabled?: boolean;
  checked: boolean;
  isRound?: boolean;
  label?: string;
  borderColor?: string;
  checkedBackgroundColor?: string;
  onValueChange?: (value: boolean) => void;
};

const icon = require('../../img/check.png');

export const Checkbox = (props: Props) => {
  const [checked, setChecked] = useState(props.checked);
  const size = 24;
  const radius = size / 2;
  const imageWidth = size * 0.6;
  const circleSize = size * 0.6;

  useEffect(() => {
    setChecked(props.checked);
  }, [props.checked]);

  const onChange = () => {
    setChecked(!checked);
    if (props.onValueChange) {
      props.onValueChange(!checked);
    }
  };

  return (
    <FBox row>
      <FButton
        onPress={onChange}
        disabled={props.disabled}
        ao={0.7}
        w={size}
        h={size}
        ai="center"
        jc="center"
        br={props.isRound ? radius : 2}
        bc="transparent"
        style={{
          borderWidth: 1,
          borderColor: checked ? BLUE : BLACK_NEUTRAL,
        }}
        {...props}
      >
        {checked && !props.isRound && (
          <FImage
            src={icon}
            w={imageWidth}
            h={imageWidth}
            rm="contain"
            tc={BLUE}
          />
        )}
        {checked && props.isRound && (
          <FCircle size={circleSize} color={checked ? BLUE : BLACK_NEUTRAL} />
        )}
      </FButton>
      {props.label !== undefined && (
        <FText s={14} ml={12} c={BLACK_NEUTRAL}>
          {props.label}
        </FText>
      )}
    </FBox>
  );
};
