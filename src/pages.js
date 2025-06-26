'use strict'

export default {
  '/': {
    Header: {},
    TestComponent: {},
    Link: {
      href: 'https://symbols.app/developers',
      target: '_blank',
      ':hover': {
        '& svg': {
          margin: '- Y - -'
        }
      },
      Icon: {
        transition: 'margin ease A',
        margin: '- X - -',
        name: 'arrow up right'
      },
      Span: 'Checkout Docs'
    }
  },
  '/about': {
    Header: {},
    Link: {
      href: '/',
      text: 'Go Back'
    }
  }
}
