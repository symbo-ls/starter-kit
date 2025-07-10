export const BrandsCarousel = {
  extends: ['ScrollShadows'],
  alignSelf: 'start',
  boxSize: 'D 100%',
  overflow: 'hidden',
  margin: '- Y1',
  align: 'center flex-start',
  padding: '- Z - -',
  Flex: {
    gap: 'C2',
    padding: 'C2',
    transform: 'translate3d(-100%, 0, 1px)',
    onFrame: el => {
      const { parent, node } = el
      const parentTop = parent.node.getBoundingClientRect().top - 200
      const siblings = parent.node?.children
      const index = siblings && (Array.from(siblings).indexOf(node) % 3) + 1
      const calcX = `${(parentTop / 5) * (index * 1.2)}px`
      el.node.style.transform = `translate3d(calc(${calcX} - 50%), 0, 1px)`
    },
    childExtends: 'Img',
    childProps: {
      align: 'center flex-start',
      filter: 'grayscale(100%)'
    },
    children: [
      {
        src: 'bodbe.svg',
        fontSize: 'B'
      },
      {
        src: 'poti.png',
        height: 'C',
        opacity: '.65'
      },
      {
        src: 'bazaar.svg',
        fontSize: 'B'
      },
      {
        src: 'bodbe.svg',
        fontSize: 'B'
      },
      {
        src: 'poti.png',
        height: 'C',
        opacity: '.65'
      },
      {
        src: 'bazaar.svg',
        fontSize: 'B'
      },
      {
        src: 'bodbe.svg',
        fontSize: 'B'
      },
      {
        src: 'poti.png',
        height: 'C',
        opacity: '.65'
      },
      {
        src: 'bazaar.svg',
        fontSize: 'B'
      },
      {
        src: 'bodbe.svg',
        fontSize: 'B'
      },
      {
        src: 'poti.png',
        height: 'C',
        opacity: '.65'
      },
      {
        src: 'bazaar.svg',
        fontSize: 'B'
      },
      {
        src: 'bodbe.svg',
        fontSize: 'B'
      },
      {
        src: 'poti.png',
        height: 'C',
        opacity: '.65'
      },
      {
        src: 'bazaar.svg',
        fontSize: 'B'
      },
      {
        src: 'bodbe.svg',
        fontSize: 'B'
      },
      {
        src: 'poti.png',
        height: 'C',
        opacity: '.65'
      },
      {
        src: 'bazaar.svg',
        fontSize: 'B'
      },
      {
        src: 'bodbe.svg',
        fontSize: 'B'
      },
      {
        src: 'poti.png',
        height: 'C',
        opacity: '.65'
      },
      {
        src: 'bazaar.svg',
        fontSize: 'B'
      }
    ]
  }
}
