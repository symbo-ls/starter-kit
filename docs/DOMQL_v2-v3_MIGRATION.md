# DOMQL v2 → v3 Migration Guide

This guide covers the key changes when migrating from DOMQL v2 to v3. The main updates focus on flattening object structures, renaming properties, and simplifying the API while maintaining backwards compatibility for most use cases.

---

## Inheritance changes

### Flatten `props` and `on`

**Before:**

```js
{
  props: {
    position: 'absolute',
  },
  on: {
    frame: (e, t) => {},
    render: e => {},
    wheel: (e, t) => {},
    dblclick: (e, t) => {},
  },
}
```

**After:**

```js
{
  position: 'absolute',
  onFrame: (e, t) => {},
  onRender: e => {},
  onWheel: (e, t) => {},
  onDblclick: e => {},
}
```

**Rules:**

- Move all `props` entries one level up into the component object
- Applies to root and nested elements
- Remove the `on` wrapper
- Prefix each event with `on` + `CapitalizedEventName`

---

### Merging `props` inside nested elements

**Before:**

```js
Box: {
  props: {
    '--section-background': '#7a5e0e55',
    id: 'editorjs'
  }
}
```

**After:**

```js
Box: {
  '--section-background': '#7a5e0e55',
  id: 'editorjs'
}
```

- Remove the `props` wrapper and move contents up

---

### All nested objects within `props` stay inline

**Before:**

```js
props: {
  style: {
    height: "100%";
  }
}
```

**After:**

```js
style: {
  height: "100%";
}
```

---

## Naming changes

### Rename `extend` → `extends`

### Rename `childExtend` → `childExtends`

**Before:**

```js
extend: SomeComponent,
childExtend: AnotherComponent
```

**After:**

```js
extends: SomeComponent,
childExtends: AnotherComponent
```

- Property rename only
- No behavioral changes

---

## Functional changes

Child elements are created **only if**:

- `children` array is present, **or**
- Child component keys start with `CapitalCase`

Event logic and all other JavaScript behavior remain unchanged.

### Element creation rules

**Before (v2):**

```js
{
  div: {}, // creates <div>
  Div: {}, // creates <Div>
}
```

**After (v3):**

```js
{
  div: {}, // treated as a plain property, no rendering
  Div: {}, // only way to create keyed children
}
```

- `Div` is equivalent to:

```js
Div: { extends: 'Div' }
```

- Rendering behavior:
  - React → `<Div />`
  - HTML → `<div />`

---

## Summary

DOMQL v3 removes DOMQL-specific wrappers and relies on flat, explicit object structures:

- Removed: `props`, `on`
- Events are flattened and prefixed with `onX`
- `extend` → `extends`
- `childExtend` → `childExtends`
- Only `CapitalCase` keys create child elements

---

## More examples

### From (v2)

```js
{
  extend: 'Flex',
  childExtend: 'ListItem',
  props: {
    position: 'absolute',
  },
  attr: {
    'gs-w': 1,
    'gs-h': 1,
  },
  SectionTitle: {
    text: 'Notes',
  },
  Box: {
    props: {
      '--section-background': '#7a5e0e55',
      id: 'editorjs',
      '& a': {
        color: 'blue',
      },
    },
    on: {
      frame: (e, t) => {},
      render: e => {},
      wheel: (e, t) => {},
      dblclick: (e, t) => { e.stopPropagation() },
    },
  },
}
```

### To (v3)

```js
{
  extends: 'Flex',
  childExtends: 'ListItem',
  position: 'absolute',
  attr: {
    'gs-w': 1,
    'gs-h': 1,
  },
  SectionTitle: {
    text: 'Notes',
  },
  Box: {
    '--section-background': '#7a5e0e55',
    id: 'editorjs',
    '& a': {
      color: 'blue',
    },
    onFrame: (e, t) => {},
    onRender: e => {},
    onWheel: (e, t) => {},
    onDblclick: e => { e.stopPropagation() },
  },
}
```

---

## Symbols Feedback Conventions

Supplemental conventions are merged into [CLAUDE.md](CLAUDE.md).
