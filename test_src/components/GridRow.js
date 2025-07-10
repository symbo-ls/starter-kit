export const GridRow = {
  display: 'flex',
  overflow: 'auto hidden',
  margin: '- -4.2em -C1',
  padding: '0 4.2em C3',
  gap: 'C1',
  ':hover': {
    '::-webkit-scrollbar-thumb': {
      opacity: 1,
      '@light': {
        background: 'black 0.35'
      },
      '@dark': {
        background: 'white 0.35'
      }
    }
  },
  '::-webkit-scrollbar': {
    margin: '-1px -',
    width: '1px',
    height: '1px'
  },
  '::-webkit-scrollbar-track': {
    background: 'transparent',
    margin: '-1px -'
  },
  '::-webkit-scrollbar-thumb': {
    margin: '-1px -',
    round: 'A A 0 0',
    opacity: 0,
    '@light': {
      background: 'black 0'
    },
    '@dark': {
      background: 'white 0'
    }
  },
  '::-webkit-scrollbar-thumb:hover': {
    '@light': {
      background: 'black'
    },
    '@dark': {
      background: 'white'
    }
  },
  '@print': {
    flow: 'row wrap'
  },
  childProps: {
    widthRange: 'H1',
    flexFlow: 'y',
    '@print': {
      widthRange: '45%'
    }
  },
  childExtends: 'JobItem',
  childrenAs: 'state',
  children: (el, s) => s.parse(),
  onFrame: (el, s) => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop
    const windowHeight = window.innerHeight
    const fullScrollHeight =
      document.documentElement.scrollHeight - windowHeight

    // Calculate the ratio of how much we scrolled vertically since last frame
    const scrollDelta = scrollTop - (el.prevScrollTop || 0)
    const scrollRatio = scrollDelta / fullScrollHeight

    // Calculate how much we should scroll horizontally based on the same ratio
    const totalScrollWidth = el.node.scrollWidth - el.node.clientWidth
    const horizontalDelta = totalScrollWidth * scrollRatio

    // Store current scroll position for next frame
    el.prevScrollTop = scrollTop

    // Apply the scroll
    el.node.scrollBy({
      top: 0,
      left: horizontalDelta,
      behavior: 'instant'
    })
  }
}
