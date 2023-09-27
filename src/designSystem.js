'use strict'

import ICONS from '@symbo.ls/default-icons'

/**
 * Colors
 * @tutorial https://docs.symbols.app/color
 */
const COLOR = {
  transparent: 'transparent',
  black: 'black',
  white: 'white',
  orange: '#E98232'
}

/**
 * Gradients
 * @tutorial https://docs.symbols.app/color
 */
const GRADIENT = {}

/**
 * Themes
 * @tutorial https://docs.symbols.app/theme
 */
const THEME = {
  document: {
    '@dark': {
      color: 'white',
      background: 'black'
    },
    '@light': {
      background: 'white',
      color: 'black'
    },
    '@midnight': {
      background: '#112233',
      color: 'white'
    }
  }
}

/**
 * Fonts
 * @tutorial https://docs.symbols.app/font
 */
const FONT = {}

/**
 * Font families
 * @tutorial https://docs.symbols.app/font
 */
const FONT_FAMILY = {}

/**
 * Typography
 * @tutorial https://docs.symbols.app/typography
 * @tutorial https://docs.symbols.app/sequence
 */
const TYPOGRAPHY = {
  base: 16,
  ratio: 1.2
}

/**
 * Spacing
 * @tutorial https://docs.symbols.app/spacing
 * @tutorial https://docs.symbols.app/sequence
 */
const SPACING = {}

const options = {
  verbose: false,
  useReset: true,
  useDocumentTheme: true,
  useFontImport: true,
  useVariable: true,
  useSvgSprite: true,
  useIconSprite: true
}

export default {
  ...options,
  COLOR,
  GRADIENT,
  THEME,
  ICONS,
  TYPOGRAPHY,
  SPACING,
  FONT,
  FONT_FAMILY
}
