export const ModalWindow = {
  flexFlow: 'y',
  background: 'white',
  boxSize: 'H+D2 I3+D1',
  position: 'absolute',
  top: '50%',
  left: '50%',
  maxWidth: '90%',
  transform: 'translate(-50%, -50%)',
  round: 'C',
  overflow: 'hidden',
  style: {
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
  },
  IconButton: {
    position: 'absolute',
    top: 'B',
    right: 'B',
    padding: '0',
    theme: 'transparent',
    onClick: (event, element, state) => {
      state.root.update({
        activeModal: false
      })
    },
    '@mobileXS': {
      top: 'A1',
      right: 'A1',
    },
    Icon: {
      name: 'x',
      fontSize: 'C',
      '@mobileXS': {
        fontSize: 'B2',
      },
    },
  },
};