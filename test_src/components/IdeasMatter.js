export const IdeasMatter = {
  display: 'flex',
  flow: 'y',
  align: 'center flex-start',
  padding: '- - F1 -',
  '@tabletS': {
    padding: '- - E1 -'
  },
  Box: {
    maxHeight: 'fit-content',
    width: 'fit-content',
    position: 'relative',
    H1: {
      text: 'Ideas Matter',
      fontSize: 'L2+A',
      lineHeight: '1em',
      margin: '0',
      fontWeight: '700',
      color: 'transparent',
      '-webkit-text-stroke': '1px darkgrey',
      '@tabletL': {
        fontSize: 'L1'
      },
      '@tabletM': {
        textAlign: 'center',
        fontSize: 'K2+X1'
      },
      '@mobileM': {
        fontSize: 'K'
      },
      '@mobileS': {
        fontSize: 'I2+Y'
      },
      '@mobileXS': {
        fontSize: 'I'
      }
    },
    IcontextLink: {
      text: null,
      whiteSpace: 'nowrap',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: '2',
      color: 'mediumBlue',
      border: 'solid, mediumGrey',
      borderWidth: '.7px',
      padding: 'Z A',
      background: 'white',
      onClick: (ev, el, s) =>
        el.call('showModal', [s.root.activeLanguage, 'investTypes', '0']),
      Icon: {
        margin: '- X1 - -'
      },
      Span: {
        text: '{{ investWith }}'
      },
      Span_2: {
        text: '{{ withCompany }}',
        fontWeight: '700'
      },
      isGeorgian: (el, s) => s.root.activeLanguage === 'ge',
      '.isGeorgian': {
        '@mobileS': {
          fontSize: 'Z2'
        },
        '@mobileXS': {
          fontSize: 'Z'
        }
      }
    }
  },
  P: {
    text: '{{ paragraph }}.',
    lineHeight: '1.25em',
    boxSizing: 'border-box',
    margin: '0',
    fontSize: 'C1',
    maxWidth: 'I+C1',
    textAlign: 'center',
    padding: 'D C B C',
    '@mobileL': {
      padding: 'D A2 B A2'
    },
    '@mobileS': {
      fontSize: 'C',
      padding: 'D A B A'
    },
    '@mobileXS': {
      fontSize: 'B1'
    }
  },
  Caption: {
    text: '{{ footer }}'
  }
}
