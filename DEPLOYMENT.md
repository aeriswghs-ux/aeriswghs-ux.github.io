# Static GitHub Pages deployment

The site remains a static website. TypeScript, Markdown parsing, and mathematical rendering run during authoring, not on the server. Generated HTML, CSS, browser JavaScript, images, fonts, and JSON are published from the repository root.

## Existing repository

The current repository is `aeriswghs-ux/aeriswghs-ux.github.io`. Its existing publishing configuration uses the root of `main`. This implementation does not change GitHub settings, push commits, publish, or change domain assignments.

1. Run `npm ci` and `npm run check`.
2. Commit source **and generated files**: root HTML, section directories, `assets/`, CSS/JavaScript, `.nojekyll`, sitemap, robots file, and documentation.
3. Use the repository's normal commit/push/review process. GitHub Pages serves the generated files directly, without a Node server or SPA fallback.
4. After publication, verify the homepage, a nested notebook URL, a dataset download, and the optional CubeSat viewer.

`node_modules/`, `.qa/`, generated design drafts, unused local KaTeX distribution files, and downloaded original NASA JPEG working files are ignored. Optimized WebP variants, licenses, and provenance are committed. Build dependencies are development-only and are never requested by a visitor.

## Canonical URL and subpaths

By default, canonical metadata and the sitemap use `https://aeriswghs-ux.github.io/`. To deploy to another root or a repository subpath, set the complete site URL before building:

```powershell
$env:SITE_URL = 'https://example.github.io/lab/'
npm run check
```

All normal page links and assets are relative. `SITE_URL` additionally configures canonical URLs, the sitemap, robots entry, and absolute recovery paths in `404.html`. Do not put API credentials or secrets in this variable. Preserve an existing `CNAME` only when its domain assignment is intentional; this repository currently has no `CNAME`.

## Local preview

`npm run dev` builds once and serves the root at `http://localhost:4173`. Content edits require `npm run build` and browser refresh. It returns a real 404 for unknown paths. A plain static server is also sufficient.

## External services

Primary content works without external requests. Only the optional CubeSat viewer requests A-Frame 1.8.0 from its existing CDN. A static illustration and explanatory text remain if WebGL or the CDN fails. GitHub sources, scientific references, and NASA credit links open their external destinations only when followed.

The Flask data-correction prototype is linked as a research artifact; it is not deployed on GitHub Pages. There is no contact-form service, authentication, analytics, or client-side secret.
