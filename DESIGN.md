---
name: AeroAspirant
description: An editorial aerospace fieldbook grounded in inspectable source artifacts.
colors:
  graphite: "#161a18"
  surface: "#202622"
  white: "#f4f6f2"
  muted: "#b9c3bb"
  mint: "#a7ff9c"
  black: "#101411"
typography:
  display:
    fontFamily: "Libre Franklin, sans-serif"
    fontSize: "clamp(3rem, 11.8vw, 11rem)"
    fontWeight: 900
    lineHeight: 0.98
    letterSpacing: "-.035em"
  headline:
    fontFamily: "Libre Franklin, sans-serif"
    fontSize: "clamp(2.25rem, 4.5vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-.035em"
  title:
    fontFamily: "Libre Franklin, sans-serif"
    fontSize: "clamp(1.375rem, 2.1vw, 2rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-.025em"
  body:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Libre Franklin, sans-serif"
    fontSize: ".9375rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  square: "0"
spacing:
  step-1: ".5rem"
  step-2: "1rem"
  step-3: "1.5rem"
  step-4: "2rem"
  step-5: "3rem"
  step-6: "4rem"
  section: "clamp(5rem, 9vw, 9rem)"
  gutter: "clamp(1.25rem, 3.4vw, 3.5rem)"
components:
  button-primary:
    backgroundColor: "{colors.mint}"
    textColor: "{colors.graphite}"
    rounded: "{rounded.square}"
    padding: "1rem 1.5rem"
  button-quiet:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    rounded: "{rounded.square}"
    padding: "1rem 0"
  artifact-tab:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.white}"
    rounded: "{rounded.square}"
    padding: "1rem 1.5rem"
  artifact-tab-selected:
    backgroundColor: "{colors.mint}"
    textColor: "{colors.graphite}"
    rounded: "{rounded.square}"
    padding: "1rem 1.5rem"
  evidence-row:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.white}"
    rounded: "{rounded.square}"
    padding: "1.5rem"
---

# Design System: AeroAspirant

## Overview

**Creative North Star: "The Research Fieldbook"**

A dark editorial portfolio gives technical artifacts the space and clarity of a publication. Strong sans-serif headings establish hierarchy; serif paragraphs support sustained reading. The selected darker concept uses graphite, white ink, and mint actions.

**Key Characteristics:**

- Broad, flat media stages.
- Bold headings with readable serif prose.
- Square actions and restrained mint emphasis.
- Source captions that distinguish evidence from illustration.

## Colors

### Primary

Mint identifies primary actions, selected artifact tabs, selection, and keyboard focus.

### Neutral

Graphite is the page ground. Surface provides a lighter layer for notes and records; black supports media stages and major section changes. White is the main ink and print ground; muted ink is reserved for captions and secondary context.

**The Evidence Rule.** Color indicates interface state, never scientific validity or a completed result.

## Typography

Libre Franklin is self-hosted for headings, navigation, captions, and controls. Source Serif 4 is self-hosted for reading text, with Georgia and serif fallbacks. The frontmatter records the primary hierarchy; lead prose scales from 1.25rem to 1.5rem. Body measure is capped at 68ch.

Display headings use weight 900 and tight tracking; titles use semibold. Labels remain sentence case. At widths up to 48rem, the main headline uses `clamp(2.65rem, 8.8vw, 4.2rem)`; up to 24rem it uses 2.45rem.

## Layout

The centered page container is capped at 100rem and uses fluid gutters. Spacious section rhythm separates the narrative; compact half-rem increments organize evidence controls and rows. Main editorial grids use two columns, while source links and navigation wrap.

At 64rem, grid gaps tighten and iteration columns stack. At 48rem, editorial grids, captions, and hero actions stack into one column. Tables scroll horizontally within their own region. Interactive targets have a minimum height of 48px.

## Elevation & Depth

No shadows. Depth comes from flat graphite, surface, and black tonal layers, generous spacing, and typographic scale. Controls move slightly on hover and press without simulated physical elevation.

**The Flat Surface Rule.** Preserve tonal separation and square geometry rather than adding shadows.

## Shapes

Corners are square throughout. Rectangular media stages frame original artifacts without decorative card shells. The honeycomb and spacecraft illustrations contribute their own geometry; do not turn that geometry into a generic decorative motif.

## Components

Primary actions use mint with graphite ink, semibold sans-serif text, and generous horizontal padding. The CubeSat action shares this treatment despite its legacy “outline” class name. Hover translates actions upward 3px; press moves them downward 2px. Quiet actions use underlined text on transparent ground.

Navigation is a wrapping sans-serif link row, with mint hover text. Directional source marks are consistent inline stroke SVGs. Evidence rows use surface ground and switch to black on hover. Artifact tabs use surface at rest and mint when selected; retain their keyboard tab behavior and associated panels.

Notes and research disclosures use native details/summary controls on flat tonal surfaces. The honeycomb media stage has a gentle 16-second alternating scale drift; section entrances use 700ms. Respect reduced motion by removing animation and transitions. Keyboard focus is a 3px mint outline offset by 5px.

## Do's and Don'ts

### Do:

- **Do** use the graphite ground, white ink, and mint interaction palette.
- **Do** preserve readable serif prose and clear sans-serif hierarchy.
- **Do** caption source artifacts and explanatory illustrations accurately.
- **Do** retain keyboard focus, wrapping layouts, and reduced-motion behavior.

### Don't:

- **Don't** add rounded cards, drop shadows, or a blocking opening sequence.
- **Don't** present generated concepts as photographs, hardware, or research evidence.
- **Don't** obscure unfinished calibration or the exploratory status of CubeSat work.
