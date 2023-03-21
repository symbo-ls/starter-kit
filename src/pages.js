'use strict'

export default {
  '/': {
    H1: 'Hello Symbols',
    P: 'Lorem ipsum dolor sit amet',
    TestComponent: {},
    Link: {
      href: '/about',
      text: 'About us'
    }
  },
  '/about': {
    H3: 'This is Symbols starter-kit',
    P: 'Lorem ipsum dolor sit amet',
    Link: {
      href: '/',
      text: 'Go Back'
    }
  }
}
