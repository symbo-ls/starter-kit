export const Modal = {
  position: 'fixed',
  flexAlign: 'center center',
  top: '0',
  left: '0',
  boxSize: '100% 100%',
  minWidth: '100%',
  minHeight: '100%',
  background: 'white .35',
  zIndex: '20',
  transition: 'all, C, defaultBezier',
  backdropFilter: 'blur(15px)',
  opacity: '0',
  visibility: 'hidden',
  pointerEvents: 'none',

  onClick: (event, element, state) => {
    state.root.update({
      activeModal: false
    })
  },

  '.activeModal': {
    opacity: '1',
    zIndex: 999999,
    visibility: 'visible',
    pointerEvents: 'initial',
  },

  content: (el, s) => {
    if (!s.root.activeModal) return {}
    const activeModal = s.root.activeModal?.split('/')
    return {
      extends: activeModal[0],
      onClick: (ev) => {
        ev.stopPropagation()
      },
      state: activeModal[1] && (el.call('polyglot', 'product') || [])[activeModal[1]]
    }
  },
};
