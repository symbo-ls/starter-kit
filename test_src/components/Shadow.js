export const Shadow = {
  '@print': {
    hide: true,
    display: 'none'
  },
  childProps: {
    '::after': {
      content: '""',
      position: 'absolute',
      display: 'block',
      height: '100%',
      top: '0',
      width: '100',
      bottom: '0',
      margin: '- 0 - -'
    },
    '@dark': {
      '::after': {
        background: '--theme-document-dark-background',
        boxShadow: '--theme-document-dark-background, 0 0 70px 65px'
      }
    },
    '@light': {
      '::after': {
        background: '--theme-document-light-background',
        boxShadow: '--theme-document-light-background, 0 0px 50px 65px'
      }
    }
  },
  children: {
    Left: {
      props: {
        '::after': {
          right: 'calc(100% + 4.2em)'
        }
      }
    },
    Right: {
      props: {
        '::after': {
          left: 'calc(100% + 4.2em)'
        }
      }
    }
  }
}
