import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { validateContent, checkPages } from "../scripts/check.ts";
import { markdown, rootFor } from "../src/render.ts";
import {
  chartSvg,
  dataViewer,
  datasetLabel,
} from "../src/components/science.ts";
import { experiments } from "../content/experiments.ts";
import { projects } from "../content/projects.ts";
test("every content relationship and deployed local link resolves", () => {
  assert.deepEqual(validateContent(), []);
  assert.deepEqual(checkPages(), []);
});
test("Markdown treats raw HTML as text and rejects script protocols", () => {
  const output = markdown(
    "<script>alert(1)</script>\n\n[unsafe](javascript:alert(1))\n\n![bad](javascript:alert(1))",
  );
  assert.doesNotMatch(output, /<script|href="javascript:|src="javascript:/);
  assert.match(output, /&lt;script&gt;/);
});
test("equations are selectable MathML with no inline CSS or browser scripts", () => {
  const output = markdown("$$q = \\frac{1}{2}\\rho V^2$$");
  assert.match(output, /<math/);
  assert.match(output, /<annotation encoding="application\/x-tex"/);
  assert.doesNotMatch(output, /style=|<script/);
});
test("dataset viewer reproduces all fixture values and separates line/scatter", () => {
  const e = experiments[0];
  assert.deepEqual(
    e.rows.map((r) => r.values.temperature),
    [23.4, 23.5, 23.6],
  );
  for (const c of e.channels) {
    for (const mode of ["line", "scatter"]) {
      const svg = chartSvg(e, c.key, mode);
      for (const row of e.rows)
        assert.ok(svg.includes(`${row.values[c.key]} ${c.unit}`));
      assert.equal((svg.match(/<circle /g) || []).length, e.rows.length);
      assert.equal(svg.includes("<polyline"), mode === "line");
      assert.doesNotMatch(svg, /NaN|Infinity/);
    }
  }
  assert.match(dataViewer(e, "../../"), /Sample input only/);
});
test("chart tolerates a single point and a constant-valued series", () => {
  const source = experiments[0];
  for (const rows of [
    [source.rows[0]],
    [source.rows[0], { ...source.rows[0], x: 1 }],
  ])
    assert.doesNotMatch(
      chartSvg({ ...source, rows }, "temperature"),
      /NaN|Infinity/,
    );
});
test("real future datasets retain their own evidence label", () => {
  const measured = { ...experiments[0], status: "Measured" as const };
  assert.equal(datasetLabel(measured), "Measured dataset");
  assert.doesNotMatch(
    dataViewer(measured, "./"),
    /<span class="status status-pending">Sample input only/,
  );
});
test("latest hardware account preserves unfinished work and exact source data", () => {
  const p = projects.find((p) => p.id === "wind-tunnel")!;
  const text = p.sections.map((s) => s.body).join(" ");
  assert.match(text, /Dry ice is placed in water/);
  assert.match(text, /3D model.*planned/);
  assert.match(text, /No measured aerodynamic results/);
  const dataset = JSON.parse(
    readFileSync("assets/data/environmental-sample.json", "utf8"),
  );
  assert.equal(dataset.status, "Example fixture");
  assert.deepEqual(dataset.rows, experiments[0].rows);
});
test("global search includes full notebook text, not only titles", () => {
  const index = JSON.parse(readFileSync("assets/search-index.json", "utf8"));
  const note = index.find(
    (r: { url: string }) =>
      r.url === "notebook/calibration-before-conclusions/",
  );
  assert.ok(note.text.includes("cross-axis sensitivity"));
  assert.equal(index.length, 19);
});
test("nested pages link correctly from repository subpaths", () => {
  assert.equal(rootFor("projects/wind-tunnel/index.html"), "../../");
  const html = readFileSync("projects/wind-tunnel/index.html", "utf8");
  assert.match(html, /href="\.\.\/\.\.\/notebook\//);
  assert.doesNotMatch(html, /(?:src|href)="\/assets/);
});
