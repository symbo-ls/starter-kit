export const v2Contacts = {
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
  Flex: {
    align: 'start',
    maxWidth: 'J+F1',
    gap: 'C1',
    margin: 'E1 auto',
    padding: 'C1',
    width: '100%',
    '@tabletS': {
      flow: 'y'
    },
    Flex: {
      flow: 'y',
      gap: 'B',
      flex: 1,
      H6: {
        color: 'mediumBlue',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 'Z2',
        state: 'nav',
        text: '{{ contacts }}'
      },
      P: {
        maxWidth: 'G3',
        text: 'Smart Capital Group is a reputable growth-driven company uniting a diverse portfolio of brands across Georgia nd the United Kingdom'
      },
      Flex: {
        flow: 'y',
        gap: 'B',
        align: 'start',
        childExtends: 'Hgroup',
        childProps: {
          align: 'start',
          textAlign: 'center',
          H: {
            tag: 'h6',
            fontSize: 'Z2',
            textTransform: 'uppercase',
            color: 'mediumBlue',
            text: '{{ value }}',
            order: 2
          },
          P: {
            text: '{{ caption }}',
            maxWidth: 'F3+A1',
            lineHeight: '1.25em'
          }
        },
        childrenAs: 'state',
        children: [
          {
            caption: 'Contact us',
            value: '(+995 32) 2439 493'
          },
          {
            caption: 'Text us',
            value: 'scgnews@smartcapital.ge'
          },
          {
            caption: 'Follow us',
            value: 'Facebook'
          },
          {
            caption: 'Address',
            value: '138a David Aghmashenebeli ave. 0102, Tbilisi, Georgia​'
          }
        ]
      }
    },
    MapIframe: {
      width: '100%',
      round: 'A',
      flex: 1
    }
  },
  Footer: {
    id: 'Contact',
    margin: '- auto',
    maxWidth: 'J+F1'
  }
}
