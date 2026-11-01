import { layout, pageHead } from "../components/layout.ts";
import {
  projectCard,
  noteRow,
  researchRow,
  explorationCard,
  filterBar,
  emptyState,
} from "../components/content.ts";
import { projects } from "../../content/projects.ts";
import { notebook } from "../../content/notebook.ts";
import { research } from "../../content/research.ts";
import { explorations } from "../../content/explorations.ts";
import { esc, icon, date } from "../render.ts";
const unique = (a: string[]) => [...new Set(a)];
export function projectIndex(root: string): string {
  return layout({
    title: "Projects",
    description:
      "Inspect aerospace and scientific-computing work through its questions, process, source files, and limitations.",
    active: "Projects",
    root,
    body: `${pageHead("Questions made tangible.", "Engineering projects, from an initial question to the next iteration. Each record separates source artifacts, reported observations, and results still to come.", `${projects.length} evolving projects`)}<section class="wrap collection" data-collection>${filterBar({ label: "projects", categories: unique(projects.map((p) => p.category)), statuses: unique(projects.map((p) => p.status)).map((s) => ({ value: s, label: s })) })}<div class="project-grid">${projects.map((p) => projectCard(p, root)).join("")}</div>${emptyState}</section><div class="wrap archive-note"><h2>More questions on the horizon.</h2><p>Airfoil comparisons, drag reduction, and flight validation remain planned directions. Their research records explain what evidence is still needed.</p><a class="text-link" href="${root}research/">Explore the research archive ${icon("arrow")}</a></div>`,
  });
}
export function notebookIndex(root: string): string {
  return layout({
    title: "Notebook",
    description:
      "A chronological engineering notebook with source reviews, build updates, design decisions, and open questions.",
    active: "Notebook",
    root,
    body: `${pageHead(
      "The open notebook.",
      "A place for the process: what changed, what is known, what went wrong, and what to try next.",
      `${notebook.length} entries · Updated ${date(
        notebook
          .map((n) => n.updated)
          .sort()
          .at(-1)!,
      )}`,
    )}<section class="wrap collection notebook-collection" data-collection>${filterBar({ label: "notebook", categories: ["Research note", "Experiment", "Design decision", "Simulation", "Build log", "Literature review", "Reflection"], statuses: projects.map((p) => ({ value: p.id, label: p.category })), tags: unique(notebook.flatMap((n) => n.tags)).sort() })}<div class="notebook-layout"><aside class="notebook-aside"><h2>Notes from the bench.</h2><p>This first collection brings the existing source record and owner’s build updates into one readable place.</p><p>Each entry identifies its origin. Transcriptions and planning notes are clearly labeled.</p><a href="${root}AUTHORING.md">How this notebook is maintained ${icon("external")}</a></aside><div><div class="entry-list">${notebook.map((n) => noteRow(n, root)).join("")}</div>${emptyState}</div></div></section>`,
  });
}
export function researchIndex(root: string): string {
  return layout({
    title: "Research",
    description:
      "An archive of research questions, draft methodologies, and planned investigations with explicit evidence boundaries.",
    active: "Research",
    root,
    body: `${pageHead("The research record.", "Questions, methods, and the evidence needed to support a conclusion. An archive built for careful reading.", "Formal archive")}<div class="wrap research-disclosure"><p><strong>Open work, clearly labeled.</strong> These records are drafts and planned investigations. No peer review, publication, completed study, or downloadable paper is implied.</p></div><section class="wrap collection" data-collection>${filterBar({ label: "research", categories: unique(research.map((r) => r.kind)), statuses: ["Draft", "In progress", "Under review", "Completed"].map((s) => ({ value: s, label: s })) })}<div class="research-list">${research.map((r) => researchRow(r, root)).join("")}</div>${emptyState}</section>`,
  });
}
export function explorationsIndex(root: string): string {
  return layout({
    title: "Explorations",
    description:
      "A curated visual collection connecting aerospace photographs, source artifacts, and engineering questions. Every image includes provenance and educational context.",
    active: "Explorations",
    root,
    dark: true,
    body: `${pageHead("An invitation to wonder.", "A visual fieldbook of things worth looking at more closely. Follow an image into the science, the source, and the next question.", `${explorations.length} collected ideas`)}<section class="wrap collection" data-collection>${filterBar({ label: "explorations", categories: unique(explorations.map((e) => e.collection)) })}<div class="masonry">${explorations.map((e) => explorationCard(e, root)).join("")}</div>${emptyState}</section><div class="wrap collection-credit"><p>Public scientific archives alongside our own source artifacts. NASA imagery provides educational context; it does not depict our projects or imply endorsement.</p><a href="${root}PROVENANCE.md">View media provenance ${icon("external")}</a></div>`,
  });
}
export function searchPage(root: string): string {
  const records = [
    ...projects.map((p) => ({
      title: p.title,
      type: "Project",
      url: `projects/${p.id}/`,
      summary: p.summary,
    })),
    ...notebook.map((n) => ({
      title: n.title,
      type: "Notebook",
      url: `notebook/${n.id}/`,
      summary: n.summary,
    })),
    ...research.map((r) => ({
      title: r.title,
      type: "Research",
      url: `research/${r.id}/`,
      summary: r.abstract,
    })),
    ...explorations.map((e) => ({
      title: e.title,
      type: "Exploration",
      url: `explorations/${e.id}/`,
      summary: e.summary,
    })),
  ];
  return layout({
    title: "Search",
    description:
      "Search the complete engineering fieldbook: projects, notebook entries, research, and visual explorations.",
    root,
    active: "",
    body: `${pageHead("Find a thread.", "Search projects, notes, research questions, and visual explorations.")}<section class="wrap search-page" data-global-search><form action="" method="get" role="search"><label class="search-field search-large">${icon("search")}<span class="sr-only">Search the fieldbook</span><input name="q" type="search" placeholder="Try “calibration”, “CubeSat”, or “dry ice”…" autocomplete="off"></label><label><span class="sr-only">Filter search by content type</span><select name="type"><option value="">Everything</option><option>Project</option><option>Notebook</option><option>Research</option><option>Exploration</option></select></label><button class="button" type="submit">Search ${icon("arrow")}</button></form><p data-search-status role="status" class="small-note">Browse ${records.length} records, or enter a search.</p><noscript><p>Live search needs JavaScript. The complete linked index is available below.</p></noscript><div data-search-results>${records.map((r) => `<article class="search-result"><span class="small-note">${r.type}</span><h2><a href="${root}${r.url}">${esc(r.title)}</a></h2><p>${esc(r.summary)}</p></article>`).join("")}</div></section>`,
  });
}
