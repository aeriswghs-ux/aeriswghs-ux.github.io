# AeroAspirant · The Engineering Fieldbook

An aerospace portfolio and living research notebook by Rithwik and Rithika Gummadi. Warm editorial reading pages, a dark visual archive, and clearly labeled evidence for work in progress.

## Run locally

```powershell
npm ci
npm run dev
```

Open **http://localhost:4173**. `npm run dev` builds once and starts a local static server. After editing content, run `npm run build` and refresh. For a different preview port, set `PORT` first.

The generated files are committed at the repository root. They can also be served directly with `python -m http.server 4173 --bind 127.0.0.1`; no Node runtime is needed for visitors or GitHub Pages.

## What is included

- Home, Projects, Research, Notebook, Explorations, About, and global search.
- Three project records, five initial notebook entries, four draft research records, and seven sourced visual explorations, each with a permanent page.
- Typed content and Markdown authoring with build-time KaTeX/native MathML, tables, code, references, provenance, and related records.
- Full-text search, URL-addressable filters, color modes, reading-depth controls, project timelines, expandable architecture explanations, artifact tabs, and an accessible line/scatter data viewer.
- Preserved original portfolio at `research-record.html` and optional on-demand CubeSat viewer with static fallback.
- Self-hosted fonts and locally optimized, attributed images; no application framework, backend, analytics, or external font requests.

## Checks

```powershell
npm run check
```

Runs TypeScript checking, static generation, JavaScript syntax/content/link checks, and regression tests. `npm audit` checks build-tool dependencies. Browser verification and limits are recorded in [AUDIT.md](AUDIT.md).

## Add content

See [AUTHORING.md](AUTHORING.md) for adding notebook entries, projects, research documents, images, and datasets. Content is in `content/`; shared renderers are in `src/`; behavior is in `script.js`; visual tokens are in `styles.css`.

See [DEPLOYMENT.md](DEPLOYMENT.md) for GitHub Pages and custom-domain/subpath configuration. [PROVENANCE.md](PROVENANCE.md) preserves historical evidence and the owner-confirmed October 13 update. [DESIGN.md](DESIGN.md) describes the implemented visual system.

No new aerodynamic measurements, completed calibration, spacecraft mission, or publication is claimed. The initial CSV is existing sample input. Original hardware photos, final stand CAD, calibration records, real datasets, and formal PDFs can be added when supplied.

## Motion Studio (local development)

Requires Node.js 22.13 or later (the installed Vite may require a newer version).
Use npm with the committed package-lock.json.

```powershell
npm ci
Copy-Item .env.example .env.local
npm run dev:studio
```

Open http://127.0.0.1:4174 and use the timeline button (or Alt+T).
Vite starts the editor server automatically. The existing `npm run dev` and
`npm run build` commands remain unchanged; publish the static files as before.

`.env.local` selects Codex via `MOTION_STUDIO_AGENT_PROVIDER=codex`.
The Codex SDK is installed as a development dependency. If needed, sign in
with `codex login`. No model override is set.

This site currently uses CSS transitions, not Motion animations, so the timeline
is initially empty. Studio discovers imported client modules using Motion APIs;
it does not convert existing CSS transitions automatically. Native browser bare
imports from `motion` also need a production bundling strategy before deploying
new Motion code to this otherwise unbundled site.

Inspecting and previewing are free. Applying edits to source requires Motion+;
installation does not apply any animation edits. See https://motion.dev/docs/studio.
