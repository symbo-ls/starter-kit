# Symbols / DOMQL v3 — Full Audit, Enforcement & Feedback Framework

---

## 1. Installation

```bash
pip install symbols-mcp
```

---

## 2. MCP Server Configuration

```json
{
  "mcpServers": {
    "symbols": {
      "command": "uvx",
      "args": ["symbols-mcp"],
      "env": {
        "SYMBOLS_SKILLS_DIR": "/path/to/your/skills"
      }
    }
  }
}
```

---

## 3. Authority Model

All Markdown files inside the `skills/` directory are binding specifications.

No file is optional.
No rule is advisory.

Conflict resolution priority:

1. DOMQL v3 conventions
2. Architectural direction
3. Design system integrity

---

## 4. Mandatory Skills Coverage

### Accessibility

* ACCESSIBILITY.md
* ACCESSIBILITY_AUDITORY.md

### Design System

* DEFAULT_DESIGN_SYSTEM.md
* DESIGN_SYSTEM_CONFIG.md
* DESIGN_SYSTEM_IN_PROPS.md
* DESIGN_SYSTEM_ARCHITECT.md

### DOMQL / Migration

* DOMQL_v2-v3_MIGRATION.md
* MIGRATE_TO_SYMBOLS.md

### UI / UX / Direction

* UI_UX_PATTERNS.md
* DESIGN_DIRECTION.md
* DESIGN_CRITIQUE.md
* DESIGN_TREND.md
* FIGMA_MATCHING.md

### Components

* BUILT_IN_COMPONENTS.md
* DEFAULT_COMPONENTS.md

### Architecture / Setup

* PROJECT_SETUP.md
* QUICKSTART.md
* CLI_QUICK_START.md
* SYMBOLS_LOCAL_INSTRUCTIONS.md
* REMOTE_PREVIEW.md
* OPTIMIZATIONS_FOR_AGENT.md

### Brand / Presentation

* BRAND_INDENTITY.md
* MARKETING_ASSETS.md
* THE_PRESENTATION.md
* GARY_TAN.md

### Meta / Agent

* AGENT_INSTRUCTIONS.md
* CLAUDE.md

### SEO

* SEO-METADATA.md

---

## 5. Full `smbls/` Codebase Audit Scope

Audit the entire `smbls/` directory without exception.

No partial scans.
No selective fixes.

---

## 6. Audit Phases

### Phase 1 — Structural & Syntax Integrity

* Eliminate all critical syntax errors.
* Remove legacy DOMQL v2 patterns.
* Enforce DOMQL v3 structure.
* Normalize event handler conventions.
* Standardize shorthand props.
* Enforce correct atom usage.
* Enforce state patterns.
* Validate dynamic children handling.

---

### Phase 2 — Design System Enforcement

* Replace hardcoded styles with tokens.
* Enforce design tokens in props.
* Validate spacing, typography, radii, color, shadows.
* Align with DEFAULT_DESIGN_SYSTEM.md and DESIGN_SYSTEM_CONFIG.md.
* Remove visual drift.

---

### Phase 3 — Component Discipline

* Replace custom hacks with built-in components where applicable.
* Enforce BUILT_IN_COMPONENTS.md.
* Align with DEFAULT_COMPONENTS.md.
* Remove duplication.

---

### Phase 4 — Accessibility Compliance

* Semantic HTML validation.
* Keyboard navigation compliance.
* ARIA correctness.
* Auditory accessibility patterns.
* Contrast enforcement.
* Interaction feedback correctness.

---

### Phase 5 — Icons & Visual Consistency

* Standardize icon system.
* Remove mixed icon sets.
* Align with design system scale and weight.

---

### Phase 6 — SEO & Metadata

* Enforce structured metadata.
* Validate semantic markup.
* Apply SEO-METADATA.md rules.

---

### Phase 7 — UI / UX Coherence

* Align with DESIGN_DIRECTION.md.
* Enforce hierarchy discipline.
* Remove layout inconsistencies.
* Validate Figma-to-code fidelity.
* Remove visual noise.

---

## 7. Execution Order

1. Full static audit.
2. Categorized issue extraction.
3. Refactor plan generation.
4. Structural fixes.
5. Design system fixes.
6. Accessibility fixes.
7. Visual polish.
8. Final consistency sweep.

No cosmetic adjustments before structural compliance.

---

## 8. Thread-Wide Findings Extraction

From the entire conversation history:

Collect and normalize:

* All reported bugs.
* All recurring friction points.
* All misuse of Symbols patterns.
* All unclear API usage.
* All architectural inconsistencies.
* All design complaints.
* All ambiguity in documentation.

Deduplicate and classify.

---

## 9. Feedback Documentation Output

Generate or update the following files:

### symbols-feedback.md

Scope: Framework-level issues only.

Include:

* DOMQL v3 violations.
* Event handler misuse.
* Atom/state mispatterns.
* Shorthand inconsistencies.
* Dynamic children misuse.
* Design system misuse.
* Migration errors.
* Accessibility framework gaps.
* Architectural inconsistencies.
* Documentation ambiguity.
* Agent friction.

Strictly framework-level.

---

### project-feedback.md

Scope: Project-specific issues only.

Include:

* Design direction inconsistencies.
* UX confusion.
* Visual imbalance.
* Layout flaws.
* Component misuse specific to project.
* Brand drift.
* Interaction flaws.
* Missing states.
* SEO implementation errors.
* Bug reports.

Strictly implementation-level.

---

## 10. Severity Classification

All findings must be categorized:

* Critical — Breaking, unsafe, or structurally invalid.
* Structural — Architecture misalignment.
* Systemic — Pattern-level or repeated misuse.
* Cosmetic — Visual or minor consistency issues.

No category mixing.

---

## 11. Output Requirements

Deliver:

* Executive audit summary.
* Severity breakdown.
* Refactor roadmap.
* Clear separation between:

  * Framework issues (Symbols-level)
  * Project issues (Implementation-level)

Enforce full DOMQL v3 purity across the entire codebase.
