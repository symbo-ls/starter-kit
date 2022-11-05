'use strict'

import { init } from 'smbls'

/**
 * Colors
 * @tutorial https://docs.symbols.app/color
 */
const COLOR = {
  transparent: 'transparent',
  black: 'black',
  white: 'white',
  orange: '#ff6600'
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
    variants: {
      dark: {
        color: 'white',
        background: 'black'
      },
      light: {
        background: 'white',
        color: 'black'
      }
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

init({
  COLOR,
  GRADIENT,
  THEME,
  TYPOGRAPHY,
  SPACING,
  FONT,
  FONT_FAMILY
})
