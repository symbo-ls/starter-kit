# Default design system

This document describes every token defined in `smbls/designSystem/` and how they are used in Symbols/DOMQL v3.

## Files

| File | Purpose |
|------|---------|
| `COLOR.js` | Named color palette |
| `GRADIENT.js` | Gradient definitions (empty by default) |
| `THEME.js` | Semantic surface themes (document, dialog, field, primary…) |
| `FONT.js` | Custom font faces |
| `FONT_FAMILY.js` | Font family stacks |
| `TYPOGRAPHY.js` | Type scale configuration |
| `SPACING.js` | Spacing scale configuration |
| `TIMING.js` | Easing curves |
| `CLASS.js` | Utility CSS class overrides (empty by default) |
| `GRID.js` | Grid presets (empty by default) |
| `SHAPE.js` | Shape/border-radius presets (empty by default) |
| `ANIMATION.js` | Named keyframe animations |
| `MEDIA.js` | Custom media query breakpoints |
| `CASES.js` | Conditional cases (environment flags) |
| `RESET.js` | Global CSS reset overrides (empty by default) |

---

## COLOR

File: `smbls/designSystem/COLOR.js`

Named hex values and semantic adaptive colors used everywhere via `color`, `background`, `borderColor`, and `theme` props.

### Static colors

| Token | Value | Usage |
|-------|-------|-------|
| `green` | `#389d34` | Success states |
| `red` | `#e15c55` | Warning/error states |
| `yellow` | `#EDCB38` | Attention states |
| `orange` | `#e97c16` | Accent states |
| `blue` | `#0474f2` | Primary interactive color |
| `phosphorus` | `#4db852` | Alternate success |
| `black` | `black` | Pure black |
| `white` | `#ffffff` | Pure white |
| `gray` | `#4e4e50` | Neutral mid-tone base |
| `codGray` | `#171717` | Near-black page background |
| `solitude` | `#e5f1ff` | Light blue tint |
| `anakiwa` | `#a3cdfd` | Light blue accent |
| `concrete` | `#f2f2f2` | Light neutral |
| `transparent` | `rgba(0,0,0,0)` | Fully transparent |

### Adaptive semantic colors

These tokens resolve to different values in dark and light mode. The `[dark, light]` tuple is applied automatically via the theme system.

| Token | Dark value | Light value | Usage |
|-------|-----------|-------------|-------|
| `title` | `gray 1 −168` (near-white) | `gray 1 +168` (near-black) | Primary text |
| `caption` | `gray 1 −68` | `gray 1 +68` | Secondary/meta text |
| `paragraph` | `gray 1 −42` | `gray 1 +42` | Body copy |
| `disabled` | `gray 1 −26` | `gray 1 +26` | Disabled state text |
| `line` | `gray 1 −16` | `gray 1 +16` | Dividers and borders |

The `gray X ±Y` notation is a Symbols color function: start from `gray` at opacity `X`, then lighten or darken by `Y` steps.

### Usage in components

```js
// Static color
Text: { color: 'blue' }

// Adaptive semantic color
Caption: { color: 'caption' }

// Inline tint/shade
Box: { background: 'gray 0.1' }
```

---

## THEME

File: `smbls/designSystem/THEME.js`

Themes define paired `background` + `color` (and optional effects) for dark and light modes. Apply with `theme: 'name'` on any element.

### Available themes

#### `document`

The page root surface.

| Mode | Background | Text |
|------|-----------|------|
| dark | `codGray` (`#171717`) | `title` |
| light | `gray 1 +168` (near-white) | `title` |

```js
Page: { extends: 'Flex', theme: 'document', minHeight: '100dvh' }
```

#### `dialog`

Elevated card or panel surface, with glass blur.

| Mode | Background | Text | Blur |
|------|-----------|------|------|
| dark | `gray 0.95 −68` | `title` | `blur(3px)` |
| light | `gray .95 +150` | `title` | `blur(3px)` |

```js
Card: { extends: 'Flex', theme: 'dialog', round: 'A', padding: 'A' }
```

#### `dialog-elevated`

Higher elevation than `dialog`, used for active/selected states in tab bars.

| Mode | Background | Text |
|------|-----------|------|
| dark | `gray 1 +68` | `title` |
| light | `gray 0.95 +140` | `title` |

```js
Tab: { '.isActive': { theme: 'dialog-elevated' } }
```

#### `field`

Input control surface.

| Mode | Background | Text | Placeholder |
|------|-----------|------|-------------|
| dark | `gray 0.95 −65` | `white` | `white 1 −78` |
| light | transparent | `black` | `gray 1 −68` |

```js
Input: { theme: 'field' }
```

#### `field-dialog`

Slightly elevated input variant, used inside dialog panels.

| Mode | Background | Text |
|------|-----------|------|
| dark | `gray 1 −16` | `title` |
| light | `gray 1 −96` | `title` |

#### `primary`

Main call-to-action color (blue background, white text).

| Mode | Background | Text |
|------|-----------|------|
| dark | `blue` | `white` |
| light | `blue` | `white` |

```js
Button: { theme: 'primary', text: 'Save' }
```

#### `warning`

Destructive or alert state (red background, white text).

| Mode | Background | Text |
|------|-----------|------|
| dark | `red` | `white` |
| light | `red` | `white` |

```js
Badge: { theme: 'warning', text: 'Error' }
```

#### `success`

Positive confirmation state (green background, white text).

| Mode | Background | Text |
|------|-----------|------|
| dark | `green` | `white` |
| light | `green` | `white` |

#### `transparent`

No background, inherits current text color.

```js
Button: { theme: 'transparent', text: 'Cancel' }
```

#### `bordered`

Transparent background with a 1 px border.

| Mode | Border |
|------|--------|
| dark | `1px solid #4e4e50` |
| light | `1px solid #a3cdfd` |

```js
Card: { theme: 'bordered' }
```

#### `none`

Resets both color and background to `none`.

---

## FONT

File: `smbls/designSystem/FONT.js`

Declares custom font faces loaded via the design system's `useFontImport` option.

| Font | URL | Weight | Variable |
|------|-----|--------|---------|
| `AvenirNext_Variable` | Symbols CDN | 400 | yes |

The variable font covers all weights from a single file. It is used as the default UI font across the design system.

```js
// In component
Text: { fontFamily: 'AvenirNext_Variable' }
```

---

## FONT_FAMILY

File: `smbls/designSystem/FONT_FAMILY.js`

Defines font stack aliases.

| Token | Stack | Type | Default |
|-------|-------|------|---------|
| `Default` | `San Francisco, Helvetica Neue, Helvetica, Arial` | `sans-serif` | yes |

The `Default` stack is the system UI fallback used before `AvenirNext_Variable` loads.

```js
Text: { fontFamily: 'Default' }
```

---

## TYPOGRAPHY

File: `smbls/designSystem/TYPOGRAPHY.js`

Controls the font-size scale used for all typographic tokens (`A`, `B`, `C`, `Z1`, `W2`, etc.).

```js
{
  '@default': {
    base: 16,      // 16 px root font size
    ratio: 1.25,   // Major Third scale
    range: [-5, 12],
    subSequence: true
  }
}
```

The scale generates tokens from `W4` (smallest) to `C2` (largest) using the Fibonacci-like progression:

| Token | Approx size |
|-------|------------|
| `W4`–`W1` | ~8–10 px |
| `W`–`Z4` | ~10–11 px |
| `Z3`–`Z` | ~11–12 px |
| `Y4`–`A` | ~12–16 px |
| `A1`–`B` | ~18–24 px |
| `B1`–`C` | ~28–40 px |
| `C1`–`C2` | ~48–64 px |

Use these tokens as `fontSize` values on any text element.

```js
Heading: { fontSize: 'C' }
Caption: { fontSize: 'Z2' }
```

---

## SPACING

File: `smbls/designSystem/SPACING.js`

Controls the spacing scale used for all layout tokens (`padding`, `margin`, `gap`, `width`, `height`, `boxSize`, etc.).

```js
{
  '@default': {
    base: 16,      // 16 px root unit
    ratio: 1.618,  // Golden Ratio
    range: [-5, 15]
  }
}
```

The Golden Ratio produces a wider scale than typography. Common tokens:

| Token | Approx value | Common use |
|-------|-------------|-----------|
| `W2`–`W` | 2–4 px | Micro gaps, offsets |
| `X4`–`X` | 4–6 px | Icon padding, tight gaps |
| `Y4`–`Y` | 6–10 px | Small gaps |
| `Z4`–`Z` | 10–16 px | Compact padding |
| `A`–`A4` | 16–26 px | Default padding, gutters |
| `B`–`B4` | 26–42 px | Section padding |
| `C`–`C4` | 42–68 px | Container padding, avatar sizes |
| `D`–`D4` | 68–110 px | Large sections |
| `E`–`F` | 110–178 px | Hero padding, max-widths |
| `G`–`H` | 178–288 px | Wide containers |

Compound tokens are written with `+` (e.g., `A+W2` means A plus the W2 step).

```js
Box: { padding: 'A B2' }         // top/bottom A, left/right B2
Flex: { gap: 'Z' }               // gap = ~16 px
Avatar: { boxSize: 'C2' }        // ~68 px square
```

---

## TIMING

File: `smbls/designSystem/TIMING.js`

Named easing curves for CSS transitions and animations.

| Token | Value | Character |
|-------|-------|-----------|
| `defaultBezier` | `cubic-bezier(.29, .67, .51, .97)` | Smooth ease-out |

```js
Box: { transition: 'B defaultBezier', transitionProperty: 'opacity, transform' }
```

---

## ANIMATION

File: `smbls/designSystem/ANIMATION.js`

Named keyframe animations available via `animation` prop.

| Name | From | To | Use |
|------|------|----|-----|
| `fadeInUp` | `opacity: 0, translateY(12.5%)` | `opacity: 1, translateY(0)` | Entrance |
| `fadeOutDown` | `opacity: 1, translateY(0)` | `opacity: 0, translateY(12.5%)` | Exit |
| `marquee` | `translateX(0)` | `translateX(-50%)` | Scrolling ticker |

```js
Modal: { animation: 'fadeInUp B defaultBezier' }
Ticker: { animation: 'marquee 8s linear infinite' }
```

---

## MEDIA

File: `smbls/designSystem/MEDIA.js`

Custom named breakpoints that extend the built-in set.

| Token | Query |
|-------|-------|
| `mobileL` | `min-width: 480px` |
| `tabletSm` | `min-width: 728px` |

Use with `@` prefix in any element:

```js
Grid: {
  columns: '1fr',
  '@tabletSm': { columns: 'repeat(2, 1fr)' },
  '@mobileL': { columns: 'repeat(3, 1fr)' }
}
```

Built-in breakpoints from the default config also apply (`@mobile`, `@tablet`, `@desktop`, etc.).

---

## CASES

File: `smbls/designSystem/CASES.js`

Conditional environment flags evaluated at runtime. Used as boolean props (`.caseName`) or state conditionals.

| Case | Condition |
|------|-----------|
| `isSafari` | `true` when the browser is Safari (not Chrome/Android) |

```js
Element: {
  $isSafari: { top: 'Z2', right: 'Z2' }
}
```

---

## Design system flags

Set in `smbls/designSystem/index.js`:

| Flag | Default | Effect |
|------|---------|--------|
| `useReset` | `true` | Apply a CSS reset |
| `useVariable` | `true` | Emit CSS custom properties for all tokens |
| `useFontImport` | `true` | Load `FONT` entries via `@font-face` |
| `useIconSprite` | `true` | Inline the `ICONS` SVG sprite into the DOM |
| `useSvgSprite` | `true` | Inline any SVG sprite definitions |
| `useDefaultConfig` | `true` | Merge the smbls default design system config |
| `useDocumentTheme` | `true` | Apply `document` theme to `<html>` |
| `verbose` | `false` | Suppress design system debug output |

---

## Cross-cutting token conventions

### Shorthand spacing

Spacing props accept 1–4 tokens just like CSS shorthand:

```js
padding: 'A'          // all sides
padding: 'A B'        // vertical | horizontal
padding: 'A B C'      // top | horizontal | bottom
padding: 'A B C D'    // top | right | bottom | left
margin: '- - - auto'  // use '-' to skip a side (no-op)
```

### Color modifier syntax

```
'gray 0.95 -68'   // gray at 95% opacity, darkened by 68 steps
'gray 1 +168'     // gray at full opacity, lightened by 168 steps
'white 1 -78'     // white darkened 78 steps
```

### Theme + mode targeting

```js
Box: {
  '@dark': { background: 'codGray' },
  '@light': { background: 'concrete' }
}
```

### Responsive overrides

```js
Grid: {
  columns: 'repeat(4, 1fr)',
  '@tabletSm': { columns: 'repeat(2, 1fr)' },
  '@mobileL': { columns: '1fr' }
}
```

---

## Supplemental

Component usage is documented in [DEFAULT_COMPONENTS.md](DEFAULT_COMPONENTS.md). Built-in atoms are documented in [BUILT_IN_COMPONENTS.md](BUILT_IN_COMPONENTS.md). General conventions are in [CLAUDE.md](CLAUDE.md).
