# Project Setup — LLM Instructions

These are step-by-step instructions for LLMs to follow when helping a user create, configure, and manage a Symbols project using the CLI.

---

## Step 1: Check CLI Installation

Before anything else, verify the CLI is installed:

```bash
smbls --help
```

If the command is not found, install it globally:

```bash
npm i -g @symbo.ls/cli
```

---

## Step 2: Check Authentication

Run the following to check if the user is signed in:

```bash
smbls login --check
```

If the user is **not signed in**, prompt them:

> You're not signed in to Symbols. Would you like to sign in now? Signing in unlocks collaboration, platform syncing, remote preview, and project management.

If they agree, run:

```bash
smbls login
```

If they have multiple environments/servers configured, they can list or switch:

```bash
smbls servers
smbls servers --select
```

---

## Step 3: Create a New Project

Ask the user for a project name. Then decide between local-only or platform-linked creation.

### Option A: Local-only project (fastest)

```bash
smbls create <project-name>
cd <project-name>
npm start
```

This scaffolds a DOMQL starter project with dependencies installed.

### Option B: Platform-linked project (unlocks collaboration + remote preview)

Requires authentication (Step 2). Creates both a local project and a linked platform project:

```bash
smbls project create <project-name> --create-new
cd <project-name>
npm start
```

This writes:
- `symbols.json` — project key and config
- `.symbols/config.json` — platform link (`projectKey`, `projectId`, `apiBaseUrl`, `branch`)

### CLI Options

**Package manager:**

```bash
smbls project create <project-name> --package-manager npm
smbls project create <project-name> --package-manager yarn
```

**Skip dependency install:**

```bash
smbls project create <project-name> --no-dependencies
cd <project-name>
npm i
```

---

## Step 4: Link an Existing Platform Project (optional)

If the user already has a platform project and wants to link it to a local folder:

```bash
# Interactive picker
smbls project link .

# Non-interactive
smbls project link . --key <project-key>.symbo.ls
smbls project link . --id <projectId>
```

---

## Step 5: Inform About Sync & Collaboration

After the project is created, explain the core sync commands:

> Your project supports syncing with the Symbols platform. Here's what's available:
>
> - **`smbls push`** — Upload local changes to the platform
> - **`smbls fetch --update`** — Download the latest platform snapshot into local files
> - **`smbls sync`** — Two-way sync with interactive conflict handling
> - **`smbls collab`** — Watch mode for live collaboration (run in a separate terminal)

### File asset management:

```bash
smbls files list       # List project files
smbls files upload     # Upload files
smbls files download   # Download files
smbls files rm         # Remove files
```

---

## Step 6: Ask About Pushing First Changes

After making initial edits or scaffolding, ask the user:

> Would you like to push your initial changes to the Symbols platform now?

If **yes**, run:

```bash
smbls push
```

Then ask:

> Would you like me to automatically push changes to the platform after each edit I make?

If they agree, run `smbls push` after every file edit session. If they decline, only push when explicitly asked.

---

## Step 7: Show Remote Preview Links

After a successful push (or if the project is already linked to the platform), provide the user with their project links using the following patterns:

### Canvas / Editor Link

```
https://<app>.<user>.preview.symbo.ls/
```

### With environment (dev, stage, etc.)

```
https://<env>.<app>.<user>.preview.symbo.ls/
```

### With subpath

```
https://<app>.<user>.preview.symbo.ls/<subpath>
```

Where:
- `<user>` — the namespace owner identifier (their Symbols username or org)
- `<app>` — the application/project identifier
- `<env>` — optional deployment environment (`dev`, `stage`, etc.)
- `<subpath>` — optional path forwarded to the app

**Example:** For user `nikoloza` with project `my-app`:

```
Preview:  https://my-app.nikoloza.preview.symbo.ls/
Dev env:  https://dev.my-app.nikoloza.preview.symbo.ls/
```

Tell the user:

> Your project is live! Here are your links:
> - **Preview:** https://<app>.<user>.preview.symbo.ls/
> - **Canvas:** Available on the Symbols platform at your project page
>
> These update automatically when you push changes.

---

## Troubleshooting

- **Auth required / access denied** — run `smbls login` again
- **Missing project key** — ensure `symbols.json` has a `key` or link via `smbls project link .`
- **More detail needed** — add `--verbose` to commands that support it
- **Shell auto-completion** — run `smbls completion zsh --install` or `smbls completion bash --install`

---

## Summary of LLM Behavior

1. Ensure CLI is installed
2. Check sign-in status; prompt login if needed
3. Create the project (local-only or platform-linked based on user preference)
4. Start the dev server with `npm start`
5. Explain push, fetch, sync, and collab capabilities
6. Ask if the user wants to push initial changes
7. Ask if the user wants auto-push after each edit
8. Display preview and canvas links using the host pattern
