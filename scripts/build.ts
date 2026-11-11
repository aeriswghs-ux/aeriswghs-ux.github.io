import { mkdir, writeFile, cp } from "node:fs/promises";
import { dirname } from "node:path";
import { rootFor, notebookSource, esc } from "../src/render.ts";
import { siteURL } from "../src/site-config.ts";
import { home } from "../src/pages/home.ts";
import {
  projectIndex,
  notebookIndex,
  researchIndex,
  explorationsIndex,
  searchPage,
} from "../src/pages/collections.ts";
import {
  projectDetail,
  notebookDetail,
  researchDetail,
  explorationDetail,
} from "../src/pages/details.ts";
import { aboutPage } from "../src/pages/about.ts";
import { layout } from "../src/components/layout.ts";
import { chartSvg } from "../src/components/science.ts";
import { projects } from "../content/projects.ts";
import { notebook } from "../content/notebook.ts";
import { research } from "../content/research.ts";
import { explorations } from "../content/explorations.ts";
import { experiments } from "../content/experiments.ts";
export async function build(): Promise<string[]> {
  const routes: [string, (root: string) => string][] = [
    ["index.html", home],
    ["projects/index.html", projectIndex],
    ["notebook/index.html", notebookIndex],
    ["research/index.html", researchIndex],
    ["explorations/index.html", explorationsIndex],
    ["about/index.html", aboutPage],
    ["search/index.html", searchPage],
    ...projects.map(
      (p) =>
        [
          `projects/${p.id}/index.html`,
          (root: string) => projectDetail(p, root),
        ] as [string, (root: string) => string],
    ),
    ...notebook.map(
      (n) =>
        [
          `notebook/${n.id}/index.html`,
          (root: string) => notebookDetail(n, root),
        ] as [string, (root: string) => string],
    ),
    ...research.map(
      (r) =>
        [
          `research/${r.id}/index.html`,
          (root: string) => researchDetail(r, root),
        ] as [string, (root: string) => string],
    ),
    ...explorations.map(
      (e) =>
        [
          `explorations/${e.id}/index.html`,
          (root: string) => explorationDetail(e, root),
        ] as [string, (root: string) => string],
    ),
  ];
  for (const [path, render] of routes) {
    await mkdir(dirname(path), { recursive: true });
    const canonical = new URL(path.replace(/index\.html$/, ""), siteURL).href;
    const metadata = `<link rel="canonical" href="${esc(canonical)}"><meta property="og:url" content="${esc(canonical)}"><meta property="og:image" content="${esc(new URL("assets/media/earthrise-1041.webp", siteURL).href)}"><meta property="og:image:alt" content="NASA / Bill Anders — Earthrise, Apollo 8"><meta name="twitter:card" content="summary_large_image">`;
    await writeFile(
      path,
      render(rootFor(path)).replace("</head>", metadata + "</head>"),
      "utf8",
    );
  }
  await mkdir("assets/data", { recursive: true });
  for (const e of experiments) {
    await writeFile(
      `assets/data/${e.id}.json`,
      JSON.stringify({
        ...e,
        plots: Object.fromEntries(
          e.channels.map((c) => [
            c.key,
            {
              line: chartSvg(e, c.key, "line"),
              scatter: chartSvg(e, c.key, "scatter"),
            },
          ]),
        ),
      }),
    );
    await writeFile(
      e.download,
      [
        ["time", ...e.channels.map((c) => `${c.key} (${c.unit})`)].join(","),
        ...e.rows.map((r) =>
          [r.label, ...e.channels.map((c) => String(r.values[c.key]))].join(
            ",",
          ),
        ),
      ].join("\n") + "\n",
    );
  }
  const index = [
    ...projects.map((p) => ({
      title: p.title,
      summary: p.summary,
      type: "Project",
      url: `projects/${p.id}/`,
      text: `${p.question} ${p.tools.join(" ")} ${p.sections.map((s) => s.body).join(" ")}`,
    })),
    ...notebook.map((n) => ({
      title: n.title,
      summary: n.summary,
      type: "Notebook",
      url: `notebook/${n.id}/`,
      text: `${n.tags.join(" ")} ${notebookSource(n.file)}`,
    })),
    ...research.map((r) => ({
      title: r.title,
      summary: r.abstract,
      type: "Research",
      url: `research/${r.id}/`,
      text: `${r.question} ${r.methodology} ${r.findings} ${r.limitations} ${(r.sections ?? []).map((section) => section.body).join(" ")}`,
    })),
    ...explorations.map((e) => ({
      title: e.title,
      summary: e.summary,
      type: "Exploration",
      url: `explorations/${e.id}/`,
      text: `${e.collection} ${e.context} ${e.interest}`,
    })),
  ];
  await writeFile("assets/search-index.json", JSON.stringify(index));
  await cp("node_modules/katex/LICENSE", "assets/KATEX-LICENSE.txt");
  await mkdir("assets/vendor", { recursive: true });
  await cp(
    "node_modules/animejs/dist/bundles/anime.esm.min.js",
    "assets/vendor/anime.esm.min.js",
  );
  await cp("node_modules/animejs/LICENSE.md", "assets/vendor/ANIME-LICENSE.md");
  await writeFile(
    "404.html",
    layout({
      title: "Page not found",
      description:
        "This page is not in the fieldbook. Return to the laboratory entrance or search the archive.",
      root: siteURL.pathname,
      active: "",
      body: `<div class="wrap page-head"><h1>A loose page.</h1><p class="page-dek">This address is not in the fieldbook. Return to the entrance, or search for the subject you were following.</p><div class="button-row"><a class="button" href="${esc(siteURL.pathname)}">Return home</a><a class="text-link" href="${esc(siteURL.pathname)}search/">Search the fieldbook</a></div></div>`,
    }),
  );
  await writeFile(
    "sitemap.xml",
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map(([path]) => `<url><loc>${esc(new URL(path.replace(/index\.html$/, ""), siteURL).href)}</loc></url>`).join("")}</urlset>`,
  );
  await writeFile(
    "robots.txt",
    `User-agent: *\nAllow: /\nSitemap: ${new URL("sitemap.xml", siteURL).href}\n`,
  );
  await writeFile(
    "assets/routes.json",
    JSON.stringify(routes.map(([route]) => route)),
  );
  return routes.map(([route]) => route);
}
if (process.argv[1]?.replaceAll("\\", "/").endsWith("/build.ts")) {
  const paths = await build();
  console.log(
    `Built ${paths.length} static pages, full-content search, and ${experiments.length} dataset viewer. GitHub Pages output is at the repository root.`,
  );
}
