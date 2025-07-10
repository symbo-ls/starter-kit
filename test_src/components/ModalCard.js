export const ModalCard = {
  state: {},
  position: 'absolute',
  flexAlign: 'center center',
  top: 0,
  left: 0,
  boxSize: '100% 100%',
  minWidth: '100%',
  minHeight: '100%',
  background: 'white .35',
  zIndex: '20',
  transition: 'all C defaultBezier',
  backdropFilter: 'blur(15px)',
  onClick: (event, element, state) => {
    element.call('closeModal')
  },
  // onWheel: (event) => {
  //   event.preventDefault();
  //   event.stopPropagation();
  // },
  // onTouchMove: (event) => {
  //   event.preventDefault();
  //   event.stopPropagation();
  // },
  childProps: {
    onClick: ev => {
      ev.stopPropagation()
    }
  },
  // opacity: '1',
  // visibility: 'visible',
  isActive: (el, s) => s.root.activeModal,
  '.isActive': {
    opacity: '1',
    zIndex: 999999,
    visibility: 'visible',
    pointerEvents: 'initial'
  },
  '!isActive': {
    opacity: '0',
    visibility: 'hidden',
    zIndex: '-1',
    pointerEvents: 'none'
  },
  ImgHgroup: {
    maxWidth: 'H1',
    border: 'solid, mediumGrey',
    borderWidth: '.7px',
    position: 'relative',
    flow: 'y',
    align: 'flex-start flex-start',
    overflow: 'hidden auto',
    round: 'B',
    theme: 'document',
    maxHeight: '85dvh',
    childProps: {
      style: {
        flexShrink: '0'
      }
    },
    '@mobileL': {
      maxWidth: 'H'
    },
    '@mobileM': {
      maxWidth: 'G3'
    },
    '@mobileS': {
      maxWidth: 'G+C'
    },
    '@mobileXS': {
      maxWidth: 'G+A'
    },
    IconButton: {
      round: '100%',
      position: 'absolute',
      top: 'Z2',
      right: 'Z2',
      padding: 'Y2',
      boxSize: 'A1 A1',
      theme: null,
      color: 'currentColor',
      background: 'white',
      Icon: {
        name: 'x',
        fontSize: 'B'
      },
      onClick: (event, element, state) => {
        element.call('closeModal')
      }
    },
    Img: {
      src: '{{ poster }}',
      minHeight: 'F1',
      boxSize: '- 100%',
      round: '0'
    },
    Hgroup: {
      boxSizing: 'border-box',
      overflow: 'hidden',
      position: 'relative',
      gap: '0',
      maxWidth: 'H2',
      padding: '- A1 A2',
      H: {
        tag: 'h6',
        fontSize: 'A',
        text: '{{ title }}',
        zIndex: '3',
        fontWeight: 'bold',
        color: 'darkBlue',
        padding: 'Z1 0 0 0'
      },
      P: {
        text: '{{ description }}',
        padding: 'Z2 0 A2 0',
        style: {
          '::-webkit-scrollbar': {
            display: 'none'
          }
        }
      },
      More: {
        flexFlow: 'y',
        gap: 'Z2',
        childExtends: 'P',
        childProps: {
          margin: '0',
          lineHeight: '1.25em'
        },
        children: (el, s) => s.more
      }
    },
    LinkSet: {
      padding: '0 A1 A A1',
      children: (el, s) => s.links || [],
      gap: 'B1',
      childProps: {
        fontSize: 'Z2',
        target: '_blank',
        fontWeight: '500',
        gap: 'X',
        ':hover': {
          textDecoration: 'underline'
        },
        Icon: {
          color: 'darkBlue',
          name: 'arrowTopRight',
          margin: '- - - X2'
        }
      }
    }
  }
}
