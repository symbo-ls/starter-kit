export const Footer = {
  tag: 'footer',
  extends: 'Flex',
  flow: 'y',
  width: '100%',
  padding: '- D',
  gap: 'C',
  margin: 'E3 - - -',
  '@tabletS': {
    padding: '- B',
  },
  Flex: {
    align: 'center space-between',
    childProps: {
      flex: 1,
    },
    '@mobileL': {
      flow: 'y',
      gap: 'A2',
    },
    Phone: {
      extends: [
        'Link',
        'IconText',
      ],
      cursor: 'pointer',
      height: 'fit-content',
      padding: '0',
      lineHeight: '.8em',
      href: 'tel:+995599011222',
      align: 'center',
      textAlign: 'start',
      fontWeight: '400',
      ':hover': {
        textDecoration: 'underline',
      },
      Icon: {
        name: 'phone',
      },
      Span: {
        text: '+995 599 01 12 22',
        display: 'block',
        margin: '- - - Y',
      },
    },
    Link: {
      href: '/',
      textAlign: 'center',
      text: 'childsafetynet.ge',
      fontSize: 'A',
      margin: '- auto',
      ':hover': {
        textDecoration: 'underline',
      },
      '@mobileL': {
        order: '-1',
      },
    },
    Copyright: {
      textAlign: 'end',
      text: '© 2025 All rights reserved',
    },
  },
  Box: {
    alignSelf: 'center',
    position: 'relative',
    Img: {
      src: 'winblock.svg',
      position: 'absolute',
      top: '0',
      left: '50%',
      margin: '-B - - -',
      width: 'D3',
      transform: 'translate(-50%, 0)',
      '@mobileS': {
        boxSize: 'D',
      },
    },
    Img_2: {
      maxWidth: 'I',
      src: 'windows.png',
      '@mobileL': {
        boxSize: 'auto 100%',
      },
    },
  },
};