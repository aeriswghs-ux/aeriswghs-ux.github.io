import { esc, icon } from "../render.ts";
import { repo } from "../../content/references.ts";
export const navItems = [
  "Home",
  "Projects",
  "Research",
  "Notebook",
  "Explorations",
  "About",
];
export function layout({
  title,
  description,
  body,
  root,
  active = "Home",
  dark = false,
  math = false,
  home = false,
}: {
  title: string;
  description: string;
  body: string;
  root: string;
  active?: string;
  dark?: boolean;
  math?: boolean;
  home?: boolean;
}): string {
  return `<!doctype html><html lang="en" data-default-theme="${dark ? "dark" : "light"}"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="theme-color" content="${home ? "#F7F8F6" : dark ? "#101923" : "#f5f3ed"}">
<title>${esc(title)} · AeroAspirant</title><meta name="description" content="${esc(description)}">
<meta property="og:title" content="${esc(title)} · The Engineering Fieldbook"><meta property="og:description" content="${esc(description)}"><meta property="og:type" content="website">
<link rel="icon" href="${root}assets/favicon.svg" type="image/svg+xml"><link rel="stylesheet" href="${root}fonts.css"><link rel="stylesheet" href="${root}${home ? "home.css" : "styles.css"}">
<script src="${root}theme.js"></script><script src="${root}script.js" defer></script></head>
<body id="top" data-root="${root}"${home ? ' class="home"' : ""}><a class="skip-link" href="#main">Skip to content</a>
<header class="masthead"><div class="wrap masthead-inner"><a class="brand" href="${root}index.html" aria-label="AeroAspirant home"><svg class="brand-mark" viewBox="0 0 36 36" width="34" height="34" aria-hidden="true"><path d="m8 29 10-23 10 23M12 21h12" fill="none" stroke="currentColor" stroke-width="1.6"/><ellipse cx="18" cy="20" rx="17" ry="6" transform="rotate(-35 18 20)" fill="none" stroke="currentColor" stroke-width="1"/></svg><span>AeroAspirant<span class="brand-sub">The Engineering Fieldbook</span></span></a>
<nav id="primary-nav" aria-label="Primary navigation">${navItems.map((label) => `<a href="${root}${label === "Home" ? "index.html" : label.toLowerCase() + "/"}"${active === label ? ' aria-current="page"' : ""}>${label}</a>`).join("")}</nav>
<div class="nav-tools"><a class="icon-button" href="${root}search/" aria-label="Search the fieldbook">${icon("search")}</a><button class="icon-button" data-theme-toggle aria-label="Switch color mode" aria-pressed="false" hidden>${icon("sun")}</button><button class="icon-button menu-button" data-menu-toggle aria-controls="primary-nav" aria-expanded="false" aria-label="Open navigation" hidden>${icon("menu")}</button></div></div></header>
<main id="main" tabindex="-1">${body}</main>
<footer class="footer"><div class="wrap">${home ? `<p class="footer-eyebrow"><span aria-hidden="true"></span>The fieldbook continues</p>` : ""}<div class="footer-top"><a class="footer-title" href="${root}index.html">Keep asking.<br><em>Keep building.</em></a><div><p>A fieldbook by<br><strong>Rithwik & Rithika Gummadi.</strong></p><p>Questions, experiments, and the work in between.</p><a class="text-link" href="${repo}">Explore the research repository ${icon("external")}</a>${home ? `<nav class="footer-nav" aria-label="Footer navigation">${navItems.filter((label) => label !== "Home").map((label) => `<a href="${root}${label.toLowerCase()}/">${label}</a>`).join("")}</nav>` : ""}</div></div><div class="footer-bottom"><span>${home ? "© 2026 AeroAspirant — An open record of work in progress" : "AeroAspirant · An open record of work in progress"}</span><a href="${root}research-record.html">Original research record</a><a href="${root}PROVENANCE.md">Sources & media credits</a><a href="#top">Back to top</a></div></div></footer></body></html>`;
}
export const pageHead = (title: string, summary: string, meta = "") =>
  `<div class="page-head wrap"><div class="page-title-row"><h1>${title}</h1>${meta ? `<span class="page-meta">${esc(meta)}</span>` : ""}</div><p class="page-dek">${esc(summary)}</p></div>`;
export const breadcrumb = (root: string, section: string, label: string) =>
  `<nav class="breadcrumb wrap" aria-label="Breadcrumb"><a href="${root}index.html">Home</a><span aria-hidden="true">/</span><a href="${root}${section.toLowerCase()}/">${section}</a><span aria-hidden="true">/</span><span>${esc(label)}</span></nav>`;
