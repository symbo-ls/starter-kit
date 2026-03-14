export default {
  document: {
    '@light': {
      color: 'black',
      background: 'white',
    },
    '@dark': {
      color: 'white',
      background: 'black',
    },
  },
  none: {
    color: 'none',
    background: 'none',
  },
  transparent: {
    color: 'currentColor',
    background: 'transparent',
  },
  primary: {
    '@light': {
      colorKey: 'white',
      color: 'white',
      backgroundKey: 'green',
      background: 'green',
      ':hover': {
        background: 'green 1 +16',
      },
    },
  },
};