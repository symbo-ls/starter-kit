# Symbols / DOMQL v3 — AI Agent Instructions

You are working inside a **Symbols/DOMQL v3** project. These rules are absolute and override any general coding instincts. Violations cause silent failures (black page, nothing renders).

---

## 1. Components are OBJECTS — never functions

```js
// CORRECT
export const Header = { extends: 'Flex', padding: 'A' }

// WRONG — never
export const Header = (el, state) => ({ padding: 'A' })
```

---

## 2. NO imports between project files — EVER

Components reference each other by PascalCase key name in the tree. No `import` statements between `components/`, `pages/`, `functions/`, etc.

```js
// WRONG
import { Navbar } from './Navbar.js'

// CORRECT — just use the key name in the tree
Nav: { extends: 'Navbar' }
```

---

## 3. `components/index.js` — use `export *` NOT `export * as`

`export * as Foo` wraps everything in a namespace object and **breaks component resolution entirely**.

```js
// CORRECT
export * from './Navbar.js'
export * from './PostCard.js'

// WRONG — this breaks everything
export * as Navbar from './Navbar.js'
```

---

## 4. Pages extend `'Page'`, not `'Flex'` or `'Box'`

```js
// CORRECT
export const main = { extends: 'Page', ... }

// WRONG
export const main = { extends: 'Flex', ... }
```

---

## 5. `pages/index.js` — imports ARE allowed here (it's the registry)

```js
import { main } from './main.js'
export default { '/': main }
```

This is the **only** file where cross-file imports are permitted.

---

## 6. Tab / view switching — use DOM IDs + a function, NOT reactive `display` bindings

Reactive `display: (el, s) => ...` on multiple full-page trees causes rendering failures. Use the DOM ID pattern instead:

```js
// In page definition — assign ids to views
HomeView: { id: 'view-home', extends: 'Flex', ... },
ExploreView: { id: 'view-explore', extends: 'Flex', display: 'none', ... },

// In Navbar onClick
onClick: (e, el) => { el.call('switchView', 'explore') }

// functions/switchView.js
export const switchView = function switchView(view) {
  ['home', 'explore', 'profile'].forEach(function(v) {
    const el = document.getElementById('view-' + v)
    if (el) el.style.display = v === view ? 'flex' : 'none'
  })
}
```

---

## 7. `el.call('fn', arg)` — element is `this` inside the function, NOT the first arg

```js
// functions/myFn.js
export const myFn = function myFn(arg1) {
  const node = this.node  // 'this' is the DOMQL element
}

// In component
onClick: (e, el) => el.call('myFn', someArg)  // CORRECT
onClick: (e, el) => el.call('myFn', el, someArg)  // WRONG — el passed twice
```

---

## 8. Icon rendering — NEVER use `Icon` inside `Button` or `Flex+tag:button`

Use `Svg` atom with `html` prop instead. Key MUST be named `Svg`.

```js
// CORRECT
MyBtn: {
  extends: 'Flex', tag: 'button', flexAlign: 'center center', cursor: 'pointer',
  Svg: { viewBox: '0 0 24 24', width: '22', height: '22',
    html: '<path d="..." fill="currentColor"/>' }
}

// WRONG — Icon will NOT render inside Button
MyBtn: { extends: 'Button', Icon: { name: 'heart' } }
```

---

## 9. Use `flexAlign` not `align` for Flex shorthand

```js
{ extends: 'Flex', flexAlign: 'center center' }  // CORRECT
{ extends: 'Flex', align: 'center center' }       // WRONG — no effect
```

---

## 10. State — use `s.update()`, never mutate directly

```js
onClick: (e, el, s) => s.update({ count: s.count + 1 })  // CORRECT
onClick: (e, el, s) => { s.count = s.count + 1 }          // WRONG — no re-render
```

Root-level state (global): `s.root.update({ key: val })`

---

## 11. v3 syntax — never use v2

| v3 ✅ | v2 ❌ |
|---|---|
| `extends: 'X'` | `extend: 'X'` |
| `childExtends: 'X'` | `childExtend: 'X'` |
| `onClick: fn` | `on: { click: fn }` |
| props flattened at root | `props: { ... }` wrapper |

---

## 12. All folders are flat — no subfolders

```
components/Navbar.js       ✅
components/nav/Navbar.js   ❌
```

---

## 13. `onRender` — guard against double-init

```js
onRender: (el) => {
  if (el.__initialized) return
  el.__initialized = true
  // imperative logic here
}
```

---

## 14. `childExtends` — MUST be a named component string, never an inline object

Inline `childExtends` objects cause ALL property values to be concatenated as visible text content on every child element.

```js
// CORRECT — reference a named component
childExtends: 'NavLink'

// WRONG — dumps all prop values as raw text on every child
childExtends: {
  tag: 'button',
  background: 'transparent',
  border: '2px solid transparent',  // renders as visible text!
  color: 'white'
}
```

Define the shared style as a named component in `components/`, register it in `components/index.js`, then reference it by name.

---

## 15. Color tokens — NO opacity modifier syntax

`color: 'white .7'` is NOT valid — Symbols renders it as raw text content.
Define named tokens in `designSystem/COLOR.js` instead:

```js
// designSystem/COLOR.js
export default {
  whiteMuted: 'rgba(255,255,255,0.7)',
  whiteSubtle: 'rgba(255,255,255,0.6)',
  whiteFaint:  'rgba(255,255,255,0.5)',
}

// In component — CORRECT
{ color: 'whiteMuted' }

// WRONG — renders as literal text, not a style
{ color: 'white .7' }
{ color: 'black .5' }
```

---

## 15. Border shorthand — split into individual props

`border: '2px solid transparent'` in `childExtends` or any Symbols prop renders the raw string as text content. Always split:

```js
// CORRECT
{ borderWidth: '2px', borderStyle: 'solid', borderColor: 'transparent' }

// WRONG — raw string appears as visible text
{ border: '2px solid transparent' }
```

`border: 'none'` is the only shorthand that works safely.

---

## Project structure quick reference

```
smbls/
├── index.js                  # export * as components, export default pages, etc.
├── state.js                  # export default { ... }
├── dependencies.js           # export default { 'pkg': 'version' }
├── components/
│   ├── index.js              # export * from './Foo.js'  ← flat re-exports
│   └── Navbar.js             # export const Navbar = { ... }
├── pages/
│   ├── index.js              # import + export default { '/': main }
│   └── main.js               # export const main = { extends: 'Page', ... }
├── functions/
│   ├── index.js              # export * from './switchView.js'
│   └── switchView.js         # export const switchView = function(...) {}
└── designSystem/
    └── index.js              # export default { COLOR, THEME, ... }
```
