export const IconTextSet = {
  extends: 'Flex',
  flow: 'y',
  gap: 'A',
  childProps: {
    align: 'center flex-start',
    gap: 'Y1',
    Icon: {},
  },
  childExtends: [
    'IconText',
    'Flex',
  ],
  children: [
    {
      Icon: {
        name: 'smile',
      },
      text: '+1 (555) 123-4567',
    },
    {
      Icon: {
        name: 'logo',
      },
      text: 'example@mail.com',
    },
  ],
  childrenAs: 'props',
};