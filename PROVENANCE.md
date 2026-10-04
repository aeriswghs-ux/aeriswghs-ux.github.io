# Source record & asset provenance

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
