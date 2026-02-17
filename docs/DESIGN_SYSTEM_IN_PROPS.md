# Using the design system in props

This document explains how design system tokens are used directly in DOMQL v3 props.

## Core idea

Props are flattened and accept design tokens as strings. Scratch resolves tokens into CSS values via sequences, themes, and colors.

```js
Card: {
  padding: 'B C',
  background: 'primary 0.08',
  borderRadius: 'B',
  shadow: 'soft',
  fontSize: 'B',
  color: 'title'
}
```

## Spacing tokens

Use spacing tokens for size, spacing, and position:

- `padding`, `margin`, `gap`, `width`, `height`, `minWidth`, `maxWidth`, `minHeight`, `maxHeight`, `borderRadius`

Examples:

```js
Box: { padding: 'A B', margin: 'Z Z2', borderRadius: 'B' }
```

Math is supported:

```js
Box: { padding: 'A+Z', margin: '-B', width: 'C+Z2' }
```

## Typography tokens

Typography tokens map to the typography sequence:

- `fontSize: 'A' | 'B' | 'C'`
- `lineHeight`, `letterSpacing` can be literal values

Example:

```js
Text: { fontSize: 'C', fontWeight: '600' }
```

## Color tokens

Color tokens resolve to CSS variables or RGB values depending on configuration.

Examples:

```js
Text: {
  color: "primary";
}
Box: {
  background: "primary 0.2";
}
Box: {
  background: "primary +6";
}
```

## Theme tokens

Use `theme` to apply a theme object from the design system.

```js
Button: {
  theme: "primary";
}
Button: {
  theme: "primary .active";
}
```

Theme modifiers can be helper states or pseudo selectors defined inside the theme.

## Shadows

Use `shadow` with named values from the design system:

```js
Box: {
  shadow: "soft";
}
```

## Timing tokens

Use timing tokens in transitions and animations:

```js
Box: {
  transition: "opacity, defaultBezier, B";
}
```

## Media queries and cases

Use `@media` keys and case flags in props:

```js
Box: {
  padding: 'C',
  '@mobile': { padding: 'A' },
  isActive: true,
  '.isActive': { background: 'primary' }
}
```

## Icon tokens

Icons are referenced by key in the icon sprite:

```js
Icon: { name: 'chevronRight' }
Button: { icon: 'search', text: 'Search' }
```

## Common rules

- Always keep props flat (no `props` wrapper).
- Use `onX` for events, not `on` objects.
- Use token strings for sizing and colors instead of hardcoded values whenever possible.

---

## Symbols Feedback Conventions

Supplemental conventions are merged into [CLAUDE.md](CLAUDE.md).
