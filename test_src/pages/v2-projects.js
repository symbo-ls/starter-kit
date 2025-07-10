export const v2Projects = {
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
    right: '0',
    state: 'nav',
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
  Projects: {
    margin: '- auto',
    maxWidth: 'J+F1'
  },
  Footer: {
    id: 'Contact',
    margin: '- auto',
    maxWidth: 'J+F1',
    Img: null,
    width: '100%',
    Grid: {
      width: '100%',
      position: 'relative'
    }
  }
}
