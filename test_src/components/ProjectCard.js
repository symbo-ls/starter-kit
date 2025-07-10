export const ProjectCard = {
  extends: 'ImgHgroup',
  state: 'projects/0/data/0',
  flow: 'column',
  align: 'flex-start flex-start',
  overflow: 'hidden',
  round: 'B',
  border: 'solid, mediumGrey',
  borderWidth: '.7px',
  minWidth: 'G3+B2',
  maxWidth: 'G3+B2',
  height: 'G3+D',
  position: 'relative',
  onClick: (ev, el) => el.call('showModal'),
  ':after': {
    content: '""',
    boxSize: 'D 100%',
    background:
      'linear-gradient(to top, rgba(255, 255, 255, 1) 0%,rgba(255, 255, 255, 0) 100%)',
    position: 'absolute',
    left: '0',
    bottom: '0',
    zIndex: '2'
  },
  Img: {
    src: '{{ poster }}',
    boxSize: 'a100%',
    round: '0'
  },
  Hgroup: {
    padding: 'Z A2 Y A2',
    gap: 'Z2',
    H: {
      tag: 'h6',
      text: '{{ title }}',
      fontWeight: '700',
      fontSize: 'A'
    },
    P: {
      text: '{{ description }}',
      maxWidth: 'G3',
      lineHeight: '1.25em'
    }
  }
}
