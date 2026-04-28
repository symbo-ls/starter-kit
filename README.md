# Symbols Starter Kit

Example dev setup (boilerplate) for building apps with [Symbols](https://symbols.app) and [DOMQL](https://github.com/domql/domql). Check the [developer docs](https://docs.symbols.app) for the full reference.

The default page shows a centered paper-style dialog card with a heading and links to the Symbols docs — a minimal but complete example of routing, components, design system tokens, and built-in `Link` elements.

---

## Quick Start (CLI)

```bash
npm i -g @symbo.ls/cli
smbls create my-app
cd my-app
npm start
```

Or clone this repo directly:

```bash
git clone git@github.com:symbo-ls/starter-kit.git
cd starter-kit
npm install
npm start
```

---

## Setup

### 1. Install

```bash
npm install
```

### 2. Run

```bash
npm start
# or
smbls start
```

### 3. Deploy

```bash
npm run deploy
# or
smbls deploy
```

Interactively choose a deploy target: Symbols Platform, Cloudflare Pages, Vercel, Netlify, or GitHub Pages. Your choice is saved to `symbols.json` for future deploys.

To initialise the deploy config without deploying:

```bash
smbls deploy --init
```

### 4. Sync with Symbols Platform

```bash
smbls push        # push local changes to the platform
smbls pull        # pull remote changes locally
smbls sync        # two-way sync
```

### 5. Ask AI

```bash
smbls ask "how do I add a dark theme?"
```

Interactive AI assistant. On first run it walks you through provider setup and auto-configures [symbols-mcp](https://github.com/symbo-ls/symbols-mcp) for your editor.

---

## Project Structure

```
symbols/
  pages/          # route → component map  { '/': { ... } }
  components/     # shared components
  designSystem/   # color, theme, typography, spacing, font_family …
  functions/      # plain JS helpers callable via el.call('name')
  methods/        # element methods
  state.js        # root state
  app.js          # root element
  context.js      # wires everything together
  index.js        # entry point — create(app, context)
```

---

## CLI Reference

| Command | Description |
|---|---|
| `smbls start` | Start local dev server |
| `smbls create <name>` | Scaffold a new project |
| `smbls deploy` | Deploy to chosen target |
| `smbls push` | Push to Symbols Platform |
| `smbls pull` | Pull from Symbols Platform |
| `smbls sync` | Bidirectional sync |
| `smbls publish` | Publish as a Symbols package |
| `smbls ask "<question>"` | AI assistant |

---

## Links

- [Symbols App](https://symbols.app)
- [Developer Docs](https://docs.symbols.app)
- [DOMQL](https://github.com/domql/domql)
- [symbols-mcp](https://github.com/symbo-ls/symbols-mcp)
