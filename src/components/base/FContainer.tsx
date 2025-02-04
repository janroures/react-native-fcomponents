import { Platform, ScrollView } from 'react-native';
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
};

const FContainer = (props: Props) => {
  if (props.scrollable) {
    return (
      <FBox flex={1} bc={props.bc || WHITE_NEUTRAL}>
        <ScrollView showsVerticalScrollIndicator={false}>
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
            style={{
              flex: 1,
              backgroundColor: props.bc || WHITE_NEUTRAL,
              paddingTop: Platform.OS === 'android' ? (props.t ? 24 : 0) : 0,
              paddingBottom: Platform.OS === 'android' ? (props.b ? 24 : 0) : 0,
            }}
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
        style={{
          flex: 1,
          backgroundColor: props.bc || WHITE_NEUTRAL,
          paddingTop: Platform.OS === 'android' ? (props.t ? 24 : 0) : 0,
          paddingBottom: Platform.OS === 'android' ? (props.b ? 24 : 0) : 0,
        }}
      >
        <FBox flex={1} {...props}>
          {props.children}
        </FBox>
      </SafeAreaView>
    </FBox>
  );
};

export default FContainer;
