export const main = {
  state: ({ parent }) =>
    parent.call(
      'deepClone',
      parent.state.root[parent.state.root.activeLanguage]
    ),
  display: 'flex',
  flow: 'y',
  align: 'center flex-start',
  width: '100%',
  alignSelf: 'flex-start',
  pisition: 'relative',
  Sidebar: {
    position: 'fixed',
    zIndex: '5',
    top: '0',
    right: '0'
  },
  Header: {
    margin: '- auto',
    maxWidth: 'J+F1',
    position: 'fixed',
    top: '0'
  },
  Banner: {
    margin: '- auto',
    maxWidth: 'J+F1',
    Hook: {
      bottom: 'C3',
      id: 'About',
      position: 'absolute'
    }
  },
  Invest: {
    position: 'relative',
    margin: '- auto',
    maxWidth: 'J+F1'
  },
  ModalCard: {
    position: 'fixed'
  },
  Purpose: {
    margin: '- auto',
    maxWidth: 'J+F1'
  },
  LinesAnimation: {},
  Activity: {
    margin: '- auto',
    maxWidth: 'J+F1'
  },
  WhatWeDo: {
    margin: '- auto',
    maxWidth: 'J+F1'
  },
  BrandsCarousel: {
    id: 'Projects',
    maxWidth: 'J+F1',
    margin: 'E3 auto -C3'
  },
  Projects: {
    margin: '- auto',
    maxWidth: 'J+F1'
  },
  IdeasMatter: {
    margin: '- auto',
    maxWidth: 'J+F1'
  },
  Footer: {
    id: 'Contact',
    margin: '- auto',
    maxWidth: 'J+F1'
  }
}
