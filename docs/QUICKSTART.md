# Symbols CLI Setup & Usage Guide

## Getting Started

You can start using Symbols in your local environment using the CLI tool.

### Installation

```bash
npm i @symbo.ls/cli -g
```

### Create a New Project

```bash
smbls create projectName
```

This will scaffold the project and setup npm dependencies.

## AI Integration

To prompt AI, you can point to the documentation in the first line:

```
Use instructions from all .md files from /docs folder
```

### What It Works Well With

- **Extend existing symbols apps** (best)
- **Migrating existing projects**
- **Scaffold something new**

It also works with screenshots and Figma MCP that you can try out with uploads or connects. This will give you an initial config that should be good at a basic level. Once @Ha Le provides the update, we can test it on a more professional/fine-tuned stack.

## Recommended AI Coding Tools

- **Claude Code** - best
- **Cursor and Antigravity** - very good
- **Copilot / Codex** - good but not sure

## Platform Upload

If you need to upload your project to the platform, part of the process is outlined in the documentation. @Thomas Zhang has additional features that are not yet documented, but you can navigate with:

```bash
smbls --help
```

## Advanced CLI Commands

### Project Management

```bash
smbls project <sub-commands>
```

Future additions planned:

- `smbls project <member management>`
- `smbls project <libs management>`
- `smbls organization <sub-commands>`

### Shell Auto-Completion

Setup auto-completion for your shell:

```bash
# For Zsh
smbls completion zsh --install

# For Bash
smbls completion bash --install
```

---

_Documentation compiled from community discussions. For the latest updates, refer to the official Symbols documentation or use `smbls --help`._
