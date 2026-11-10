# Maintaining the Engineering Fieldbook

The deployed website is static HTML, CSS, and JavaScript. Content lives separately in typed records and Markdown. Node is only needed to regenerate the pages; visitors and GitHub Pages do not need it.

## Edit and preview

```powershell
npm ci
npm run build
npm run dev
```

Open `http://localhost:4173`. Run `npm run build` again after editing content or templates. The preview server serves the updated files; refresh the browser. `PORT` can select another local port. Alternatively, serve the repository with `python -m http.server 4173` after building.

Before committing, run `npm run check`. Commit both the content source and the regenerated HTML/data files. GitHub Pages can continue publishing the root of the existing branch.

## Add a notebook entry

1. Create a Markdown file in `content/notebook/`.
2. Add its metadata to `content/notebook.ts`, using an existing record as a guide. Give it a unique `id` and `number`, dates, type, project, tags, summary, provenance, file name, references, and related-entry IDs.
3. Add genuine images to `content/media.ts` and references to `content/references.ts`; use the optional `media` and `dataset` entry fields to attach them.
4. Run the build and checks. The page, index entry, and full-text global search record are generated automatically.

Supported entry types: Research note, Experiment, Design decision, Simulation, Build log, Literature review, and Reflection. An `experimentId` can associate a note with a recorded experiment. Use the actual observation date for a contemporaneous log; use the editorial date and an explicit `sourceDate` when transcribing an earlier record. Update `updated` when revising a note, and describe substantive changes in a Revision record section. Git history preserves detailed revisions.

Suggested Markdown structure:

```markdown
## Research objective
## Hypothesis or question
## Background research
## Materials or software
## Method
## Observations
## Data
## Analysis
## What went wrong
## What I learned
## Next steps
## Revision record
```

Write the available facts; explicitly mark unavailable sections pending. Never fill an empty section with invented measurements. References are rendered from the metadata record.

Markdown supports headings, lists, links, images, tables, fenced code, inline math with `$...$`, and a display equation on its own line with `$$...$$`. Equations are converted by KaTeX into selectable native MathML at build time, so no math runtime or external font service is loaded. Raw HTML is disabled. Use HTTPS references, preserve attributions, and do not paste third-party scripts into content.

MDX is deliberately not required: this static site has no React framework. Scientific widgets are typed content attachments. Add new rendering components in `src/components/` when they serve a real content need.

## Projects

Add a `Project` in `content/projects.ts`. Include the actual status, question, tools, contributors, source references, structured sections, and seven process stages. Each stage has its own evidence description; the timeline does not imply all stages are complete. Source artifacts and planned work remain distinct. Sections are rendered through shared case-study templates.

## Research records

Add a `ResearchPaper` in `content/research.ts`. Supply title, authors, date, status, abstract, associated project, question, method, findings, limitations, and references. Optional `code` is a reference ID. Optional `pdf` is a local path to an actual supplied document. Optional `citation` is a real citation, not a fabricated DOI or publication. Only label a record Under review or Completed when justified. The interface never invents a download for a missing file.

## Datasets and experiments

Add an `Experiment` in `content/experiments.ts` with a unique ID, source reference, actual evidence status, units, methodology, limitations, channel definitions, and finite numeric values. `x` values are numeric coordinates; `label` retains the human-readable timestamp or observation identifier. Link its ID from a notebook entry.

The build generates line/scatter plots for each channel, keyboard-focusable values, a complete table, a JSON record, and a downloadable normalized CSV. The included `environmental-sample` is an existing three-row software fixture. Its local CSV is a normalized export of the exact values, with units added to headers; the original repository CSV remains linked. Do not relabel it as measured data.

To attach a real dataset, use `status: 'Measured'`, supply a source document, describe the acquisition and calibration, and preserve units and limitations. The generic viewer must display that status rather than assume validation. Dataset ownership and approval to publish should be established before committing personal or third-party data.

## Explorations and media

An `Exploration` connects a media ID with a collection, explanation, scientific context, a question, a project, optional notebook entry, and references. Its dedicated page contains attribution and provenance.

Every `MediaAsset` needs dimensions, descriptive alt text, caption, creator credit, source, permission/license record, and kind (photograph, artifact, illustration, or diagram). Locally host permitted media. NASA imagery here is used as credited educational context under NASA's media guidelines, never as evidence of student hardware or NASA endorsement. No Cosmos assets are reused.

The existing three NASA photographs have 640-, 1000-, and 1041-pixel WebP variants. The `-1041` variant preserves source resolution without upscaling. HTML dimensions and responsive width descriptors match the files.

## Architecture and deployment

- `content/`: facts, source references, media records, Markdown, and data.
- `src/content-types.ts`: shared TypeScript models.
- `src/components/`: document shell, content cards, timeline, chart, and diagram renderers.
- `src/pages/`: page compositions.
- `scripts/build.ts`: deterministic static generation.
- `script.js`: browser enhancement only; primary content is already HTML.
- `styles.css` and `fonts.css`: design tokens, responsive rules, local fonts.
- `research-record.html`, `legacy.css`, `legacy-script.js`: complete original portfolio.
- `cubesat-viewer.html`: preserved isolated optional A-Frame view.

There is no CMS, authentication, analytics, form submission backend, or runtime secret. The repository is the content store. Navigation and assets use relative links. All directory routes have an actual `index.html`; no SPA rewrite is needed.

`SITE_URL` controls canonical URLs, the sitemap, and 404 recovery paths. It defaults to `https://aeriswghs-ux.github.io/`. For a custom domain or repository subpath, set it before building, for example `$env:SITE_URL = 'https://example.github.io/lab/'`. Keep the trailing slash. The rest of the site uses relative links in either deployment.

