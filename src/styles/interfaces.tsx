import { StyleProp, ViewStyle } from 'react-native';
import { SHADOW_FRAME, SHADOW_FRAME_LIGHT } from './colors';
import { scaleSize } from './mixins';

export type BoxStyleProps = {
  flex?: number;
  fw?: string;
  w?: number | string;
  h?: number | string;
  m?: number;
  p?: number;
  bc?: string;
  mh?: number;
  mv?: number;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  ph?: number;
  pv?: number;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
  br?: number;
  row?: boolean;
  wrap?: boolean;
  o?: number;
  pos?: 'absolute' | 'relative';
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  of?: 'hidden' | 'scroll' | 'auto';
  ai?: 'center' | 'start' | 'end';
  jc?: 'center' | 'start' | 'end' | 'space-between' | 'space-around';
  as?: 'center' | 'start' | 'end';
  shadow?: boolean;
  lightShadow?: boolean;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle> | undefined;
};

export function parseStylePropsToViewProps(props: BoxStyleProps) {
  const viewProps: any = {};
  if (props.flex) {
    viewProps.flex = props.flex;
  }
  if (props.fw) {
    viewProps.flexWrap = props.fw;
  }
  if (props.w) {
    viewProps.width = props.w;
  }
  if (props.h) {
    viewProps.height = props.h;
  }
  if (props.m) {
    viewProps.margin = scaleSize(props.m);
  }
  if (props.p) {
    viewProps.padding = scaleSize(props.p);
  }
  if (props.bc) {
    viewProps.backgroundColor = props.bc;
  }
  if (props.mh) {
    viewProps.marginHorizontal = scaleSize(props.mh);
  }
  if (props.mv) {
    viewProps.marginVertical = scaleSize(props.mv);
  }
  if (props.mt) {
    viewProps.marginTop = scaleSize(props.mt);
  }
  if (props.mb) {
    viewProps.marginBottom = scaleSize(props.mb);
  }
  if (props.ml) {
    viewProps.marginLeft = scaleSize(props.ml);
  }
  if (props.mr) {
    viewProps.marginRight = scaleSize(props.mr);
  }
  if (props.ph) {
    viewProps.paddingHorizontal = scaleSize(props.ph);
  }
  if (props.pv) {
    viewProps.paddingVertical = scaleSize(props.pv);
  }
  if (props.pt) {
    viewProps.paddingTop = scaleSize(props.pt);
  }
  if (props.pb) {
    viewProps.paddingBottom = scaleSize(props.pb);
  }
  if (props.pl) {
    viewProps.paddingLeft = scaleSize(props.pl);
  }
  if (props.pr) {
    viewProps.paddingRight = scaleSize(props.pr);
  }
  if (props.br) {
    viewProps.borderRadius = scaleSize(props.br);
  }
  if (props.row) {
    viewProps.flexDirection = 'row';
  }
  if (props.wrap) {
    viewProps.flexWrap = 'wrap';
  }
  if (props.o) {
    viewProps.opacity = props.o;
  }
  if (props.of) {
    viewProps.overflow = props.of;
  }
  if (props.pos) {
    viewProps.position = props.pos;
  }
  if (props.top !== undefined) {
    viewProps.top = scaleSize(props.top);
  }
  if (props.left !== undefined) {
    viewProps.left = scaleSize(props.left);
  }
  if (props.right !== undefined) {
    viewProps.right = scaleSize(props.right);
  }
  if (props.bottom !== undefined) {
    viewProps.bottom = scaleSize(props.bottom);
  }
  if (props.ai) {
    if (props.ai === 'start') {
      viewProps.alignItems = 'flex-start';
    }
    if (props.ai === 'end') {
      viewProps.alignItems = 'flex-end';
    }
    if (props.ai === 'center') {
      viewProps.alignItems = 'center';
    }
  }
  if (props.jc) {
    if (props.jc === 'start') {
      viewProps.justifyContent = 'flex-start';
    } else if (props.jc === 'end') {
      viewProps.justifyContent = 'flex-end';
    } else if (props.jc === 'center') {
      viewProps.justifyContent = 'center';
    } else {
      viewProps.justifyContent = props.jc;
    }
  }
  if (props.as) {
    if (props.as === 'start') {
      viewProps.alignSelf = 'flex-start';
    }
    if (props.as === 'end') {
      viewProps.alignSelf = 'flex-end';
    }
    if (props.as === 'center') {
      viewProps.alignSelf = 'center';
    }
  }
  if (props.shadow) {
    return [SHADOW_FRAME, viewProps];
  }
  if (props.lightShadow) {
    return [SHADOW_FRAME_LIGHT, viewProps];
  }

  return viewProps;
}

export type FontType = 'bold' | 'medium' | 'regular' | 'light';
