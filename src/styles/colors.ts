import { Platform } from 'react-native';

export const SEPARATOR_COLOR = 'rgba(255,255,255,0.09)';

export const WHITE = '#FFF';
export const BLACK = '#000';
export const WHITE_LIGHT = '#f0f0f0';
export const GRAY_LIGHT = '#949494';

export const WHITE_NEUTRAL = 'rgb(252,253,253)';
export const GRAY_NEUTRAL_10 = '#F7F7F7';
export const GRAY_NEUTRAL_20 = 'rgba(234, 237, 237, 1)';
export const GRAY_NEUTRAL_30 = '#B2BBBD';
export const GRAY_NEUTRAL_40 = '#677075';
export const GRAY_NEUTRAL_50 = '#384245';
export const BLACK_NEUTRAL = 'rgba(29, 32, 33, 1)';

export const GREEN = '#85D954';
export const BLUE = '#16B1F3';
export const RED = '#FF6A6A';

export const SHADOW_FRAME = {
  backgroundColor: '#FFF',
  ...Platform.select({
    ios: {
      shadowColor: 'rgba(0,0,0,0.2)',
      shadowOpacity: 1,
      shadowRadius: 4,
      shadowOffset: {
        height: 2,
        width: 0,
      },
    },
    android: {
      elevation: 2,
    },
  }),
};

export const SHADOW_FRAME_LIGHT = {
  backgroundColor: WHITE,
  ...Platform.select({
    ios: {
      shadowColor: 'rgba(0,0,0,0.1)',
      shadowOpacity: 1,
      shadowRadius: 4,
      shadowOffset: {
        height: 2,
        width: 0,
      },
    },
    android: {
      elevation: 2,
    },
  }),
};

export const SHADOW_FRAME_BLUE = {
  backgroundColor: WHITE,
  ...Platform.select({
    ios: {
      shadowColor: 'rgba(43,34,90,0.4)',
      shadowOpacity: 1,
      shadowRadius: 4,
      shadowOffset: {
        height: 2,
        width: 0,
      },
    },
    android: {
      elevation: 2,
    },
  }),
};

export const SHADOW_FRAME_STRONG = {
  backgroundColor: '#FFF',
  ...Platform.select({
    ios: {
      shadowColor: 'rgba(0,0,0,1)',
      shadowOpacity: 1,
      shadowRadius: 0,
      shadowOffset: {
        height: 4,
        width: 0,
      },
    },
    android: {
      elevation: 4,
    },
  }),
};

export const SHADOW_FRAME_MEDIUM = {
  backgroundColor: '#FFF',
  ...Platform.select({
    ios: {
      shadowColor: 'rgba(0,0,0,0.4)',
      shadowOpacity: 1,
      shadowRadius: 4,
      shadowOffset: {
        height: 2,
        width: 0,
      },
    },
    android: {
      elevation: 8,
    },
  }),
};

export const TOP_SHADOW: any = {
  backgroundColor: WHITE,
  ...Platform.select({
    ios: {
      shadowColor: 'rgba(0,0,0,0.2)',
      shadowOpacity: 1,
      shadowRadius: 4,
      shadowOffset: {
        height: 3,
      },
    },
    android: {
      elevation: 6,
      marginTop: 3,
    },
  }),
};
