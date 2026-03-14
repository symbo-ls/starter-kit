export const About = {
  extends: 'Flex',
  flow: 'y',
  align: 'center flex-start',
  gap: 'C',
  cursor: 'pointer',
  margin: 'E3 - E',
  ':hover': {
    '& .img': {
      transform: 'scale(1.035)',
      boxShadow: '0, 5px, 26px, 5px, #AAA',
    },
    '& h6': {
      letterSpacing: '.35px',
    },
  },
  onClick: (event, element, state) => {
    state.root.update({
      activeModal: 'VideoModal'
    })
  },
  AboutVideo: {
    class: 'img',
    boxSize: 'F1 F3+C',
    round: 'B',
    position: 'relative',
    overflow: 'hidden',
    width: 'fit-content',
    transition: 'transform, B, defaultBezier',
    Img: {
      display: 'block',
      src: 'video.svg',
      boxSize: '103% 103%',
      margin: '-1%',
      pointerEvents: 'none',
    },
    Img_2: {
      display: 'block',
      src: 'play.svg',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: '2',
    },
  },
  Hgroup: {
    align: 'center flex-start',
    gap: 'B',
    H: {
      tag: 'h6',
      transition: 'letter-spacing, B, defaultBezier',
      text: el => el.call('isGeorgian') ? 'მოკლედ ჩვენზე' : 'About us',
      fontWeight: '700',
    },
    P: {
      text: el => el.call('isGeorgian') ? `არის პიონერული კომპანია თავის სფეროში,
      რომელმაც მიზნად დაისახა ისეთი პრაქტიკული,
      ეკონომიური და გამძლე უსაფრთხოების
      სისტემების დიზაინი და წარმოება` : `It is a pioneering company in its field, dedicated to designing and manufacturing practical, economical, and durable safety systems.`,
      maxWidth: 'G+B',
      textAlign: 'center',
    },
  },
};
