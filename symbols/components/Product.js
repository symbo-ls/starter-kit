export const Product = {
  extends: 'Flex',
  flow: 'y',
  ':hover h6': {
    textDecoration: 'underline',
  },
  '@mobileL': {
    align: 'center flex-start',
  },
  Img: {
    src: '{{ src }}',
    boxSize: 'G2+Z F3+A',
    cursor: 'pointer',
  },
  Hgroup: {
    padding: 'A A',
    '@mobileL': {
      align: 'center flex-start',
      textAlign: 'center',
      padding: 'A 0',
    },
    H: {
      tag: 'h6',
      fontSize: 'A',
      fontWeight: '700',
      text: '{{ title }}',
    },
    P: {
      text: '{{ caption }}',
    },
  },
  IconTextSet: {
    padding: '- A',
    '@mobileL': {
      padding: '- 0',
    },
    childProps: {
      Icon: {
        name: 'check',
        color: 'green',
      },
    },
    children: (el, s) => s.perks,
  },
  Button: {
    gap: 'Y',
    padding: 'Z2 A2',
    maxWidth: 'fit-content',
    theme: 'primary',
    fontWeight: '400',
    margin: 'B2+X - - -',
    transition: 'letter-spacing, B, defaultBezier',
    ':hover': {
      letterSpacing: '.35px',
    },
    Icon: {
      name: 'check',
    },
    text: el => el.call('isGeorgian') ? 'შეგვიკვეთეთ' : 'Order now',
  },
  state: {},
};