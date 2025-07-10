export const ProjectType = {
  display: 'flex',
  state: {
    caption: 'Caption',
    projectPreview: 'projectPreview',
    image: '',
    heading: 'Heading',
    paragraph: 'Paragraph'
  },
  flow: 'y',
  maxWidth: 'J+F1',
  width: '100%',
  Caption: {
    text: '{{ title }}',
    margin: '- auto - -',
    color: 'mediumBlue2',
    fontWeight: '500',
    padding: '- - - C',
    '@mobileL': {
      padding: '- - - B2'
    },
    '@mobileS': {
      padding: '- - - B'
    }
  },
  ProjectPreview: {
    padding: '- C B1 C',
    '@mobileL': {
      padding: '- B2 B1 B2'
    },
    '@mobileS': {
      padding: '- B B1 B'
    },
    Grid: {
      width: '100%',
      childProps: {
        minWidth: '100%',
        maxWidth: '100%'
      },
      '@tabletL': {
        columns: 'repeat(2, 1fr)'
      },
      '@mobileL': {
        columns: 'repeat(1, 1fr)'
      }
    }
  },
  Flex: {
    gap: 'B2',
    maxWidth: '100%',
    padding: '- B1',
    overflowX: 'auto',
    '::-webkit-scrollbar': {
      display: 'none'
    },
    '@mobileL': {
      padding: '- A2'
    },
    '@mobileM': {
      display: 'flex',
      width: '100%',
      flexWrap: 'nowrap',
      style: {
        scrollSnapType: 'x mandatory'
      },
      scrollPadding: 'A2'
    },
    '@mobileS': {
      padding: '- A1',
      scrollPadding: 'A1'
    },
    '@mobileXS': {
      gap: 'B',
      padding: '- A',
      scrollPadding: 'A'
    },
    childProps: {
      cursor: 'pointer',
      '@mobileM': {
        minWidth: '100%',
        maxWidth: '100%',
        style: {
          scrollSnapAlign: 'start'
        }
      },
      Img: {
        maxHeight: 'G',
        boxSize: 'auto 100%',
        style: {
          objectFit: 'cover'
        }
      }
    },
    children: (element, state) => state.data,
    childExtends: 'ProjectCard',
    childrenAs: 'state'
  },
  ScrollBar: {
    minWidth: '100%',
    maxWidth: '100%',
    padding: 'A1 C A1 C',
    '@mobileS': {
      padding: 'A1 A2 A1 B1'
    },
    '@mobileXS': {
      padding: 'A1 A1 A1 B'
    },
    TrackContainer: {
      Track: {
        width: 'initial',
        maxWidth: 'initial',
        onFrame: el => {
          const flexNode = el.lookup('Flex').node
          const viewportRatio = flexNode.clientWidth / flexNode.scrollWidth
          const scrollRatio =
            flexNode.scrollLeft / (flexNode.scrollWidth - flexNode.clientWidth)

          el.variables({
            clientWidth: flexNode.clientWidth,
            scrollWidth: flexNode.scrollWidth
          }).changed(() => {
            const ScrollBar = el.lookup('ScrollBar')
            // Check if there's no scrollable area
            if (flexNode.clientWidth >= flexNode.scrollWidth) {
              ScrollBar.setNodeStyles({
                display: 'none'
              })
            } else {
              ScrollBar.setNodeStyles({
                display: 'flex'
              })
            }
          })

          // Set width as percentage of viewport vs scrollable area
          el.node.style.width = `${viewportRatio * 100}%`
          el.node.style.transform = `translateX(${
            scrollRatio * (100 - viewportRatio * 100)
          }%)`
        }
      }
    },
    NavigationArrows: {
      childProps: {
        onClick: (ev, el) => {
          const flexNode = el.lookup('Flex').node
          const isLeft = el.key === 'Left'
          const scrollAmount = flexNode.clientWidth * 0.65

          flexNode.scrollBy({
            left: isLeft ? -scrollAmount : scrollAmount,
            behavior: 'smooth'
          })
        }
      },
      Left: {},
      Right: {}
    }
  }
}
