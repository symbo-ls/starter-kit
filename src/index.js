'use strict'

import config from '../symbols.json'
import { create } from 'smbls'

import { App } from './app'
import designSystem from './designSystem'
import pages from './pages'

create(App, {
  key: config.key,
  designSystem,
  pages
})
