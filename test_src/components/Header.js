export const Header = {
  display: 'flex',
  tag: 'header',
  padding: 'B1 B1',
  zIndex: '5',
  gap: 'E2',
  width: '100%',
  position: 'sticky',
  maxWidth: 'J+F1',
  align: 'center flex-start',
  top: 0,
  isGeorgian: (el, s) => s.root.activeLanguage === 'ge',
  '.isGeorgian': {
    '@tabletM': {
      gap: 'D1'
    }
  },
  ':before': {
    content: '""',
    position: 'absolute',
    top: '0',
    right: '0',
    left: '0',
    height: 'D3',
    zIndex: 1,
    background:
      'linear-gradient(to bottom, rgba(255, 255, 255, .97) 65%,rgba(255, 255, 255, 0) 100%)'
  },
  '@tabletS': {
    align: 'center space-between',
    gap: '0',
    padding: 'B B1'
  },
  '@mobileL': {
    padding: 'A2 A1 A2 A2',
    align: 'flex-start space-between'
  },
  '@mobileS': {
    padding: 'A2 A A2 A1'
  },
  '@mobileXS': {
    padding: 'A1 Z2 A A'
  },
  childProps: {
    zIndex: 2
  },
  Logo: {
    onClick: (ev, el, s) => {
      window.scrollTo(0, 0)
    }
  },
  LinkSet: {
    gap: 'D2',
    state: 'nav',
    '@tabletS': {
      display: 'none'
    },
    childProps: {
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      '@mobileL': {
        fontSize: 'F'
      },
      onClick: (ev, el, s) => {
        const scrollElem = document.getElementById(el.props.href.slice(1))
        scrollElem.scrollIntoView()
      }
    },
    children: [
      {
        href: '#About',
        text: '{{ about }}'
      },
      {
        href: '#Projects',
        text: '{{ projects }}'
      },
      {
        href: '#Contact',
        text: '{{ contacts }}'
      }
    ]
  },
  ButtonSet: {
    gap: 'C',
    margin: '- - - auto',
    '@tabletS': {
      display: 'none'
    },
    childProps: {
      padding: '0',
      theme: 'transparent',
      color: 'mediumBlue'
    },
    children: [
      {
        text: 'ENG',
        onClick: (ev, el, s) =>
          s.root.update(
            {
              activeLanguage: 'en'
            },
            {
              execStateFunction: true,
              isHoisted: false
            }
          )
      },
      {
        text: 'ქარ',
        onClick: (ev, el, s) =>
          s.root.update(
            {
              activeLanguage: 'ge'
            },
            {
              execStateFunction: true,
              isHoisted: false
            }
          )
      }
    ]
  },
  MenuButton: {
    zIndex: '8',
    display: 'none',
    '@tabletS': {
      display: 'flex'
    }
  }
}
