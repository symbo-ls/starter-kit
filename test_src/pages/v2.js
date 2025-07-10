export const v2 = {
  display: 'flex',
  state: ({ parent }) =>
    parent.call(
      'deepClone',
      parent.state.root[parent.state.root.activeLanguage]
    ),
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
  ModalCard: {
    position: 'fixed'
  },
  Header: {
    margin: '- auto',
    maxWidth: 'J+F1',
    position: 'fixed',
    top: '0',
    Logo: {
      href: '/v2'
    },
    LinkSet: {
      children: [
        {
          href: '/v2',
          text: '{{ about }}'
        },
        {
          href: '/v2-projects',
          text: '{{ projects }}'
        },
        {
          href: '/v2-contacts',
          text: '{{ contacts }}'
        }
      ]
    }
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
  Purpose: {
    margin: '- auto',
    maxWidth: 'J+F1'
  },
  LinesAnimation: {},
  Activity: {
    margin: '- auto',
    maxWidth: 'J+F1'
  },
  BrandsCarousel: {
    margin: '- auto',
    id: 'Projects',
    maxWidth: 'J+F1'
  },
  WhatWeDo: {
    margin: 'E auto',
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
