export const Activity = {
  display: 'grid',
  maxWidth: 'fit-content',
  alignSelf: 'center',
  columns: 'repeat(4, auto)',
  columnGap: 'D',
  padding: 'C1 B1 E3 B1',
  '@tabletL': {
    gap: 'C'
  },
  '@tabletM': {
    columns: 'repeat(3, auto)'
  },
  '@tabletS': {
    columns: 'repeat(2, auto)',
    gap: 'D2'
  },
  '@mobileL': {
    columnGap: 'B2',
    rowGap: 'D'
  },
  '@mobileM': {
    columns: '1fr'
  },
  '@mobileXS': {
    padding: 'C1 A2 E3 A2'
  },
  childProps: {
    align: 'center flex-start',
    textAlign: 'center',
    H: {
      text: '{{ title }}',
      tag: 'h6',
      fontSize: 'Z2',
      color: 'mediumBlue',
      textTransform: 'uppercase'
    },
    P: {
      text: '{{ description }}',
      maxWidth: 'F3+A1',
      lineHeight: '1.25em'
    },
    ':last-child': {
      '@tabletM': {
        gridColumn: 'span 3'
      },
      '@tabletS': {
        gridColumn: 'span 1'
      }
    }
  },
  childExtends: 'Hgroup',
  childrenAs: 'state',
  children: (el, s) => s.history
}
