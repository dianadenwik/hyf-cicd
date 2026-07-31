# Practice CICD

A tiny Vite + React + TypeScript app used to demonstrate a GitHub Actions CI pipeline.
The whole app lives in one file: `src/main.tsx`.

## Quick start

```
npm install
cp .env.example .env
npm run dev
```

Open the printed local URL. That's it.

## Commands

| Command              | What it does                                         |
|----------------------|-------------------------------------------------------|
| `npm run dev`        | Start the dev server (uses `.env.development`)        |
| `npm run build`      | Production build (uses `.env.production`)             |
| `npm run build:dev`  | Build in development mode (uses `.env.development`)   |
| `npm run preview`    | Preview the last build                                 |
| `npm run typecheck`  | Run `tsc --noEmit`                                     |
| `npm run lint`       | Run ESLint                                              |
| `npm test`           | Run Vitest                                              |

## This repo is intentionally broken (on purpose, for class)

Three checks fail right now, each demonstrating a different CI gate:

1. **TypeScript error** in `src/main.tsx` (`brokenType`) — caught by `npm run typecheck`, not by `npm run dev`/`build` (Vite strips types without checking them).
2. **Lint error** in `src/main.tsx` (`unusedVar`) — caught by `npm run lint`.
3. **Failing test** in `src/main.test.ts` — caught by `npm test`.

Push this repo to GitHub and open the **Actions** tab: `.github/workflows/ci.yml` runs all four checks (lint, typecheck, test, build) as separate jobs, so you can see which ones go red. Fix each one, push again, watch it go green.

## Env vars

`.env`, `.env.development`, and `.env.production` are gitignored — copy `.env.example` to get started (see Quick start above). Add `.env.development` / `.env.production` yourself if you want different values per mode:

- `.env` — defaults, loaded in every mode.
- `.env.development` — used by `npm run dev` / `npm run build:dev`.
- `.env.production` — used by `npm run build`.

Two kinds of variables, on purpose:

- `VITE_VAR` — prefixed with `VITE_`, so Vite bundles it into the client code. Visible in the browser (`import.meta.env.VITE_VAR`).
- `SECRET_VAR` — no `VITE_` prefix, so Vite never exposes it to client code. `import.meta.env.SECRET_VAR` is always `undefined` in the browser, even though the variable exists in the `.env` file.
