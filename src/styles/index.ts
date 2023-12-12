import { createTheme } from '@shopify/restyle';

const palette = {
  purpleLight: '#8C6FF7',
  purplePrimary: '#5A31F4',
  purpleDark: '#3F22AB',

  greenLight: '#56DCBA',
  greenPrimary: '#0ECD9D',
  greenDark: '#0A906E',

  orangeLight: '#F8B26A',
  orangePrimary: '#FF991F',
  orangeDark: '#DB6E00',

  redLight: '#FE8A7D',
  redPrimary: '#FF6A6A',
  redDark: '#DB0000',

  blueLight: '#56CCF2',
  bluePrimary: '#2F80ED',
  blueDark: '#0F52BA',

  yellowLight: '#F8E71C',
  yellowPrimary: '#FFD700',
  yellowDark: '#BDB76B',

  pinkLight: '#FE7CE5',
  pinkPrimary: '#FF49DB',
  pinkDark: '#DB36B8',

  black: '#0B0B0B',
  white: '#F0F2F3',
};

export const theme = createTheme({
  light: {
    backgroundColor: palette.white,
    color: palette.black,
  },

  dark: {
    backgroundColor: palette.black,
    color: palette.white,
  },

  colors: {
    mainBackground: palette.white,
    cardPrimaryBackground: palette.purplePrimary,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    header: {
      fontWeight: 'bold',
      fontSize: 34,
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
    },
    defaults: {
      // We can define a default text variant here.
    },
  },
});

export type Theme = typeof theme;
// export default theme;
