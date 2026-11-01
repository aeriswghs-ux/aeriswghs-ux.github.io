import type { NotebookEntry } from "../src/content-types.ts";
export const notebook: NotebookEntry[] = [
  {
    id: "stand-in-progress",
    number: "005",
    title: "A clearer flow. A new measurement stand.",
    date: "2026-10-13",
    updated: "2026-10-13",
    type: "Build log",
    project: "wind-tunnel",
    tags: ["Instrumentation", "Fabrication", "Flow visualization"],
    summary:
      "Dry ice in water makes the inlet flow visible. The next challenge is a stand that can hold airfoils and model aircraft.",
    provenance:
      "Edited from the owner’s build update received 13 October 2026. No measurements or new GitHub files supplied.",
    file: "stand-in-progress.md",
    references: ["repository", "logger", "honeycomb"],
    related: ["smoke-to-dry-ice", "calibration-before-conclusions"],
    media: "honeycomb",
  },
  {
    id: "calibration-before-conclusions",
    number: "004",
    title: "Before the plot, calibrate the measurement.",
    date: "2026-10-13",
    updated: "2026-10-13",
    sourceDate: "2026-10-03",
    type: "Research note",
    project: "wind-tunnel",
    tags: ["Instrumentation", "Uncertainty"],
    summary:
      "What remains to be established before a corrected sensor value can support an aerodynamic claim.",
    provenance:
      "Editorial research note based on the October 3 source review. Proposed checks are not completed tests.",
    file: "calibration-before-conclusions.md",
    references: ["correction", "logger", "dynamic-pressure"],
    related: ["reading-a-csv", "stand-in-progress"],
  },
  {
    id: "reading-a-csv",
    number: "003",
    title: "Three rows, and what they can actually tell us.",
    date: "2026-10-13",
    updated: "2026-10-13",
    sourceDate: "2026-10-03",
    type: "Research note",
    project: "scientific-computing",
    tags: ["Python", "Data analysis"],
    summary:
      "Inspecting the exact sample input used by the environmental-data grapher, without treating it as an experiment.",
    provenance:
      "Source review of the existing sample.csv. The row timestamps are example data, not the date of a performed experiment.",
    file: "reading-a-csv.md",
    references: ["grapher", "sample", "correction"],
    related: ["calibration-before-conclusions"],
    dataset: "environmental-sample",
  },
  {
    id: "smoke-to-dry-ice",
    number: "002",
    title: "When the smoke system became the problem.",
    date: "2026-10-03",
    updated: "2026-10-13",
    type: "Design decision",
    project: "wind-tunnel",
    tags: ["Flow visualization", "Iteration"],
    summary:
      "An archived build account of setbacks, a suggestion from Rithika, and the change to dry-ice visualization.",
    provenance:
      "Transcribed from the user-confirmed October 3 update; setup clarified by the owner on October 13. Not an original contemporaneous experiment log.",
    file: "smoke-to-dry-ice.md",
    references: ["repository"],
    related: ["stand-in-progress", "calibration-before-conclusions"],
  },
  {
    id: "inside-a-print-file",
    number: "001",
    title: "Reading a honeycomb, one layer at a time.",
    date: "2026-10-03",
    updated: "2026-10-13",
    type: "Research note",
    project: "wind-tunnel",
    tags: ["Fabrication", "Geometry"],
    summary:
      "A print archive contains more than a thumbnail. The extrusion moves reveal the honeycomb layer itself.",
    provenance:
      "Editorial transcription of the existing asset-provenance record. No new fabrication or aerodynamic result is inferred.",
    file: "inside-a-print-file.md",
    references: ["honeycomb", "honeycomb-earlier", "holder", "corners"],
    related: ["stand-in-progress"],
    media: "honeycomb",
  },
];
