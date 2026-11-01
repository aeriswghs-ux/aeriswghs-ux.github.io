export type Status =
  | "In progress"
  | "Exploratory"
  | "Source available"
  | "Planned"
  | "Draft"
  | "Under review"
  | "Completed";
export interface Reference {
  id: string;
  title: string;
  url: string;
  author?: string;
  accessed?: string;
}
export interface MediaAsset {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
  credit: string;
  source: string;
  license: string;
  kind: "photograph" | "artifact" | "illustration" | "diagram";
  responsive?: boolean;
}
export interface Section {
  id: string;
  title: string;
  body: string;
}
export interface Milestone {
  stage:
    | "Question"
    | "Research"
    | "Design"
    | "Prototype"
    | "Test"
    | "Analyze"
    | "Iterate";
  status: string;
  detail: string;
}
export interface Project {
  id: string;
  title: string;
  category: string;
  status: Status;
  summary: string;
  question: string;
  media: string;
  tools: string[];
  contributors: string[];
  updated: string;
  sections: Section[];
  timeline: Milestone[];
  references: string[];
}
export type EntryType =
  | "Research note"
  | "Experiment"
  | "Design decision"
  | "Simulation"
  | "Build log"
  | "Literature review"
  | "Reflection";
export interface NotebookEntry {
  id: string;
  number: string;
  title: string;
  date: string;
  updated: string;
  sourceDate?: string;
  type: EntryType;
  project: string;
  tags: string[];
  summary: string;
  provenance: string;
  file: string;
  references: string[];
  related: string[];
  experimentId?: string;
  media?: string;
  dataset?: string;
}
export interface ResearchPaper {
  id: string;
  title: string;
  kind: string;
  authors: string[];
  date: string;
  status: Status;
  abstract: string;
  question: string;
  project: string;
  methodology: string;
  findings: string;
  limitations: string;
  references: string[];
  pdf?: string;
  code?: string;
  citation?: string;
}
export interface Exploration {
  id: string;
  title: string;
  collection: string;
  media: string;
  summary: string;
  context: string;
  interest: string;
  relatedProject: string;
  relatedEntry?: string;
  references: string[];
}
export interface Experiment {
  id: string;
  title: string;
  project: string;
  status: "Example fixture" | "Measured";
  date: string;
  caption: string;
  methodology: string;
  limitations: string;
  source: string;
  download: string;
  xLabel: string;
  xUnit: string;
  channels: { key: string; label: string; unit: string }[];
  rows: { x: number; label: string; values: Record<string, number> }[];
}
