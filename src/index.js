'use strict'

import { create } from 'smbls'

import designSystem from './designSystem'
import * as components from './components'
import pages from './pages'

async function initialize () {
  let fetched_context
  try {
    fetched_context = await import('../test_src')
  } catch (error) {
    console.error('Failed to load fetched_context:', error)
  }

  create(
    {},
    fetched_context || {
      designSystem,
      components,
      pages
    }
  )
}

initialize()
