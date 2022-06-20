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

console.warn('CREATE')
console.log(app)

const updatedApp = DOM.update({
  time: window.performance.now() - now,
  asd: {
    111: {
      props: {
        theme: 'primary'
      }
    }
  }
}, App)

console.warn('UPDATE')
console.log(updatedApp)

const updatedApp2 = DOM.update({
  ye: '11',
  time: 'qew'
}, App)

console.warn('UPDATE')
console.log(updatedApp2)
console.log(app)
