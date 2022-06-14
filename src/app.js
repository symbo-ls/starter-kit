'use strict'

import { Box } from 'smbls'

export default {
  style: {
    fontFamily: '"Helvetica", "Arial", --system-default'
  },
  class: {
    asd: { fontSize: '12px' }
  },
  icon: '✅',
  strong: 'domql',
  text: ' render in ',
  time: '',
  milliseconds: ' milliseconds',

  button: {
    extends: Box,
    props: { color: 'indigo', width: 'B', fontSize: 'B' },
    text: 'asd'
  }
}
