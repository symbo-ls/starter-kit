# DOMQL/Symbols Project Structure - AI Instructions

## Overview

This is a strict, environment-agnostic folder structure designed for the Symbols platform. It generates independent files without JavaScript module preloading, enabling seamless rendering across all environments: VSCode, file structure, Symbols platform, server rendering, and web browsers.

## Core Principle

**NO JavaScript imports/exports for component usage.** Components are registered once in their respective folders and reused through a declarative configuration tree using object notation.

---

## Folder Structure & Export Patterns

### 1. **Components** (`/smbls/components/`)

**File Pattern:**

```javascript
// components/Header.js
export const Header = {
  extends: "Flex", // Base component type
  minWidth: "G2",
  padding: "A",
  // Props and styling applied directly - no 'props' wrapper

  // Nested children as properties
  Search: {
    extends: "Input",
    flex: 1,
  },
  Avatar: {
    extends: "Image",
    boxSize: "B",
  },
};
```

**Key Rules:**

- Each component is a named export: `export const ComponentName = { ... }`
- Component name MUST match filename (PascalCase)
- Contains declarative object structure with nested child components
- Can reference other components by name in the tree without imports
- Props use design system tokens (e.g., `minWidth: 'G2'`, `padding: 'A'`)

**Usage in Components Tree:**

```javascript
{
  Header: {},  // No import needed, referenced by name
  Content: {
    Article: {},
  }
}
```

---

### 2. **Pages** (`/smbls/pages/`)

**File Pattern:**

```javascript
// pages/add-network.js (dash-case filename)
export const addNetwork = {
  extends: "Page", // camelCase export name
  width: "100%",
  padding: "A",

  // Event handlers applied directly to properties
  onRender: async (el, state) => {
    await el.call("auth");
  },

  Form: {
    extends: "Box",
    Input: {
      extends: "Input",
      placeholder: "Network name",
    },
  },
};
```

**Key Rules:**

- Filenames use dash-case (kebab-case): `add-network.js`, `edit-node.js`, `dashboard.js`
- Exports use camelCase: `export const addNetwork = { ... }`, `export const editNode = { ... }`
- Pages extend from 'Page' component
- Contain complete page structure with nested components
- Can call functions using `el.call('functionName')`

**Usage:**
Pages are registered in [pages/index.js](smbls/pages/index.js) as a default export object mapping routes to pages.

---

### 3. **Functions** (`/smbls/functions/`)

**File Pattern:**

```javascript
// functions/parseNetworkRow.js
export const parseNetworkRow = function parseNetworkRow(data) {
  // Function logic
  return processedData;
};
```

**Key Rules:**

- Each function is a named export matching filename (camelCase)
- Functions are pure, standalone utilities
- NO imports of other functions; reuse only through composition

**Usage in Components:**

```javascript
{
  Button: {
    onClick: (el) => el.call("parseNetworkRow", data);
  }
}
```

Functions are called via `element.call('functionName', ...args)` from within component handlers.

---

### 4. **Methods** (`/smbls/methods/`)

**File Pattern:**

```javascript
// methods/formatDate.js
export const formatDate = function (date) {
  return new Intl.DateTimeFormat().format(date);
};
```

**Key Rules:**

- Utility methods that extend element behavior
- Registered once, reused across all components

**Usage in Components:**

```javascript
{
  Button: {
    onClick: (el) => el.methodName(args);
  }
}
```

Methods are called directly on element instances: `element.methodName()`

---

### 5. **Design System** (`/smbls/designSystem/`)

**Structure:**

Flat folder with individual files for each design aspect:

```
designSystem/
├── index.js          # Registry with namespaces
├── color.js          # Color tokens
├── spacing.js        # Spacing/sizing scale
├── typography.js     # Typography definitions
├── grid.js           # Grid system
├── theme.js          # Theme definitions
├── font.js           # Font definitions
├── icons.js          # SVG icons (flat)
├── animation.js      # Animation definitions
├── timing.js         # Timing/duration values
└── ...               # Other design tokens
```

**File Pattern:**

```javascript
// designSystem/color.js
export default {
  black: '#000',
  white: '#fff',
  primary: '#0066cc',
  secondary: '#666666',
};

// designSystem/spacing.js
export default {
  base: 16,
  ratio: 1.618,
};
```

**Key Rules:**

- Each file exports a single design aspect as default object
- Organized by design concern: color, spacing, typography, grid, etc.
- Used in component properties through shorthand (e.g., `padding: 'A'`, `color: 'primary'`)

---

### 6. **State** (`/smbls/state/`)

**Structure:**

Flat folder for state and data files:

```
state/
├── index.js          # Registry exporting all state
├── metrics.js        # Metrics data
└── ...               # Other state files
```

**File Pattern:**

```javascript
// state/metrics.js
export default [
  {
    title: "Status",
    items: [{ caption: "Live", value: 14 }],
  },
  // ...
];
```

**state/index.js:**

```javascript
import metrics from "./metrics.js";

export default {
  metrics,
  // ...
};
```

**Key Rules:**

- State organized in folder with separate files by concern
- Each file exports default object with related state
- No logic or methods - only data structures
- Used as `state` parameter in component event handlers
- Accessed and modified through: `state.propertyName`

**Usage in Components:**

```javascript
{
  Button: {
    onClick: (el, state) => {
      state.user.authenticated = true;
      console.log(state.metrics.status);
    },
  },
}
```

---

### 7. **Variables** (`/smbls/vars.js`)

**File Pattern:**

```javascript
// vars.js
export default {
  // Global constants and settings
  APP_VERSION: "1.0.0",
  API_BASE_URL: "https://api.example.com",
};
```

**Key Rules:**

- Global constants and application-wide settings
- Read-only values
- Reference in components: `onClick: (el, state) => { const url = state.root.vars.API_BASE_URL; }`

---

### 8. **Config** (`/smbls/config.js`)

**File Pattern:**

```javascript
// config.js
export default {
  useReset: true,
  useVariable: true,
  useFontImport: true,
  useIconSprite: true,
  useSvgSprite: true,
  useDefaultConfig: true,
  useDocumentTheme: true,
  verbose: false,
};
```

**Key Rules:**

- Single default export with platform/application configuration
- Boolean flags for feature toggles
- Settings that control runtime behavior
- Used internally by the DOMQL runtime
- Affects how components are rendered and styled

---

### 9. **Dependencies** (`/smbls/dependencies.js`)

**File Pattern:**

```javascript
// dependencies.js - Fixed version numbers
export default {
  "chart.js": "4.4.9",
  "fuse.js": "7.1.0",
  lit: "3.1.0",
  "ninja-keys": "1.2.2",
};
```

**Key Rules:**

- Maps external npm package names to **fixed version numbers**
- **NO module preloading** - packages defined here, imported on-demand
- Dynamic imports only within event handlers and functions via `await import()`
- Keeps structure resolvable without build step or package installation
- Version numbers must be exact and locked (no ranges like `^` or `~`)

**Dynamic Import Pattern:**

```javascript
{
  Button: {
    onClick: async (element, state) => {
      // Import at runtime when needed
      const { Chart } = await import("chart.js");
      const chart = new Chart(element, {
        /* config */
      });
    };
  }
}
```

This approach ensures:

- No top-level imports clutter the file
- Packages loaded only when actually used
- Works in any environment (browser, server, file system)
- Declarative tree remains environment-agnostic
- Version consistency across environments

---

### 10. **Files** (`/smbls/files/`)

**File Pattern:**

```javascript
// files/index.js - Asset manifest managed via Symbols SDK
// DO NOT manually edit this file
// To add files: Use Symbols SDK to upload, then place response data here

export default {
  // ... file data managed by SDK
};
```

**Key Rules:**

- Single default export mapping file keys to file metadata
- **Managed entirely via Symbols SDK** - do NOT manually create entries
- Use strict folder structure

**Adding Files:**

When the AI adds assets or files, it should use Symbols SDK commands to upload files and return related data to place in `files/`.

**Usage in Components:**

```javascript
{
  Image: {
    src: 'Arbitrum.png',
    // or rare occasions
    src: (element, state, context) => context.files['Arbitrum.png'].content.src,
  }
}
```

---

### 11. **Fonts** (`/smbls/designSystem/fonts.js`)

**File Pattern:**

```javascript
// designSystem/fonts.js - Fonts managed via Symbols SDK
// To add fonts: Upload via SDK, place response in this file

export default {
  // ... font data managed by SDK
};
```

**Key Rules:**

- Single default export with font definitions
- **Managed via Symbols SDK file upload** - don't add manually

**Adding Fonts:**

When adding fonts, use the SDK to upload and place the returned metadata in `designSystem/fonts.js`.

---

### 12. **Icons** (`/smbls/designSystem/icons.js`)

**File Pattern:**

```javascript
// designSystem/icons.js - Flat SVG icon collection
export default {
  logo: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7L12 12L22 7L12 2Z"/><path d="M2 17L12 22L22 17"/><path d="M2 12L12 17L22 12"/></svg>',

  chevronLeft:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>',

  chevronRight:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>',

  search:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>',

  menu: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/></svg>',

  close:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
};
```

**Key Rules:**

- **Completely flat structure** - no nesting or categorization
- Each icon is a named property with inline SVG string
- Icon names in camelCase: `chevronLeft`, `arrowUp`, `checkmark`
- SVG uses `stroke="currentColor"` or `fill="currentColor"` for styling
- No folder structure or category prefixes

**Usage in Components:**

```javascript
{
  Icon: {
    name: 'chevronLeft',
  },

  Button: {
    extends: 'Button',
    icon: 'search',
  },
}
```

---

### 13. **Snippets** (`/smbls/snippets/`)

**File Pattern:**

```javascript
// snippets/index.js
export * from "./oneSnippet.js";
export * from "./dataSnippet.js";
```

**Key Rules:**

- Reusable component or layout snippets
- Named exports of common patterns
- Used to reduce repetition of complex structures
- Can contain random snippets, JSON data, classes, functions, or any other reusable code
- **NOT** a component definition itself, but can be used within one

**Example Snippet:**

```javascript
// snippets/dataMockSnippet.js
export const dataMockSnippet = {
  data: [],
};
```

**Usage in Components:**

```javascript
{
  List: {
    // Reuse snippet pattern
    children: (el, s, ctx) => el.getSnippet('dataMockSnippet').data
    // or in rare occasions
    children: (el, s, ctx) => ctx.snippets['dataMockSnippet'].data
  },
  Title: {
    text: 'Hello'
  }
}
```

---

## Root Index Export (`/smbls/index.js`)

**Pattern:**

```javascript
// smbls/index.js
export { default as config } from "./config.js";
export { default as vars } from "./vars.js";
export { default as dependencies } from "./dependencies.js";
export { default as designSystem } from "./designSystem/index.js";
export { default as state } from "./state/index.js";
export { default as files } from "./files/index.js";
export { default as pages } from "./pages/index.js";
export * as components from "./components/index.js";
export * as snippets from "./snippets/index.js";
export * as functions from "./functions/index.js";
export * as methods from "./methods/index.js";
```

**Key Rules:**

- Central export point for entire project
- Exposes all modules with consistent naming
- Used by platform/framework to load the application
- Maintains structure for environment-agnostic loading

---

## Import Restrictions by Environment

### ✅ ALLOWED Imports

1. **Within same folder** (component to component via tree)

   ```javascript
   // No imports needed - reference by name
   {
     Header: { },
     Content: { Search: { } }
   }
   ```

2. **Function calls**

   ```javascript
   el.call("functionName", args);
   ```

3. **Method calls**
   ```javascript
   el.methodName();
   ```

### ❌ FORBIDDEN Imports

```javascript
// DON'T DO THIS:
import { Header } from "./Header.js";
import { parseNetworkRow } from "../functions/parseNetworkRow.js";
import styles from "./style.css";
```

No JavaScript `import`/`require` statements for components, functions, or methods within the project structure.

---

## File Structure Rules

### Naming Conventions

| Location        | Filename             | Export                                          | Type                  |
| --------------- | -------------------- | ----------------------------------------------- | --------------------- |
| `components/`   | `Header.js`          | `export const Header = { }`                     | PascalCase            |
| `pages/`        | `add-network.js`     | `export const addNetwork = { }`                 | dash-case / camelCase |
| `functions/`    | `parseNetworkRow.js` | `export const parseNetworkRow = function() { }` | camelCase             |
| `methods/`      | `formatDate.js`      | `export const formatDate = function() { }`      | camelCase             |
| `designSystem/` | `color.js`           | `export default { }`                            | camelCase             |
| `snippets/`     | `cardSnippet.js`     | `export const cardSnippet = { }`                | camelCase             |
| `state/`        | `metrics.js`         | `export default [ ]`                            | camelCase             |
| Root            | `vars.js`            | `export default { }`                            | camelCase             |
| Root            | `config.js`          | `export default { }`                            | camelCase             |
| Root            | `dependencies.js`    | `export default { }`                            | camelCase             |
| Root            | `files.js`           | `export default { }`                            | camelCase             |

### Index Files & Root Exports

**[components/index.js](smbls/components/index.js):**

```javascript
export * as ComponentName from "./ComponentName.js";
```

**[functions/index.js](smbls/functions/index.js):**

```javascript
export * from "./functionName.js";
```

**[pages/index.js](smbls/pages/index.js):**

```javascript
import { main } from "./main";
import { addNetwork } from "./add-network";
import { editNode } from "./edit-node";

export default {
  "/": main,
  "/add-network": addNetwork,
  "/edit-node": editNode,
  // ... route mappings
};
```

**[snippets/index.js](smbls/snippets/index.js):**

```javascript
export * from "./snippet1.js";
export * from "./snippet2.js";
```

**[designSystem/index.js](smbls/designSystem/index.js):**

```javascript
import ANIMATION from "./animation.js";
import COLOR from "./color.js";
import SPACING from "./spacing.js";
// ... all design system modules

export { ANIMATION, COLOR, SPACING };

export default {
  ANIMATION,
  COLOR,
  SPACING,
  // ...
};
```

---

## Component Definition Template

```javascript
export const ComponentName = {
  // Extend from base component type
  extends: "Flex", // or 'Box', 'Page', etc.

  // Props: styling, behavior, event handlers
  padding: "A",
  theme: "dialog",
  onClick: (el, s) => el.call("handleClick"),
  onRender: async (el, s) => await el.call("fetchData"),

  // Nested child components (no imports)
  Header: {},
  Content: {
    Article: {
      Title: { text: "Hello" },
    },
  },
  Footer: {},
};
```

---

## Component References: PascalCase Keys

**PascalCase keys automatically create components of that type.** You don't need to import them or use `extends:` when the key name matches the component name.

### ❌ INCORRECT: Verbose with imports and extends

```javascript
import { UpChart } from "./UpChart.js";
import { PeerCountChart } from "./PeerCountChart.js";

export const Graphs = {
  UpChart: { extends: UpChart, props: { order: "1" } },
  PeerCountChart: { extends: PeerCountChart, props: { flex: "1" } },
};
```

**Problems:**

- Unnecessary imports clutter the file
- Verbose `extends:` and `props:` wrapper
- Redundant when key name matches component name

### ✅ CORRECT: Clean PascalCase references

```javascript
export const Graphs = {
  UpChart: { order: "1" },
  PeerCountChart: { flex: "1" },
};
```

**Key Rules:**

- **Key name determines component type:** `UpChart:` automatically creates an `UpChart` component
- **No imports needed:** Component is referenced by name, not imported
- **Flatten props directly:** Put props inline, not in a `props:` wrapper
- **No `extends:` needed:** The key name is implicit `extends: ComponentName`
- **Works in all contexts:** Top-level, nested, or inside functions

### Example: Rows of Charts

```javascript
export const Graphs = {
  extends: "Flex",

  Row1: {
    extends: "Flex",
    flow: "x",
    gap: "A",

    // Each chart component is created by its PascalCase key
    LatestBlockChart: { flex: "1" },
    SyncingChart: { flex: "1" },
    BlocksToSyncChart: { flex: "1" },
  },

  Row2: {
    extends: "Flex",
    flow: "x",
    gap: "A",

    PeerCountChart: { flex: "1" },
    NetListeningChart: { flex: "1" },
  },
};
```

This approach keeps component definitions clean and readable while maintaining the declarative architecture principle.

---

## Event Handlers

```javascript
{
  Button: {
    onClick: (element, state) => {
      // Call function: el.call('functionName', ...args)
      element.call("parseData", rawData);

      // Call method: el.methodName()
      element.format();

      // Update state: state.property = value
      state.count++;

      // Use design system tokens in inline styles
      element.style.padding = "A"; // From designSystem/spacing
    };
  }
}
```

---

## Component Scope: Local Functions

When you need to define local helper functions within a component that are not meant for global reuse, use the `scope` property instead of importing external functions. This keeps the component self-contained and avoids creating unnecessary top-level imports.

### ❌ INCORRECT: Importing Local Functions

```javascript
// functions/fetchMetrics.js - If only used in one component!
const fetchMetrics = (timeRange) => {
  // fetch logic
};

// components/Graphs.js
import { fetchMetrics } from "../functions/fetchMetrics.js"; // WRONG!

export const Graphs = {
  extends: "Box",
  onInit: (el) => {
    fetchMetrics("week");
  },
};
```

**Problems:**

- Creates unnecessary separate files for component-specific logic
- Mixes component-specific and globally-reusable code
- Adds imports where they should be avoided

### ✅ CORRECT: Use Component Scope

```javascript
// components/Graphs.js
export const Graphs = {
  extends: "Box",

  // Define local functions in scope property
  scope: {
    fetchMetrics: (timeRange) => {
      // fetch logic here - not exported, only used locally
      return fetch(`/api/metrics?range=${timeRange}`).then((res) => res.json());
    },

    calculateAverage: (data) => {
      return data.reduce((a, b) => a + b, 0) / data.length;
    },
  },

  // Use scope functions in event handlers
  onInit: (el) => {
    const metrics = el.scope.fetchMetrics("week");
    const avg = el.scope.calculateAverage(metrics);
  },

  Button: {
    onClick: (el) => {
      el.scope.fetchMetrics("month");
    },
  },
};
```

**Key Rules for Scope:**

- `scope` property contains **local helper functions** for this component only
- Functions in scope are **never exported** and **never imported elsewhere**
- Access scope functions via `el.scope.functionName()`
- Use `scope` only for component-specific logic; use `functions/` for reusable utilities
- Scope functions receive only the data they need (element context is available via `el`)

### Scope vs Functions Folder

**Use `scope` when:**

- Function is only used within one component
- Function is a helper for that specific component's logic
- Keeping code co-located improves readability

**Use `functions/` when:**

- Function is reused across multiple components
- Function is a general utility (parsing, calculations, data fetching patterns)
- Function can be tested independently

### Example: Multiple Scope Functions

```javascript
export const MetricsPage = {
  extends: "Page",

  scope: {
    // Local helpers
    fetchMetrics: async (type) => {
      const res = await fetch(`/api/metrics/${type}`);
      return res.json();
    },

    formatMetric: (value) => {
      return new Intl.NumberFormat().format(value);
    },

    filterByEnvironment: (data, env) => {
      return data.filter((item) => item.environment === env);
    },
  },

  onInit: async (el, state) => {
    const data = await el.scope.fetchMetrics("daily");
    state.metrics = el.scope.filterByEnvironment(data, "production");
  },

  MetricsChart: {
    onRender: (el, state) => {
      const formatted = state.metrics.map((m) =>
        el.scope.formatMetric(m.value),
      );
      el.data = formatted;
    },
  },
};
```

### Calling Global Functions from Scope

When a scope function needs to call a global function from the `functions/` folder, use `el.call()` instead of importing. **Pass `el` as the first parameter to the scope function so it has access to element methods.**

**Pattern:**

```javascript
export const Graphs = {
  extends: "Flex",

  scope: {
    // Scope function receives el as first parameter
    fetchMetrics: (el, s, timeRange) => {
      const networkName = (s.protocol || "").toLowerCase();

      s.update({ metricsLoading: true });

      // Call global function via el.call() - no import needed
      el.call("apiFetch", "POST", "/api/metrics", {
        networkName,
        timeRangeMinutes: timeRange || 5,
      })
        .then((data) => {
          s.update({ metricsData: data, metricsLoading: false });
        })
        .catch((err) => {
          console.error("Failed to fetch:", err);
          s.update({ metricsLoading: false });
        });
    },
  },

  onInit: (el, s) => {
    // Pass el as first argument when calling scope function
    el.scope.fetchMetrics(el, s, 5);
  },
};
```

**Key Rules:**

- **No imports needed** - Call global functions via `el.call('functionName', ...args)`
- **Pass `el` as first parameter** - Scope functions need element access to call `el.call()`
- **Update all call sites** - When calling the scope function, pass `el` as first argument
- **Keep scope for local logic only** - Use this pattern only in scope functions that need global utilities
- **No async/await in el.call()** - Handle promises with `.then()` and `.catch()`

---

## Environment Compatibility

This structure works seamlessly in:

- **VSCode** - Individual files can be edited independently
- **Symbols Platform** - Declarative trees render directly
- **File Structure** - Pure JavaScript, no build step required
- **Server Rendering** - Stateless object definitions
- **Web Browser** - DOMQL runtime interprets the tree

**No special handling needed** - the same files work everywhere.

---

## DO's and DON'Ts

### ✅ DO:

- Name files exactly as their export names
- Use declarative object syntax for all components and pages
- Components MUST be plain JavaScript objects, never functions
- Reference components by name within the tree
- Use `el.call('functionName')` for utilities
- Use design system shorthand in props
- Keep components stateless (state managed externally)
- Place all component logic into props handlers
- Keep all folders flat - no subfolders within components/, functions/, etc.

### ❌ DON'T:

- Import components as JavaScript modules
- Use `import/require` for project files
- Create class-based components
- **Use component functions** - components must be objects, never callable functions
- Mix framework-specific code (React, Vue, etc.)
- Mutate element directly (use state instead)
- Create circular dependencies between files
- Use default exports for components (use named exports)
- **Create subfolders** - Anti-pattern to have `components/charts/`, `functions/api/`, etc. All files must be flat

---

## Flat Folder Structure (No Subfolders)

All folders must remain completely flat. Creating subfolders is an anti-pattern that breaks the architecture.

### ❌ INCORRECT: Organizing with Subfolders

```javascript
// WRONG - Don't do this!
components/
  ├── charts/
  │   ├── LineChart.js
  │   ├── BarChart.js
  │   └── PieChart.js
  ├── forms/
  │   ├── LoginForm.js
  │   ├── RegisterForm.js
  │   └── ContactForm.js
  └── Button.js

functions/
  ├── api/
  │   ├── fetchUser.js
  │   ├── fetchPosts.js
  │   └── deleteUser.js
  ├── math/
  │   └── calculateCosts.js
  └── ...
```

**Problems:**

- Import paths become complex and variable
- File registry in `index.js` becomes harder to maintain
- Path resolution differs between environments
- Contradicts flat, declarative principle
- Makes search and discovery harder

### ✅ CORRECT: Completely Flat Structure

```javascript
// RIGHT - Always do this
components/
  ├── index.js
  ├── Header.js
  ├── Button.js
  ├── LineChart.js
  ├── BarChart.js
  ├── PieChart.js
  ├── LoginForm.js
  ├── RegisterForm.js
  ├── ContactForm.js
  └── ...

functions/
  ├── index.js
  ├── parseNetworkRow.js
  ├── calculateCosts.js
  ├── fetchUser.js
  ├── fetchPosts.js
  ├── deleteUser.js
  └── ...
```

**Advantages:**

- Simple, predictable file structure
- Consistent import paths: `./ComponentName.js`
- Easy to maintain and search
- Works identically in all environments
- Clear naming eliminates need for folders
- All files registered at the same level in `index.js`

### Naming Strategy Instead of Folders:

Use **descriptive filenames** instead of subfolders to organize conceptually-related files:

```javascript
// components/ - Chart-related components
ChartContainer.js;
LineChart.js;
BarChart.js;
PieChart.js;
ChartTooltip.js;
ChartLegend.js;

// functions/ - Function-related APIs
fetchUserProfile.js;
fetchUserPosts.js;
deleteUserAccount.js;
createNewPost.js;
```

Each filename clearly indicates its purpose without needing folder organization.

---

## Components are Objects, Not Functions

This is a critical architectural principle. Components must ALWAYS be plain JavaScript objects, never functions.

### ❌ INCORRECT: Component as a Function

```javascript
// WRONG - Don't do this!
export const Header = (element, state) => ({
  border: "1px solid black",
  padding: "A",
  Title: {
    text: "Hello",
  },
});
```

**Problems:**

- Runtime recalculation on every access
- Stateful behavior contradicts declarative principle
- Cannot be properly registered and cached
- Breaks environment-agnostic loading

### ✅ CORRECT: Component as a Plain Object

```javascript
// RIGHT - Always do this
export const Header = {
  border: "1px solid black",
  padding: "A",
  Title: {
    text: "Hello",
  },
  onClick: (element, state) => {
    // Logic goes in handlers, not in the object definition
    state.count++;
  },
};
```

**Why:**

- Static, declarative definition
- Resolvable without runtime execution
- Cacheable and registrable
- Works in all environments (VSCode, server, browser, Symbols platform)
- Handlers can contain logic at runtime

### Key Point:

**Only property values can be functions (event handlers, getters), never the component itself.**

---

## Example: Building a Feature

### Task: Create a User Profile Card Component

**1. Create** `components/UserCard.js`:

```javascript
export const UserCard = {
  extends: "Box",
  padding: "A2",
  round: "A",
  background: "white",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  Avatar: {
    boxSize: "C",
  },
  Name: {
    fontSize: "L",
    fontWeight: "600",
  },
  Email: {
    fontSize: "S",
    color: "caption",
  },
  Actions: {
    Edit: {
      onClick: (el) => el.call("editUser"),
    },
    Delete: {
      onClick: (el) => el.call("deleteUser"),
    },
  },
};
```

**2. Create** `functions/editUser.js`:

```javascript
export const editUser = function (userId) {
  return fetch(`/api/users/${userId}`, { method: "GET" }).then((res) =>
    res.json(),
  );
};
```

**3. Use in page** `pages/profile.js`:

```javascript
export const profile = {
  extends: "Page",
  UserCard: {
    // No import needed!
  },
};
```

**4. Register in** `components/index.js`:

```javascript
export * as UserCard from "./UserCard.js";
```

---

## Summary

This is a **strict, declarative architecture** where:

1. **Each file exports one independent object** (component, function, or method)
2. **No JavaScript imports between project files** - Everything is registered in index files
3. **Components reference each other by name** in the object tree
4. **Functions/methods are called at runtime** via `element.call()` and `element.method()`
5. **Design tokens are available globally** through shorthand notation
6. **Works everywhere** - VSCode, Symbols platform, servers, browsers - without modification

The design enables **framework-agnostic, environment-independent code** while maintaining **strict structure and conventions**.

---

## Complete Project Structure Overview

```
smbls/
├── index.js                    # Root export (central loader)
├── vars.js                     # Global variables/constants
├── config.js                   # Platform configuration
├── dependencies.js             # External npm packages (fixed versions)
│
├── components/                 # UI Components (PascalCase files)
│   ├── index.js               # Component registry
│   ├── Header.js
│   ├── Button.js
│   ├── Modal.js
│   └── ...
│
├── pages/                      # Page layouts (dash-case files)
│   ├── index.js               # Route mapping
│   ├── main.js
│   ├── add-network.js         # dash-case filename, camelCase export
│   ├── edit-node.js
│   ├── dashboard.js
│   └── ...
│
├── functions/                  # Utility functions (camelCase)
│   ├── index.js               # Function exports
│   ├── parseNetworkRow.js
│   ├── calculateCosts.js
│   └── ...
│
├── methods/                    # Element methods (camelCase)
│   ├── index.js
│   └── ...
│
├── state/                      # State and data (flat folder)
│   ├── index.js               # State registry
│   ├── metrics.js
│   ├── user.js
│   ├── fleet.js
│   └── ...
│
├── files/                      # File assets (flat folder)
│   ├── index.js               # Files registry
│   ├── images.js
│   ├── logos.js
│   └── ...
│
├── designSystem/               # Design tokens (flat folder)
│   ├── index.js               # Token registry with namespaces
│   ├── color.js               # Color tokens
│   ├── spacing.js             # Spacing/sizing scale
│   ├── typography.js          # Typography definitions
│   ├── grid.js                # Grid system
│   ├── theme.js               # Theme definitions
│   ├── fonts.js               # Font definitions
│   ├── icons.js               # SVG icons (flat)
│   ├── animation.js           # Animation definitions
│   ├── timing.js              # Timing values
│   └── ...
│
└── snippets/                   # Reusable code/data (any type)
    ├── index.js               # Snippet registry
    ├── cardSnippet.js         # Component snippets
    ├── mockData.js            # Mock data
    ├── constants.js           # Constants/enums
    ├── utils.js               # Utility functions
    ├── response.json          # Response examples
    └── ...
```

**Key Structural Points:**

- `state/` and `files/` are **folders with index.js registry**, not single files
- All folders are **completely flat** - no subfolders within any folder
- `designSystem/` is completely flat with separate files for each design aspect
- `snippets/` can contain ANY type of JavaScript: components, functions, data, JSON
- Clear naming conventions eliminate need for folder organization

---

## Zero Compilation Principle

**This structure is completely resolvable without any build step, compilation, or bundling.**

### Why It Works Everywhere:

1. **Pure JavaScript Objects** - No JSX, no preprocessing, just plain object literals
2. **Dynamic Imports Only in Handlers** - NPM packages imported via `await import()` inside event listeners, never at module level
3. **No Circular Dependencies** - Declarative tree structure prevents cyclic imports
4. **Stateless by Design** - Each file is independent; state managed externally
5. **Direct File Resolution** - No alias resolution needed; files imported directly by path

### Environment Loading:

- **VSCode:** Each `.js` file is a standalone module; syntax check works immediately
- **Symbols Platform:** Parses the entire tree; renders components declaratively
- **Browser:** DOMQL runtime loads and interprets the tree; imports handled by browser `import()`
- **Server:** Node.js executes the tree; dynamic imports work natively
- **File System:** Can be read and processed as plain JavaScript objects

**Result:** The exact same files work in all environments without modification.

---

## Best Practices Summary

### ✅ Best Practices:

- **One export per file** - Keeps structure clear and resolvable
- **Declarative over imperative** - Use object structures, not code execution
- **Import dependencies dynamically** - Only when needed in event handlers
- **Reference components by name** - The tree handles all resolution
- **Keep functions pure** - No side effects, only transformations
- **Store state separately** - Never mutate component definitions
- **Use design tokens** - Never hardcode styles or values
- **Keep files small** - Easy to read, test, and maintain

### ❌ Anti-Patterns:

- Top-level `import`/`require` of project files
- Class-based components or inheritance
- Framework-specific syntax (React hooks, Vue composables)
- Circular module dependencies
- Hardcoded values in component definitions
- Dynamic property names in object keys
- Side effects in function definitions

---

## Migration Guide: Converting Old Projects

If converting from a standard module-based architecture:

1. **Remove all imports** of local project modules
2. **Convert all components to plain objects** - No function wrappers, no factory functions
3. **Convert props to declarative objects** - No function closures, just data
4. **Move state to `state/` folder** - Centralize all mutable data
5. **Replace function calls with `el.call()`** - Dynamic dispatch instead of imports
6. **Move dynamic dependencies to handlers** - Use `await import()` inside events
7. **Rename components to PascalCase** - Consistent with component convention
8. **Update index files** - Register all exports centrally

Example transformation:

```javascript
// OLD (Framework style)
import Button from "./Button.js";
import { handleClick } from "./handlers.js";

export const Header = () => {
  return <Button onClick={handleClick} />;
};

// NEW (Symbols style)
// state/index.js
export default { clickCount: 0 };

// components/Header.js
export const Header = {
  Button: {
    onClick: (el, state) => {
      state.clickCount++;
      el.call("logClick", state.clickCount);
    },
  },
};

// functions/logClick.js
export const logClick = function (count) {
  console.log("Clicks:", count);
};
```

This architecture ensures **true independence** of components, **zero runtime compilation**, and **environment agnostic** execution.

---

## Symbols Feedback Conventions

Supplemental conventions are merged into [CLAUDE.md](CLAUDE.md).
