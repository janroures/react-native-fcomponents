import React from 'react';
import { ViewStyle } from 'react-native';
import { Image, ImageProps } from 'expo-image';
import {
  BoxStyleProps,
  parseStylePropsToViewProps,
} from '../../styles/interfaces';

type Props = BoxStyleProps & {
  src: number | string | { uri: string };
  rm?: ImageProps['contentFit'];
  tc?: string;
  style?: ViewStyle;
};

const FImage = (props: Props) => {
  const source = typeof props.src === 'string' ? props.src : props.src;

  return (
    <Image
      style={[parseStylePropsToViewProps(props), props.style]}
      source={source}
      contentFit={props.rm}
      tintColor={props.tc}
      cachePolicy="memory-disk"
    />
  );
};

export default FImage;
