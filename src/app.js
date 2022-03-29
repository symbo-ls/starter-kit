'use strict'

import style from './style'

import 'domql/packages/emotion'
import router from 'domql/packages/router'

const App = {
  key: 'app',
  style,

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
