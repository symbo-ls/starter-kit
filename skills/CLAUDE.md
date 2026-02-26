# CLAUDE.md — Symbols / DOMQL v3 Strict Rules

## CRITICAL: v3 Syntax Only

This project uses **DOMQL v3 syntax exclusively**. Never use v2 patterns.

| v3 (USE THIS)                 | v2 (NEVER USE)                  |
| ----------------------------- | ------------------------------- |
| `extends: 'Component'`        | ~~`extend: 'Component'`~~       |
| `childExtends: 'Component'`   | ~~`childExtend: 'Component'`~~  |
| Props flattened at root level | ~~`props: { ... }` wrapper~~    |
| `onClick: fn`                 | ~~`on: { click: fn }` wrapper~~ |
| `onRender: fn`                | ~~`on: { render: fn }`~~        |

---

## Core Principle

**NO JavaScript imports/exports for component usage.** Components are registered once in their folders and reused through a declarative object tree. No build step, no compilation.

---

## Strict Rules

### 1. Components are OBJECTS, never functions

```js
// CORRECT
export const Header = { extends: 'Flex', padding: 'A' }

// WRONG — never do this
export const Header = (el, state) => ({ padding: 'A' })
```

### 2. NO imports between project files

```js
// WRONG
import { Header } from './Header.js'
import { parseData } from '../functions/parseData.js'

// CORRECT — reference by name in tree, call functions via el.call()
{ Header: {}, Button: { onClick: (el) => el.call('parseData', args) } }
```

### 3. ALL folders are flat — no subfolders

```
// WRONG: components/charts/LineChart.js
// CORRECT: components/LineChart.js
```

### 4. PascalCase keys = child components (auto-extends)

```js
// The key name IS the component — no extends needed when key matches
{
  UpChart: {
    flex: '1'
  }
}
// Equivalent to: { UpChart: { extends: 'UpChart', flex: '1' } }
```

### 5. Props are ALWAYS flattened — no `props:` wrapper

```js
// CORRECT
{ padding: 'A', color: 'primary', id: 'main' }

// WRONG
{ props: { padding: 'A', color: 'primary', id: 'main' } }
```

### 6. Events use `onX` prefix — no `on:` wrapper

```js
// CORRECT
{ onClick: (e, el, s) => {}, onRender: (el, s) => {}, onWheel: (e, el, s) => {} }

// WRONG
{ on: { click: fn, render: fn, wheel: fn } }
```

---

## Project Structure

```
smbls/
├── index.js                    # Root export (central loader)
├── vars.js                     # Global variables/constants (default export)
├── config.js                   # Platform configuration (default export)
├── dependencies.js             # External npm packages with fixed versions (default export)
├── files.js                    # File assets (default export, managed via SDK)
│
├── components/                 # UI Components — PascalCase files, named exports
│   ├── index.js                # export * as ComponentName from './ComponentName.js'
│   ├── Header.js
│   ├── Layout.js
│   └── ...
│
├── pages/                      # Pages — dash-case files, camelCase exports
│   ├── index.js                # Route mapping: { '/': main, '/dashboard': dashboard }
│   ├── main.js
│   ├── dashboard.js
│   ├── add-network.js          # export const addNetwork = { extends: 'Page', ... }
│   └── ...
│
├── functions/                  # Utility functions — camelCase, called via el.call()
│   ├── index.js                # export * from './functionName.js'
│   ├── parseNetworkRow.js
│   └── ...
│
├── methods/                    # Element methods — called via el.methodName()
│   ├── index.js
│   └── ...
│
├── state/                      # State data — flat folder, default exports
│   ├── index.js                # Registry importing all state files
│   └── ...
│
├── designSystem/               # Design tokens — flat folder
│   ├── index.js                # Token registry
│   ├── color.js
│   ├── spacing.js
│   ├── typography.js
│   ├── theme.js
│   ├── icons.js                # Flat SVG icon collection (camelCase keys)
│   └── ...
│
└── snippets/                   # Reusable data/code snippets — named exports
    ├── index.js                # export * from './snippetName.js'
    └── ...
```

---

## Naming Conventions

| Location        | Filename         | Export                                       |
| --------------- | ---------------- | -------------------------------------------- |
| `components/`   | `Header.js`      | `export const Header = { }`                  |
| `pages/`        | `add-network.js` | `export const addNetwork = { }`              |
| `functions/`    | `parseData.js`   | `export const parseData = function() { }`    |
| `methods/`      | `formatDate.js`  | `export const formatDate = function() { }`   |
| `designSystem/` | `color.js`       | `export default { }`                         |
| `snippets/`     | `mockData.js`    | `export const mockData = { }`                |
| `state/`        | `metrics.js`     | `export default { }` or `export default [ ]` |

---

## Component Template (v3)

```js
export const ComponentName = {
  extends: 'Flex', // v3: always "extends" (plural)
  childExtends: 'ListItem', // v3: always "childExtends" (plural)

  // Props flattened directly — CSS, HTML, custom
  padding: 'A B',
  background: 'surface',
  borderRadius: 'B',
  theme: 'primary',

  // Events — onX prefix
  onClick: (e, el, state) => {},
  onRender: (el, state) => {},
  onInit: async (el, state) => {},

  // Conditional cases
  isActive: false,
  '.isActive': { background: 'primary', color: 'white' },

  // Responsive
  '@mobile': { padding: 'A' },
  '@tablet': { padding: 'B' },

  // Child components — PascalCase keys, no imports
  Header: {},
  Content: {
    Article: { text: 'Hello' }
  },
  Footer: {}
}
```

---

## Props Anatomy (Complete Reference)

In Symbols, CSS-in-props and attr-in-props are unified alongside other properties as a single flat object. This unifies HTML, CSS, and JavaScript syntax into a single object with a flat structure.

```js
{
  // CSS properties (use design system tokens)
  padding: 'C2 A',
  background: 'gray',
  borderRadius: 'C',

  // HTML properties
  id: 'some-id',
  class: 'm-16',

  // Component specific properties
  isActive: true,
  currentTime: new Date(),

  // Overwrite props to specific children
  Button: {
    Icon: { name: 'sun' }
  },

  // Overwrite props to all children (single level)
  childProps: {
    color: 'red',
    name: 'sun'
  },

  // Passing children as array
  children: [{ state: { isActive: 'sun' } }],

  // CSS selectors
  ':hover': {},
  '& > span': {},

  // Media queries
  '@tablet': {},
  '@print': {},
  '@tv': {},

  // Global theming
  '@dark': {},
  '@light': {},

  // Conditional cases (dot prefix for local)
  isCompleted: true,
  '.isCompleted': { textDecoration: 'line-through' },
  '!isCompleted': { textDecoration: 'none' },

  // Global cases (dollar prefix)
  '$ios': { icon: 'apple' },

  // Events
  onRender: (element, state, context) => {},
  onStateUpdate: (changes, element, state, context) => {},
  onClick: (event, element, state, context) => {},
  onLoad: (event, element, state, context) => {},
}
```

---

## Built-in Property Categories

### Box / Spacing Properties

| Property       | Description                | Example                |
| -------------- | -------------------------- | ---------------------- |
| `padding`      | Space inside the element   | `padding: 'A1 C2'`     |
| `margin`       | Outer space of the element | `margin: '0 -B2'`      |
| `gap`          | Pace between children      | `gap: 'A2'`            |
| `width`        | Width of the element       | `width: 'F1'`          |
| `height`       | Height of the element      | `height: 'F1'`         |
| `boxSize`      | Width + height shorthand   | `boxSize: 'C1 E'`      |
| `borderRadius` | Rounding corners           | `borderRadius: 'C2'`   |
| `widthRange`   | min-width + max-width      | `widthRange: 'A1 B2'`  |
| `heightRange`  | min-height + max-height    | `heightRange: 'A1 B2'` |
| `minWidth`     | Minimum width              | `minWidth: 'F1'`       |
| `maxWidth`     | Maximum width              | `maxWidth: 'F1'`       |
| `minHeight`    | Minimum height             | `minHeight: 'F1'`      |
| `maxHeight`    | Maximum height             | `maxHeight: 'F1'`      |
| `aspectRatio`  | Aspect ratio of the box    | `aspectRatio: '1 / 2'` |

### Flex Properties

| Property         | Description                               | Example                        |
| ---------------- | ----------------------------------------- | ------------------------------ |
| `flexFlow`       | CSS flexFlow shorthand                    | `flexFlow: 'row wrap'`         |
| `flexDirection`  | CSS flexDirection                         | `flexDirection: 'column'`      |
| `flexAlign`      | Shorthand for alignItems + justifyContent | `flexAlign: 'center center'`   |
| `alignItems`     | CSS alignItems                            | `alignItems: 'flex-start'`     |
| `alignContent`   | CSS alignContent                          | `alignContent: 'flex-start'`   |
| `justifyContent` | CSS justifyContent                        | `justifyContent: 'flex-start'` |

### Color / Theme Properties

| Property     | Syntax                                   | Example                         |
| ------------ | ---------------------------------------- | ------------------------------- |
| `background` | `'colorName opacity saturation'`         | `background: 'oceanblue'`       |
| `color`      | `'colorName opacity saturation'`         | `color: 'oceanblue 0.5'`        |
| `border`     | `'colorName size style'`                 | `border: 'oceanblue 1px solid'` |
| `shadow`     | `'colorName x y depth offset'`           | `shadow: 'black A A C'`         |
| `theme`      | `'themeName'` or `'themeName .modifier'` | `theme: 'primary'`              |

### Shape Properties

| Property        | Description                        | Example                                       |
| --------------- | ---------------------------------- | --------------------------------------------- |
| `shape`         | Name from Shapes config            | `shape: 'tag'`                                |
| `shapeModifier` | Position/direction for tooltip/tag | `shapeModifier: { position: 'block center' }` |

### Typography Properties

| Property     | Description                              | Example             |
| ------------ | ---------------------------------------- | ------------------- |
| `fontSize`   | Typography sequence unit or CSS value    | `fontSize: 'B'`     |
| `fontWeight` | CSS font-weight or closest config weight | `fontWeight: '500'` |

### Animation Properties

| Property                  | Description                        | Example                                   |
| ------------------------- | ---------------------------------- | ----------------------------------------- |
| `animation`               | Bundle animation properties        | `animation: 'fadeIn'`                     |
| `animationName`           | Name from design system            | `animationName: 'fadeIn'`                 |
| `animationDuration`       | Timing sequence or CSS value       | `animationDuration: 'C'`                  |
| `animationDelay`          | Timing sequence or CSS value       | `animationDelay: 'C'`                     |
| `animationTimingFunction` | Timing function from config or CSS | `animationTimingFunction: '...'`          |
| `animationFillMode`       | CSS animation-fill-mode            | `animationFillMode: 'both'`               |
| `animationPlayState`      | CSS animation-play-state           | `animationPlayState: 'running'`           |
| `animationIterationCount` | CSS animation-iteration-count      | `animationIterationCount: 'infinite'`     |
| `animationDirection`      | CSS animation-direction            | `animationDirection: 'alternate-reverse'` |

### Media / Selector / Cases Properties

| Property      | Description                        | Example                            |
| ------------- | ---------------------------------- | ---------------------------------- |
| `@mediaQuery` | CSS @media query as object         | `'@mobile': { fontSize: 'A' }`     |
| `:selector`   | CSS selector as object             | `':hover': { color: 'blue' }`      |
| `$cases`      | Global JS conditions on properties | `'$ios': { text: 'Hello Apple!' }` |

---

## Spacing Scale

Ratio-based system (base 16px, ratio 1.618 golden ratio):

| Token | ~px | Token | ~px | Token | ~px |
| ----- | --- | ----- | --- | ----- | --- |
| X     | 3   | A     | 16  | D     | 67  |
| Y     | 6   | A1    | 20  | E     | 109 |
| Z     | 10  | A2    | 22  | F     | 177 |
| Z1    | 12  | B     | 26  |       |     |
| Z2    | 14  | B1    | 32  |       |     |
|       |     | B2    | 36  |       |     |
|       |     | C     | 42  |       |     |
|       |     | C1    | 52  |       |     |
|       |     | C2    | 55  |       |     |

Spacing values are generated from a base size and ratio using a mathematical sequence. The font size from Typography is used as the base size for all spacing units. Values work with `padding`, `margin`, `gap`, `width`, `height`, `borderRadius`, `position`, and any spacing-related property.

```js
{ padding: 'A B', gap: 'C', borderRadius: 'Z', fontSize: 'B1' }
```

---

## Typography Scale

Typography uses a base size (default 16px) and ratio (default 1.25) to generate a type scale sequence. Each unit is sequentially generated by multiplying the base by the ratio.

```js
// designSystem/typography.js
export default {
  base: 16,
  ratio: 1.25,
  subSequence: true,
  templates: {}
}
```

The same letter tokens (A, B, C, etc.) apply to fontSize, with values computed from the typography sequence rather than the spacing sequence.

---

## Shorthand Props

```js
flow: 'y' // flexFlow: 'column'
flow: 'x' // flexFlow: 'row'
align: 'center space-between' // alignItems + justifyContent
round: 'B' // borderRadius
size: 'C' // width + height
wrap: 'wrap' // flexWrap
```

---

## Colors & Themes

```js
// Usage in components
{ color: 'primary', background: 'surface', borderColor: 'secondary 0.5' }

// Color syntax: 'colorName opacity lightness'
background: 'black .001'              // black with 0.1% opacity
background: 'deepFir 1 +5'           // deepFir, 100% opacity, +5 lightness
background: 'gray2 0.85 +16'         // gray2, 85% opacity, +16 lightness
color: 'white 0.65'                  // white at 65% opacity

// Theme prop
{ Button: { theme: 'primary', text: 'Submit' } }
{ Button: { theme: 'primary .active' } }  // Theme with modifier

// Inline theme object
{
  theme: {
    color: 'white',
    '@dark': { color: 'oceanblue', background: 'white' }
  }
}

// Dark/light mode
{ '@dark': { background: 'gray-900' }, '@light': { background: 'white' } }
```

---

## Design System Configuration

```js
// designSystem/index.js — full configuration
export default {
  COLOR: {
    black: '#000',
    white: '#fff',
    softBlack: '#1d1d1d',
    // Array format for light/dark: [lightValue, darkValue]
    title: ['--gray1 1', '--gray15 1'],
    document: ['--gray15 1', '--gray1 1 +4']
  },
  GRADIENT: {},
  THEME: {
    document: {
      '@light': { color: 'black', background: 'white' },
      '@dark': { color: 'white', background: 'softBlack' }
    },
    transparent: {
      '@dark': { background: 'transparent', color: 'white 0.65' },
      '@light': { background: 'transparent', color: 'black 0.65' }
    },
    button: {
      '@dark': {
        color: 'white',
        background: 'transparent',
        ':hover': { background: 'deepFir' },
        ':active': { background: 'deepFir +15' }
      }
    },
    field: {
      '@dark': {
        color: 'gray14',
        background: 'gray3 0.5',
        ':hover': { background: 'gray3 0.65 +2' },
        ':focus': { background: 'gray3 0.65 +6' }
      }
    }
  },
  FONT: {},
  FONT_FAMILY: {},
  TYPOGRAPHY: {
    base: 16,
    ratio: 1.25,
    subSequence: true,
    templates: {}
  },
  SPACING: {
    base: 16,
    ratio: 1.618,
    subSequence: true
  },
  TIMING: {},
  GRID: {},
  ICONS: {},
  SHAPE: {},
  ANIMATION: {},
  MEDIA: {},
  CASES: {},
  // Configuration flags
  useReset: true,
  useVariable: true,
  useFontImport: true,
  useIconSprite: true,
  useSvgSprite: true,
  useDefaultConfig: true,
  useDocumentTheme: true,
  verbose: false,
  globalTheme: 'dark'
}
```

---

## Atom Components (Primitives)

Symbols provides 15 built-in primitive atom components:

| Atom       | HTML Tag   | Description                   |
| ---------- | ---------- | ----------------------------- |
| `Text`     | `<span>`   | Text content                  |
| `Box`      | `<div>`    | Generic container             |
| `Flex`     | `<div>`    | Flexbox container             |
| `Grid`     | `<div>`    | CSS Grid container            |
| `Link`     | `<a>`      | Anchor with built-in router   |
| `Input`    | `<input>`  | Form input                    |
| `Radio`    | `<input>`  | Radio button                  |
| `Checkbox` | `<input>`  | Checkbox                      |
| `Svg`      | `<svg>`    | SVG container                 |
| `Icon`     | `<svg>`    | Icon from icon sprite         |
| `IconText` | `<div>`    | Icon + text combination       |
| `Button`   | `<button>` | Button with icon/text support |
| `Img`      | `<img>`    | Image element                 |
| `Iframe`   | `<iframe>` | Embedded frame                |
| `Video`    | `<video>`  | Video element                 |

```js
// Usage
{ Box: { padding: 'A', background: 'surface' } }
{ Flex: { flow: 'y', gap: 'B', align: 'center center' } }
{ Grid: { columns: 'repeat(3, 1fr)', gap: 'A' } }
{ Link: { text: 'Click here', href: '/dashboard' } }
{ Button: { text: 'Submit', theme: 'primary', icon: 'check' } }
{ Icon: { name: 'chevronLeft' } }
{ Img: { src: 'photo.png', boxSize: 'D D' } }
```

---

## Event Handlers

```js
{
  // Lifecycle
  onInit: (el, state) => {},          // Once on creation
  onRender: (el, state) => {},        // On each render
  onUpdate: (el, state) => {},        // On props/state change
  onStateUpdate: (changes, el, state, context) => {},

  // DOM events
  onClick: (e, el, state) => {},
  onInput: (e, el, state) => {},
  onKeydown: (e, el, state) => {},
  onDblclick: (e, el, state) => {},
  onMouseover: (e, el, state) => {},
  onWheel: (e, el, state) => {},
  onSubmit: (e, el, state) => {},
  onLoad: (e, el, state) => {},

  // Call global functions
  onClick: (e, el) => el.call('functionName', args),

  // Call methods
  onClick: (e, el) => el.methodName(),

  // Update state
  onClick: (e, el, state) => state.update({ count: state.count + 1 }),
}
```

---

## Scope (Local Functions)

Use `scope` for component-specific helpers. Use `functions/` for reusable utilities.

```js
export const Dashboard = {
  extends: 'Page',

  scope: {
    fetchMetrics: (el, s, timeRange) => {
      // el.call() for global functions — no imports
      el.call('apiFetch', 'POST', '/api/metrics', { timeRange }).then((data) =>
        s.update({ metrics: data })
      )
    }
  },

  onInit: (el, s) => el.scope.fetchMetrics(el, s, 5)
}
```

---

## State Management

### Setting State

State is defined in the element and can be any type. States have inheritance where children access the closest state from ancestors.

```js
{
  state: {
    userProfile: { name: '...' },
    activeItemId: 15,
    data: [{ ... }]
  }
}

// String state inherits from parent state key
{
  state: { userProfile: { name: 'Mike' } },
  User: {
    state: 'userProfile',
    text: '{{ name }}'  // returns 'Mike'
  }
}
```

### Accessing State

State values can be accessed in strings (template binding) and functions:

```js
// Template string binding
{
  text: '{{ name }} {{ surname }}'
}

// Function access
{
  text: (el, s) => s.name + ' ' + s.surname
}
```

### Updating State

```js
{
  state: { isActive: true },
  onClick: (e, el, s) => {
    s.update({ isActive: !s.isActive })
  }
}
```

### State Methods

```js
s.update({ key: value }) // Update + re-render
s.apply((s) => {
  s.items.push(newItem)
}) // Mutate with function
s.replace(data, { preventUpdate: true }) // Replace without render
s.root.update({ modal: '/add-network' }) // Update root state
s.root.quietUpdate({ modal: null }) // Update root without listener
s.parent.update({ isActive: true }) // Update parent state
s.toggle('isActive') // Toggle boolean value
s.destroy() // Destroy state and references
```

### Root State

Root state is application-level global state accessible via `state.root`:

```js
{
  User: {
    text: (el, s) => (s.root.authToken ? 'Authorized' : 'Not authorized')
  }
}
```

---

## Children Pattern

```js
{
  List: {
    children: (el, state) => state.items,
    childrenAs: 'state',
    childExtends: 'ListItem',       // v3: childExtends
    childProps: {
      padding: 'A B',
      Checkbox: { checked: (el, s) => s.done },
      Text: { text: (el, s) => s.title },
    },
  },
}
```

---

## Dynamic Imports (External Dependencies Only)

```js
// dependencies.js defines allowed packages with fixed versions
export default { 'chart.js': '4.4.9', 'fuse.js': '7.1.0' }

// Import at runtime inside handlers — never at top level
{
  onClick: async (e, el) => {
    const { Chart } = await import('chart.js')
    new Chart(el, { /* config */ })
  },
}
```

---

## Icons

```js
// designSystem/icons.js — flat camelCase keys with inline SVG strings
export default {
  chevronLeft: '<svg ...>...</svg>',
  search: '<svg ...>...</svg>'
}

// Usage
{
  Icon: {
    name: 'chevronLeft'
  }
}
{
  Button: {
    icon: 'search'
  }
}
```

---

## Pages & Routing

```js
// pages/dashboard.js
export const dashboard = {
  extends: 'Page',
  padding: 'C',
  Header: {},
  Content: {},
}

// pages/index.js — route mapping
import { main } from './main'
import { dashboard } from './dashboard'
export default { '/': main, '/dashboard': dashboard }

// Nested pages with sub-routes
{
  extends: 'Layout',
  routes: {
    '/': { H1: { text: 'Home' } },
    '/about': { H1: { text: 'About' } },
  },
  onRender: (el) => {
    const { pathname } = window.location
    el.call('router', pathname, el, {}, { level: 1 })
  },
}
```

### Link Component (Built-in Router)

```js
{ Link: { text: 'Go to dashboard', href: '/dashboard' } }
```

### Router Navigation

```js
// From components (el context)
el.router('/dashboard', el.getRoot())

// From functions (this context)
this.call('router', '/dashboard', this.__ref.root)

// With dynamic path
this.call('router', '/network/' + data.protocol, this.__ref.root)
```

---

## Element Methods

```js
element.update(newProps) // Update element
element.setProps(props) // Update props
element.set(content) // Set content
element.remove() // Remove from DOM
element.lookup('key') // Find ancestor by key
element.call('functionName', args) // Call global function
element.scope.localFn(el, s) // Call scope function
state.update({ key: value }) // Update state and re-render
```

---

## HTML Tag Mapping

PascalCase keys auto-map to HTML tags:

| Key     | Tag           | Key     | Tag         | Key    | Tag           |
| ------- | ------------- | ------- | ----------- | ------ | ------------- |
| Header  | `<header>`    | Nav     | `<nav>`     | Main   | `<main>`      |
| Section | `<section>`   | Article | `<article>` | Footer | `<footer>`    |
| H1-H6   | `<h1>`-`<h6>` | P       | `<p>`       | Span   | `<span>`      |
| Div     | `<div>`       | A/Link  | `<a>`       | Ul/Ol  | `<ul>`/`<ol>` |
| Form    | `<form>`      | Input   | `<input>`   | Button | `<button>`    |
| Img     | `<img>`       | Video   | `<video>`   | Canvas | `<canvas>`    |

Non-matching PascalCase -> `<div>` (or extends from registered component).

---

## Reserved Keywords

| Keyword                 | Purpose                                      |
| ----------------------- | -------------------------------------------- |
| `tag`                   | HTML tag to render                           |
| `extends`               | Inherit from component(s) — v3               |
| `childExtends`          | Apply extends to all children — v3           |
| `childExtendsRecursive` | Apply extends recursively to all descendants |
| `childProps`            | Apply props to all children                  |
| `state`                 | Component state                              |
| `scope`                 | Local helper functions                       |
| `children`              | Array of child elements                      |
| `childrenAs`            | Map children to 'props' or 'state'           |
| `context`               | Application context                          |
| `key`                   | Element key identifier                       |
| `query`                 | Query binding                                |
| `data`                  | Data binding                                 |
| `attr`                  | HTML attributes object                       |
| `class`                 | CSS classes object                           |
| `style`                 | Inline styles object                         |
| `content`               | Dynamic rendering function                   |
| `hide`                  | Conditionally hide element                   |
| `if`                    | Conditionally render element                 |
| `html`                  | Raw HTML content                             |
| `text`                  | Text content                                 |
| `routes`                | Sub-route definitions                        |

---

## CSS Selectors & Pseudo Elements

```js
{
  // Pseudo selectors
  ':hover': { background: 'deepFir' },
  ':active': { background: 'deepFir 1 +5' },
  ':focus-visible': { outline: 'solid, X, blue .3' },
  ':empty': { opacity: 0, visibility: 'hidden', pointerEvents: 'none' },
  ':first-child': { margin: 'auto - -' },
  ':focus ~ button': { opacity: '1' },

  // Pseudo elements
  ':before': { content: '"#"' },
  '::after': { content: '""', position: 'absolute' },
  '::-webkit-scrollbar': { display: 'none' },

  // Child/sibling selectors
  '> label': { width: '100%' },
  '> *': { width: '100%' },
  '& > span': {},

  // Style block with &
  '&:hover': { opacity: '1 !important' },
}
```

---

## Conditional Cases (Local)

Conditional cases watch passed props and apply only when matched:

```js
{
  isActive: (el, s) => s.userId === '01',
  color: 'white',
  background: 'blue .65',
  '.isActive': { background: 'blue' },
  '!isActive': { background: 'gray' },  // Negation
}
```

---

## Global Cases ($cases)

Cases are JavaScript conditions defined globally in the design system and used conditionally in components:

```js
// In designSystem — define cases
{
  cases: {
    isLocalhost: location.host === 'localhost',
    ios: () => ['iPad', 'iPhone', 'iPod'].includes(navigator.platform),
    android: () => navigator.userAgent.toLowerCase().indexOf("android") > -1,
  }
}

// In components — use with $ prefix
{
  H1: {
    text: 'Hello World!',
    '$localhost': { display: 'none' },
    '$ios': { color: 'black' },
    '$android': { color: 'green' },
  }
}
```

---

## Media Queries & Responsive Breakpoints

```js
{
  fontSize: 'B',
  padding: 'C1',

  '@mobile': { fontSize: 'A', padding: 'A' },
  '@mobileXS': { fontSize: 'Z1' },
  '@mobileS': { minWidth: 'G1', fontSize: 'Z2' },
  '@mobileM': { columns: 'repeat(1, 1fr)' },
  '@tablet': { padding: 'B' },
  '@tabletM': { hide: true },
  '@print': {},
  '@tv': {},
}
```

**Note:** Nesting inside @media properties will not work. Properties can be replaced only at the same level.

---

## Template String Binding `{{ }}`

State values can be bound using mustache-style templates:

```js
{
  Strong: { text: '{{moniker}}' },                  // Binds to s.moniker
  Version: { text: '({{ client_version }})' },      // Binds to s.client_version
  Avatar: { src: '{{ protocol }}.png' },             // In URLs
  Input: { value: '{{ protocol }}' },                // In form values
}
```

---

## Dynamic Props as Functions

Props can be a function receiving `(el, s)` to compute values dynamically:

```js
// Individual prop as function
{
  text: (el, s) => `Count: ${s.fleet?.length || 0}`,
  hide: (el, s) => !s.thread.length,
  src: (el, s) => s.root.user?.picture || 'default.png',
  href: (el, s) => '/network/' + s.protocol,
  background: (el, s) => el.call('getStatusColor', s.status),
}

// Dynamic childProps as function
childProps: (el, s) => ({
  flex: s.value,
  background: el.call('stringToHexColor', s.caption),
})
```

---

## `content` Property (Dynamic Rendering)

```js
export const Modal = {
  content: (el, s) => ({
    Box:
      (s.root.modal && {
        extends: s.root.modal, // Extends from a page path dynamically
        onClick: (ev) => ev.stopPropagation()
      }) ||
      {}
  })
}
```

---

## `hide` Property

```js
hide: true // Always hidden
hide: (el, s) => !s.public_key // Conditionally hidden
hide: () => window.location.pathname === '/' // Based on URL
```

---

## `if` Property (Conditional Rendering)

```js
{
  LabelTag: {
    if: (el, s) => s.label,                // Only render if s.label exists
    text: (el, s) => s.label || 'true',
  }
}
```

---

## `html` Property (Raw HTML)

```js
{
  html: (el, s) => s.message
} // Render raw HTML content
```

---

## `tag` Property Override

```js
{
  tag: 'canvas'
} // Render as <canvas>
{
  tag: 'form'
} // Render as <form>
{
  tag: 'search'
} // Render as <search>
{
  tag: 'strong'
} // Override auto-mapped tag
```

---

## `attr` Property for HTML Attributes

```js
export const Dropdown = {
  attr: { dropdown: true }, // Sets data attribute on DOM element
  tag: 'section'
}
```

---

## `style` Property for Raw CSS

Use `style` for CSS that can't be expressed with props:

```js
{
  style: {
    '&:hover': { opacity: '1 !important' },
    mixBlendMode: 'luminosity',
    userSelect: 'none',
  },
}
```

---

## `state` Property for Scoping

Bind a subtree to a specific state key:

```js
{
  Flex: {
    state: 'network',                       // This subtree reads from s.network
    Box: { ValidatorInfo: {} },
  },
}
```

---

## Spacing Math

Tokens can be combined with arithmetic:

```js
padding: 'A+V2' // A plus V2
margin: '-Y1 -Z2 - auto' // Negative values, auto
right: 'A+V2' // Combined tokens
margin: '- W B+V2 W' // Mix of dash (0), tokens, and math
```

---

## Color Syntax with Opacity & Lightness

```js
// Format: 'colorName opacity lightness'
background: 'black .001' // black with 0.1% opacity
background: 'deepFir 1 +5' // deepFir, 100% opacity, +5 lightness
background: 'gray2 0.85 +16' // gray2, 85% opacity, +16 lightness
background: 'env .25' // color from design system at 25% opacity
color: 'white 0.65' // white at 65% opacity
borderColor: 'gray3 0.65' // gray3 at 65% opacity
boxShadow: 'black .20, 0px, 5px, 10px, 5px' // shadow with color opacity
```

---

## Border Syntax

```js
// String syntax: 'colorName size style'
{ border: 'oceanblue 1px solid' }

// Array syntax for individual sides
{ borderTop: ['oceanblue 0.5', '1px', 'solid'] }

// Individual border properties
{
  borderWidth: '0 0 1px 0',
  borderStyle: 'solid',
  borderColor: '--theme-document-dark-background',
}
```

---

## Shadow Syntax

```js
// Format: 'colorName x y depth offset'
{
  shadow: 'black A A C'
}
{
  boxShadow: 'black .20, 0px, 5px, 10px, 5px'
}
```

---

## Transition Syntax

```js
{
  transition: 'background, defaultBezier, A'
}
{
  transition: 'A defaultBezier opacity'
}
```

---

## Real-World Examples & Patterns

### Backend Fetch & API Integration

Functions use `this` context (bound to the calling element). Define a central fetch function and call it from other functions:

```js
// functions/fetch.js — central API wrapper
export const fetch = async function fetch(
  method = 'GET',
  path = '',
  data,
  opts = {}
) {
  const options = {
    method: method || 'POST',
    headers: { 'Content-Type': 'application/json' },
    ...opts
  }

  const ENDPOINT = 'https://api.example.com/api' + path

  if (data && (options.method === 'POST' || options.method === 'PUT')) {
    options.body = JSON.stringify(data)
  }

  const res = await window.fetch(ENDPOINT, options)
  if (!res.ok) {
    const errorText = await res.text()
    throw new Error(`HTTP ${res.status}: ${errorText}`)
  }

  const contentType = res.headers.get('content-type')
  if (contentType && contentType.includes('application/json')) return res.json()
  return res.text()
}

// functions/read.js — simple GET wrapper
export const read = async function read(path) {
  return await this.call('fetch', 'GET', path)
}
```

### CRUD Operations Pattern

```js
// functions/add.js — create new item via form
export const add = async function addNew(item = 'network') {
  const formData = new FormData(this.node)
  let data = Object.fromEntries(formData)

  const res = await this.call('fetch', 'POST', '/' + item, data)
  if (!res) return

  this.state.root.quietUpdate({ modal: null })
  this.call('router', '/item/' + res.id, this.__ref.root)
  this.node.reset()
}

// functions/edit.js — update item
export const edit = async function edit(item = 'network', protocol) {
  const formData = new FormData(this.node)
  let data = Object.fromEntries(formData)

  const res = await this.call('fetch', 'PUT', `/${protocol}`, data)
  this.state.root.quietUpdate({ modal: null })
  this.call('router', '/network/' + protocol, this.__ref.root)
  this.node.reset()
}

// functions/remove.js — delete item
export const remove = async function remove(item = 'network', protocol) {
  const res = await this.call('fetch', 'DELETE', '/' + protocol)
  if (!res) return
  this.state.root.quietUpdate({ modal: null })
  this.call('router', '/dashboard', this.__ref.root)
}
```

### Data Loading & State Initialization

```js
// functions/setInitialData.js — bulk state replace without triggering extra renders
export const setInitialData = function setInitialData(data = {}) {
  this.state.replace(data, {
    preventUpdate: true,
    preventUpdateListener: true
  })
  this.update({}, { preventUpdateListener: true })
}

// Usage in a page onRender:
onRender: (el, s) => {
  window.requestAnimationFrame(async () => {
    const fleet = await el.call('read')
    el.call('setInitialData', { fleet })
  })
}
```

### Authentication & Routing Guard

```js
// functions/auth.js
export const auth = async function auth() {
  if (this.state.root.success) {
    if (window.location.pathname === '/') {
      this.call('router', '/dashboard', this.__ref.root)
    }
  } else {
    if (window.location.pathname === '/') {
      const res = await this.call('fetch', 'GET', '', null, {
        route: '/auth/me'
      })
      if (res.success) {
        this.state.root.update(res)
        this.call('router', '/dashboard', this.__ref.root)
      }
      return res
    } else {
      this.call('router', '/', this.__ref.root)
    }
  }
}
```

### Form Submission with Login

```js
// pages/signin.js — async form submission with error handling
export const signin = {
  flow: 'y',
  align: 'center',
  height: '100%',
  margin: 'auto',
  LoginWindow: {
    onSubmit: async (ev, el, s) => {
      ev.preventDefault()
      s.update({ loading: true })
      const { identifier, password } = s
      try {
        const loginResult = await el.sdk.login(identifier, password)
        await el.call('initializeUserSession', { loginData: loginResult })
        el.router('/dashboard', el.getRoot())
      } catch (error) {
        el.call('openNotification', {
          title: 'Failed to sign in',
          message: error.message,
          type: 'error'
        })
        s.update({ loading: false })
      }
    }
  }
}
```

---

### Dynamic Children from State

```js
// Table rendering rows from state
export const Table = {
  extends: 'Flex',
  childExtends: ['NetworkRow', 'Link'], // Multiple extends as array
  width: '100%',
  children: (el, s) => s.fleet, // Dynamic children from state
  childrenAs: 'state', // Pass each item as child's state
  flow: 'y'
}

// List with childProps controlling child structure
export const ValidatorsList = {
  childrenAs: 'state',
  childProps: {
    flexFlow: 'y',
    ValidatorRow: {},
    ValidatorContent: {
      padding: 'B C3 C3',
      hide: (el, s) => !s.isActive // Conditional visibility
    }
  },
  gap: 'Z',
  flexFlow: 'y'
}
```

---

### Modal Routing Pattern

Modals are rendered via root state and page paths:

```js
// Open modal — set state to page path
onClick: (ev, el, s) => {
  s.update({ modal: '/add-network' })
}

// Modal component — reads root state and renders page content
export const Modal = {
  props: (el, s) => ({
    position: 'absolute',
    inset: '0',
    background: 'black 0.95 +15',
    backdropFilter: 'blur(3px)',
    zIndex: 99,
    ...(s.root?.modal
      ? { opacity: 1, visibility: 'visible' }
      : { opacity: 0, visibility: 'hidden' }),
    onClick: (ev, el, s) => {
      s.root.update({ modal: false })
      el.lookup('Modal').removeContent()
    }
  }),
  content: (el, s) => ({
    Box:
      (s.root.modal && {
        extend: s.root.modal,
        props: { onClick: (ev) => ev.stopPropagation() }
      }) ||
      {}
  })
}

// Close modal
this.state.root.quietUpdate({ modal: null })
```

---

### Form with Select Fields

```js
export const addNetwork = {
  extends: 'FormModal',
  tag: 'form',
  gap: 'C',
  onSubmit: async (ev, el, s) => {
    ev.preventDefault()
    await el.call('add', 'network')
  },
  Hgroup: { H: { text: 'Add Network' }, P: { text: 'Add new network' } },
  Form: {
    columns: 'repeat(2, 1fr)',
    '@mobileM': { columns: 'repeat(1, 1fr)' },
    children: () => [
      {
        gridColumn: '1 / span 2',
        Caption: { text: 'Protocol' },
        Field: {
          Input: {
            name: 'protocol',
            required: true,
            placeholder: 'E.g. Polygon',
            type: 'text'
          }
        }
      },
      {
        Caption: { text: 'Network Layer' },
        Field: {
          Input: null, // Remove default Input
          Select: {
            padding: 'A A2',
            round: 'C1',
            theme: 'field',
            Selects: {
              name: 'network_layer',
              required: true,
              children: [
                { text: 'Please select', selected: true, disabled: 'disabled' },
                { text: 'L1', value: 'L1' },
                { text: 'L2', value: 'L2' }
              ]
            }
          }
        }
      }
    ]
  },
  Button: { text: 'Save', theme: 'primary', type: 'submit' }
}
```

---

### Multiple Extends (Array)

```js
// Extend from multiple components
Link: {
  extends: ['Link', 'IconButton'],
  paddingInline: 'A Z1',
  icon: 'chevron left',
  href: '/',
}

// childExtends with array
export const Table = {
  extends: 'Flex',
  childExtends: ['NetworkRow', 'Link'],
}
```

---

### Inline childExtends (Object)

```js
export const AIThread = {
  children: (el, s) => s.thread,
  childrenAs: 'state',
  childExtends: {
    props: (el, s) => ({
      alignSelf: s.role === 'user' ? 'start' : 'end',
      onRender: (el) => {
        const t = setTimeout(() => {
          el.node.scrollIntoView()
          clearTimeout(t)
        }, 35)
      }
    }),
    content: (el, s) => {
      if (s.role === 'user') {
        return {
          extends: 'AIMessage',
          shape: 'bubble',
          round: 'X C C C',
          Message: { html: (el, s) => s.message }
        }
      }
      return { extends: 'P', color: 'paragraph', html: (el, s) => s.message }
    }
  }
}
```

---

### Suffix Naming for Multiple Same-Type Children

Use underscore suffix to create multiple instances of the same component:

```js
{
  NavButton: { text: 'All Networks', icon: 'chevron left', href: '/' },
  NavButton_add: {                                   // Same component, different instance
    icon: 'plus',
    text: 'Add node',
    margin: '- - - auto',
    onClick: (ev, el, s) => { s.root.update({ modal: '/add-node' }) },
  },
  IconButton_add: { theme: 'button', icon: 'moreVertical' },
  Input_trigger: { visibility: 'hidden' },
}
```

---

### Grid Layout Component

```js
export const NetworkRow = {
  extends: 'Grid',
  templateColumns: '3fr 3fr 3fr 2fr 2fr',
  gap: 'Z2',
  href: (el, s) => '/network/' + s.protocol,
  align: 'center',
  padding: 'A1 A2',
  childProps: { gap: 'Z2', flexAlign: 'center' },
  borderWidth: '0 0 1px 0',
  borderStyle: 'solid',
  borderColor: '--theme-document-dark-background',
  cursor: 'pointer',
  transition: 'background, defaultBezier, A',
  ':hover': { background: 'deepFir' },
  ':active': { background: 'deepFir 1 +5' },
  Name: {
    Avatar: { src: '{{ protocol }}.png', boxSize: 'B1' },
    Title: { tag: 'strong', text: (el, s) => s.protocol }
  },
  Env: {
    childExtends: 'NetworkRowLabel',
    childProps: { background: 'env .25' },
    children: (el, s) => s.parsed?.env
  }
}
```

---

### External Dependencies & Chart.js Integration

```js
// dependencies.js — declare external packages with fixed versions
export default { 'chart.js': '4.4.9' }

// Chart component using canvas tag with onRender cleanup
export const Chart = {
  tag: 'canvas',
  minWidth: 'G',
  minHeight: 'D',
  onRender: async (el, s) => {
    const { Chart } = await import('chart.js')
    const ctx = el.node.getContext('2d')

    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        /* chart data */
      },
      options: { responsive: true, maintainAspectRatio: false }
    })

    const interval = setInterval(() => {
      chart.update('none')
    }, 1100)

    // Return cleanup function — called when element is removed
    return () => {
      clearInterval(interval)
      chart.destroy()
    }
  }
}
```

---

### onRender Cleanup Function

When `onRender` returns a function, it's called when the element is removed:

```js
{
  onRender: (el, s) => {
    const interval = setInterval(() => {
      /* ... */
    }, 1000)
    const handler = (e) => {
      /* ... */
    }
    window.addEventListener('resize', handler)

    // Cleanup function
    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', handler)
    }
  }
}
```

---

### Lookup Pattern

```js
// Lookup by key name
const Dropdown = element.lookup('Dropdown')

// Lookup by predicate function
const Dropdown = element.lookup((el) => el.props.isDropdownRoot)

// Lookup for ancestor navigation
const modal = el.lookup('Modal')
modal.removeContent()
```

---

### Dropdown Pattern

```js
{
  extends: 'DropdownParent',
  Button: {
    text: (el, s) => s.isUpdate ? 'Updates' : 'All validators',
    theme: 'transparent',
    Icon: { name: 'chevronDown', order: 2 },
  },
  Dropdown: {
    left: '-X',
    backdropFilter: 'blur(3px)',
    background: 'softBlack .9 +65',
    childExtends: 'Button',
    childProps: { theme: 'transparent', align: 'start', padding: 'Z2 A' },
    flexFlow: 'y',
  },
}
```

---

### AI Chat Thread Pattern

```js
export const Prompt = {
  state: { keyword: '', thread: [], images: [] },
  tag: 'form',
  onSubmit: (ev, el, s) => {
    ev.preventDefault()
    const value = s.keyword
    if (!value) return

    s.apply((s) => {
      s.thread.push({ role: 'user', message: value })
      s.keyword = ''
    })

    el.Relative.Textarea.value = '' // Direct DOM access for form reset

    setTimeout(async () => {
      const res = await el.call('giveMeAnswer', value)
      s.apply((s) => {
        s.thread.push({ role: 'agent', message: res.summary })
      })
    }, 1000)
  },
  Relative: {
    Textarea: {
      placeholder: '"Ask, Search, Prompt..."',
      onInput: (ev, el, s) => {
        let prompt = el.node.value.trim()
        s.replace({ keyword: prompt })
      },
      onKeydown: (ev, el, s) => {
        if (ev.key === 'Enter' && !ev.shiftKey) ev.preventDefault()
        if (ev.key === 'Escape') {
          ev.stopPropagation()
          el.node.blur()
        }
      }
    },
    Submit: { extends: 'SquareButton', type: 'submit', icon: 'check' }
  },
  AIThread: { hide: (el, s) => !s.thread.length }
}
```

---

### Uptime Visualization (Generated Children)

```js
export const Uptime = {
  extends: 'Flex',
  flow: 'y',
  gap: 'Z',
  Title: { fontSize: 'Z', text: 'Uptime', order: -1 },
  Flex: {
    gap: 'X',
    flow: 'row wrap',
    height: '2.8em',
    overflow: 'hidden',
    children: (el, s) => new Array(300).fill({}), // Generate 300 empty children
    childProps: {
      minWidth: 'Z1',
      boxSize: 'Z1',
      background: 'green .3',
      border: '1px, solid, green',
      round: 'W'
    },
    ':hover > div': { opacity: 0.5 }
  }
}
```

---

### Component Extending Base Symbols

```js
export const H1 = {
  extends: 'smbls.H1',
  color: 'title'
}
```

---

## Creating Custom Properties (Transformers)

```js
// Define a custom property transformer
export default function paddingEm(val, element, state, context) {
  const { unit } = element.props
  const paddingEm = unit === 'em' ? val / 16 + 'em' : val
  return { paddingEm }
}

// Use in components
{
  paddingEm: 12
}
```

---

## CLI & Syncing

```sh
# One-time fetch from platform
smbls fetch

# One-time push to platform
smbls push

# Listen for changes (continuous sync)
smbls sync
```

### symbols.json Configuration

```json
{
  "key": "your-project-key",
  "distDir": "./smbls",
  "framework": "symbols",
  "packageManager": "npm"
}
```

`distDir` points to the folder where Symbols CLI creates files. If not present, Symbols uses a temporary file.

---

## Design System Articles Reference

### Font Configuration

```js
// Font properties: url, fontWeight, fontStretch, isVariable
export default {
  FONT: {
    Inter: {
      url: 'https://fonts.googleapis.com/css2?family=Inter:wght@100..900',
      isVariable: true,
      fontWeight: '100 900'
    }
  },
  FONT_FAMILY: {
    primary: 'Inter, sans-serif'
  }
}
```

### Grid Configuration

```js
export default {
  GRID: {
    columns: 12,
    gutter: 'A',
    maxWidth: '1200px'
  }
}
```

### Icon System

```js
// Icons are defined as SVG strings with camelCase keys
export default {
  ICONS: {
    arrowDown: '<svg>...</svg>',
    chevronLeft: '<svg>...</svg>',
    search: '<svg>...</svg>'
  }
}
```

### Media Query Configuration

```js
// Media queries are responsive breakpoints
export default {
  MEDIA: {
    mobileXS: '320px',
    mobileS: '375px',
    mobileM: '425px',
    tablet: '768px',
    tabletM: '960px',
    laptop: '1024px',
    desktop: '1440px'
  }
}
```

### Shape Configuration

```js
// Shapes use CSS clip-path for custom shapes
export default {
  SHAPE: {
    tag: {
      /* clip-path polygon */
    },
    tooltip: {
      /* clip-path with direction modifiers */
    },
    bubble: {
      /* rounded bubble shape */
    }
  }
}
```

### Animation Configuration

```js
// Keyframe animations defined in design system
export default {
  ANIMATION: {
    fadeIn: {
      from: { opacity: 0 },
      to: { opacity: 1 }
    },
    shake: {
      '0%': { transform: 'translateX(0)' },
      '25%': { transform: 'translateX(-5px)' },
      '50%': { transform: 'translateX(5px)' },
      '75%': { transform: 'translateX(-5px)' },
      '100%': { transform: 'translateX(0)' }
    }
  }
}
```

### Timing Configuration

```js
// Timing sequence for animation durations and bezier curves
export default {
  TIMING: {
    base: 300,
    ratio: 1.618,
    // Custom bezier curves
    defaultBezier: 'cubic-bezier(.19,.22,.4,.86)'
  }
}
```

### Unit Configuration

```js
// CSS unit configuration
export default {
  // Unit options: 'em', 'px', 'vmax'
  unit: 'em'
}
```

---

## DO's and DON'Ts

### DO:

- Use `extends` and `childExtends` (v3 plural form)
- Flatten all props directly into the component object
- Use `onEventName` prefix for all events
- Reference components by PascalCase key name in the tree
- Use `el.call('functionName')` for global utilities
- Use `el.scope.fn()` for local helpers
- Use design system tokens (`padding: 'A'`, `color: 'primary'`)
- Keep all folders completely flat
- One export per file, name matches filename
- Components are always plain objects
- Use `if` for conditional rendering, `hide` for conditional visibility

### DON'T:

- Use `extend` or `childExtend` (v2 singular — BANNED)
- Use `props: { }` wrapper (v2 — BANNED)
- Use `on: { }` wrapper (v2 — BANNED)
- Import components/functions between project files
- Create function-based components
- Create subfolders inside any folder
- Use default exports for components (use named exports)
- Mix framework-specific code (React, Vue, etc.)
- Hardcode styles — use design tokens
- Add top-level `import`/`require` for project files
- Nest properties inside @media queries (replace at same level only)

---

## CRITICAL: Icon Rendering in Buttons (Verified Patterns)

This section documents **verified working patterns** for rendering icons. Incorrect patterns cause silent failures where buttons render as empty shapes.

### The `Icon` Component Limitation

The `Icon` component (sprite-based) **does NOT render** when nested inside `Button` or `Flex+tag:button` elements. This is a known limitation.

```js
// BROKEN — Icon will NOT render inside Button or Flex+tag:button
MyBtn: {
  extends: 'Button',
  Icon: { extends: 'Icon', name: 'heart' }  // ❌ Silent failure
}

MyBtn: {
  extends: 'Flex',
  tag: 'button',
  Icon: { extends: 'Icon', name: 'heart' }  // ❌ Silent failure
}
```

### CORRECT: Use `Svg` Atom with `html` Prop

The `Svg` atom with the `html` prop is the **only reliable way** to render icons inside button-like elements. The child key **must be named `Svg`** (not `FlameIcon`, `MyIcon`, etc.) for auto-resolution to work.

```js
// CORRECT — Svg atom with html prop inside Flex+tag:button
MyBtn: {
  extends: 'Flex',
  tag: 'button',
  flexAlign: 'center center',
  cursor: 'pointer',
  background: 'transparent',
  border: 'none',

  Svg: {
    viewBox: '0 0 24 24',
    width: '22',
    height: '22',
    color: 'flame',
    html: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill="currentColor"/>'
  }
}
```

### `html` Prop Only Works on `Svg` Atom

The `html` prop sets `innerHTML` **only on the `Svg` atom**. It does NOT work on `Box`, `Flex`, or `Button`.

```js
// BROKEN — html prop ignored on Flex/Box/Button
{ extends: 'Flex', html: '<svg>...</svg>' }  // ❌

// CORRECT — html prop works on Svg atom
{ Svg: { viewBox: '0 0 24 24', html: '<path .../>' } }  // ✅
```

### Standalone Svg (not inside a button)

When using `Svg` as a standalone element (e.g., logo icon in a header), the key name must be `Svg` or use `extends: 'Svg'`:

```js
LogoArea: {
  extends: 'Flex',
  flexAlign: 'center center',
  gap: 'Z',

  Svg: {                          // Key IS 'Svg' — auto-resolves
    viewBox: '0 0 24 24',
    width: '22', height: '22',
    color: 'flame',
    html: '<path d="..." fill="currentColor"/>'
  },

  LogoText: { extends: 'Text', text: 'myapp' }
}
```

### Nav Tabs with Icon + Label

For navigation tabs that need both an icon and a text label:

```js
NavItem: {
  extends: 'Flex',
  tag: 'button',
  flow: 'y',
  flexAlign: 'center center',
  gap: 'Y',
  flex: 1,
  background: 'transparent',
  border: 'none',
  cursor: 'pointer'
},

DiscoverTab: {
  extends: 'NavItem',
  Svg: {
    viewBox: '0 0 24 24', width: '22', height: '22', color: 'flame',
    html: '<path d="..." fill="currentColor"/>'
  },
  Label: { extends: 'Text', text: 'Discover', fontSize: 'X', color: 'flame' }
}
```

---

## CRITICAL: `el.call()` Function Context

When a function is called via `el.call('functionName', arg1, arg2)`:

- The **DOMQL element** is passed as `this` inside the function — NOT as the first argument
- `arg1`, `arg2` etc. are the additional arguments
- Access the DOM node via `this.node` (not `this.__node`)

```js
// functions/myFunction.js
export const myFunction = function myFunction (arg1) {
  const el = this           // 'this' IS the DOMQL element
  const node = this.node    // DOM node
  // arg1 is the first argument passed to el.call('myFunction', arg1)
}

// In component — call without passing el as argument
onClick: (e, el) => el.call('myFunction', someArg)  // ✅ correct
onClick: (e, el) => el.call('myFunction', el, someArg)  // ❌ wrong — el passed twice
```

### Preventing Double Initialization in `onRender`

`onRender` fires on every render cycle. Use a guard flag to run imperative logic only once:

```js
CardStack: {
  extends: 'Box',
  flex: 1,
  position: 'relative',

  onRender: (el) => {
    if (el.__initialized) return   // Guard against double-init
    el.__initialized = true
    el.call('initMyLogic')
  }
}
```

### Accessing DOM Node in Functions

```js
export const initMyLogic = function initMyLogic () {
  const node = this.node                        // ✅ correct
  if (!node || !node.appendChild) return        // Guard for safety

  // Imperative DOM manipulation
  node.innerHTML = ''
  const div = document.createElement('div')
  node.appendChild(div)
}
```

---

## CRITICAL: Flex Layout Properties

Use `flexAlign` (not `align`) for combined alignItems + justifyContent shorthand. Use `flow` (not `flexFlow`) for direction shorthand.

```js
// CORRECT
{ extends: 'Flex', flexAlign: 'center center', flow: 'y' }

// Also valid (explicit)
{ extends: 'Flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }

// WRONG — 'align' is not a valid shorthand in v3
{ extends: 'Flex', align: 'center center' }  // ❌ has no effect
```

---

## CRITICAL: Tab/View Switching with DOM IDs

For multi-tab layouts where views are shown/hidden imperatively, assign `id` props to views and tabs, then use `document.getElementById` in switch functions:

```js
// In page definition — assign ids
ContentArea: {
  DiscoverView: { id: 'view-discover', position: 'absolute', inset: 0, display: 'flex' },
  MessagesView: { id: 'view-messages', position: 'absolute', inset: 0, display: 'none' }
},

BottomNav: {
  DiscoverTab: {
    id: 'tab-discover',
    onClick: (e, el) => el.call('switchTab', 'discover')
  }
}

// functions/switchTab.js
export const switchTab = function switchTab (tab) {
  const views = ['discover', 'messages', 'likes', 'profile']
  views.forEach(v => {
    const viewEl = document.getElementById('view-' + v)
    const navEl = document.getElementById('tab-' + v)
    if (viewEl) viewEl.style.display = v === tab ? 'flex' : 'none'
    if (navEl) {
      const svg = navEl.querySelector('svg')
      const span = navEl.querySelector('span')
      const color = v === tab ? '#FF4458' : '#777'
      if (svg) svg.style.color = color
      if (span) span.style.color = color
    }
  })
}
```
