export const Carousel = {
  extends: 'Flex',
  flow: 'y',
  overflow: 'hidden',
  gap: 'A1',
  maxWidth: '100%',
  margin: 'F1 - E3',
  '@mobileL': {
    margin: 'D2 - E2 -',
  },
  Flex: {
    overflowX: 'auto',
    gap: 'Z2',
    padding: '- B1',
    '::-webkit-scrollbar': {
      display: 'none',
    },
    '@mobileM': {
      padding: '- Z2',
      style: {
        scrollSnapType: 'x mandatory',
      },
      scrollPadding: 'Z2',
    },
    childProps: {
      maxHeight: 'H',
      round: 'B2',
      cursor: 'pointer',
      '@mobileM': {
        minWidth: '100%',
        maxWidth: '100%',
        height: 'auto',
        style: {
          scrollSnapAlign: 'start',
        },
      },
      onClick: (event, el, state) => {
        console.log(el.props.src)
        state.root.update({
          activeModal: 'ImgModal',
          activeImg: el.props.src
        })
      },
    },
    childExtends: 'Img',
    children: [
      {
        src: 'image.png',
      },
      {
        src: 'image2.png',
      },
      {
        src: 'flynetGallery1.png',
      },
      {
        src: 'image3.png',
      },
      {
        src: 'flynetGallery2.png',
      },
      {
        src: 'image4.png',
      },
      {
        src: 'image5.png',
      },
      {
        src: 'image6.png',
      },
    ],
  },
  Scrollbar: {
    minWidth: '100%',
    maxWidth: '100%',
    padding: '- B - D2',
    TrackContainer: {
      Track: {
        width: 'initial',
        maxWidth: 'initial',
        background: 'lightGray',
        opacity: '.8',
        onFrame: el => {
          const flexNode = el.lookup('Flex').node
          const viewportRatio = flexNode.clientWidth / flexNode.scrollWidth
          const scrollRatio =
            flexNode.scrollLeft / (flexNode.scrollWidth - flexNode.clientWidth)

          el.variables({
            clientWidth: flexNode.clientWidth,
            scrollWidth: flexNode.scrollWidth
          }).changed(() => {
            const Scrollbar = el.lookup('Scrollbar')
            // Check if there's no scrollable area
            if (flexNode.clientWidth >= flexNode.scrollWidth) {
              Scrollbar.setNodeStyles({
                display: 'none'
              })
            } else {
              Scrollbar.setNodeStyles({
                display: 'flex'
              })
            }
          })

          // Set width as percentage of viewport vs scrollable area
          el.node.style.width = `${viewportRatio * 100}%`
          el.node.style.transform = `translateX(${
            scrollRatio * (100 - viewportRatio * 100)
          }%)`
        },
      },
    },
    NavigationArrows: {
      childProps: {
        background: 'creamGray',
        onClick: (ev, el) => {
          const flexNode = el.lookup('Flex').node
          const isLeft = el.key === '0'
          const scrollAmount = flexNode.clientWidth * 0.65

          flexNode.scrollBy({
            left: isLeft ? -scrollAmount : scrollAmount,
            behavior: 'smooth'
          })
        },
      },
    },
  },
};
