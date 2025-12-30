import { ScrollView, StyleProp, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BoxStyleProps } from '../../styles/interfaces';
import FBox from './FBox';
import { WHITE_NEUTRAL } from '../../styles/colors';
import React from 'react';

type Props = BoxStyleProps & {
  children: any;
  bc?: string;
  t?: boolean;
  b?: boolean;
  scrollable?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
};

const FContainer = (props: Props) => {
  if (props.scrollable) {
    return (
      <FBox flex={1} bc={props.bc || WHITE_NEUTRAL}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <SafeAreaView
            edges={
              props.t && props.b
                ? ['top', 'bottom']
                : props.t
                ? ['top']
                : props.b
                ? ['bottom']
                : []
            }
            style={[
              {
                flex: 1,
                backgroundColor: props.bc || WHITE_NEUTRAL,
              },
              props.containerStyle,
            ]}
          >
            <FBox flex={1} {...props}>
              {props.children}
            </FBox>
          </SafeAreaView>
        </ScrollView>
      </FBox>
    );
  }
  return (
    <FBox flex={1} bc={props.bc || WHITE_NEUTRAL}>
      <SafeAreaView
        edges={
          props.t && props.b
            ? ['top', 'bottom']
            : props.t
            ? ['top']
            : props.b
            ? ['bottom']
            : []
        }
        style={[
          {
            flex: 1,
            backgroundColor: props.bc || WHITE_NEUTRAL,
          },
          props.containerStyle,
        ]}
      >
        <FBox flex={1} {...props}>
          {props.children}
        </FBox>
      </SafeAreaView>
    </FBox>
  );
};

export default FContainer;
