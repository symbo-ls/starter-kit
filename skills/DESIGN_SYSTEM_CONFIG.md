# Design system config guide

This guide focuses only on configuring Scratch with a design system config. Use it to build clean, consistent tokens and avoid common mistakes.

## Default config baseline (mixed in)

Use these defaults as a starting point and then override with your project values.

### Colors and gradients (default-config)

```js
color: {
  blue: '#213eb0',
  green: '#389d34',
  red: '#e15c55',
  yellow: '#EDCB38',
  orange: '#e97c16',
  transparent: 'rgba(0, 0, 0, 0)',
  black: 'black',
  gray: '#4e4e50',
  white: 'white',
  title: ['--gray 1 -168', '--gray 1 +168'],
  caption: ['--gray 1 -68', '--gray 1 +68'],
  paragraph: ['--gray 1 -42', '--gray 1 +42'],
  disabled: ['--gray 1 -26', '--gray 1 +26'],
  line: ['--gray 1 -16', '--gray 1 +16']
},
gradient: {
  'gradient-blue-light': 'linear-gradient(to right, rgba(4, 116, 242, 1), rgba(0, 48, 103, 1))',
  'gradient-blue-dark': 'linear-gradient(to right, #0474F2, #003067)',
  'gradient-dark': 'linear-gradient(0deg, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.07) 100%)',
  'gradient-dark-active': 'linear-gradient(0deg, rgba(0,0,0,0.09) 0%, rgba(0,0,0,0.1) 100%)',
  'gradient-light': 'linear-gradient(0deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.06) 100%)',
  'gradient-light-active': 'linear-gradient(0deg, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.10) 100%)',
  'gradient-colorful': 'linear-gradient(60deg, #00A2E7 0%, #185DF3 31%, #1E54F0 36%, #8B4CCA 69%, #C66894 100%)'
}
```

### Themes (default-config)

```js
theme: {
  document: {
    '@light': { color: 'black', background: 'white' },
    '@dark': { color: 'white', background: 'black' }
  },
  primary: {
    '@dark': { color: 'white', background: 'blue' },
    '@light': { color: 'white', background: 'gradient-blue' }
  },
  secondary: {
    '@dark': { color: 'white', background: 'green' },
    '@light': { color: 'white', background: 'green' }
  },
  tertiary: {
    '@dark': { color: 'white', background: 'gray .92 +8' },
    '@light': { background: 'gray .1' }
  },
  none: { color: 'none', background: 'none' },
  transparent: { color: 'currentColor', background: 'transparent' }
}
```

### Typography, spacing, timing (default-config)

```js
typography: {
  base: 16,
  ratio: 1.25,
  subSequence: true,
  templates: {}
},
spacing: {
  ratio: 1.618,
  subSequence: true
},
timing: {
  base: 150,
  ratio: 1.333,
  unit: 'ms',
  subSequence: true
}
```

### Media and fonts (default-config)

```js
media: {
  tv: '(min-width: 2780px)',
  screenL: '(max-width: 1920px)',
  'screenL<': '(min-width: 1920px)',
  screenM: '(max-width: 1680px)',
  'screenM<': '(min-width: 1680px)',
  screenS: '(max-width: 1440px)',
  'screenS<': '(min-width: 1440px)',
  tabletL: '(max-width: 1366px)',
  'tabletL<': '(min-width: 1366px)',
  tabletM: '(max-width: 1280px)',
  'tabletM<': '(min-width: 1280px)',
  tabletS: '(max-width: 1024px)',
  'tabletS<': '(min-width: 1024px)',
  mobileL: '(max-width: 768px)',
  'mobileL<': '(min-width: 768px)',
  mobileM: '(max-width: 560px)',
  'mobileM<': '(min-width: 560px)',
  mobileS: '(max-width: 480px)',
  'mobileS<': '(min-width: 480px)',
  mobileXS: '(max-width: 375px)',
  'mobileXS<': '(min-width: 375px)',
  light: '(prefers-color-scheme: light)',
  dark: '(prefers-color-scheme: dark)',
  print: 'print'
},
font: {
  SourceSans: [{ url: '' }]
},
font_family: {
  system: { value: ['"Helvetica Neue"', 'Helvetica', 'Arial'], type: 'sans-serif' }
}
```

### Default icons set (icons/default)

```js
icons: {
  symbols: '<svg height="24" width="24">...</svg>',
  logo: '<svg height="24" width="24">...</svg>',
  arrowDownCircle: '<svg width="24" height="24" ...>...</svg>',
  arrowDownLeft: '<svg width="24" height="24" ...>...</svg>',
  arrowDownRight: '<svg width="24" height="24" ...>...</svg>',
  arrowDown: '<svg width="24" height="24" ...>...</svg>',
  arrowLeftCircle: '<svg width="24" height="24" ...>...</svg>',
  arrowLeft: '<svg width="24" height="24" ...>...</svg>',
  arrowRight: '<svg width="24" height="24" ...>...</svg>',
  arrowRightCircle: '<svg width="24" height="24" ...>...</svg>',
  arrowUpCircle: '<svg width="24" height="24" ...>...</svg>',
  arrowUpLeft: '<svg width="24" height="24" ...>...</svg>',
  arrowUpRight: '<svg width="24" height="24" ...>...</svg>',
  arrowUp: '<svg width="24" height="24" ...>...</svg>',
  checkCircle: '<svg width="24" height="24" ...>...</svg>',
  check: '<svg width="24" height="24" ...>...</svg>',
  chevronDown: '<svg width="24" height="24" ...>...</svg>',
  chevronLeft: '<svg width="24" height="24" ...>...</svg>',
  chevronRight: '<svg width="24" height="24" ...>...</svg>',
  chevronUp: '<svg width="24" height="24" ...>...</svg>',
  copy: '<svg width="24" height="24" ...>...</svg>',
  eyeOff: '<svg width="24" height="24" ...>...</svg>',
  eye: '<svg width="24" height="24" ...>...</svg>',
  info: '<svg width="24" height="24" ...>...</svg>',
  lock: '<svg width="24" height="24" ...>...</svg>',
  minus: '<svg width="24" height="24" ...>...</svg>',
  sun: '<svg width="24" height="24" ...>...</svg>',
  moon: '<svg width="24" height="24" ...>...</svg>',
  moreHorizontal: '<svg width="24" height="24" ...>...</svg>',
  moreVertical: '<svg width="24" height="24" ...>...</svg>',
  send: '<svg width="24" height="24" ...>...</svg>',
  smile: '<svg width="24" height="24" ...>...</svg>',
  search: '<svg width="24" height="24" ...>...</svg>',
  upload: '<svg width="24" height="24" ...>...</svg>',
  video: '<svg width="24" height="24" ...>...</svg>',
  x: '<svg width="24" height="24" ...>...</svg>',
  star: '<svg width="24" height="24" ...>...</svg>',
  plus: '<svg width="24" height="24" ...>...</svg>'
}
```

## How config is applied

Define a single config object with top-level keys. Scratch merges it into defaults, generates sequences, applies the document theme, and builds reset styles.

```js
const designSystemConfig = {
  color: {
    primary: "#1f6feb",
    text: ["#0b0b0b", "#f5f5f5"],
  },
  theme: {
    document: { color: "text", background: "primary 0.02" },
    button: { color: "text", background: "primary" },
  },
  typography: { base: 16, ratio: 1.25 },
  spacing: { base: 16, ratio: 1.618 },
  timing: { base: 150, ratio: 1.4 },
  font: {
    inter: {
      400: { url: "https://example.com/Inter-Regular.woff2", fontWeight: 400 },
      700: { url: "https://example.com/Inter-Bold.woff2", fontWeight: 700 },
    },
  },
  font_family: {
    primary: { value: ["Inter"], type: "sans", isDefault: true },
  },
  icons: { search: "<svg>...</svg>" },
  svg: { logo: "<svg>...</svg>" },
  shadow: { soft: "black 0.15, 0px 10px 30px 0px" },
  media: {
    mobile: "(max-width: 768px)",
    desktop: "(min-width: 1024px)",
  },
  grid: { columns: 12, gutter: "A" },
  reset: {},
  unit: { default: "em" },
  animation: {},
};
```

### Config keys

Use these top-level keys only (case-insensitive):

- `color`
- `gradient`
- `theme`
- `typography`
- `spacing`
- `timing`
- `font`
- `font_family`
- `icons`
- `semantic_icons`
- `svg`
- `svg_data`
- `shadow`
- `media`
- `grid`
- `class`
- `reset`
- `unit`
- `animation`
- `cases`

Do not wrap these under `props` or nested objects. Scratch reads the keys directly at the root of the config object.

## Colors

Define colors as strings, arrays, or objects:

```js
color: {
  primary: '#1f6feb',
  text: ['#0b0b0b', '#f5f5f5'],
  accent: {
    '@light': '#ff7a18',
    '@dark': '#ffb347'
  }
}
```

Usage examples:

- `primary` -> `var(--color-primary)` (when `useVariable` is true)
- `primary 0.5` -> rgba with alpha
- `primary +5` -> shifted tone

## Themes

Themes are objects with optional media variants and states.

```js
theme: {
  document: {
    color: 'text',
    background: 'primary 0.02'
  },
  button: {
    color: 'text',
    background: 'primary',
    ':hover': { background: 'primary 0.85' },
    ':active': { background: 'primary 0.75' },
    '@dark': { background: 'primary 0.6' }
  }
}
```

Rules:

- Use `@light` / `@dark` for media variants.
- Use `:hover`, `:active`, `:focus` for state variants.
- Use `.` prefixed keys for helper themes and reuse.

## Typography

Typography defines the type scale and heading styles.

```js
typography: {
  base: 16,
  ratio: 1.25,
  range: [-3, 12],
  h1Matches: 6,
  lineHeight: 1.5,
  subSequence: true,
  unit: 'em'
}
```

Tokens like `A`, `B`, `C` map to the generated sequence. `subSequence: true` enables two-step tokens like `B2`.

## Spacing

Spacing controls layout tokens used for padding, margin, gap, size, etc.

```js
spacing: {
  base: 16,
  ratio: 1.618,
  range: [-5, 15],
  subSequence: true,
  unit: 'em'
}
```

Tokens:

- `A`, `B`, `C` are base tokens
- `B2`, `C1` are sub-sequence tokens
- `A+Z`, `B*C` math is allowed in values

## Timing

Timing generates durations for transitions and animations.

```js
timing: {
  base: 150,
  ratio: 1.4,
  range: [-3, 12],
  unit: 'ms'
}
```

## Fonts and font families

### Traditional fonts (per-weight files)

```js
font: {
  inter: {
    400: { url: 'https://example.com/Inter-Regular.woff2', fontWeight: 400 },
    700: { url: 'https://example.com/Inter-Bold.woff2', fontWeight: 700 }
  }
}
```

Each weight entry generates a separate `@font-face` rule.

### Variable fonts (`isVariable`)

Variable fonts use a single file that covers a range of weights.

**Google Fonts CSS URL** — generates `@import url(...)` instead of `@font-face`:

```js
font: {
  Inter: {
    url: 'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap',
    isVariable: true,
    fontWeight: '100 900'
  }
}
```

**Self-hosted `.woff2` file** — generates `@font-face` with weight range:

```js
font: {
  Inter: {
    url: '/fonts/Inter-Variable.woff2',
    isVariable: true,
    fontWeight: '100 900'
  }
}
```

**All variable font options:**

| Property      | Description                                                   | Example                |
| ------------- | ------------------------------------------------------------- | ---------------------- |
| `url`         | Font file URL or Google Fonts CSS URL                         | `'/fonts/Inter.woff2'` |
| `isVariable`  | Enables variable font handling                                | `true`                 |
| `fontWeight`  | Weight range string                                           | `'100 900'`            |
| `fontStretch` | Stretch range (for variable width fonts)                      | `'75% 125%'`           |
| `fontDisplay` | CSS font-display value (defaults to `'swap'` for self-hosted) | `'swap'`               |

**Example with all options:**

```js
font: {
  'Roboto Flex': {
    url: '/fonts/RobotoFlex-Variable.woff2',
    isVariable: true,
    fontWeight: '100 1000',
    fontStretch: '25% 151%',
    fontDisplay: 'swap'
  }
}
```

### Font families

```js
font_family: {
  primary: { value: ['Inter'], type: 'sans', isDefault: true },
  mono: { value: ['IBM Plex Mono'], type: 'monospace' }
}
```

- Use `font` for `@font-face` generation (or `@import` for Google Fonts variable fonts).
- Use `font_family` for named stacks used by the document theme.

## Icons and SVG

```js
icons: {
  search: '<svg>...</svg>'
},
semantic_icons: {
  logo: true
},
svg: {
  logo: '<svg>...</svg>'
}
```

- `icons` are typically converted into a sprite unless listed in `semantic_icons`.
- `svg` is for general SVG assets.

## Shadows

```js
shadow: {
  soft: 'black 0.15, 0px 10px 30px 0px',
  hard: ['black 0.25, 0px 8px 16px 0px', 'black 0.35, 0px 10px 24px 0px']
}
```

Arrays map to `@light`/`@dark` variants.

## Media, grid, unit, reset

```js
media: {
  mobile: '(max-width: 768px)',
  tablet: '(max-width: 1024px)'
},
grid: { columns: 12, gutter: 'A' },
unit: { default: 'em' },
reset: {}
```

## Configuration options

These are toggles you can pass at the top level of the same object as your config:

- `verbose`
- `useVariable`
- `useReset`
- `useSvgSprite`
- `useFontImport`
- `useIconSprite`
- `useDocumentTheme`
- `globalTheme`
- `useDefaultConfig`

Example:

```js
const designSystemConfig = {
  useVariable: true,
  useReset: true,
  globalTheme: "dark",
  color: { primary: "#1f6feb" },
};
```

## Common mistakes

- Do not nest config under `props` or other wrappers.
- Use `font_family` instead of `fontFamily`.
- Define `typography` and `spacing` if you plan to use tokens like `A`, `B2`, or `C+Z`.
- When `useVariable` is on, consumers should expect `var(--...)` output.

---

## Symbols Feedback Conventions

Supplemental conventions are merged into [CLAUDE.md](CLAUDE.md).
