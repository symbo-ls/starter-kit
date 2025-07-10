export const Select = {
  extends: 'Button',
  tag: 'label',
  padding: 'X1 Y',
  theme: 'transparent',
  position: 'relative',
  round: '0',
  select: {
    0: {
      value: 'Nikoloza'
    },
    1: {
      value: 'Svinchy'
    },
    2: {
      value: 'Svinchy2'
    },
    props: {
      fontSize: 'A',
      fontWeight: '400',
      padding: 'Y B1 Y Y1',
      border: 'none',
      cursor: 'pointer',
      outline: 'none',
      pointerEvents: 'All',
      appearance: 'none',
      height: '100%',
      background: 'none',
      color: 'title',
      lineHeight: 1,
      zIndex: '2',
      flex: '1',
      ':focus-visible': {
        outline: 'none'
      },
      childProps: {
        value: '',
        selected: '',
        disabled: '',
        fontWeight: '400'
      }
    },
    childExtends: {
      tag: 'option',
      attr: {
        value: ({ props }) => props.value,
        selected: ({ props }) => props.selected,
        disabled: ({ props }) => props.disabled
      }
    },
    attr: {
      name: ({ props }) => props.name,
      disabled: ({ props }) => props.disabled
    },
    $propsCollection: ({ parent, state }) => {
      if (!parent.props.options) return []
      return parent.props.options.map(v => {
        if (v.text === state.key)
          return {
            ...v,
            selected: true
          }
        return v
      })
    }
  },
  Icon: {
    name: 'chevronDown',
    position: 'absolute',
    round: 'Z',
    fontSize: 'B',
    right: 'Z',
    onClick: () => {}
  }
}
