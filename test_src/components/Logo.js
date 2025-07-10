export const Logo = {
  extends: ['Flex', 'Link'],
  align: 'center flex-start',
  gap: 'X',
  height: 'B2',
  childProps: {
    ':first-child': {
      fontSize: 'D2'
    },
    ':last-child': {
      fontSize: 'J1'
    }
  },
  childExtends: 'Icon',
  children: [
    {
      icon: 'logo',
      color: 'mediumBlue2'
    },
    {
      icon: 'logoTitle',
      color: 'mediumBlue2'
    }
  ]
}
