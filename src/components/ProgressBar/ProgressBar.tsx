import React, { useEffect, useState } from 'react';
import FBox from '../base/FBox';
import { BoxStyleProps } from '../../styles/interfaces';
import { Button } from '../Button';
import { Dimensions } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import FText from '../base/FText';
import {
  BLACK_NEUTRAL,
  BLUE,
  GRAY_NEUTRAL_20,
  GRAY_NEUTRAL_40,
} from '../../styles/colors';

type Props = BoxStyleProps & {
  steps: number;
  currentStep: number;
  arrows?: boolean;
  onPreviousStepPress?: () => void;
  onNextStepPress?: () => void;
  barWidth?: number;
};

const { width } = Dimensions.get('window');

export const ProgressBar = (props: Props) => {
  const BAR_WIDTH = props.barWidth || width;
  const offset = useSharedValue(0);

  const [currentStep, setCurrentStep] = useState(props.currentStep);

  useEffect(() => {
    if (props.steps !== 0) {
      offset.value = (currentStep / props.steps) * BAR_WIDTH - BAR_WIDTH;
    }
  }, [currentStep, props.steps]);

  useEffect(() => {
    setCurrentStep(props.currentStep);
  }, [props.currentStep]);

  const defaultSpringStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withTiming(offset.value) }],
    };
  });

  return (
    <FBox {...props}>
      <FBox row ai="center" jc={props.arrows ? 'space-between' : 'start'}>
        {props.arrows ? (
          currentStep <= 1 ? (
            <FBox w={32} />
          ) : (
            <Button
              type="icon"
              icon={require('../../img/previous-arrow.png')}
              onPress={() => {
                props.onPreviousStepPress?.() ||
                  setCurrentStep(currentStep - 1);
              }}
            />
          )
        ) : null}
        <FText t="regular" s={20} ml={props.arrows ? 0 : 26} c={BLACK_NEUTRAL}>
          {currentStep} <FText c={GRAY_NEUTRAL_40}>/ {props.steps}</FText>
        </FText>
        {props.arrows ? (
          currentStep === props.steps ? (
            <FBox w={32} />
          ) : (
            <Button
              type="icon"
              icon={require('../../img/next-arrow.png')}
              onPress={() => {
                props.onNextStepPress?.() || setCurrentStep(currentStep + 1);
              }}
            />
          )
        ) : null}
      </FBox>
      <FBox bc={GRAY_NEUTRAL_20} h={4} w={BAR_WIDTH}>
        <Animated.View style={defaultSpringStyles}>
          <FBox bc={BLUE} h={4} w={BAR_WIDTH} />
        </Animated.View>
      </FBox>
    </FBox>
  );
};
