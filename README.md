# AeroAspirant

A static aerospace research portfolio by Rithwik and Rithika Gummadi.

Run locally from this folder:

```powershell
python -m http.server 5173 --bind 127.0.0.1
```

Open http://localhost:5173. Stop the server with Ctrl+C.

HTML, CSS, JavaScript, fonts, and evidence artwork are served locally. The optional CubeSat explorer loads A-Frame from its CDN only on request. Deploy these files directly to GitHub Pages; no build step is required.

The October 2026 redesign uses graphite surfaces, white Libre Franklin display type, Source Serif 4 body text, and mint actions. PRODUCT.md and DESIGN.md describe the product and design system. PROVENANCE.md records source boundaries and assets.

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
