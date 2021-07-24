const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': "Inter, Arial, sans-serif",
    },
    colors: {
      'primary': '#FA8C4C',
      'dark': '#151518',
      'light': '#fffbf9',
      'error': '#A72511',
      'info': '#3A6AF8',
      'warning': '#EF6F2E',
      'success': '#54C786',

      current: 'currentColor',
      transparent: '#ffffff00',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      blue: colors.blue,
      yellow: colors.amber,
      green: colors.green,
      // ...
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
