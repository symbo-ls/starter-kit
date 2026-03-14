import state from './state.js'
import dependencies from './dependencies.js'
import * as components from './components/index.js'
import * as snippets from './snippets/index.js'
import pages from './pages/index.js'
import * as functions from './functions/index.js'
import * as methods from './methods/index.js'
import designSystem from './designSystem/index.js'
import files from './files/index.js'
import sharedLibraries from './sharedLibraries.js'
import config from './config.js'
import envs from './envs.js'
import translations from './designSystem/lang.js'

export default {
  ...config,
  state,
  dependencies,
  components,
  snippets,
  pages,
  functions,
  methods,
  designSystem,
  files,
  sharedLibraries,
  envs,
  polyglot: {
    defaultLang: 'ka',
    languages: ['ka', 'en'],
    translations
  }
}
