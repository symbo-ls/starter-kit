# Accessibility in Symbols

Guide for building accessible components using Symbols v3 syntax. Every component should be usable by keyboard, screen readers, and assistive technologies.

## Use Semantic Atoms

Always prefer built-in atom components over generic `Box` or `Div`. Atoms map to proper HTML elements with built-in accessibility semantics.

```js
// CORRECT — semantic atoms
{ Button: { text: 'Submit' } }              // <button>
{ Link: { text: 'Dashboard', href: '/dashboard' } }  // <a>
{ Input: { placeholder: 'Search...' } }     // <input>
{ Nav: { Link: { text: 'Home', href: '/' } } }       // <nav>
{ Header: {} }                               // <header>
{ Footer: {} }                               // <footer>
{ Main: {} }                                 // <main>
{ Section: {} }                              // <section>

// WRONG — loses semantics
{ Box: { tag: 'div', text: 'Submit', onClick: fn } }  // div is not a button
{ Text: { text: 'Click here', onClick: fn } }         // span is not interactive
```

## ARIA Attributes

Use the `attr` property to add ARIA attributes to any component.

```js
// Landmark roles
{ Box: { attr: { role: 'alert' }, text: 'Error occurred' } }
{ Box: { attr: { role: 'status', 'aria-live': 'polite' }, text: '3 results found' } }

// Labels and descriptions
{ Input: { attr: { 'aria-label': 'Search networks' }, placeholder: 'Search...' } }
{ Button: { icon: 'x', attr: { 'aria-label': 'Close dialog' } } }
{ Icon: { name: 'settings', attr: { 'aria-hidden': 'true' } } }

// State attributes
{
  Button: {
    attr: (el, s) => ({
      'aria-expanded': s.isOpen,
      'aria-controls': 'dropdown-menu'
    }),
    onClick: (e, el, s) => s.update({ isOpen: !s.isOpen })
  }
}

// Dynamic live regions
{
  Box: {
    attr: { role: 'status', 'aria-live': 'polite', 'aria-atomic': 'true' },
    text: (el, s) => `${s.count} items loaded`
  }
}
```

## Keyboard Navigation

All interactive components must be keyboard-operable. Use `onKeydown` for custom keyboard handling.

```js
// Custom keyboard interaction
{
  extends: 'Flex',
  attr: { role: 'listbox', tabindex: '0', 'aria-label': 'Select option' },
  onKeydown: (e, el, s) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      s.update({ activeIndex: Math.min(s.activeIndex + 1, s.items.length - 1) })
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      s.update({ activeIndex: Math.max(s.activeIndex - 1, 0) })
    }
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      el.call('selectItem', s.items[s.activeIndex])
    }
    if (e.key === 'Escape') {
      el.call('closeDropdown')
    }
  }
}
```

### Tabindex rules

```js
// Focusable (in tab order)
{ Box: { attr: { tabindex: '0', role: 'button' } } }

// Focusable programmatically only (not in tab order)
{ Box: { attr: { tabindex: '-1' } } }

// Never use tabindex > 0
```

## Focus Styles

Always provide visible focus indicators. Use `:focus-visible` to show focus only for keyboard users.

```js
{
  Button: {
    theme: 'primary',
    ':focus-visible': {
      outline: 'solid, Y, blue .3',
      outlineOffset: '2px'
    },
    // Remove default outline only when replacing with custom
    ':focus': { outline: 'none' },
    ':focus-visible': { boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.5)' }
  }
}
```

### Focus management in modals and dropdowns

```js
// Trap focus in modal
{
  attr: { role: 'dialog', 'aria-modal': 'true', 'aria-label': 'Add network' },
  onRender: (el) => {
    const focusable = el.node.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')
    if (focusable.length) focusable[0].focus()
  },
  onKeydown: (e, el) => {
    if (e.key === 'Tab') {
      const focusable = el.node.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    if (e.key === 'Escape') {
      el.state.root.update({ modal: null })
    }
  }
}
```

## Accessible Forms

### Labels

Every form input needs a visible label or `aria-label`.

```js
// Visible label using HTML association
{
  Label: { text: 'Email', attr: { for: 'email-input' } },
  Input: { id: 'email-input', type: 'email', attr: { required: 'true' } }
}

// Hidden label for icon-only inputs
{
  Input: {
    type: 'search',
    placeholder: 'Search...',
    attr: { 'aria-label': 'Search networks' }
  }
}

// Described by helper text
{
  Input: {
    id: 'password',
    type: 'password',
    attr: { 'aria-describedby': 'password-hint' }
  },
  P: { id: 'password-hint', text: 'Must be at least 8 characters', fontSize: 'Z1' }
}
```

### Error states

```js
{
  Input: {
    attr: (el, s) => ({
      'aria-invalid': s.hasError ? 'true' : undefined,
      'aria-describedby': s.hasError ? 'error-msg' : undefined
    }),
    border: (el, s) => s.hasError ? 'red 1px solid' : 'gray 1px solid'
  },
  P: {
    id: 'error-msg',
    attr: { role: 'alert' },
    color: 'red',
    text: (el, s) => s.errorMessage,
    hide: (el, s) => !s.hasError
  }
}
```

### Required fields

```js
{
  Label: { text: 'Name', Span: { text: ' *', color: 'red', attr: { 'aria-hidden': 'true' } } },
  Input: { attr: { required: 'true', 'aria-required': 'true' } }
}
```

## Images and Icons

### Meaningful images need alt text

```js
// Informative image
{ Img: { src: 'chart.png', alt: 'Network uptime over last 30 days' } }

// Decorative image — hide from assistive tech
{ Img: { src: 'decoration.png', alt: '', attr: { 'aria-hidden': 'true' } } }
```

### Icons

```js
// Decorative icon next to text — hide icon
{
  Button: {
    Icon: { name: 'search', attr: { 'aria-hidden': 'true' } },
    text: 'Search'
  }
}

// Icon-only button — needs label
{
  Button: {
    icon: 'x',
    attr: { 'aria-label': 'Close' }
  }
}

// Icon conveying status — needs accessible text
{
  Flex: {
    Icon: { name: 'check', color: 'green', attr: { 'aria-hidden': 'true' } },
    Text: { text: 'Connected' }
  }
}
```

## Color and Contrast

### Do not rely on color alone

```js
// WRONG — only color indicates error
{ Input: { border: 'red 1px solid' } }

// CORRECT — color + icon + text
{
  Input: { border: 'red 1px solid', attr: { 'aria-invalid': 'true', 'aria-describedby': 'err' } },
  Flex: {
    Icon: { name: 'info', color: 'red', attr: { 'aria-hidden': 'true' } },
    P: { id: 'err', text: 'This field is required', color: 'red', attr: { role: 'alert' } }
  }
}
```

### Contrast with theme tokens

Use design system color tokens that ensure contrast. When using opacity modifiers, verify contrast remains sufficient.

```js
// Good contrast
{ color: 'title', background: 'white' }

// Risky — low opacity can fail contrast
{ color: 'gray 0.3', background: 'white' }  // Likely fails WCAG AA

// Use semantic color tokens that account for light/dark
{ color: 'paragraph', background: 'document' }
```

## Accessible Lists and Tables

```js
// Accessible list
{
  Ul: {
    attr: { 'aria-label': 'Network list' },
    children: (el, s) => s.networks,
    childrenAs: 'state',
    childExtends: 'Li',
    childProps: {
      text: (el, s) => s.name
    }
  }
}

// Table with headers
{
  tag: 'table',
  attr: { 'aria-label': 'Validator data' },
  Thead: {
    tag: 'thead',
    Tr: {
      tag: 'tr',
      Th_name: { tag: 'th', text: 'Name', attr: { scope: 'col' } },
      Th_status: { tag: 'th', text: 'Status', attr: { scope: 'col' } }
    }
  }
}
```

## Loading and Dynamic Content

```js
// Loading state announcement
{
  Box: {
    attr: (el, s) => ({
      role: 'status',
      'aria-live': 'polite',
      'aria-busy': s.loading ? 'true' : 'false'
    }),
    text: (el, s) => s.loading ? 'Loading...' : `${s.items.length} items loaded`
  }
}

// Skeleton/loading indicator
{
  Box: {
    attr: { role: 'status', 'aria-label': 'Loading content' },
    hide: (el, s) => !s.loading
  }
}
```

## Skip Navigation

Add a skip link as the first focusable element in layouts.

```js
export const Layout = {
  SkipLink: {
    extends: "Link",
    text: "Skip to main content",
    href: "#main-content",
    position: "absolute",
    top: "-F",
    left: "A",
    background: "white",
    color: "blue",
    padding: "Z A",
    zIndex: 100,
    ":focus": { top: "A" },
  },
  Header: {},
  Main: { id: "main-content", attr: { tabindex: "-1" } },
  Footer: {},
};
```

## Accessible Dropdown

```js
export const AccessibleDropdown = {
  extends: "DropdownParent",
  state: { isOpen: false, activeIndex: -1 },

  Button: {
    text: "Options",
    attr: (el, s) => ({
      "aria-haspopup": "listbox",
      "aria-expanded": s.isOpen,
    }),
    Icon: { name: "chevronDown", attr: { "aria-hidden": "true" } },
  },

  Dropdown: {
    attr: { role: "listbox", "aria-label": "Options" },
    hide: (el, s) => !s.isOpen,
    children: (el, s) => s.options,
    childrenAs: "state",
    childExtends: "Button",
    childProps: {
      attr: (el, s) => ({
        role: "option",
        "aria-selected": s.isSelected,
      }),
      theme: "transparent",
    },
  },
};
```

## Accessible Tabs

```js
export const Tabs = {
  state: { activeTab: 0 },

  TabList: {
    attr: { role: "tablist" },
    flow: "x",
    gap: "Z",
    onKeydown: (e, el, s) => {
      const tabs = el.node.querySelectorAll('[role="tab"]');
      if (e.key === "ArrowRight")
        s.update({ activeTab: (s.activeTab + 1) % tabs.length });
      if (e.key === "ArrowLeft")
        s.update({ activeTab: (s.activeTab - 1 + tabs.length) % tabs.length });
    },
    children: (el, s) => s.tabs,
    childrenAs: "state",
    childExtends: "Button",
    childProps: (el, s) => ({
      attr: {
        role: "tab",
        "aria-selected": s.parent.activeTab === s.index,
        tabindex: s.parent.activeTab === s.index ? "0" : "-1",
      },
      onClick: (e, el, s) => s.parent.update({ activeTab: s.index }),
    }),
  },

  TabPanel: {
    attr: (el, s) => ({
      role: "tabpanel",
      tabindex: "0",
    }),
  },
};
```

## Motion and Reduced Motion

Respect user motion preferences with `@media (prefers-reduced-motion)`.

```js
{
  transition: 'background, defaultBezier, A',
  animationDuration: 'C',

  // Disable animations for users who prefer reduced motion
  style: {
    '@media (prefers-reduced-motion: reduce)': {
      transition: 'none',
      animation: 'none'
    }
  }
}
```

## Checklist

Before shipping any component, verify:

- [ ] All interactive elements are reachable by keyboard (Tab, Enter, Space, Escape, Arrows)
- [ ] Visible focus indicator on every focusable element
- [ ] Every `img` has `alt` text (or `alt=""` + `aria-hidden` for decorative)
- [ ] Icon-only buttons have `aria-label`
- [ ] Form inputs have associated labels
- [ ] Error messages use `role="alert"` and are linked via `aria-describedby`
- [ ] Color is not the only way to convey information
- [ ] Dynamic content updates use `aria-live` regions
- [ ] Modals trap focus and close on Escape
- [ ] Use semantic atoms (`Button`, `Link`, `Nav`, `Main`) over generic `Box`/`Div`
- [ ] Text contrast meets WCAG AA (4.5:1 for normal text, 3:1 for large)
- [ ] Animations respect `prefers-reduced-motion`
