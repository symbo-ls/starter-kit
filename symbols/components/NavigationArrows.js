export const NavigationArrows = {
  extends: 'Flex',
  gap: 'Z',
  childProps: {
    round: '100%',
    theme: 'dialog',
  },
  childExtends: 'IconButton',
  children: [
    {
      Icon: {
        name: 'chevronLeft',
      },
    },
    {
      Icon: {
        name: 'chevronRight',
      },
    },
  ],
};