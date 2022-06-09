'use strict'

import style from './style'

// import '@symbo.ls/scratch-init'
import '@domql/emotion'
import router from '@domql/router'

import { Box } from '@symbo.ls/box'

const App = {
  key: 'app',
  proto: Box,
  style,
  props: { fontSize: 'C' },

  state: {},

  define: { routes: param => param },
  routes: {
    '/': { text: 'Hello HackerNews!' }
  },

  on: {
    render: element => {
      router(element, window.location.pathname, {})
    }
  }
}

window.onpopstate = e => router(App, window.location.pathname, {}, 0, false)

export default App
