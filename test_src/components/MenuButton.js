export const MenuButton = {
  extends: 'Button',
  flow: 'y',
  padding: 'Y',
  gap: 'X2',
  align: 'flex-end flex-start',
  background: 'transparent',
  '.activeMenu': {
    transform: 'scale(.7) translate(12px, 0)',
    '@mobileS': {
      transform: 'scale(.7) translate(10px, 0)'
    }
  },
  onClick: (event, element, state) => {
    state.update({
      activeMenu: !state.activeMenu
    })
  },
  childProps: {
    minHeight: 'W1',
    maxHeight: 'W1',
    height: 'W1',
    background: 'black',
    round: 'C',
    transition: 'transform .3s ease',
    ':first-child': {
      width: 'B1',
      '.activeMenu': {
        transform: 'rotate(45deg) translate(3px, 0px)'
      },
      '!activeMenu': {
        transform: 'rotate(0deg)'
      }
    },
    ':last-child': {
      width: 'A1',
      '.activeMenu': {
        transform: 'rotate(-45deg) translate(5px, -3px)',
        width: 'B1'
      },
      '!activeMenu': {
        transform: 'rotate(0deg)'
      }
    }
  },
  children: [
    {
      background: 'red'
    },
    {}
  ],
  childrenAs: 'props'
}
