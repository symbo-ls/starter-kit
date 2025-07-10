export const Scrollbar = {
  display: 'flex',
  minWidth: 'I',
  TrackContainer: {
    opacity: 1,
    transition: 'A defaultBezier opacity',
    flex: '1',
    margin: '- C1 - -',
    position: 'relative',
    background: 'red',
    height: 'fit-content',
    alignSelf: 'center',
    Track: {
      position: 'absolute',
      theme: 'field',
      round: 'A',
      height: '2px',
      width: 'G3+B1',
      maxWidth: 'G3+B1',
      background: '#d9d7d7 .5',
      left: '0',
      transformOrigin: 'left',
      onFrame: el => {
        const flexNode = el.lookup('Flex').node
        const viewportRatio = flexNode.clientWidth / flexNode.scrollWidth
        const scrollRatio =
          flexNode.scrollLeft / (flexNode.scrollWidth - flexNode.clientWidth)

        // Set width as percentage of viewport vs scrollable area
        el.node.style.width = `${viewportRatio * 100}%`
        el.node.style.transform = `translateX(${
          scrollRatio * (100 - viewportRatio * 100)
        }%)`
      }
    }
  },
  NavigationArrows: {
    childProps: {}
  }
}
