# Source record & asset provenance

## Engineering Fieldbook expansion — 13 October 2026

The six-section site adds typed content records, Markdown notebook authoring, a formal draft archive, visual explorations, and static detail pages. The complete previous page is retained in `research-record.html`, with its styles and behavior in `legacy.css` and `legacy-script.js`. Original source disclosures and historical context below remain available.

### Owner-confirmed October 13 update

The owner clarified that “cold dryers” meant **dry ice placed in water**. The setup sits in front of the inlet; air is blown into it and a fan at the other end draws air out. The owner reports a smooth visible flow. This is a qualitative build observation, not a measured flow-uniformity result.

A new stand uses differential pressure, load cells intended for lift and drag measurements, and a BME280 for environmental conditions. The stand remains under development. A 3D mounting model for airfoils and model aircraft is planned. Updated files will be published on GitHub later; the owner instructed the website to retain the existing files for now. No new calibration completion, measurement values, exact pressure-sensor model, stand CAD, or original photographs were supplied. The prior sibling roles remain unchanged.

The new dated notebook entry is an edited transcription of this update. Other initial notebook entries are explicitly labeled editorial transcriptions or source reviews. The research records are draft/planning records, not papers, completed experiments, publications, or peer-reviewed work.

### Added media

NASA images are used for educational and informational context under the [NASA Images and Media Usage Guidelines](https://www.nasa.gov/nasa-brand-center/images-and-media/), reviewed 13 October 2026. They do not depict the students' hardware and do not imply NASA endorsement. Images were downloaded locally, resized proportionally, and encoded as WebP; no scientific features were added or retouched. Layout crops do not modify the source file.

| Local prefix | Source image and credit | Original media URL |
| --- | --- | --- |
| `assets/media/earthrise-*` | [Earthrise, Apollo 8, 24 December 1968](https://www.nasa.gov/image-article/apollo-8-astronaut-bill-anders-captures-earthrise/) · NASA / Bill Anders | `https://www.nasa.gov/wp-content/uploads/2023/03/apollo_8_earthrise_1968_as08-14-2383.jpg` |
| `assets/media/solar-arrays-*` | [ISS solar arrays, 1 January 2015](https://www.nasa.gov/image-article/station-solar-arrays-from-russian-zarya-module/) · NASA | `https://www.nasa.gov/wp-content/uploads/2023/03/iss042e094136_0.jpg` |
| `assets/media/wind-tunnel-*` | [Richard Whitcomb with a wind-tunnel model, 1959](https://www.nasa.gov/history/the-national-advisory-committee-for-aeronautics-naca/) · NASA | `https://www.nasa.gov/wp-content/uploads/2023/03/lrc-rwhitcomb-1959-arearule-fuselage_0.jpg` |

Each image has 640-, 1000-, and 1041-pixel variants, with no upscaling. Full provenance, alt text, dimensions, kind, and caption are stored in `content/media.ts` and surfaced on exploration details. `assets/acquisition-diagram.svg` is an original geometric diagram derived from the earlier logger source, explicitly not a verified wiring schematic or representation of the newer stand.

The existing environmental sample values are reproduced exactly. The downloadable local CSV is a normalized export with explicit unit headers, not a byte-for-byte copy of the original CSV. Its original repository source is linked. No measured aerodynamic results have been generated. The general dynamic-pressure relation in the calibration note is educational context supported by [NASA Glenn](https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/dynamic-pressure/), not a calculation from this tunnel.

No AI-generated imagery is shipped by this expansion. No assets from Cosmos, Awwwards, Behance, Dribbble, Pinterest, Lapa, or Muzli are reused. Existing font licenses remain preserved. The new interface uses the already-local Newsreader, IBM Plex Sans, and IBM Plex Mono WOFF2 files. KaTeX is used only at build time and its MIT notice is retained in `assets/KATEX-LICENSE.txt`.

Repository deep-link paths were rechecked against the current GitHub tree on October 13. This confirms path availability, not that the newer hardware configuration has been committed or validated.

---

Reviewed 2026-10-03. Technical source: [aeriswghs-ux/Aerodynamics-Research-Lab](https://github.com/aeriswghs-ux/Aerodynamics-Research-Lab), commit `5563e841e53ad772a30a1555cb2f4b1469a3fe99`.

## Content boundaries

| Portfolio content | Repository evidence | Interpretation |
| --- | --- | --- |
| Researcher name | `01_wind_tunnel_design/code/src-arduino/testUpdatedProgram/diagram.json`, author field | Rithwik Krishna Gummadi. |
| Aerospace / aerodynamics focus | Root `README.md` | Research interests, not proof of completed studies. |
| Environmental logging and modeled differential pressure | `01_wind_tunnel_design/code/src-arduino/testUpdatedProgram/testUpdatedProgram.ino` and adjacent README | Source implementation inspected. Hardware operation, calibration, and sensor accuracy were not tested. Two seconds is the configured logging interval, not a measured performance result. |
| Printable parts | `01_wind_tunnel_design/design/3D_parts/` | Four sliced 3MF archives exist. Fabrication and physical performance are not established. |
| Python grapher | `01_wind_tunnel_design/code/feature-csv-data-grapher/bme280_grapher.py` | Analysis source exists. No research results are inferred from its presence. |
| Three-row sample table | Adjacent `sample.csv` | Exact example values, expressly labeled sample input. |
| Correction prototype | `01_wind_tunnel_design/code/feature-data-correction/` | Flask-based prototype, linked as source; not deployed by this static website. Default offsets are not presented as validated calibration. |
| Airfoil, drag, and flight studies | Each project’s `challenges.md` | Templates with hypothetical examples. Those examples are not represented as achievements or actual test results. |
| Journal | `research_journal/weekly_logs.md` | Entry template; no completed entries in the reviewed snapshot. |

The research questions and lists of evidence still needed are editorial framing of unfinished work, not claims that those tests occurred. No invented measurements, awards, dates of completion, equipment photographs, or testimonials are included.

## Assets

- `assets/honeycomb-toolpath.svg`: reconstructed from the actual `Metadata/plate_1.gcode` in `honeyComb_Current.gcode.3mf`. Uses 3,724 positive-extrusion XY line segments in the slice whose `Z_HEIGHT` is 10 mm. Travel-only moves omitted. Coordinates mapped uniformly into a 600 × 540 illustration, rounded to 0.1 display units; no physical geometry is invented. Used as an editable vector in Figma and as a static image in the website. This is a toolpath view, not CFD, a dimensioned drawing, or a photograph. The archive’s preview showed a solid slab, so the layer trace was used to reveal the actual honeycomb infill.
- `assets/honeyComb_Holder.gcode.png`: unaltered `Metadata/plate_1.png` from `honeyComb_Holder.gcode.3mf`.
- `assets/supportCorners.gcode.png`: unaltered `Metadata/plate_1.png` from `supportCorners.gcode.3mf`.
- `assets/favicon.svg`: original typographic A mark for this portfolio.
- Architecture figure: semantic HTML diagram, editorially derived from the logger source and README. It does not reproduce a validated wiring schematic.
- Repository-derived material retains the repository MIT notice in `assets/SOURCE-LICENSE.txt`.
- IBM Plex Sans, IBM Plex Mono, and Newsreader are self-hosted Latin WOFF2 fonts from Google Fonts. Their SIL Open Font License notices are in `assets/fonts/`. Browser fallback fonts cover glyphs outside those subsets.

## Design record

[AeroAspirant — Research Fieldbook in Figma](https://www.figma.com/design/Pb3GuodHypnSnyzN5C1wyy)

Desktop direction: node `3:9`. Mobile direction: node `3:10`. Shared evidence-row component: `3:11`. The direction was built before implementation, with editable text, vector artwork, auto-layout frames, components, and color variables. Browser implementation expands the direction into full project documentation and interactive evidence inspection.

The existing `aeroaspirant.org` site could not be retrieved: the web reader reported it inaccessible and the direct request timed out. No old-site claims were relied on.

## Updating the record

### User-confirmed update, 03 October 2026

Rithwik confirmed both names and roles: Rithwik Krishna Gummadi is the main builder and researcher; Rithika Priya Gummadi documents and learns, proposed the dry-ice solution, helped review code, and researches CubeSat possibilities. He reported a built two-fan tunnel, printed inlet/outlet, plexiglass body with printed supports, repeated smoke-system setbacks, and a working dry-ice visualization approach. The new sensor system uses two HX711/load-cell channels for lift and drag, differential pressure, and BME280. Load-cell calibration remains unfinished. These are attributed build updates, not independently verified performance measurements. The pressure-sensor spelling supplied was ambiguous; no exact new part number is asserted.

CubeSat remains exploratory research and simulation planning, with no mission selected. `airplane.svg` is an original symbolic opening illustration, not a built aircraft. `cubesat-concept.svg` and the optional A-Frame scene are original explanatory illustrations of possible subsystems, not project CAD, a validated spacecraft design, or an orbital simulator. The editable Figma concept is node `5:14`; the motion storyboard is `5:50`. The website delivers the motion.

The optional 3D view loads A-Frame 1.8.0 from its public CDN after a user clicks the button. Core content, fonts, and illustrations remain local. The original repository snapshot above remains the source for all linked historical code and print files.

Replace status labels only when supporting evidence is committed. Add dated test logs, calibration procedures, uncertainty estimates, original datasets, fabrication photographs, and actual iteration notes before publishing corresponding research conclusions. Re-check sources and update the reviewed snapshot when changing claims.

### Homepage redesign, 13 October 2026

The user selected generated concepts first, then requested the darker revision of the first concept for technical reviewers and admissions readers. The implemented visual system is graphite, white ink, mint actions, Libre Franklin headings, Source Serif 4 reading text, and square, shadow-free surfaces. `DESIGN.md` and `.impeccable/design.json` record the implemented system; the earlier Figma record above remains historical.

Generated images in `.impeccable/mocks/decision/` (`hero.png`, `hero-dark.png`, `work.png`, and `about.png`) are visual design references ONLY. They are not photographs, fabricated hardware, measurements, project CAD, or other research evidence, and are not shipped as page imagery. The homepage continues to use the original repository-derived toolpath and slicer previews, with their source captions and limitations preserved.

The current homepage self-hosts Libre Franklin at weights 400, 600, 700, and 900, and Source Serif 4 at weights 400 and 600 as TTF files obtained through Google Fonts. `assets/fonts/new-fonts-source.css` records their download sources; `assets/fonts/display-900-source.css` records the additional display-weight source. Their SIL Open Font License 1.1 notices are preserved in `assets/fonts/libre-franklin-LICENSE.txt` and `assets/fonts/source-serif-LICENSE.txt`. Earlier self-hosted font assets and notices remain in the repository.

Four historical documentation links were repaired to the current GitHub tree under `archive/legacy/`: the weekly journal template and the airfoil, drag, and flight-study challenge templates. This changes navigation targets, not the evidence claims or the reviewed October 3 snapshot. Original content boundaries, source notices, and user-attributed build observations above remain in force.

The automatic opening illustration/sequence was removed from the homepage. The optional CubeSat view and its static explanatory fallback remain; the external A-Frame scene is requested only after the visitor chooses the 3D action. CubeSat remains exploratory, with no mission, built spacecraft, or flight results asserted.
