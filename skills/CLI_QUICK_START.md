## `smbls` CLI Quick Start (practical starter guide)

This guide matches the CLI commands implemented in `packages/cli/bin/*`.

### What you’ll get

- **A local starter project** (DOMQL) cloned from an official starter repo.
- **A working dev server** you can run with `npm start` (or `yarn start`).
- **Optional platform linking** so you can sync, collaborate, and manage project files with the Symbols platform.

---

## Install the CLI

Install globally:

```bash
npm i -g @symbo.ls/cli
smbls --help
```

---

## Recommended flow: `smbls project create` → `npm start`

### 1) Create a new project locally (fastest path)

This creates a starter project and writes/updates `symbols.json` in the project root.

```bash
smbls project create my-app --local-only
cd my-app
npm start
```

### After `npm start`: what to do next

- **Open the URL printed in your terminal** (the starter kit will tell you where it’s running).
- **Follow the starter page + project README** for “what to edit first” and recommended structure.
- **Develop with AI in your editor**: keep changes small, run the app, iterate quickly.

### 2) Pick your framework template

Currently the CLI scaffolding supports **DOMQL only**.

```bash
# DOMQL starter
smbls project create my-app --local-only --domql
```

### 3) Choose a package manager

```bash
smbls project create my-app --local-only --package-manager npm
# or
smbls project create my-app --local-only --package-manager yarn
```

### 4) Skip dependency install (optional)

```bash
smbls project create my-app --local-only --no-dependencies
cd my-app
npm i
npm start
```

---

## Platform + community flow (optional, but unlocks collaboration)

If you want the “Symbols platform” benefits (project page/canvas, sharing, collaboration, etc.), link your local folder to a platform project.

### 1) Sign in

```bash
smbls login
```

If you have multiple environments/servers configured, you can list/switch them:

```bash
smbls servers
smbls servers --select
```

### 2) Create + link a new platform project (interactive)

This creates the platform project, creates the local starter project, then links them.

```bash
smbls project create my-app --create-new
```

What gets written locally:

- **`symbols.json`**: keeps the project key (legacy config used by multiple commands)
- **`.symbols/config.json`**: stores the platform link (`projectKey`, `projectId`, `apiBaseUrl`, `branch`)

### 3) Link an existing platform project to this folder

Interactive picker:

```bash
smbls project link .
```

Or non-interactive:

```bash
smbls project link . --key your-project.symbo.ls
# or
smbls project link . --id <projectId>
```

---

## The core “sync” commands you’ll use day-to-day

### Fetch the latest platform project into files

`fetch` downloads the latest project snapshot and can generate/update files under a `distDir`.

```bash
smbls fetch --update
```

Notes:

- **Default output directory** (if you don’t set one) is `./smbls`.
- You can set it once via:

```bash
smbls config --dist-dir ./smbls
```

### Push local changes to the platform

Use this when you’ve edited locally and want to publish your changes upstream.

```bash
smbls push
```

### Sync (two-way) with conflict handling

Use this when both local and remote changed and you want an interactive merge flow.

```bash
smbls sync
```

### Collaborate (watch + live syncing)

Run in a separate terminal while you work to enable a collaboration workflow (watching local changes and syncing).

```bash
smbls collab
```

---

## File assets (uploads/downloads) linked to a project

These commands manage the project `files` map (upload, download, list, remove).

```bash
smbls files list
smbls files upload
smbls files download
smbls files rm
```

---

## If something fails: quick fixes

- **Auth required / access denied**: run `smbls login` again.
- **Missing project key**: ensure `symbols.json` has a `key` or link the folder via `smbls project link .`.
- **Need more detail**: add `--verbose` where supported (for example on `project create`).

---

## Alternative: `smbls create` (simple scaffolding)

If you only want the starter project and don’t care about platform linking yet:

```bash
smbls create my-app
cd my-app
npm start
```

---

## Suggested “team” defaults (optional)

- **Commit `symbols.json`**: it’s the minimal project identity/config used by the CLI.
- **Decide on committing `.symbols/config.json`**: it contains the project link (`projectId`, `projectKey`, `apiBaseUrl`, `branch`). Some teams commit it for consistency; others treat it as local-only.

---

## Symbols Feedback Conventions

Supplemental conventions are merged into [CLAUDE.md](CLAUDE.md).
