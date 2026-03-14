export default {
  fadeIn: {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  },
  fadeInSlowly: {
    '0%': {
      opacity: 0,
    },
    '35%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },
  fadeInUp: {
    from: {
      transform: 'translate3d(0, 12.5%, 0)',
      opacity: 0,
    },
    to: {
      transform: 'translate3d(0, 0, 0)',
      opacity: 1,
    },
  },
  fadeInUpShort: {
    from: {
      transform: 'translate3d(0, 6.5%, 0)',
      opacity: 0,
    },
    to: {
      transform: 'translate3d(0, 0, 0)',
      opacity: 1,
    },
  },
  fadeInUpLong: {
    from: {
      transform: 'translate3d(0, 45%, 0)',
      opacity: 0,
    },
    to: {
      transform: 'translate3d(0, 0, 0)',
      opacity: 1,
    },
  },
  fadeInDown: {
    from: {
      transform: 'translate3d(0, -12.5%, 0)',
      opacity: 0,
    },
    to: {
      transform: 'translate3d(0, 0, 0)',
      opacity: 1,
    },
  },
  fadeInLeft: {
    from: {
      transform: 'translate3d(12.5%, 0, 0)',
      opacity: 0,
    },
    to: {
      transform: 'translate3d(0, 0, 0)',
      opacity: 1,
    },
  },
  fadeInDownLong: {
    from: {
      transform: 'translate3d(0, -45%, 0)',
      opacity: 0,
    },
    to: {
      transform: 'translate3d(0, 0, 0)',
      opacity: 1,
    },
  },
  fadeOut: {
    from: {
      opacity: 1,
    },
    to: {
      opacity: 0,
    },
  },
  fadeOutSlowly: {
    '0%': {
      opacity: 1,
    },
    '75%': {
      opacity: 0.75,
    },
    '100%': {
      opacity: 0,
    },
  },
  fadeOutUp: {
    from: {
      transform: 'translate3d(0, 0, 0)',
      opacity: 1,
    },
    to: {
      transform: 'translate3d(0, -12.5%, 0)',
      opacity: 0,
    },
  },
  fadeOutUpLong: {
    from: {
      transform: 'translate3d(0, 0, 0)',
      opacity: 1,
    },
    to: {
      transform: 'translate3d(0, -45%, 0)',
      opacity: 0,
    },
  },
  fadeOutDown: {
    from: {
      transform: 'translate3d(0, 0, 0)',
      opacity: 1,
    },
    to: {
      transform: 'translate3d(0, 12.5%, 0)',
      opacity: 0,
    },
  },
};