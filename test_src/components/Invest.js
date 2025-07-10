export const Invest = {
  display: 'grid',
  columns: 'repeat(2, 1fr)',
  gap: 'B',
  padding: '- B1',
  '@tabletS': {
    columns: '1fr',
    margin: 'E1 - - -',
    padding: '- A2'
  },
  '@mobileXS': {
    padding: '- A'
  },
  childProps: {
    ':last-child': {
      background: 'lightBlue',
      '> hgroup > h6': {
        color: 'mediumBlue'
      },
      '> hgroup > p': {
        color: 'black'
      },
      '> button': {
        color: 'black'
      }
    }
  },
  childExtends: 'InvestCard',
  children: (element, state) => state.investTypes,
  childrenAs: 'state'
}
