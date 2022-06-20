'use strict'

import './config'

import DOM from 'domql'
import App from './app'
import { transformEmotion } from '@domql/transform-emotion'

const now = window.performance.now()

const app = DOM.create(App, null, null, {
  transform: {
    transformEmotion
  }
})

console.warn('CREATE', app)

DOM.update({
  time: window.performance.now() - now,
  asd: {
    111: {
      props: {
        theme: 'primary'
      }
    }
  }
}, App)

const updatedApp = DOM.update({
  ye: '11',
  time: 'qew'
}, App)

console.log(updatedApp)
