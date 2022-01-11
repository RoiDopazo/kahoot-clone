const { url } = require('inspector');

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: 'var(--color-primary)',
      white: 'var(--color-white)',
      'white-bg': ' var(--color-white-bg)',
      black: 'var(--color-black)',
      darkGray: 'var(--color-darkGray)',
      mediumGray: 'var(--color-mediumGray)',
      lightGray: 'var(--color-lightGray)',
      default: 'var(--color-default)',
      success: 'var(--color-success)',
      warning: 'var(--color-warning)',
      error: 'var(--color-error)',
      transparent: 'transparent'
    },
    extend: {
      fontFamily: {
        body: ['"Montserrat"']
      },
      animation: {
        loading: ' 1s ease-out 0s infinite normal none running loadingRotation'
      },
      keyframes: {
        loadingRotation: {
          '0%': {
            transform: 'rotate(0deg)'
          },
          '75%, 100%': {
            transform: 'rotate(360deg)'
          }
        }
      },
      backgroundImage: {
        landing_bg: "url('./src/assets/bg/christmas.jpg')"
      }
    }
  },
  plugins: []
};
