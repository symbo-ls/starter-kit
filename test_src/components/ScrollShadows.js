export const ScrollShadows = {
  position: 'relative',
  ':before': {
    content: '""',
    boxSize: '100% A',
    position: 'absolute',
    top: '0',
    left: '0',
    '@dark': {
      background:
        'linear-gradient(to right, var(--theme-document-dark-background) 0%, transparent 100%)'
    },
    '@light': {
      background:
        'linear-gradient(to right, var(--theme-document-light-background) 0%, transparent 100%)'
    },
    zIndex: '3',
    pointerEvents: 'none',
    transition: 'opacity B defaultBezier'
  },
  ':after': {
    content: '""',
    boxSize: '100% A',
    position: 'absolute',
    top: '0',
    right: '0',
    '@dark': {
      background:
        'linear-gradient(to left, var(--theme-document-dark-background) 0%, transparent 100%)'
    },
    '@light': {
      background:
        'linear-gradient(to left, var(--theme-document-light-background) 0%, transparent 100%)'
    },
    zIndex: '3',
    pointerEvents: 'none',
    transition: 'opacity B defaultBezier'
  }
}
