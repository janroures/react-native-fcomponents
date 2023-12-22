import React, { forwardRef } from 'react';
import { TextInputProps, TextStyle, ViewStyle } from 'react-native';
import {
  BoxStyleProps,
  parseStylePropsToViewProps,
} from '../../styles/interfaces';
import { fontPixel } from '../../utils/dimensions';
import { BLACK_NEUTRAL } from '../../styles/colors';
import { TextInput } from 'react-native';

type Props = BoxStyleProps &
  TextInputProps & {
    dumb?: boolean;
    s?: number;
    c?: string;
    ta?: 'center' | 'left' | 'right';
    children?: React.ReactNode;
    style?: ViewStyle | TextStyle;
    onChangeText?: (text: string) => void;
    value?: string;
    t?: 'bold' | 'medium' | 'regular' | 'thin';
  };

const FTextInput = forwardRef((props: Props, ref: any) => {
  const types: any = {
    bold: 'bold',
    medium: '500',
    regular: 'normal',
    thin: '200',
    italic: 'italic',
  };
  return (
    <TextInput
      ref={ref}
      maxFontSizeMultiplier={1.5}
      value={props.value}
      onChangeText={props.onChangeText}
      {...props}
      style={[
        {
          includeFontPadding: false,
          fontSize: fontPixel(props.s || 16),
          fontWeight: props.t !== undefined ? types[props.t] : 'normal',
          color: props.c || BLACK_NEUTRAL,
          textAlign: props.ta || 'left',
          ...parseStylePropsToViewProps(props),
        },
        props.style,
      ]}
    />
  );
});

export default FTextInput;
