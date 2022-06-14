'use strict'

import './config'

import DOM from 'domql'
import App from './app'
import { transformEmotion } from '@domql/transform-emotion'

const app = DOM.create(App, null, null, {
  transform: {
    transformEmotion
  }
})

console.log(app.button.ref.class)
