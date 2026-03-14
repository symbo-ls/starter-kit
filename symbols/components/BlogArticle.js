export const BlogArticle = {
  extends: 'Flex',
  margin: '- auto',
  maxWidth: 'K',
  width: '100%',
  minHeight: '100%',
  flow: 'y',
  align: 'center flex-start',
  overflowX: 'hidden',
  onRender: (el) => {
    el.call('gTag')
  },
  onInit: (el) => {
    el.call('helmet', el.metadata)
  },
  Header: {
    order: '-3',
  },
  BlogSection: {
    maxWidth: 'J',
    margin: '- auto',
    padding: 'C1',
    href: null,
    fontWeight: '400',
  },
  Footer: {
    margin: 'auto - -',
    padding: 'F1 - B',
    Box: null,
  },
};
