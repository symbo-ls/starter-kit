export const NavBtns = {
  display: 'flex',
  childExtends: 'CircleButton',
  childrenAs: 'props',
  alignItems: 'center',
  gap: 'Z1',
  childProps: {
    theme: 'field',
    padding: '0',
    boxSize: '42px 42px',
    '@dark': {
      color: '#57575C'
    },
    Icon: {
      fontSize: 'B2'
    },
    onClick: (ev, el) => {
      const flexNode = el.lookup('Flex').node
      const isLeft = el.key === '0'
      const scrollAmount = flexNode.clientWidth * 0.65

      flexNode.scrollBy({
        left: isLeft ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  },
  children: [
    {
      Icon: {
        name: 'chevronLeft'
      }
    },
    {
      Icon: {
        name: 'chevronRight'
      }
    }
  ]
}
