export const VideoModal = {
  extends: 'ModalWindow',
  Video: {
    round: 'A2',
    width: 'auto',
    height: '100%',
    autoplay: true,
    preload: 'yes',
    controls: true,
    playsinline: true,
    loop: true,
    muted: 'muted',
    objectFit: 'cover',
    MP4: {
      src: 'https://api.symbols.app/core/files/public/68a4efe96cce2dfa294f851d/download',
      type: 'video/mp4',
    },
  },
  height: '85%',
  minWidth: 'auto',
  width: 'auto',
  overflow: 'visible',
  IconButton: {
    top: '-B2',
    right: '-B2',
  },
};