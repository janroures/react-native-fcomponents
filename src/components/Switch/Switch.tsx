import React, { useState } from 'react';
import { BoxStyleProps } from '../../styles/interfaces';
import { Switch as RNSwitch } from 'react-native';

type Props = BoxStyleProps & {
  disabled?: boolean;
  checked?: boolean;
  onChange: (value: boolean) => void;
};

const Switch = (props: Props) => {
  const [checked, setChecked] = useState(props.checked);

  const onChange = (value: boolean) => {
    setChecked(value);
    props.onChange(value);
  };

  return <RNSwitch value={checked} onValueChange={onChange} />;
};

export default Switch;
