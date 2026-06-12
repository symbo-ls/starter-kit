/**
 * ESLint flat config — converted from the legacy `.eslintrc` (now removed).
 *
 * Carried over from the legacy file:
 * - `no-unused-vars: warn` — kept as-is (core rule, no plugin needed).
 * - `parserOptions.ecmaVersion: latest` + `sourceType: module` — expressed
 *   via languageOptions with the default espree parser. The legacy
 *   `@babel/eslint-parser` was never in devDependencies, so it could not
 *   resolve — dropped rather than left as a broken reference.
 *
 * Dropped (broken references — never in devDependencies):
 * - `extends: "standard"` — eslint-config-standard was not installed.
 * - `import/no-duplicates: warn` — eslint-plugin-import was not installed.
 * Re-add either by installing the dependency and wiring it here.
 *
 * Run via `npm run lint` (sets ESLINT_USE_FLAT_CONFIG=true so the same
 * script works on eslint 8, 9, and 10).
 */

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: [
      // Migrated from the legacy `.eslintignore` (now removed — unsupported
      // by flat config).
      '**/node_modules/**',
      '**/dist/**',
      '**/.parcel-cache/**',
      '.symbols_local/**'
    ]
  },
  {
    files: ['**/*.js', '**/*.mjs'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    rules: {
      'no-unused-vars': 'warn'
    }
  }
]
