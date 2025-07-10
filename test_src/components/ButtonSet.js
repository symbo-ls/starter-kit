export const ButtonSet = {
  display: 'flex',
  gap: 'Z',
  align: 'center flex-start',
  childProps: {
    theme: 'dialog',
    padding: 'A1 B2'
  },
  childExtends: 'Button',
  children: [
    {
      text: 'BUTTON 1'
    },
    {
      text: 'BUTTEN 2'
    }
  ],
  childrenAs: 'props'
}
