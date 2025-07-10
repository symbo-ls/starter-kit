export const Personal = {
  width: '100%',
  Header: {
    props: {
      margin: '0 0 Y1'
    },
    Avatar: {
      draggable: 'false',
      fontSize: 'B2',
      src: 'tuta.webp',
      onClick: (ev, el, s) => {
        const globalTheme = s.root.globalTheme !== 'dark' ? 'dark' : 'light'
        s.root.update({
          globalTheme
        })
      }
    }
  },
  H1: {
    margin: '0',
    text: 'Tatia Tomadze'
  },
  Flex_info: {
    props: {
      align: 'center space-between',
      '@tabletS': {
        padding: '- - - Y1',
        align: 'start',
        gap: 'X2',
        flow: 'y'
      }
    },
    Link_Mail: {
      href: 'mailto:t.tomadze@gmail.com',
      text: 't.tomadze@gmail.com'
    },
    Address: {
      text: 'Munich, Germany'
    },
    Link_linkedin: {
      '@print': {
        hide: true
      },
      target: '_blank',
      href: 'https://www.linkedin.com/in/tatia-tomadze-79514944/',
      text: 'Linkedin'
    },
    Link_Tel: {
      href: 'tel:+49 176 21414505',
      text: '+49 176 21414505'
    },
    Link_linkedin_print: {
      display: 'none',
      '@print': {
        display: 'block'
      },
      target: '_blank',
      href: 'https://www.linkedin.com/in/tatia-tomadze-79514944/',
      text: 'linkedin.com/in/tatia-tomadze-79514944'
    }
  }
}
