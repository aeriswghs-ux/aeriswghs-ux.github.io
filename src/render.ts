import MarkdownIt from "markdown-it";
import katex from "katex";
import { readFileSync } from "node:fs";
export const esc = (value: unknown): string =>
  String(value ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ]!,
  );
export const slug = (value: string): string =>
  value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
export const date = (value: string): string =>
  new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${value}T12:00:00Z`));
export const rootFor = (path: string): string =>
  "../".repeat(path.split("/").length - 1) || "./";
export const icon = (name = "arrow"): string => {
  const paths: Record<string, string> = {
    arrow: "M4 12h16m-6-6 6 6-6 6",
    external: "M6 18 18 6M6 6h12v12",
    search: "M21 21l-5-5M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0",
    sun: "M12 3V1m0 22v-2M3 12H1m22 0h-2M4.2 4.2 2.8 2.8m18.4 18.4-1.4-1.4M4.2 19.8l-1.4 1.4M21.2 2.8l-1.4 1.4M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0",
    menu: "M4 7h16M4 12h16M4 17h16",
    close: "m5 5 14 14M5 19 19 5",
    book: "M12 5v15M12 5C8 2 4 3 2 4v15c4-2 7-1 10 1 3-2 6-3 10-1V4c-2-1-6-2-10 1",
    download: "M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5",
  };
  return `<svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${paths[name] || paths.arrow}"/></svg>`;
};
export const math = (source: string, displayMode = false): string =>
  katex.renderToString(source, {
    displayMode,
    throwOnError: true,
    trust: false,
    strict: "error",
    output: "mathml",
  });
const md = new MarkdownIt({ html: false, linkify: false, typographer: true });
md.renderer.rules.table_open = () =>
  '<div class="table-scroll" tabindex="0" role="region" aria-label="Data table"><table>';
md.renderer.rules.table_close = () => "</table></div>";
md.inline.ruler.after("escape", "math", (state, silent) => {
  if (state.src[state.pos] !== "$") return false;
  const end = state.src.indexOf("$", state.pos + 1);
  if (end < 0) return false;
  if (!silent) {
    const token = state.push("math_inline", "", 0);
    token.content = state.src.slice(state.pos + 1, end);
  }
  state.pos = end + 1;
  return true;
});
md.renderer.rules.math_inline = (tokens, i) => math(tokens[i].content);
md.block.ruler.before("fence", "math_block", (state, start, end, silent) => {
  const line = state.src
    .slice(state.bMarks[start] + state.tShift[start], state.eMarks[start])
    .trim();
  if (!line.startsWith("$$") || !line.endsWith("$$") || line.length < 5)
    return false;
  if (silent) return true;
  const token = state.push("math_block", "div", 0);
  token.content = line.slice(2, -2);
  token.block = true;
  state.line = start + 1;
  return true;
});
md.renderer.rules.math_block = (tokens, i) =>
  `<div class="equation">${math(tokens[i].content, true)}</div>`;
md.renderer.rules.heading_open = (tokens, i, options, _env, self) => {
  tokens[i].attrSet("id", slug(tokens[i + 1].content));
  return self.renderToken(tokens, i, options);
};
export const markdown = (source: string): string => md.render(source);
export const notebookSource = (file: string): string =>
  readFileSync(new URL(`../content/notebook/${file}`, import.meta.url), "utf8");
export const headings = (source: string): { id: string; title: string }[] =>
  source
    .split("\n")
    .filter((l) => l.startsWith("## "))
    .map((l) => ({ id: slug(l.slice(3)), title: l.slice(3) }));
