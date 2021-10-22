module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        yellow: {
          1: '#FFDD83',
          2: '#FFF6EF'
        },
        red: {
          1: '#FF8A83'
        },
        orange: {
          1: '#FFB083'
        },
        pink: {
          1: '#FF91A6',
          2: '#FEBCB8',
          3: '#E58F8A'
        },
        purple: {
          1: '#4F51C0',
          2: '#ADAFFF',
          3: '#8889E9'
        },
        green: {
          1: '#77B255',
          2: '#D6ECC8',
          3: '#77B255'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}