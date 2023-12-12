import React from 'react';
import FBox from '../base/FBox';
import { BoxStyleProps } from '../../styles/interfaces';
import { Avatar } from '../Avatar';
import FText from '../base/FText';
import {
  BLACK_NEUTRAL,
  GRAY_NEUTRAL_30,
  GRAY_NEUTRAL_40,
} from '../../styles/colors';
import FButton from '../base/FButton';

type Props = BoxStyleProps & {
  avatarSrc: string;
  username: string;
  userDetail?: string | React.ReactNode;
  rightComponent?: React.ReactNode;
  onPress?: () => void;
};

export const UserRow = (props: Props) => {
  return (
    <FButton
      row
      ai="center"
      ao={props.onPress !== undefined ? 0.7 : 1}
      pv={6}
      ph={12}
      style={{ borderBottomWidth: 1, borderBottomColor: GRAY_NEUTRAL_30 }}
      {...props}
    >
      <Avatar src={props.avatarSrc} />
      <FBox ph={12} flex={1}>
        <FText t="medium" c={BLACK_NEUTRAL}>
          {props.username}
        </FText>
        {typeof props.userDetail === 'string' ? (
          <FText mt={4} c={GRAY_NEUTRAL_40} s={14}>
            {props.userDetail}
          </FText>
        ) : props.userDetail !== undefined ? (
          <FBox mt={4}>{props.userDetail}</FBox>
        ) : null}
      </FBox>
      {props.rightComponent}
    </FButton>
  );
};
