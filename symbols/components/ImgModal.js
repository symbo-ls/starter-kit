export const ImgModal = {
  extends: 'ModalWindow',
  flexFlow: 'y',
  background: 'white',
  border: 'D, solid, white',
  boxSize: '100%',
  maxWidth: '100%',
  overflow: 'visible',
  style: {
    boxShadow: 'none',
  },
  Img: {
    position: 'absolute',
    boxSize: '100%',
    objectFit: 'contain',
    src: (el, s) => s.root.activeImg,
  },
  IconButton: {
    top: '-C',
    right: '-C',
  },
};