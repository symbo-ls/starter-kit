export const InvestCard = {
  extends: 'ButtonHgroup',
  state: 'en/investTypes/0',
  flow: 'y',
  gap: 'B',
  boxSizing: 'content-box',
  padding: 'B1 D B1 B1',
  round: 'B',
  background: 'mediumBlue',
  '@mobileS': {
    padding: 'B B1 B B'
  },
  Img: {
    boxSize: '1px',
    opacity: '0',
    position: 'absolute',
    src: '{{poster}}'
  },
  Hgroup: {
    gap: 'Z',
    H: {
      text: '{{ title }}',
      textTransform: 'uppercase',
      fontWeight: '700',
      color: 'white'
    },
    P: {
      text: '{{ description }}',
      color: 'white',
      maxWidth: 'H1',
      lineHeight: '1.25em'
    }
  },
  Button: {
    text: '{{ button }}',
    padding: 'Z1 A1',
    round: 'Z2',
    theme: 'greyDarkblue',
    '@mobileXS': {
      minWidth: '100%',
      width: '100%'
    },
    onClick: (event, element, state) => {
      element.call('showModal')
    }
  }
}
