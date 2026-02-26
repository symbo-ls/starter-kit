# Built-in atoms and property usage

This document lists the built-in components (atoms and UI kit components) and how their properties are commonly used in Symbols/DOMQL v3.

## Built-in atoms

- `Text` -> <span>
- `Box` -> <div>
- `Flex` -> <div>
- `Grid` -> <div>
- `Link` -> <a>
- `Input` -> <input>
- `Radio` -> <input>
- `Checkbox` -> <input>
- `Svg` -> <svg>
- `Icon` -> <svg> (icon sprite)
- `IconText` -> <div>
- `Button` -> <button>
- `Img` -> <img>
- `Iframe` -> <iframe>
- `Video` -> <video>

## Built-in components (UI kit)

These are the higher-level components shipped in the UI kit. They are composed from atoms and share the same prop rules.

- `Avatar`
- `Button`
- `Dialog`
- `Dropdown`
- `Icon`
- `Input`
- `Link`
- `Notification`
- `Range`
- `Select`
- `Tooltip`

## Property usage by atom

These components all use flattened props (no `props` wrapper) and `onX` events.

### Text

Primary use: inline text content.

Common props:

- `text`: string or binding (e.g. `'{{ title }}'`)
- `color`, `fontSize`, `fontWeight`, `lineHeight`, `letterSpacing`
- `textTransform`, `textDecoration`, `textAlign`
- `maxWidth`, `overflow`, `whiteSpace`

Example:

```js
Text: {
  text: 'Hello',
  fontSize: 'B',
  color: 'title'
}
```

### Box

Primary use: generic container.

Common props:

- `padding`, `margin`, `border`, `borderRadius`, `background`, `shadow`
- `width`, `height`, `minWidth`, `maxWidth`, `minHeight`, `maxHeight`
- `position`, `inset`, `top`, `right`, `bottom`, `left`
- `overflow`, `zIndex`

Example:

```js
Box: {
  padding: 'A B',
  background: 'surface',
  borderRadius: 'B'
}
```

### Flex

Primary use: layout container using flexbox.

Common props:

- `flow` or `flexFlow`
- `align` or `flexAlign`
- `alignItems`, `justifyContent`, `gap`
- `flex`, `flexGrow`, `flexShrink`, `flexBasis`
- `wrap`

Example:

```js
Flex: {
  flow: 'y',
  align: 'center space-between',
  gap: 'B'
}
```

### Grid

Primary use: layout container using CSS grid.

Common props:

- `columns` or `gridTemplateColumns`
- `rows` or `gridTemplateRows`
- `gap`, `columnGap`, `rowGap`
- `gridAutoFlow`, `gridAutoColumns`, `gridAutoRows`

Example:

```js
Grid: {
  columns: 'repeat(3, 1fr)',
  gap: 'A'
}
```

### Link

Primary use: navigation or external link.

Common props:

- `href`, `target`, `rel`
- `text` or child content
- `color`, `textDecoration`
- `onClick`

Example:

```js
Link: {
  text: 'Docs',
  href: '/docs'
}
```

### Input

Primary use: text input.

Common props:

- `type`, `name`, `value`, `placeholder`, `required`, `disabled`
- `onInput`, `onChange`, `onKeydown`
- `padding`, `background`, `border`, `round`

Example:

```js
Input: {
  type: 'text',
  name: 'title',
  placeholder: 'Enter title'
}
```

### Radio and Checkbox

Primary use: selectable inputs.

Common props:

- `name`, `value`, `checked`, `disabled`
- `onChange`

Example:

```js
Checkbox: { name: 'agree', checked: true }
```

### Svg

Primary use: raw SVG container.

Common props:

- `html` (inline SVG markup)
- `width`, `height`, `viewBox`, `fill`, `stroke`

Example:

```js
Svg: { html: '<path d="..." />', viewBox: '0 0 24 24' }
```

### Icon

Primary use: icon from sprite.

Common props:

- `name` (sprite symbol id)
- `size` or `boxSize`
- `color`

Example:

```js
Icon: { name: 'chevronRight', boxSize: 'A' }
```

### IconText

Primary use: icon + text combo.

Common props:

- `icon`, `text`
- `gap`, `align`, `color`

Example:

```js
IconText: { icon: 'search', text: 'Search', gap: 'Z' }
```

### Button

Primary use: actionable control.

Common props:

- `text`, `icon`, `type`, `disabled`
- `theme`, `padding`, `round`
- `onClick`, `onSubmit`

Example:

```js
Button: { text: 'Save', theme: 'primary', type: 'submit' }
```

### Img

Primary use: image element.

Common props:

- `src`, `alt`, `loading`
- `width`, `height`, `boxSize`, `objectFit`

Example:

```js
Img: { src: '/logo.png', alt: 'Logo', boxSize: 'B' }
```

### Iframe

Primary use: embedded content.

Common props:

- `src`, `title`, `allow`, `sandbox`
- `width`, `height`, `border`

Example:

```js
Iframe: { src: 'https://example.com', width: '100%', height: '300px' }
```

### Video

Primary use: video player.

Common props:

- `src`, `poster`, `controls`, `autoplay`, `muted`, `loop`
- `width`, `height`, `objectFit`

Example:

```js
Video: { src: '/demo.mp4', controls: true, width: '100%' }
```

## Cross-cutting props

All atoms can also use:

- `@media` keys (e.g. `@mobile`)
- pseudo selectors (e.g. `:hover`, `:active`)
- conditional cases (e.g. `.isActive`, `!isActive`)
- `childProps` for one-level child overrides
- `children` arrays or nested object trees
- `onInit`, `onRender`, `onUpdate`, `onStateUpdate`

---

## Symbols Feedback Conventions

Supplemental conventions are merged into [CLAUDE.md](CLAUDE.md).
