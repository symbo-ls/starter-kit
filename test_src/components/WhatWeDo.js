export const WhatWeDo = {
  display: 'grid',
  columns: 'repeat(6, 1fr)',
  alignItems: 'center',
  padding: '- B1 - B1',
  maxWidth: 'J+F1',
  gap: 'B',
  '@tabletS': {
    columns: 'repeat(2, 1fr)',
    columnGap: 'C1',
    rowGap: 'D1'
  },
  '@mobileL': {
    columnGap: 'B1'
  },
  '@mobileM': {
    columnGap: '0'
  },
  childProps: {
    width: '100%'
  },
  '> img': {
    maxHeight: 'F1',
    '@tabletS': {
      maxHeight: 'G'
    },
    '@mobileM': {}
  },
  Img: {
    src: 'restaurant.png',
    zIndex: '3',
    '@mobileM': {
      transform: 'rotate(-20deg) translate(50px, 0)'
    },
    '@mobileS': {
      transform: 'rotate(-20deg) translate(25px, 0)'
    }
  },
  Img_2: {
    src: 'illustration.png',
    '@mobileM': {
      transform: 'rotate(20deg) translate(-50px, 0)'
    },
    '@mobileS': {
      transform: 'rotate(20deg) translate(-25px, 0)'
    }
  },
  Hgroup: {
    align: 'center flex-start',
    textAlign: 'center',
    gridColumn: 'span 2',
    state: 'whatWeDo',
    H: {
      tag: 'h6',
      fontSize: 'Z2',
      fontWeight: '700',
      text: '{{ title }}',
      color: 'mediumBlue',
      textTransform: 'uppercase'
    },
    P: {
      text: '{{ description }}',
      lineHeight: '1.25em',
      maxWidth: 'G3',
      '@tabletS': {
        maxWidth: 'H1'
      }
    }
  },
  Img_3: {
    src: 'garden.png',
    '@mobileM': {
      transform: 'rotate(20deg) translate(50px, 0)'
    },
    '@mobileS': {
      transform: 'rotate(20deg) translate(25px, 0)'
    }
  },
  Img_4: {
    src: 'Bitmap 13.png',
    '@mobileM': {
      transform: 'rotate(-20deg) translate(-50px, 0)'
    },
    '@mobileS': {
      transform: 'rotate(-20deg) translate(-25px, 0)'
    }
  }
}
