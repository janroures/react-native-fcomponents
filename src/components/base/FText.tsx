import React from 'react';
import { Text, TextProps, TextStyle, ViewStyle } from 'react-native';
import {
  BoxStyleProps,
  parseStylePropsToViewProps,
} from '../../styles/interfaces';
import { fontPixel } from '../../utils/dimensions';
import { BLACK_NEUTRAL } from '../../styles/colors';

export type FTExtProps = BoxStyleProps &
  TextProps & {
    s?: number;
    fwg?: string;
    c?: string;
    ta?: 'center' | 'left' | 'right';
    children?: React.ReactNode;
    style?: ViewStyle | TextStyle;
    t?: 'bold' | 'medium' | 'regular' | 'thin' | string;
  };

const FText = (props: FTExtProps) => {
  const types: any = {
    bold: 'bold',
    medium: '500',
    regular: 'normal',
    thin: '200',
    italic: 'italic',
  };
  return (
    <Text
      {...props}
      maxFontSizeMultiplier={1.5}
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
    >
      {props.children}
    </Text>
  );
};

export default FText;
