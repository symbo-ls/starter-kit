export const Scrollbar = {
  extends: 'Flex',
  minWidth: 'I',
  display: 'flex',
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
      background: '#d9d7d7 .5',
      left: '0',
      transformOrigin: 'left',
    },
  },
  NavigationArrows: {
    childProps: {
      padding: 'Z Z',
      Icon: {
        fontSize: 'B1',
      },
    },
  },
};