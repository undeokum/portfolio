import type { Config } from 'tailwindcss'
import * as colors from 'tailwindcss/colors'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    fontFamily: {
      regular: ['regular'],
      medium: ['medium'],
      light: ['light'],
      extra_light: ['extra_light'],
      thin: ['thin'],
      bold: ['bold'],
      semi_bold: ['semi_bold'],
      extra_bold: ['extra_bold'],
      black: ['black'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      red: colors.red,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      slate: colors.slate,
      orange: colors.orange,
      blue: colors.blue,

      cblue: '#7194FF',
      cgold: '#FFD700',
      csilver: '#BEBEBE',
      cbronze: '#CE8946'
    }
  },
  plugins: [],
}

export default config