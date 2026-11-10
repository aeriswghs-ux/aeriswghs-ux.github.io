# Engineering Fieldbook implementation

## Audit — 13 October 2026

The initial repository has two HTML routes, global CSS tokens, local fonts, vanilla JavaScript artifact tabs, and an optional isolated A-Frame 1.8 viewer. There is no package manifest, CMS, application framework, backend, test runner, or build process. Deployment is GitHub Pages from the repository root. The working tree was clean.

Retain all original source links, the full wind-tunnel account, sample rows, three artifact tabs, research disclosures, sibling roles, and optional CubeSat scene. Keep the complete original page as `research-record.html`; keep the existing viewer URL and the old homepage anchor IDs. No personal results will be inferred from public NASA imagery or example CSV data.

## Architecture

Keep semantic static HTML, external CSS and small progressive-enhancement JavaScript. Add a Node/TypeScript build-time generator, typed content collections, and safe Markdown authoring. Generated pages are committed at the publishing root, so GitHub Pages still requires no server or runtime build. A switch to React/Next/MDX would add a runtime and migration cost without helping this static reading experience. Markdown supports mathematical expressions via build-time KaTeX, code, tables, references, and figures.

Separate `content/` (records and notebook Markdown), `src/components/` (shared renderers), `src/pages/` (page composition), and `scripts/` (build, preview and integrity checks). Real directory routes work on direct navigation and repository subpaths. Search indexes are generated from full content. Browser interactions progressively enhance complete HTML.

## Design direction

The user-pinned Engineering Fieldbook brief governs the design (Impeccable seed 7b8aa0c2 is subordinate to this explicit direction). Seven considered sources: science magazine spreads, photographic mission archives, university laboratory publications, astronomical atlases, fabrication manuals, museum collections, and field journals. The astronomical-atlas direction pairs an immersive lunar photograph with warm paper reading surfaces. Image collections use generous irregular proportions, captions, and source context. The notebook uses dated editorial rows and a persistent table of contents. Graph paper belongs only to actual diagrams and notebook annotations. Restrained blue signifies interaction and amber denotes pending work.

The first viewport uses a full-bleed Apollo Earthrise photograph, open space for a strong headline, clear entry points into projects and the notebook, and an attribution caption. Hero imagery is educational context, explicitly distinct from student work. Navigation is always conventional. Reading pages use a comfortable measure and selectable content. Exploration detail pages provide scientific context and sources.

Reference study: Medium's supplied article, Lapa, Awwwards, Dribbble, Muzli and Cosmos were inspected on 13 October. Behance returned 403 and Pinterest could not be retrieved. No reference-site assets or code are reused. The main transfer is editorial hierarchy, varied media scale, visible curation, and intentional navigation.

## Sequence

1. Audit and preserve original record.
2. Shared tokens, navigation, typography, components.
3. Content collections and static core/detail routes.
4. Search, filters, timelines, source-based diagram and accessible dataset chart.
5. Build/type/content checks and batched desktop/mobile browser verification.

## Content boundaries

The owner supplied and clarified a new update on October 13: dry ice in water in front of the inlet, air blown into that setup and an outlet fan drawing air out; a new unfinished stand using differential pressure, lift/drag load cells, and a BME280; an airfoil/model-aircraft mounting model planned. The new GitHub files will follow later, so existing source remains linked. No calibration completion, measured dataset, or PDF was supplied. The earlier record remains authoritative for facts not superseded by this update. New notebook content is transparently identified as an editorial transcription or source review, never a retrospectively invented experiment log.
