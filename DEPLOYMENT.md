# AeroAspirant — repository-ready portfolio

Semantic HTML, external CSS, and vanilla JavaScript. No build step, backend, package install, or external font service. Optional CubeSat inspection loads A-Frame 1.8.0 from its CDN; essential content does not depend on WebGL.

## Preview

Open `index.html` directly, or serve this folder with any static web server. All site assets use relative paths.

## Recommended integration with the research repository

1. Copy the contents of this folder into a new `docs/` directory in `aeriswghs-ux/Aerodynamics-Research-Lab`. Preserve the existing research folders, root README, and license.
2. Commit all supplied HTML, CSS, JavaScript, `.nojekyll`, the complete `assets/` folder, and these documentation files.
3. In GitHub Pages settings, select the publishing branch and `/docs` folder.
4. After publishing, verify the public page and asset URLs. The relative asset paths support both repository subpaths and custom-domain root hosting.

For an existing dedicated website repository, place the same files at its publishing root. Preserve any existing `CNAME` only if its domain assignment is intentional. This package does not change domain settings or publish automatically.

## Files

- `index.html`: complete, readable content and navigation.
- `styles.css`: global design tokens, layout, responsive rules, focus, print, and reduced-motion handling.
- `fonts.css`: local font declarations with `font-display: swap`.
- `script.js`: artifact tabs, skippable opening flight, and optional 3D loading. Without JavaScript, all evidence remains visible. The opening plays once per browser-tab session, bypasses deep links and reduced-motion preferences, and can be replayed.
- `cubesat-viewer.html`, `cubesat.css`, `cubesat.js`: isolated, on-demand A-Frame concept with rotation buttons and static fallback. This is an illustration, not a flight simulator or engineering model.
- `assets/`: genuine repository-derived evidence, brand favicon, fonts, and licenses.
- `PROVENANCE.md`: claim mapping and asset origins.
- `AUDIT.md`: verified checks, repair record, and remaining limitations.

## Editing

Edit factual copy and source links in HTML. Change global visual values in `:root` in `styles.css`. To add an artifact, provide an accessible image alternative, a caption distinguishing simulation/design/measurement, and a working source link. Keep all related tab/panel IDs unique.

The sample data is an example fixture, not measured aerodynamic performance. The original Flask analysis tool remains a linked research artifact; it does not run on GitHub Pages.

No analytics, cookies, contact-form service, or invented contact details are included. The repository is the current public route to the research record.
