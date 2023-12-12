import React from 'react';
import { Image, ImageProps, ViewStyle } from 'react-native';
import {
  BoxStyleProps,
  parseStylePropsToViewProps,
} from '../../styles/interfaces';

type Props = BoxStyleProps & {
  src: number | { uri: string };
  rm?: ImageProps['resizeMode'];
  tc?: string;
  style?: ViewStyle;
};

const FImage = (props: Props) => {
  return (
    <Image
      style={[parseStylePropsToViewProps(props), props.style]}
      source={props.src}
      resizeMode={props.rm}
      tintColor={props.tc}
    />
  );
};

export default FImage;
