export const SelectPicker = {
  tag: 'label',
  extends: 'Flex',
  round: '0',
  align: 'center flex-start',
  position: 'relative',
  Select: {
    0: {
      value: 'Nikoloza',
    },
    1: {
      value: 'Svinchy',
    },
    extends: 'Flex',
    fontSize: 'A',
    boxSize: '100%',
    padding: '- B+V2 - -',
    cursor: 'pointer',
    outline: 'none',
    appearance: 'none',
    ':focus-visible': {
      outline: 'none',
    },
    flex: '1',
    zIndex: '2',
    lineHeight: 1,
    border: 'none',
    background: 'none',
    pointerEvents: 'All',
    color: 'title',
  },
  Icon: {
    name: 'chevronDown',
    position: 'absolute',
    right: '0',
    margin: 'V - - -',
    fontSize: 'B',
  },
};