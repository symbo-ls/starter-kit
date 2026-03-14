export const Banner = {
  flow: 'column-reverse',
  width: '100%',
  maxWidth: '100%',
  padding: '- B2',
  gap: 'D',
  margin: '- - E2 -',
  position: 'relative',
  '@tabletL': {
    margin: '- - D -',
    gap: 'C',
  },
  '@tabletS': {
    margin: '- - D -',
  },
  '@mobileL': {
    padding: '- A2',
  },
  '@mobileM': {
    margin: '- - C1 -',
  },
  Link: {
    position: 'absolute',
    top: 'Z',
    left: '50%',
    transform: 'translate3d(-50%, 0, 0)',
    background: 'white',
    round: 'Z',
    padding: 'X A2 Z',
    flexFlow: 'y',
    flexAlign: 'center',
    href: '/',
    fontSize: 'A',
    textAlign: 'center',
    fontWeight: '600',
    ':hover': {
      textDecoration: 'underline',
    },
    Img: {
      src: 'winblock.svg',
      margin: '- auto',
      width: 'D3',
      '@mobileS': {
        boxSize: 'D',
      },
    },
    Text: {
      text: 'childsafetynet.ge',
    },
  },
  Img: {
    src: 'main-banner.jpg',
    boxSize: 'H 100%',
    objectFit: 'cover',
    style: {
      objectPosition: 'center 60%',
    },
    round: 'B',
    '@tabletS': {
      round: 'A',
    },
    '@mobileL': {
      boxSize: 'G1 100%',
    },
    '@mobileM': {
      boxSize: 'G 100%',
    },
    '@mobileS': {
      boxSize: 'F1 100%',
    },
    '@mobileXS': {
      boxSize: 'F 100%',
    },
  },
};
