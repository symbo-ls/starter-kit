export const Footer = {
  display: 'flex',
  tag: 'footer',
  maxWidth: 'J+F1',
  overflow: 'hidden',
  position: 'relative',
  ':after': {
    content: '""',
    boxSize: 'H1 100%',
    background:
      'linear-gradient(to top, rgba(255, 255, 255, 1) 15%,rgba(255, 255, 255, 0) 80%)',
    position: 'absolute',
    left: '0',
    bottom: '0',
    zIndex: '2',
    '@mobileM': {
      bottom: 'C'
    }
  },
  Img: {
    src: 'building.png',
    boxSize: '100% 100%',
    filter: 'grayscale(1)',
    display: 'block',
    alignSelf: 'flex-end',
    '@mobileL': {
      padding: '- - D -'
    },
    '@mobileM': {
      padding: '- - E -'
    },
    '@mobileS': {
      padding: '- - E1 -'
    },
    '@mobileXS': {}
  },
  Grid: {
    columns: 'repeat(4, 1fr)',
    width: '100%',
    align: 'center space-between',
    padding: 'B2 B2 A2 B2',
    position: 'absolute',
    bottom: '0',
    left: '0',
    zIndex: '3',
    '@tabletM': {
      columns: 'repeat(2, 1fr)',
      rowGap: 'Y'
    },
    '@mobileL': {
      columns: '1fr',
      textAlign: 'center',
      rowGap: 'Z1'
    },
    childProps: {
      margin: '0',
      whiteSpace: 'nowrap',
      lineHeight: '1.2em',
      fontWeight: '400',
      '@mobileS': {
        whiteSpace: 'normal'
      },
      '&[href]': {
        fontWeight: '500',
        ':hover': {
          textDecoration: 'underline'
        }
      },
      ':nth-child(2)': {
        textAlign: 'center',
        '@tabletM': {
          textAlign: 'right'
        },
        '@mobileL': {
          textAlign: 'center'
        }
      },
      ':nth-child(3)': {
        textAlign: 'center',
        '@tabletM': {
          textAlign: 'left'
        },
        '@mobileL': {
          textAlign: 'center'
        }
      },
      ':last-child': {
        textAlign: 'right',
        '@mobileL': {
          textAlign: 'center',
          padding: 'A2 - - -'
        }
      },
      isGeorgian: (el, s) => s.root.activeLanguage === 'ge',
      '.isGeorgian': {
        '@tabletM': {
          fontSize: 'Z2',
          whiteSpace: 'pre-wrap',
          lineHeight: '1.5em'
        }
      }
    },
    childExtends: ['Link', 'P'],
    children: [
      {
        href: 'https://www.google.com/maps/place/Smart+Capital+Group/@41.7135474,44.7919456,17z/data=!3m1!4b1!4m5!3m4!1s0x40440d9591a12bf9:0x2acc17e60c94df39!8m2!3d41.7135434!4d44.7941343',
        text: '{{ address }}',
        target: '_blank'
      },
      {
        href: 'tel:+995322439493',
        text: '(+995 32) 2439 493'
      },
      {
        href: 'mailto:scgnews@smartcapital.ge',
        text: 'scgnews@smartcapital.ge'
      },
      {
        text: '{{ copyright }}'
      }
    ]
  }
}
