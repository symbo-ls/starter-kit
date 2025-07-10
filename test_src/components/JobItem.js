export const JobItem = {
  Strong: {
    text: '{{ position }}',
    margin: 'X -'
  },
  Flex: {
    whiteSpace: 'nowrap',
    gap: 'X2',
    children: [
      '{{ company }}',
      '|',
      {
        extends: 'Date',
        text: '{{ dates }}'
      }
    ]
  },
  P: {
    margin: 'X2 - -',
    childrenExtend: 'P',
    children: (el, s) => s.description,
    childProps: {
      ':before': {
        margin: '- X',
        content: '"- "'
      }
    }
  }
}
