import React from 'react';
import FImage from '../base/FImage';
import FBox from '../base/FBox';
import { BoxStyleProps } from '../../styles/interfaces';

type Props = BoxStyleProps & {
  size?: number;
  isPlaceholder?: boolean;
  src?: string;
};

export const Avatar = (props: Props) => {
  const s = props.size || 60;
  const r = s / 2;
  return (
    <FBox w={s} h={s} br={r} of="hidden" ai="center" jc="center">
      {props.isPlaceholder ? (
        <FImage w={s} h={s} src={{ uri: 'https://i.pravatar.cc/50' }} />
      ) : props.src !== undefined ? (
        <FImage w={s} h={s} src={{ uri: props.src }} />
      ) : (
        <FImage w={s} h={s} src={require('../../img/avatar-placeholder.png')} />
      )}
    </FBox>
  );
};
