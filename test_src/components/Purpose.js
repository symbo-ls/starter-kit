export const Purpose = {
  display: 'grid',
  id: 'about',
  columns: 'repeat(3, auto)',
  columnGap: 'E',
  padding: 'E - -',
  justifyContent: 'center',
  '@tabletL': {
    columnGap: 'D'
  },
  '@tabletM': {
    columns: 'repeat(2, auto)',
    columnGap: 'E2',
    rowGap: 'E'
  },
  '@tabletS': {
    columnGap: 'D',
    rowGap: 'D',
    padding: '- B2'
  },
  '@mobileM': {
    columns: '1fr'
  },
  childProps: {
    Icon: null,
    Img: {
      src: '{{ icon }}'
    },
    Hgroup: {
      H: {
        text: '{{ title }}'
      },
      P: {
        text: '{{ description }}'
      }
    },
    ':last-child': {
      '@tabletM': {
        gridColumn: 'span 2'
      },
      '@mobileM': {
        gridColumn: 'span 1'
      }
    }
  },
  childExtends: 'IconHgroupArticle',
  children: (element, state) => state.purpose,
  childrenAs: 'state'
}
