export const BlogSection = {
  extends: [
    'Link',
    'Flex',
  ],
  href: '{{ href }}',
  flow: 'y',
  width: '100%',
  alignSelf: 'flex-start',
  padding: 'C',
  '@mobileL': {
    padding: 'B1',
  },
  Flex: {
    flow: 'y',
    gap: 'C1',
    Img: {
      src: '{{ poster }}',
      width: '50%',
    },
    Article: {
      H1: {
        fontSize: 'E',
        text: '{{ title }}',
      },
      P: {
        text: '{{ description }}',
        maxWidth: 'H2',
      },
    },
  },
};
