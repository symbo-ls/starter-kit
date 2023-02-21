'use strict'

import config from '../symbols.json'
import { create } from 'smbls'
import { Sync, DevFocus, inspectOnKey } from '@symbo.ls/socket-ui'

import { App } from './app'
import system from './system'

create({
  extend: [Sync, DevFocus, App]
}, {
  key: config.key,
  system,
  editor: {
    remote: true,
    async: true,
    endpoint: 'api.symbols.dev',
    serviceRoute: 'state'
  }
}).then(app => {
  inspectOnKey(app)
  window.onpopstate = e => app.context.router(app, window.location.pathname, {}, 0, false)
})
