export const User = {
  display: 'flex',
  state: {},
  theme: 'transparent',
  align: 'center flex-start',
  round: 'A',
  padding: 'A A1 A A',
  gap: 'Z',
  '@tabletS': {
    fontSize: 'Z2'
  },
  '@mobileS': {
    fontSize: 'Z1'
  },
  AvatarStatus: {
    Avatar: {},
    StatusDot: {
      '@light': {
        border: 'solid, gray 1 +150'
      },
      '@dark': {
        border: 'solid'
      }
    },
    margin: '-V2 - - -'
  },
  Hgroup: {
    H: {
      tag: 'h5',
      text: 'Svinch Peterson',
      whiteSpace: 'nowrap'
    },
    P: {
      text: 'svinchy@symbols.app',
      lineHeight: '1em',
      whiteSpace: 'nowrap'
    },
    gap: 'Y1  '
  },
  Select: {
    extends: ['Button', 'IconText'],
    background: 'red',
    onClick: () => {},
    Icon: null
  }
}
