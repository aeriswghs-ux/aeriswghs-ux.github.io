---
name: AeroAspirant — The Engineering Fieldbook
description: A scientific notebook on warm paper, with midnight aerospace explorations and inspectable sources.
colors:
  paper: "#f5f3ed"
  paper-deep: "#ebe9e2"
  ink: "#202a2b"
  muted: "#5e696c"
  line: "#d3d8d4"
  accent: "#2c5e7e"
  accent-soft: "#e3edf1"
  amber: "#875923"
  amber-soft: "#efe5d2"
  night: "#101923"
  night-soft: "#1a2632"
  white: "#f8f7f2"
  night-muted: "#b8c7d2"
  night-line: "#35414c"
  dark-accent: "#a4cae2"
  dark-accent-soft: "#253b4b"
  dark-amber: "#e6be80"
  dark-amber-soft: "#3a3023"
typography:
  display:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "clamp(4rem, 7.8vw, 7.4rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "clamp(3.2rem, 6.6vw, 6.7rem)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-0.025em"
  section:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "clamp(2rem, 3.5vw, 3.4rem)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "1.6rem"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-0.025em"
  body:
    fontFamily: "IBM Plex Sans, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  reading:
    fontFamily: "IBM Plex Sans, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.8
  control:
    fontFamily: "IBM Plex Sans, Arial, sans-serif"
    fontSize: "0.88rem"
    fontWeight: 500
    lineHeight: 1.65
  label:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.65
rounded:
  square: "0"
  tag: "2px"
  circle: "50%"
spacing:
  space-1: "0.5rem"
  space-2: "1rem"
  space-3: "1.5rem"
  space-4: "2rem"
  space-5: "3rem"
  space-6: "4.5rem"
  gutter: "clamp(1.25rem, 4.3vw, 5rem)"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.paper}"
    typography: "{typography.control}"
    rounded: "{rounded.square}"
    padding: "0.9rem 1.4rem"
  button-light:
    backgroundColor: "{colors.white}"
    textColor: "{colors.night}"
    typography: "{typography.control}"
    rounded: "{rounded.square}"
    padding: "0.9rem 1.4rem"
  button-quiet:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    padding: "0.65rem 0.8rem"
  search-field:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    width: "100%"
  navigation:
    textColor: "{colors.ink}"
  tag:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    rounded: "{rounded.tag}"
    padding: "0.28rem 0.6rem"
  notebook-row:
    textColor: "{colors.ink}"
    padding: "1.8rem 0"
  question-panel:
    backgroundColor: "{colors.paper-deep}"
    textColor: "{colors.ink}"
    padding: "2rem"
  technical-disclosure:
    textColor: "{colors.accent}"
    padding: "1.2rem 0"
  artifact-tab:
    backgroundColor: "{colors.paper-deep}"
    textColor: "{colors.ink}"
    padding: "0.7rem 1rem"
  artifact-tab-selected:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.paper}"
    padding: "0.7rem 1rem"
---

# Design System: AeroAspirant — The Engineering Fieldbook

## Overview

**Creative North Star: "The Engineering Fieldbook"**

AeroAspirant pairs the patient clarity of a scientific notebook with the scale of an aerospace image archive. Warm off-white reading surfaces, fine rules, and editorial serif headings make technical work approachable. Midnight exploration surfaces give authentic imagery room to lead; restrained blueprint blue marks interaction and amber identifies pending work.

The system is an open record of engineering in progress. Source captions, dates, limitations, and selectable technical content belong within the visual hierarchy. Conventional navigation and progressive enhancement keep the fieldbook usable alongside its immersive imagery.

**Key Characteristics:**

- Warm paper reading surfaces and midnight exploration surfaces.
- Newsreader headings, IBM Plex Sans prose, and IBM Plex Mono data.
- Flat editorial layouts with fine rules and varied image proportions.
- Visible navigation, source credits, and explicit work-in-progress status.
- Responsive reading layouts with keyboard focus and reduced-motion support.

This refresh records `styles.css`, `fonts.css`, shared TypeScript renderers, and browser enhancement scripts. The user-pinned direction is authoritative; there is no approved visual comp. This is source inspection, not browser-computed style or screenshot verification. The main fieldbook consists of 29 generated static pages, produced from TypeScript and Markdown, with build-time KaTeX emitting native MathML and no browser framework. The preserved original research record and isolated CubeSat viewer retain their own styles and are not the template for new pages.

## Colors

The palette joins warm paper and quiet blue-gray ink with blueprint blue, amber, and midnight blue. The frontmatter holds exact primitives; component entries describe the default light state. Runtime semantic variables supply the corresponding dark values.

### Primary

Blueprint blue (`accent`) identifies actions, selected tabs, active navigation rules, focus, and chart traces. Its light-on-dark counterpart (`dark-accent`) serves the same role in dark mode. The soft accent pair is declared in the theme but currently has no shared component assignment.

### Secondary

Amber (`amber`, `dark-amber`) marks the actual “In progress” and “Draft” status labels. Visible words carry the meaning alongside color. The corresponding soft amber pair is also declared without a current shared component assignment.

### Neutral

Paper is the default page ground; deeper paper supports the footer, question panels, disclosures, code blocks, and chart grounds. Ink is primary text, muted ink is secondary text, and line separates records without enclosing every item in a card.

Night and night-soft provide dark backgrounds and secondary surfaces. White, night-muted, and night-line provide their text and rule counterparts. The homepage discovery section keeps its midnight treatment regardless of the page theme. Photographic hero shading is a local legibility treatment, not a general surface token.

| Semantic CSS role | Light default | Dark mode |
| --- | --- | --- |
| `--bg` | paper | night |
| `--surface` | paper-deep | night-soft |
| `--text` | ink | white |
| `--muted` | muted | night-muted |
| `--border` | line | night-line |
| `--accent` / `--accent-soft` | accent / accent-soft | dark-accent / dark-accent-soft |
| `--amber` / `--amber-soft` | amber / amber-soft | dark-amber / dark-amber-soft |

Exploration index and detail pages default to dark; other fieldbook pages default to light. A saved light or dark choice overrides the route default and is applied before the body renders when storage is available. No system-color-scheme inference is implemented.

**The Evidence Rule.** Color identifies interface state or an explicit work status; it never establishes scientific validity or a completed result.

## Typography

Newsreader provides display, heading, and editorial annotation roles, with Georgia and serif fallbacks. IBM Plex Sans provides reading text and controls, with Arial and sans-serif fallbacks. IBM Plex Mono supports dates, identifiers, code, table values, and chart labels. All current families are local assets with `font-display: swap`.

The shipped display face is Newsreader regular (400). Plex Sans has regular (400) and medium (500) files; the stylesheet maps the medium file to requests from 500 through 700, so these are not separate semibold and bold assets. Mono is regular (400). Italic Newsreader emphasis is styled in CSS; no dedicated italic file is shipped. The original record's legacy fonts remain available but do not define this system.

The frontmatter records the hero display, base page heading, section heading, third-level heading, body, reading paragraph, primary control, and mono label roles. Headings use balanced wrapping and regular weight. Reading measure is capped at 68ch; prose paragraphs increase line height to 1.8. Strong prose uses weight 500. Small metadata commonly uses 0.7rem sans-serif rather than the mono role.

At 900px and below, the hero heading is 5.8rem. At 650px and below it becomes `clamp(3.9rem, 13vw, 5.1rem)`; general page headings become 3.3rem, detail headings 3.2rem, and exploration-detail headings 3rem. Mobile prose is 0.95rem. Contextual card and section sizes are intentional overrides, not a uniform mathematical type scale.

**The Type Role Rule.** Use Newsreader for editorial hierarchy, Plex Sans for sustained reading and controls, and Plex Mono for technical notation and data.

## Layout

The centered container has a maximum width of 1480px, including its fluid gutter. Shared sections use the frontmatter spacing scale; `space-6` reduces to 3rem at 650px. Reading layouts cap prose at 68ch and place a sticky contents column beside it (240px with a 5rem gap at full width). The sticky top offset is 2rem.

Project collections use two columns. Homepage featured projects use unequal columns (1.46fr / 1fr). Notebook and research indexes use dated or categorized rows separated by hairlines. Explorations use three CSS columns with varied image ratios; the homepage discovery preview uses a separate staggered three-column composition. Preserve DOM reading order and captions when changing these layouts.

| CSS breakpoint | Implemented change |
| --- | --- |
| Minimum 1600px | Hero photograph becomes 75% wide and aligns to the right edge. |
| Maximum 1100px | Tighter major gaps; reading contents become 190px; filters can wrap. |
| Maximum 900px | Enhanced navigation becomes a menu; unenhanced links remain visible. Notebook index and exploration detail stack; contents become 160px; exploration masonry becomes two columns; timeline becomes four columns. |
| Maximum 650px | Main editorial, project, and reading grids stack; contents become static; captions stack; masonry becomes one column; timeline becomes two columns. The homepage discovery preview retains two columns, with its third item spanning the row. |

Tables, code blocks, and equations have their own horizontal overflow regions. Footer links, filters, breadcrumbs, metadata, and actions can wrap. Major navigation and input targets are generally at least 44px high, with primary actions at 48px. This is not a universal 44-by-44 claim: mobile icon controls are 38px wide, linked tags have a 32px minimum height, and breadcrumbs have a 30px minimum height.

Print rules use a white ground and dark ink, remove site chrome and interactive controls, expand reading layout to one column, underline links, and remove hero photography. Print headings use 32pt and 20pt. These source rules are documented without a print-rendering verification claim.

## Elevation & Depth

The fieldbook has no box-shadow vocabulary. Tonal surfaces, hairline rules, image scale, and whitespace provide depth. The hero uses a dark gradient over the photograph to preserve text legibility; media-open indicators use translucent dark circles. These are local media treatments rather than raised card effects.

**The Flat Surface Rule.** Separate records with space, rules, and tonal surfaces; preserve the absence of raised card shadows.

The hero copy arrives over 850ms from 14px below with partial opacity. Actions move upward 2px; link icons move right 2px; linked images scale to 1.035 over 650ms. Shared control transitions use 220ms and `cubic-bezier(0.16, 1, 0.3, 1)` for transforms. Reduced motion disables all animations and transitions and removes smooth scrolling. Hover transforms still apply immediately; the stylesheet does not remove those transforms.

## Shapes

Editorial panels, media stages, tabs, and primary actions are rectangular. Tags have a slight corner radius (2px). Circular icon buttons, image-open indicators, and small status or timeline dots are deliberate exceptions. Fine borders are normally 1px; active navigation and selected reading-depth controls use a 2px rule. Do not generalize the circular exceptions into rounded content cards.

## Components

### Buttons and links

Primary actions use semantic accent against the current background color, medium sans-serif text, and the frontmatter padding. The light hero action uses white with night ink. Both move upward 2px on hover. There is no custom pressed transform. Quiet buttons are transparent, underlined, and at least 44px high; text links pair a bottom rule with an inline directional SVG. The legacy-named outline action is filled accent and remains a compatibility style.

Global keyboard focus is a 2px semantic accent outline, offset by 5px. The skip link becomes visible on focus and targets the main landmark. Main itself suppresses its focus outline. Chart points use a thicker text-colored stroke on focus instead of the ring. Disabled buttons have reduced opacity and a waiting cursor; no custom error-field style is defined.

### Navigation

The masthead exposes Home, Projects, Research, Notebook, Explorations, and About, plus search and a progressively enabled theme control. Current links have an accent underline and `aria-current="page"`. Desktop masthead height is at least 96px. At 900px and below, enhanced navigation uses a labeled menu button with `aria-expanded`; Escape closes it and returns focus to the button. Without enhancement the links remain available and wrap on mobile. The masthead is not sticky.

### Search, filters, tags, and status

Collection search is a transparent, borderless field inside a ruled bar. Native selects have a square 1px border and at least 44px height. Search and selects retain labels even when visually hidden. Full-page search uses a larger underlined input. Filters reveal a live result count and an explicit empty state with reset. Static records remain available before enhancement.

Tags are small outlined metadata with muted text, not pill buttons. Status combines a small dot with visible text. Pending and draft states use amber; other statuses use accent. Preserve the words when reusing a status treatment.

### Cards, rows, and question panels

Project cards put a rectangular image above category, status, linked serif title, summary, question, and tags, without an enclosing background or shadow. Artifact and illustration images use containment; diagrams and photographs have their own cropping rules. The homepage side project intentionally suppresses its question and tags.

Notebook rows separate date and entry number from a title, summary, metadata, and arrow. On mobile the date moves above the title. Question panels use a flat secondary surface, an editorial question, and compact definitions; padding drops from 2rem to 1.5rem at 900px. Provenance panels use a secondary surface and border to keep source context adjacent to the text it qualifies.

### Reading, disclosures, and technical evidence

Contents, timeline steps, technical digressions, and signal explanations use native disclosures. Contents stay sticky on larger screens and join the mobile flow. Reading-depth controls use accent text and a bottom rule for selection. Artifact tabs use surface at rest and accent when selected; enhancement supplies tab semantics, roving focus, arrow keys, Home, and End.

Charts use semantic border grid lines, accent traces, mono labels, keyboard-focusable points, and an original-value table. Mathematical expressions remain selectable native MathML, generated at build time without a browser typesetting runtime. No chart, diagram, or public image should imply a measured result beyond its cited source.

### Imagery and credits

The homepage leads with the credited Apollo 8 Earthrise photograph. Exploration images link to contextual detail pages; figures pair factual captions with source links. Use authentic credited aerospace imagery for scientific context. Distinguish archival photographs, repository-derived artifacts, explanatory diagrams, and illustrations in captions and source records. Intrinsic dimensions, responsive image sources where supplied, lazy loading, and eager hero loading are part of the media behavior.

The sidecar provides ten HTML/CSS previews of implemented patterns. They use semantic variables with source-value fallbacks and include CSS focus and hover behavior where present. They are visual samples, not replacements for the production navigation, search, or tab scripts. Its synthesized color ramps are preview aids, not additional shipped palette tokens.

## Do's and Don'ts

### Do:

- **Do** retain warm paper reading surfaces, midnight exploration surfaces, blueprint blue interaction, and amber pending states.
- **Do** preserve Newsreader hierarchy, Plex Sans reading text, and Plex Mono technical notation.
- **Do** keep source credits, factual captions, dates, and limitations close to the material they describe.
- **Do** retain visible navigation, meaningful labels, keyboard focus, responsive reflow, and reduced-motion support.
- **Do** preserve complete static content and enhance it with small, optional browser interactions.

### Don't:

- **Don't** add raised card shadows or turn metadata tags into rounded promotional pills.
- **Don't** replace conventional navigation with an immersive or blocking entry sequence.
- **Don't** present archive imagery, diagrams, or source-file traces as student hardware photographs or measured results.
- **Don't** hide unfinished calibration, exploratory work, missing documents, or source limitations behind visual polish.
- **Don't** describe this source-derived documentation as a screenshot review, a browser-computed audit, or an approved visual comp.
