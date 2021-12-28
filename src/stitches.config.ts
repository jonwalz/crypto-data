import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      blue400: '#275F6A',
      blue500: '#4F94A1',
      blue600: '#397985',
      blue700: '#194850',
      blue800: '#0D2F36',
      lightColor: '#f8f8ff'
    },
  },
});