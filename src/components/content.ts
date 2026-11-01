import type {
  Project,
  NotebookEntry,
  Exploration,
  ResearchPaper,
} from "../content-types.ts";
import { media } from "../../content/media.ts";
import { references } from "../../content/references.ts";
import { projects } from "../../content/projects.ts";
import { esc, date, icon, notebookSource } from "../render.ts";
export const status = (value: string) =>
  `<span class="status ${value === "In progress" || value === "Draft" ? "status-pending" : ""}"><span aria-hidden="true"></span>${esc(value)}</span>`;
export function mediaImage(
  id: string,
  root: string,
  options: { eager?: boolean; className?: string; sizes?: string } = {},
): string {
  const m = media.find((m) => m.id === id);
  if (!m) throw new Error(`Unknown media: ${id}`);
  const srcset = m.responsive
    ? ` srcset="${root}${m.src.replace("-1041", "-640")} 640w, ${root}${m.src.replace("-1041", "-1000")} 1000w, ${root}${m.src} 1041w" sizes="${options.sizes || "(max-width: 700px) 100vw, 60vw"}"`
    : "";
  return `<img class="${esc(options.className || "")}" src="${root}${m.src}"${srcset} width="${m.width}" height="${m.height}" alt="${esc(m.alt)}" ${options.eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">`;
}
export const mediaFigure = (id: string, root: string, className = "") => {
  const m = media.find((m) => m.id === id)!;
  return `<figure class="media-figure ${className}"><div class="figure-image media-${m.kind}">${mediaImage(id, root)}</div><figcaption><span>${esc(m.caption)}</span><a href="${m.source.startsWith("http") ? m.source : root + m.source}">${esc(m.credit)} ${icon("external")}</a></figcaption></figure>`;
};
export const referencesList = (ids: string[], root: string) =>
  `<section class="references" id="references"><h2>Sources & related documents</h2><ol>${ids
    .map((id) => {
      const r = references.find((r) => r.id === id);
      if (!r) throw Error(`Missing reference ${id}`);
      return `<li><a href="${esc(r.url)}">${esc(r.title)} ${icon("external")}</a>${r.author ? `<span>${esc(r.author)}</span>` : ""}</li>`;
    })
    .join(
      "",
    )}</ol><p class="small-note">See the <a href="${root}PROVENANCE.md">provenance record</a> for source boundaries and attribution.</p></section>`;
export const projectCard = (p: Project, root: string) =>
  `<article class="project-card" data-filter-item data-category="${esc(p.category)}" data-status="${esc(p.status)}" data-search="${esc(`${p.title} ${p.summary} ${p.question} ${p.tools.join(" ")}`.toLowerCase())}"><a class="project-image media-${media.find((m) => m.id === p.media)!.kind}" href="${root}projects/${p.id}/" tabindex="-1" aria-hidden="true">${mediaImage(p.media, root)}<span class="image-open">${icon("external")}</span></a><div class="card-meta"><span>${esc(p.category)}</span>${status(p.status)}</div><h2><a href="${root}projects/${p.id}/">${esc(p.title)} ${icon("arrow")}</a></h2><p>${esc(p.summary)}</p><p class="card-question">${esc(p.question)}</p><div class="tags">${p.tools
    .slice(0, 3)
    .map((t) => `<span>${esc(t)}</span>`)
    .join("")}</div></article>`;
export const noteRow = (n: NotebookEntry, root: string) =>
  `<article class="note-row" data-filter-item data-category="${esc(n.type)}" data-status="${esc(n.project)}" data-tags="${esc(n.tags.join("|"))}" data-search="${esc(`${n.title} ${n.summary} ${n.tags.join(" ")} ${n.type} ${notebookSource(n.file)}`.toLowerCase())}"><div class="note-date"><span class="mono">N° ${n.number}</span><time datetime="${n.date}">${date(n.date)}</time></div><div class="note-main"><div class="card-meta"><span>${esc(n.type)}</span><span>${esc(projects.find((p) => p.id === n.project)!.category)}</span></div><h2><a href="${root}notebook/${n.id}/">${esc(n.title)}</a></h2><p>${esc(n.summary)}</p><div class="tags">${n.tags.map((t) => `<span>${esc(t)}</span>`).join("")}</div></div><a class="row-arrow" href="${root}notebook/${n.id}/" aria-label="Read ${esc(n.title)}">${icon("arrow")}</a></article>`;
export const explorationCard = (e: Exploration, root: string) =>
  `<article class="exploration-card" data-filter-item data-category="${esc(e.collection)}" data-search="${esc(`${e.title} ${e.summary} ${e.collection}`.toLowerCase())}"><a href="${root}explorations/${e.id}/"><div class="exploration-image media-${media.find((m) => m.id === e.media)!.kind}">${mediaImage(e.media, root, { sizes: "(max-width: 700px) 100vw, 33vw" })}<span class="image-open">${icon("external")}</span></div><div class="card-meta"><span>${esc(e.collection)}</span><span>${media.find((m) => m.id === e.media)!.kind === "photograph" ? "NASA archive" : "Fieldbook"}</span></div><h2>${esc(e.title)}</h2><p>${esc(e.summary)}</p></a></article>`;
export const researchRow = (r: ResearchPaper, root: string) =>
  `<article class="research-row" data-filter-item data-category="${esc(r.kind)}" data-status="${esc(r.status)}" data-search="${esc(`${r.title} ${r.abstract} ${r.question}`.toLowerCase())}"><div><span class="document-icon">${icon("book")}</span><span class="small-note">${esc(r.kind)}</span></div><div><h2><a href="${root}research/${r.id}/">${esc(r.title)}</a></h2><p>${esc(r.abstract)}</p><span class="small-note">${date(r.date)} · ${esc(r.authors.join(" & "))}</span></div><div>${status(r.status)}<a class="text-link" href="${root}research/${r.id}/">Read record ${icon("arrow")}</a></div></article>`;
export function filterBar({
  label,
  categories,
  statuses,
  search = true,
  tags = [],
}: {
  label: string;
  categories: string[];
  statuses?: { value: string; label: string }[];
  search?: boolean;
  tags?: string[];
}): string {
  return `<div class="filter-bar" data-filters hidden>${search ? `<label class="search-field">${icon("search")}<span class="sr-only">Search ${label}</span><input type="search" data-filter-search placeholder="Search ${label}…" autocomplete="off"></label>` : ""}<div class="filter-controls"><label><span class="sr-only">Filter by ${label === "notebook" ? "entry type" : "category"}</span><select data-filter-category><option value="">All ${label === "notebook" ? "entry types" : "categories"}</option>${categories.map((c) => `<option>${esc(c)}</option>`).join("")}</select></label>${statuses ? `<label><span class="sr-only">Filter by ${label === "notebook" ? "project" : "status"}</span><select data-filter-status><option value="">All ${label === "notebook" ? "projects" : "statuses"}</option>${statuses.map((s) => `<option value="${esc(s.value)}">${esc(s.label)}</option>`).join("")}</select></label>` : ""}${tags.length ? `<label><span class="sr-only">Filter by topic</span><select data-filter-tag><option value="">All topics</option>${tags.map((t) => `<option>${esc(t)}</option>`).join("")}</select></label>` : ""}<button class="quiet-button" data-filter-reset>Reset</button></div></div><p class="filter-count small-note" data-filter-count role="status" hidden></p>`;
}
export const emptyState =
  '<div class="empty-state" data-filter-empty hidden><h2>No matching records.</h2><p>Try a broader search or reset the filters.</p><button class="button" data-filter-reset>Reset filters</button></div>';
