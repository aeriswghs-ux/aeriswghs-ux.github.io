# AeroAspirant Checker — final audit

Reviewed 03 October 2026 using the installed AeroAspirant Checker five-point instruction workflow. This is an implementation audit, not validation of the experiments.

| Check | Result | Evidence |
| --- | --- | --- |
| 1. Context scoping and variables | PASS by source inspection | Shared visual tokens in external CSS; no authored inline styles or embedded style blocks; classes/state control the opening. A-Frame scene attributes configure geometry; its runtime injects canvas styles inside the optional viewer. |
| 2. Information and navigation | PASS by inspection and execution | Both contributors credited; main builder, documentation, dry-ice idea and research roles stated. Latest user account distinguished from older repository evidence. All local paths and anchors resolve; 16 unique GitHub destinations returned HTTP 200. |
| 3. Structure and responsiveness | PASS in tested scope | Semantic landmarks/headings, keyboard artifact tabs and disclosures, skip link, visible focus. No page overflow at 320, 390, 768, 1024 and 1440 pixels. Data table scrolls locally. Content and all artifacts remain with JavaScript disabled. 200% text enlargement fits. |
| 4. Static compatibility and accessibility | PASS in tested scope; benchmark NOT VERIFIED | Root and repository-subpath hosting tested. Main page has zero axe WCAG A/AA and best-practice violations at desktop/mobile; optional viewer has zero tested WCAG violations at 272/678 pixels. Incomplete automatic contrast cases (decorative arrows, pseudo-element overlap, clipped table) reviewed manually; text token contrast is at least 5.7:1. No legacy benchmark comparison was possible. |
| 5. Visual identity and relevant 3D | PASS by rendered inspection and execution | Dark forest/cream editorial layout, actual print-toolpath graphic and source thumbnails, ruled evidence rows, sibling contributions, short aircraft-to-research sequence. Optional A-Frame model illustrates possible CubeSat subsystems and is explicitly not engineering CAD or a simulator. Static fallback survives blocked CDN. |

## Interaction verification

- Opening appears on a fresh tab session, closes after 4.2 seconds, and reveals/focuses the project. Skip and Escape dismiss it; replay works. Reduced-motion preference bypasses it.
- Artifact tabs respond to arrow keys, Home and End; selected panels and focus match.
- CubeSat loads only on request. A-Frame 1.8.0 rendered in Chrome; Rotate changed the entity from yaw -28 to 2 degrees. Close restores the illustration. CDN-blocking test displays the fallback. Viewer buttons remain in narrow layouts.
- All main-page images loaded; no JavaScript page errors in the tested flows. Relevant fonts are local and use swap.

## Repairs during review

Fixed mobile table-induced page overflow, mobile line-break spacing, Figma text reflow, and image sizing. Adapted tests to dismiss the opening before testing underlying keyboard interactions. Initial 3D network restriction was resolved with permitted network access and the successful scene was then exercised. Historical print-file captions were revised to distinguish them from the newly reported physical build.

## Not verified / limits

- Safari, Firefox, actual mobile hardware, screen-reader speech, browser-UI zoom and Lighthouse scores were not tested. Text enlargement and emulated viewport checks are not substitutes for those checks.
- The live site was not published and DNS/GitHub Pages account configuration was not changed. Deployment instructions are included.
- The prior aeroaspirant.org site could not be retrieved; direct legacy comparison is NOT VERIFIED.
- New fabrication, dry-ice operation, wiring and calibration are reported by the user, not independently observed. No quantitative wind-tunnel performance, lift/drag results, or CubeSat mission success is claimed. Load-cell calibration and the exact new differential-pressure part number remain unresolved.
- Figma contains editable visual directions and the opening storyboard, not an exhaustive pixel-for-pixel copy of every expanded documentation section. Browser screenshots record the finished implementation.
