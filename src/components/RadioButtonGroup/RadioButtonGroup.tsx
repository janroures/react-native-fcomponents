import React, { useState } from 'react';
import FBox from '../base/FBox';
import { BoxStyleProps } from '../../styles/interfaces';
import RadioButton from '../RadioButton/RadioButton';

type Props = BoxStyleProps & {
  disabled?: boolean;
  options: Array<{ label: string; value: string }>;
};

const RadioButtonGroup = (props: Props) => {
  const options: any = props.options || [
    {
      label: 'Option 1',
      value: 'option1',
    },
    {
      label: 'Option 2',
      value: 'option2',
    },
  ];
  const [selectedValue, setSelectedValue] = useState(options[0].value);

  const onOptionPress = (value: string) => {
    setSelectedValue(value);
  };
  return (
    <FBox {...props}>
      {props.options?.map((option) => (
        <RadioButton
          mb={6}
          checked={selectedValue === option.value}
          key={option.value}
          label={option.label}
          onPress={() => onOptionPress(option.value)}
        />
      ))}
    </FBox>
  );
};

export default RadioButtonGroup;
