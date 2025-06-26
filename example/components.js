'use strict'

export const Header = {
  display: 'flex',
  minWidth: '100%',
  padding: 'Z B',
  align: 'center space-between',
  Flex: {
    gap: 'C',
    childExtends: {
      extends: 'Link',
      textDecoration: ({ props }) =>
        window.location.pathname === props.href ? 'underline' : 'none'
    },
    Text_logo: { href: '/', text: 'Hello!' },
    Text_about: { href: '/about', text: 'About' }
  },

  ThemeSwitcher: {}
}

export const ThemeSwitcher = {
  display: 'flex',
  gap: 'A2',
  childExtends: {
    isActive: (element, state) => state.globalTheme === element.key,
    cursor: 'pointer',
    '.isActive': {
      fontWeight: '900'
    },
    onClick: (event, element, state) => {
      state.update({ globalTheme: element.key })
    }
  },
  Dark: { text: 'Dark' },
  Light: { text: 'Light' },
  Midnight: { text: 'Midnight' }
}

export const Footer = {
  padding: 'Z B',
  order: 9
}

export const TestComponent = {
  padding: 'Z B',
  round: 'A',
  margin: 'A -Z C',
  background: 'orange .35',
  text: 'test',
  ':hover': {
    background: 'orange .35 +35'
  }
}
