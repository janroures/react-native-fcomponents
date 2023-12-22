import React, { useEffect, useState } from 'react';

import { BLACK_NEUTRAL, BLUE } from '../../styles/colors';
import { BoxStyleProps } from '../../styles/interfaces';
import FBox from '../base/FBox';
import Input from '../Input';
import Button from '../Button';
import FText from '../base/FText';
import { KeyboardAvoidingView, ScrollView } from 'react-native';

type Props = BoxStyleProps & {
  structure: [
    {
      type:
        | 'text'
        | 'textbox'
        | 'email'
        | 'password'
        | 'number'
        | 'date'
        | 'time'
        | 'datetime';
      topLabel: string;
      name: string;
      placeholder: string;
      initialValue: string;
      mandatory?: boolean;
    }
  ];
  onSubmit: (data: any) => void;
  scrolls?: boolean;
};

const Form = (props: Props) => {
  const [values, setValues] = useState<any>({});
  const [isValid, setIsValid] = useState(false);
  const hasMandatoryFields = props.structure?.some((item) => item.mandatory);

  useEffect(() => {
    const initialValues = props.structure?.reduce((acc, item) => {
      return { ...acc, [item.name]: item.initialValue };
    }, {});
    setValues(initialValues);
  }, [props.structure]);

  useEffect(() => {
    const hasEmptyMandatoryFields = props.structure?.some(
      (item) => item.mandatory && !values[item.name]
    );
    if (hasEmptyMandatoryFields) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [values]);

  return (
    <FBox w={'90%'} h={'100%'}>
      <ScrollView
        scrollEnabled={props.scrolls}
        contentContainerStyle={{ alignItems: 'center' }}
      >
        <KeyboardAvoidingView
          behavior="padding"
          style={{ width: '100%', alignItems: 'center' }}
        >
          {props.structure?.map((item, index) => {
            return (
              <Input
                mb={12}
                key={index}
                {...item}
                onValueChange={(value) => {
                  setValues((prev: any) => ({ ...prev, [item.name]: value }));
                }}
              />
            );
          })}
          {hasMandatoryFields && (
            <FText mb={12} c={BLACK_NEUTRAL}>
              * Mandatory fields
            </FText>
          )}
          <Button
            w="100%"
            disabled={!isValid}
            onPress={() => props.onSubmit(values)}
            text="Submit"
            bc={BLUE}
            textColor={BLACK_NEUTRAL}
          />
        </KeyboardAvoidingView>
      </ScrollView>
    </FBox>
  );
};

export default Form;
