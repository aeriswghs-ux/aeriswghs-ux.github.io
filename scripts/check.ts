import { readFileSync, existsSync, statSync } from "node:fs";
import { resolve, dirname, relative } from "node:path";
import { projects } from "../content/projects.ts";
import { notebook } from "../content/notebook.ts";
import { research } from "../content/research.ts";
import { explorations } from "../content/explorations.ts";
import { media } from "../content/media.ts";
import { experiments } from "../content/experiments.ts";
import { references } from "../content/references.ts";
export function validateContent(): string[] {
  const errors: string[] = [];
  for (const [name, items] of Object.entries({
    projects,
    notebook,
    research,
    explorations,
    media,
    experiments,
    references,
  })) {
    const seen = new Set<string>();
    for (const item of items) {
      if (seen.has(item.id)) errors.push(`${name}: duplicate ${item.id}`);
      seen.add(item.id);
      if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(item.id))
        errors.push(`${name}: invalid ID ${item.id}`);
    }
  }
  const projectIds = new Set(projects.map((p) => p.id)),
    referenceIds = new Set(references.map((r) => r.id)),
    mediaIds = new Set(media.map((m) => m.id));
  for (const item of [...projects, ...notebook, ...research, ...explorations]) {
    for (const id of item.references)
      if (!referenceIds.has(id))
        errors.push(`${item.id}: missing reference ${id}`);
    if ("project" in item && !projectIds.has(item.project))
      errors.push(`${item.id}: unknown project`);
    if ("media" in item && item.media && !mediaIds.has(item.media))
      errors.push(`${item.id}: missing media`);
  }
  for (const n of notebook) {
    if (!existsSync(`content/notebook/${n.file}`))
      errors.push(`Missing notebook file ${n.file}`);
    for (const id of n.related)
      if (!notebook.some((n) => n.id === id))
        errors.push(`${n.id}: missing related entry ${id}`);
    if (n.dataset && !experiments.some((e) => e.id === n.dataset))
      errors.push(`${n.id}: missing dataset`);
    if (n.updated < n.date) errors.push(`${n.id}: update precedes entry`);
  }
  for (const e of explorations) {
    if (!projectIds.has(e.relatedProject))
      errors.push(`${e.id}: missing related project`);
    if (e.relatedEntry && !notebook.some((n) => n.id === e.relatedEntry))
      errors.push(`${e.id}: missing related note`);
  }
  for (const m of media) {
    if (!existsSync(m.src)) errors.push(`Missing media file ${m.src}`);
    if (!m.alt || !m.credit || !m.source || !m.license)
      errors.push(`Incomplete provenance ${m.id}`);
  }
  for (const r of research)
    if (r.pdf && !existsSync(r.pdf)) errors.push(`Missing PDF ${r.pdf}`);
  for (const e of experiments) {
    if (!e.rows.length) errors.push(`${e.id}: empty dataset`);
    for (const row of e.rows) {
      if (!Number.isFinite(row.x)) errors.push(`${e.id}: invalid x`);
      for (const c of e.channels)
        if (!Number.isFinite(row.values[c.key]))
          errors.push(`${e.id}: invalid ${c.key}`);
    }
  }
  return errors;
}
export function checkPages(): string[] {
  const routes: string[] = JSON.parse(
    readFileSync("assets/routes.json", "utf8"),
  );
  const errors: string[] = [];
  const root = resolve(".");
  const all = [
    ...routes,
    "research-record.html",
    "cubesat-viewer.html",
    "404.html",
  ];
  const html = new Map(all.map((p) => [resolve(p), readFileSync(p, "utf8")]));
  for (const file of all) {
    const text = html.get(resolve(file))!;
    const ids = [...text.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]);
    if (new Set(ids).size !== ids.length) errors.push(`${file}: duplicate IDs`);
    if (!text.includes("<h1") || !text.includes("<main"))
      errors.push(`${file}: missing primary heading/landmark`);
    if (/\bstyle=|<style[\s>]/i.test(text)) errors.push(`${file}: inline CSS`);
    for (const match of text.matchAll(
      /<(?:a|link|script|img|iframe)\b[^>]*?\b(?:href|src)="([^"]*)"/g,
    )) {
      const link = match[1].replaceAll("&amp;", "&");
      if (/^(https?:|mailto:|tel:|data:)/.test(link)) continue;
      if (!link || link === "#") {
        errors.push(`${file}: empty link`);
        continue;
      }
      const [pathPart, fragment] = link.split("#");
      const path = pathPart.split("?")[0];
      let target = path
        ? resolve(
            path.startsWith("/") ? root : dirname(resolve(file)),
            path.startsWith("/") ? "." + path : path,
          )
        : resolve(file);
      if (existsSync(target) && statSync(target).isDirectory())
        target = resolve(target, "index.html");
      if (!existsSync(target)) {
        errors.push(`${file}: missing ${link}`);
        continue;
      }
      // Check exact casing even on the Windows filesystem.
      const rel = relative(root, target).replaceAll("\\", "/");
      if (
        all.some((p) => p.toLowerCase() === rel.toLowerCase()) &&
        !all.includes(rel)
      )
        errors.push(`${file}: route case mismatch ${link}`);
      if (fragment && target.endsWith(".html")) {
        const source = html.get(target) || readFileSync(target, "utf8");
        if (!source.includes(`id="${decodeURIComponent(fragment)}"`))
          errors.push(`${file}: missing anchor ${link}`);
      }
    }
    for (const m of text.matchAll(/<img\b([^>]*)>/g))
      if (
        !/\balt="[^"]*"/.test(m[1]) ||
        !m[1].includes("width=") ||
        !m[1].includes("height=")
      )
        errors.push(`${file}: incomplete image attributes`);
  }
  return errors;
}
if (process.argv[1]?.replaceAll("\\", "/").endsWith("/check.ts")) {
  const errors = [...validateContent(), ...checkPages()];
  if (errors.length) {
    console.error(errors.join("\n"));
    process.exitCode = 1;
  } else
    console.log(
      "Content references, local routes, anchors, image alternatives, and static HTML integrity passed.",
    );
}
