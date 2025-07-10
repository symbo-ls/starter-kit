export const Banner = {
  width: '100%',
  maxWidth: 'J+F1',
  minHeight: 'I+B',
  height: 'I+B',
  overflow: 'hidden',
  position: 'relative',
  '@maxHeightM': {
    minHeight: '102%',
    maxHeight: '102%'
  },
  margin: '- -B',
  ':after': {
    content: '""',
    boxSize: '100% 100%',
    position: 'absolute',
    top: '0',
    left: '0',
    background: 'white .8'
  },
  BannerIllustration: {
    transform: 'translate(-220px, 50px)',
    '@mobileL': {
      transform: 'translate(-600px, 50px)'
    }
  },
  Hgroup: {
    position: 'absolute',
    top: '37%',
    left: 'E2',
    zIndex: '2',
    '@tabletS': {
      top: '40%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      align: 'center flex-start',
      textAlign: 'center'
    },
    '@mobileS': {
      width: '100%',
      gap: 'A1',
      padding: '- B1'
    },
    H: {
      tag: 'h1',
      text: '{{ title }}',
      fontSize: 'G+X',
      color: 'mediumBlue2',
      whiteSpace: 'nowrap',
      fontWeight: '800',
      '@mobileS': {
        whiteSpace: 'normal',
        padding: '- B1'
      }
    },
    P: {
      text: '{{ description }}',
      maxWidth: 'G1',
      isGeorgian: (el, s) => s.root.activeLanguage === 'ge',
      '.isGeorgian': {
        maxWidth: 'H'
      },
      '@mobileS': {}
    }
  },
  Flex: {
    gap: 'Y1',
    position: 'absolute',
    bottom: 'D1',
    cursor: 'pointer',
    left: 'C',
    zIndex: '2',
    '@tabletS': {
      left: '50%',
      transform: 'translate(-50%, 0)'
    },
    ':hover h6': {
      textDecoration: 'underline'
    },
    Icon: {
      color: 'mediumBlue2',
      fontSize: 'A2',
      name: 'chevronDown',
      '@tabletS': {
        display: 'none'
      }
    },
    Hgroup: {
      state: 'cta',
      '@tabletS': {
        align: 'center flex-start',
        textAlign: 'center'
      },
      H: {
        tag: 'h6',
        display: 'flex',
        gap: 'X',
        flexFlow: 'row-reverse',
        align: 'center flex-end',
        border: '1px splid red',
        maxWidth: 'fit-content',
        text: '{{ title }}',
        fontWeight: '700',
        color: 'mediumBlue2',
        Icon: {
          color: 'mediumBlue2',
          fontSize: 'A2',
          name: 'chevronDown',
          display: 'none',
          '@tabletS': {
            display: 'inline-block'
          }
        }
      },
      P: {
        text: '{{ description }}',
        maxWidth: 'G+C1',
        isGeorgian: (el, s) => s.root.activeLanguage === 'ge',
        '.isGeorgian': {
          maxWidth: 'G2'
        },
        '@mobileS': {
          minWidth: 'F3'
        }
      },
      onClick: (ev, el, s) => {
        const scrollElem = document.getElementById('About')
        scrollElem.scrollIntoView()
      }
    }
  }
}
