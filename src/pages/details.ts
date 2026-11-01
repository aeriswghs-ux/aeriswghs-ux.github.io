import type {
  Project,
  NotebookEntry,
  ResearchPaper,
  Exploration,
} from "../content-types.ts";
import { layout, breadcrumb } from "../components/layout.ts";
import {
  status,
  mediaFigure,
  referencesList,
  noteRow,
  mediaImage,
} from "../components/content.ts";
import { timeline, diagram, dataViewer } from "../components/science.ts";
import {
  esc,
  markdown,
  notebookSource,
  headings,
  date,
  icon,
} from "../render.ts";
import { notebook } from "../../content/notebook.ts";
import { projects } from "../../content/projects.ts";
import { experiments } from "../../content/experiments.ts";
import { references } from "../../content/references.ts";
import { media } from "../../content/media.ts";
const toc = (items: { id: string; title: string }[]) =>
  `<aside class="contents"><details open><summary>In this record</summary><nav aria-label="On this page">${items.map((s) => `<a href="#${s.id}">${esc(s.title)}</a>`).join("")}</nav></details></aside>`;
export function satellite(root: string): string {
  return `<section class="satellite-section" id="cubesat"><h2>Inspect the concept.</h2><div class="sat-stage" id="sat-stage">${mediaImage("cubesat", root)}</div><p class="small-note">Original explanatory illustration. Configuration and proportions are illustrative; no mission selected.</p><div class="button-row"><button class="button" id="open-satellite" hidden>Open the optional 3D view ${icon("external")}</button><button class="button" id="close-satellite" hidden>Close 3D view</button><a class="text-link" href="${root}cubesat-viewer.html">Open viewer page ${icon("external")}</a></div><p id="sat-status" class="small-note" role="status"></p></section>`;
}
function artifacts(root: string): string {
  return `<section id="parts"><h2>Inspect the print artifacts.</h2><p>The four archived 3MF files predate the latest stand. The exact fabricated versions are not established.</p><div data-viewer class="artifact-viewer"><div role="tablist" class="artifact-tabs" aria-label="Inspect print artifacts" hidden>${["Toolpath", "Holder", "Support corners"].map((t, i) => `<button id="tab-${i}" role="tab" aria-controls="panel-${i}" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}">${t}</button>`).join("")}</div>${["honeycomb", "holder", "corners"].map((m, i) => `<div id="panel-${i}" class="artifact-panel">${mediaFigure(m, root)}</div>`).join("")}</div></section>`;
}
export function projectDetail(p: Project, root: string): string {
  const basic = p.sections.filter((s) =>
    [
      "overview",
      "motivation",
      "prototype",
      "results",
      "next",
      "lessons",
    ].includes(s.id),
  );
  const technical = p.sections.filter((s) => !basic.includes(s));
  const body = `${breadcrumb(root, "Projects", p.category)}<header class="detail-head wrap"><div class="detail-meta"><span>${esc(p.category)}</span>${status(p.status)}<time datetime="${p.updated}">Updated ${date(p.updated)}</time></div><h1>${esc(p.title)}</h1><p class="page-dek">${esc(p.summary)}</p><div class="tags">${p.tools.map((t) => `<span>${esc(t)}</span>`).join("")}</div></header><div class="wrap project-detail-hero">${mediaFigure(p.media, root)}<div class="question-panel"><h2>The question</h2><p>${esc(p.question)}</p><dl><dt>Contributors</dt><dd>${p.contributors.map(esc).join("<br>")}</dd><dt>Evidence status</dt><dd>${p.id === "cubesat" ? "Exploratory. No mission selected." : p.id === "wind-tunnel" ? "Build reported; calibration unfinished." : "Source available; sample input only."}</dd></dl><a class="text-link" href="#references">Inspect source documents ${icon("arrow")}</a></div></div><div class="wrap">${timeline(p)}</div><div class="wrap reading-layout">${toc([...basic, ...technical, { id: "references", title: "Sources & documents" }])}<article class="prose project-prose"><div class="depth-controls" data-depth-controls hidden><button class="selected" data-depth="overview" aria-pressed="true">Overview</button><button data-depth="technical" aria-pressed="false">Technical Deep Dive</button></div>${basic.map((s) => `<section id="${s.id}"><h2>${s.title}</h2>${markdown(s.body)}</section>`).join("")}<details class="technical-deep" id="technical"><summary>Technical Deep Dive <span>Requirements, methods, validation & limitations</span></summary>${technical.map((s) => `<section id="${s.id}"><h2>${s.title}</h2>${markdown(s.body)}</section>`).join("")}</details>${p.id === "wind-tunnel" ? diagram() + artifacts(root) : ""}${p.id === "scientific-computing" || p.id === "wind-tunnel" ? dataViewer(experiments[0], root) : ""}${p.id === "cubesat" ? satellite(root) : ""}${referencesList(p.references, root)}</article></div><section class="wrap related-section"><div class="section-head"><h2>From the notebook.</h2><a href="${root}notebook/">All notes ${icon("arrow")}</a></div>${
    notebook
      .filter((n) => n.project === p.id)
      .slice(0, 2)
      .map((n) => noteRow(n, root))
      .join("") ||
    `<p class="small-note">A dedicated CubeSat research entry is still to come. The project record above reflects the available account.</p>`
  }</section>`;
  return layout({
    title: p.title,
    description: p.summary,
    root,
    active: "Projects",
    body,
  });
}
export function notebookDetail(n: NotebookEntry, root: string): string {
  const source = notebookSource(n.file);
  const project = projects.find((p) => p.id === n.project)!;
  const body = `${breadcrumb(root, "Notebook", `Entry ${n.number}`)}<header class="detail-head notebook-head wrap"><div class="detail-meta"><span class="mono">ENTRY ${n.number}</span><span>${n.type}</span><time datetime="${n.date}">${date(n.date)}</time></div><h1>${esc(n.title)}</h1><p class="page-dek">${esc(n.summary)}</p><div class="tags">${n.tags.map((t) => `<a href="${root}notebook/?tag=${encodeURIComponent(t)}">${esc(t)}</a>`).join("")}</div></header><div class="wrap reading-layout">${toc([...headings(source), { id: "references", title: "Sources" }])}<article class="prose notebook-page"><div class="entry-provenance"><p>${esc(n.provenance)}</p><dl><dt>Associated project</dt><dd><a href="${root}projects/${project.id}/">${esc(project.title)}</a></dd><dt>Last revised</dt><dd><time datetime="${n.updated}">${date(n.updated)}</time></dd>${n.sourceDate ? `<dt>Source reviewed</dt><dd>${date(n.sourceDate)}</dd>` : ""}${n.experimentId ? `<dt>Experiment</dt><dd>${esc(n.experimentId)}</dd>` : ""}</dl></div>${markdown(source)}${n.media ? mediaFigure(n.media, root) : ""}${
    n.dataset
      ? dataViewer(
          experiments.find((e) => e.id === n.dataset)!,
          root,
        )
      : ""
  }${referencesList(n.references, root)}</article></div><section class="wrap related-section"><h2>Keep following the thread.</h2>${n.related
    .map((id) =>
      noteRow(
        notebook.find((n) => n.id === id)!,
        root,
      ),
    )
    .join("")}</section>`;
  return layout({
    title: n.title,
    description: n.summary,
    root,
    active: "Notebook",
    body,
    math: source.includes("$"),
  });
}
export function researchDetail(r: ResearchPaper, root: string): string {
  const parts = [
    { id: "abstract", title: "Abstract", body: r.abstract },
    { id: "question", title: "Research question", body: r.question },
    { id: "methodology", title: "Methodology", body: r.methodology },
    { id: "findings", title: "Findings", body: r.findings },
    { id: "limitations", title: "Limitations", body: r.limitations },
  ];
  return layout({
    title: r.title,
    description: r.abstract,
    root,
    active: "Research",
    body: `${breadcrumb(root, "Research", r.kind)}<header class="detail-head wrap"><div class="detail-meta"><span>${r.kind}</span>${status(r.status)}<time datetime="${r.date}">${date(r.date)}</time></div><h1>${esc(r.title)}</h1><p class="research-byline">${r.authors.map(esc).join(" & ")}</p></header><div class="wrap reading-layout">${toc([...parts, { id: "references", title: "References" }])}<article class="prose"><p class="entry-provenance">Working archive record. Not a peer-reviewed publication. <a href="${root}projects/${r.project}/">Associated project ${icon("arrow")}</a></p>${parts.map((s) => `<section id="${s.id}"><h2>${s.title}</h2><p>${esc(s.body)}</p></section>`).join("")}<section><h2>Documents & code</h2>${r.pdf ? `<a class="button" href="${root}${r.pdf}" download>Download paper ${icon("download")}</a>` : '<p class="small-note">A research paper PDF has not been supplied. This HTML record is available to read and print.</p>'}${r.code ? `<a class="text-link" href="${references.find((ref) => ref.id === r.code)!.url}">Inspect related source code ${icon("external")}</a>` : ""}${r.citation ? `<p class="citation">${esc(r.citation)}</p>` : ""}<button class="quiet-button print-button" data-print hidden>Print this record ${icon("download")}</button></section>${referencesList(r.references, root)}</article></div>`,
  });
}
export function explorationDetail(e: Exploration, root: string): string {
  const m = media.find((m) => m.id === e.media)!;
  return layout({
    title: e.title,
    description: e.summary,
    root,
    active: "Explorations",
    dark: true,
    body: `${breadcrumb(root, "Explorations", e.collection)}<article class="wrap exploration-detail"><div class="exploration-detail-image">${mediaFigure(e.media, root)}</div><div class="exploration-detail-copy"><span class="small-note">${e.collection}</span><h1>${esc(e.title)}</h1><p class="page-dek">${esc(e.summary)}</p><h2>Look a little closer.</h2><p>${esc(e.context)}</p><h2>A question to take with you.</h2><p>${esc(e.interest)}</p><div class="related-links"><a href="${root}projects/${e.relatedProject}/">Follow the related project ${icon("arrow")}</a>${e.relatedEntry ? `<a href="${root}notebook/${e.relatedEntry}/">Read the notebook entry ${icon("book")}</a>` : ""}</div><details class="technical"><summary>Image source & attribution</summary><p>${esc(m.credit)} · ${esc(m.kind)}</p><p>${esc(m.license)}</p><a href="${m.source.startsWith("http") ? m.source : root + m.source}">Original source ${icon("external")}</a></details>${referencesList(e.references, root)}</div></article><div class="wrap collection-credit"><a class="text-link" href="${root}explorations/">Return to the collection ${icon("arrow")}</a></div>`,
  });
}
