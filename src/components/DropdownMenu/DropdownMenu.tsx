import React, { useState } from 'react';
import { BoxStyleProps } from '../../styles/interfaces';
import FBox from '../base/FBox';
import FButton from '../base/FButton';
import FText from '../base/FText';
import {
  BLACK_NEUTRAL,
  BLUE,
  GRAY_NEUTRAL_30,
  GRAY_NEUTRAL_40,
} from '../../styles/colors';
import FIcon from '../base/FIcon';

type Props = BoxStyleProps & {
  onOptionSelect: (value: string | null) => void;
  options: Array<{ label: string; value: string }>;
};

export const DropdownMenu = (props: Props) => {
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
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<any>(null);

  const onOptionPress = (option: any) => {
    setSelectedOption(option);
    props.onOptionSelect(option.value);
    setOpen(false);
  };
  return (
    <FBox row ai="center" {...props}>
      <FButton
        row
        ai="center"
        onPress={() => setOpen(!open)}
        ph={8}
        pv={4}
        br={4}
        h={40}
        style={{
          borderWidth: 1,
          borderColor: selectedOption ? BLUE : BLACK_NEUTRAL,
        }}
      >
        {open ? (
          <FIcon
            src={require('../../img/up-arrow.png')}
            c={selectedOption ? BLUE : BLACK_NEUTRAL}
          />
        ) : (
          <FIcon
            src={require('../../img/down-arrow.png')}
            c={selectedOption ? BLUE : BLACK_NEUTRAL}
          />
        )}
        <FText c={selectedOption ? BLUE : BLACK_NEUTRAL} ml={12}>
          {selectedOption ? selectedOption.label : 'Seleccionar opción'}
        </FText>
      </FButton>
      {open && (
        <FBox pos="absolute" top={40} shadow br={4} style={{ zIndex: 999 }}>
          {options?.map((option: any, index: number) => (
            <FButton
              key={option.value}
              pv={6}
              ph={12}
              style={{
                borderBottomWidth: index === options.length - 1 ? 0 : 1,
                borderBottomColor: GRAY_NEUTRAL_30,
              }}
              onPress={() => onOptionPress(option)}
            >
              <FText c={BLACK_NEUTRAL}>{option.label}</FText>
            </FButton>
          ))}
        </FBox>
      )}
      {selectedOption && (
        <FButton
          pl={12}
          onPress={() => {
            setSelectedOption(null);
            props.onOptionSelect(null);
          }}
        >
          <FText c={GRAY_NEUTRAL_40}>Clear</FText>
        </FButton>
      )}
    </FBox>
  );
};
