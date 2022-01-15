import { createStitches } from '@stitches/react'

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
      white100: '#f8f8ff',
      cyan: '#00FFFF',
      green: '#DC143C',
      red: '#00FF7F',
    },
    fontSizes: {
      icon: '1.25em',
    },
  },
})
