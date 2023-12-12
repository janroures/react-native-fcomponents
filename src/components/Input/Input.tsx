import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import FBox from '../base/FBox';
import { BoxStyleProps } from '../../styles/interfaces';
import {
  BLACK_NEUTRAL,
  BLUE,
  GRAY_NEUTRAL_30,
  GRAY_NEUTRAL_40,
} from '../../styles/colors';
import FText from '../base/FText';
import FTextInput from '../base/FTextInput';
import FButton from '../base/FButton';
import FIcon from '../base/FIcon';

type Props = BoxStyleProps & {
  topLabel?: string;
  leftComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
  placeholder?: string;
  type:
    | 'text'
    | 'textbox'
    | 'email'
    | 'password'
    | 'number'
    | 'date'
    | 'time'
    | 'datetime';
  value?: string;
  onValueChange?: (value: string) => void;
};

export const Input = (props: Props) => {
  const [isFocused, setIsFocused] = useState(false);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [isDateOpen, setIsDateOpen] = useState(false);
  const [isTimeOpen, setIsTimeOpen] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const keyboardType: any = {
    text: 'default',
    email: 'email-address',
    password: 'default',
    number: 'numeric',
    date: 'default',
  };

  const onDateChange = (_: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setIsDateOpen(false);
    setDate(currentDate);
    props.onValueChange?.(currentDate);
  };

  const onTimeChange = (_: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setIsTimeOpen(false);
    setTime(currentDate);
    props.onValueChange?.(currentDate);
  };

  return (
    <FBox {...props}>
      {props.topLabel !== undefined && (
        <FText mb={4} c={BLACK_NEUTRAL}>
          {props.topLabel}
        </FText>
      )}
      <FBox
        br={4}
        ph={6}
        pv={12}
        ai="center"
        row
        w={'100%'}
        style={{
          borderWidth: 1,
          borderColor:
            isDateOpen || isTimeOpen || isFocused ? BLUE : GRAY_NEUTRAL_30,
        }}
      >
        {props.leftComponent !== undefined && (
          <FBox mr={12}>{props.leftComponent}</FBox>
        )}
        {(props.type === 'text' ||
          props.type === 'email' ||
          props.type === 'password' ||
          props.type === 'number') && (
          <FTextInput
            value={props.value}
            secureTextEntry={props.type === 'password' && !isPasswordVisible}
            keyboardType={keyboardType[props.type]}
            c={BLACK_NEUTRAL}
            placeholderTextColor={GRAY_NEUTRAL_30}
            placeholder={props.placeholder}
            flex={1}
            onChangeText={props.onValueChange}
            onFocus={() => {
              setIsFocused(true);
            }}
            onBlur={() => {
              setIsFocused(false);
            }}
          />
        )}
        {props.type === 'textbox' && (
          <FTextInput
            h={200}
            multiline
            value={props.value}
            c={BLACK_NEUTRAL}
            placeholderTextColor={GRAY_NEUTRAL_30}
            placeholder={props.placeholder}
            flex={1}
            onChangeText={props.onValueChange}
            textAlignVertical="top"
            onFocus={() => {
              setIsFocused(true);
            }}
            onBlur={() => {
              setIsFocused(false);
            }}
          />
        )}
        {props.type === 'date' && (
          <FBox w={'100%'} ai="start">
            <DateTimePicker
              testID="datePicker"
              value={date}
              mode={'date'}
              onChange={onDateChange}
            />
          </FBox>
        )}
        {props.type === 'time' && (
          <FBox w={'100%'} ai="start">
            <DateTimePicker
              testID="timePicker"
              value={time}
              mode={'time'}
              onChange={onTimeChange}
            />
          </FBox>
        )}
        {props.type === 'datetime' && (
          <FBox w={'100%'} ai="start" row>
            <DateTimePicker
              testID="datePicker"
              value={date}
              mode={'date'}
              onChange={onDateChange}
            />
            <DateTimePicker
              testID="timePicker"
              value={time}
              mode={'time'}
              onChange={onTimeChange}
            />
          </FBox>
        )}
        {props.type === 'password' && (
          <FButton
            ml={12}
            onPress={() => {
              setIsPasswordVisible((s) => !s);
            }}
          >
            {isPasswordVisible ? (
              <FIcon
                src={require('../../img/password-hide.png')}
                c={GRAY_NEUTRAL_40}
              />
            ) : (
              <FIcon
                src={require('../../img/password-show.png')}
                c={GRAY_NEUTRAL_40}
              />
            )}
          </FButton>
        )}
        {props.rightComponent !== undefined && (
          <FBox ml={12}>{props.rightComponent}</FBox>
        )}
      </FBox>
    </FBox>
  );
};
