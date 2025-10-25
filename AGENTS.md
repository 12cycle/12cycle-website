# Repository Guidelines

## Project Structure & Module Organization

Project files live in a Vite + React + TypeScript layout. Application code belongs in `src/`; `main.tsx` wires React to the DOM and `App.tsx` should stay lean, delegating features into domain-specific folders. Shared images and SVGs belong in `src/assets`. Static files exposed at runtime live in `public/`, while `index.html` bootstraps the SPA.

## Build, Test, and Development Commands

Install once with `npm install`. During daily work run `npm run dev` for a hot-reloading dev server, and keep the terminal visible for Vite warnings. Use `npm run build` before release; it performs a TypeScript project build then bundles into `dist/`. `npm run lint` applies the ESLint config in `eslint.config.js`. `npm run preview` serves the production bundle locally; use it for visual smoke tests.

## Coding Style & Naming Conventions

Follow TypeScript strictness and prefer functional React components. Use 2-space indentation, PascalCase component names, camelCase hooks and utilities, and kebab-case asset filenames. Keep JSX lean by extracting helper components instead of nesting deeply. Import styles from `App.css` or co-located `.css` modules. Run the linter before every PR and respect autofix suggestions.

## Testing Guidelines

No automated tests exist yet; plan new work with Vitest and Testing Library for component coverage. Place unit specs under `src/__tests__/` mirroring the feature path, name files `*.test.tsx`, and mock network requests with MSW where needed. Add smoke tests for new pages before merging, and document manual QA steps in PR descriptions until suites exist.

## Commit & Pull Request Guidelines

Write commits in imperative present tense (`Add hero carousel`). Group related changes and keep diffs focused; avoid mixing refactors with feature work. For pull requests, provide a concise summary, reference related issues or tasks, attach before/after screenshots for UI updates, and list verification steps (`npm run build`, manual browser check). Request review only after linting passes.
