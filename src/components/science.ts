import type { Project, Experiment } from "../content-types.ts";
import { esc, icon } from "../render.ts";
import { references } from "../../content/references.ts";
export const datasetLabel = (e: Experiment): string =>
  e.status === "Example fixture" ? "Sample input only" : "Measured dataset";
export function timeline(p: Project): string {
  return `<section class="timeline-section" aria-labelledby="process-title"><div class="section-head"><h2 id="process-title">The process, still unfolding.</h2><span class="small-note">Select a stage to inspect the record</span></div><div class="timeline" data-timeline>${p.timeline.map((m, i) => `<details${i === 2 ? " open" : ""}><summary><span class="timeline-dot" aria-hidden="true"></span><span>${m.stage}</span><small>${esc(m.status)}</small></summary><p>${esc(m.detail)}</p></details>`).join("")}</div></section>`;
}
export function diagram(): string {
  const parts = [
    [
      "Environment",
      "BME280",
      "Temperature, humidity, and environmental pressure enter the earlier logger. Sensor accuracy is not established by the source code.",
    ],
    [
      "Pressure model",
      "Analog input",
      "The earlier pressure channel includes simulated noise and conditioning. It should not be described as a validated physical measurement.",
    ],
    [
      "Acquisition",
      "Arduino logger",
      "The loop schedules CSV output every two seconds. This is a configured interval, not a measured timing benchmark.",
    ],
    [
      "Record",
      "SD / CSV",
      "Timestamped raw and conditioned values are retained as source-defined fields. The newer force-measurement stand is not represented by this earlier architecture.",
    ],
  ];
  return `<section class="diagram-section" id="acquisition"><h2>Follow a reading.</h2><p>Explore the earlier firmware architecture. Each stage exposes an assumption worth checking.</p><div class="signal-diagram">${parts.map(([label, value, detail]) => `<details><summary><span class="mono">${label}</span><strong>${value}</strong>${icon("arrow")}</summary><p>${detail}</p></details>`).join("")}</div><p class="small-note">Source-based architecture, not a validated wiring schematic. The newer load-cell stand is still being developed.</p></section>`;
}
export function chartSvg(
  experiment: Experiment,
  channelKey: string,
  mode = "line",
): string {
  const channel = experiment.channels.find((c) => c.key === channelKey);
  if (!channel) throw Error("Unknown channel");
  const values = experiment.rows.map((r) => r.values[channelKey]);
  const min = Math.min(...values),
    max = Math.max(...values);
  const pad = (max - min) * 0.25 || 1;
  const low = min - pad,
    high = max + pad;
  const xs = experiment.rows.map((r) => r.x),
    xMin = Math.min(...xs),
    xMax = Math.max(...xs);
  const point = (i: number) => [
    92 + ((xs[i] - xMin) / (xMax - xMin || 1)) * 650,
    238 - ((values[i] - low) / (high - low)) * 188,
  ];
  return `<svg viewBox="0 0 800 300" class="data-chart" role="img" aria-labelledby="chart-title-${experiment.id} chart-desc-${experiment.id}"><title id="chart-title-${experiment.id}">${esc(channel.label)} (${esc(channel.unit)}) — ${datasetLabel(experiment)}</title><desc id="chart-desc-${experiment.id}">${experiment.rows.map((r, i) => `${r.label}: ${values[i]} ${channel.unit}`).join("; ")}. ${esc(experiment.limitations)} A complete table follows.</desc>${[
    0, 1, 2, 3, 4,
  ]
    .map((i) => {
      const y = 50 + i * 47;
      return `<path class="chart-grid" d="M92 ${y}H742"/><text class="chart-label" x="77" y="${y + 4}" text-anchor="end">${(high - (i * (high - low)) / 4).toFixed(2)}</text>`;
    })
    .join(
      "",
    )}<text class="chart-label" x="92" y="25">${esc(channel.label)} (${esc(channel.unit)})</text>${mode === "line" ? `<polyline class="chart-line" points="${values.map((_, i) => point(i).join(",")).join(" ")}"/>` : ""}${values
    .map((v, i) => {
      const [x, y] = point(i);
      return `<circle class="chart-point" cx="${x}" cy="${y}" r="5" tabindex="0" data-point-label="${esc(`${experiment.rows[i].label} · ${v} ${channel.unit}`)}" aria-label="${esc(`${experiment.rows[i].label}: ${v} ${channel.unit}`)}"><title>${esc(experiment.rows[i].label)}: ${v} ${esc(channel.unit)}</title></circle><text class="chart-label" x="${x}" y="263" text-anchor="middle">${xs[i]}</text>`;
    })
    .join(
      "",
    )}<text class="chart-label" x="420" y="291" text-anchor="middle">${esc(experiment.xLabel)} (${esc(experiment.xUnit)})</text></svg>`;
}
export function dataViewer(experiment: Experiment, root: string): string {
  return `<section class="data-viewer" data-dataset="${experiment.id}" id="data"><div class="section-head"><h2>Read the data.</h2><span class="status status-pending">${datasetLabel(experiment)}</span></div><p>${esc(experiment.caption)}</p><div class="chart-controls" hidden><label>Channel<select data-chart-channel>${experiment.channels.map((c) => `<option value="${c.key}">${c.label} (${c.unit})</option>`).join("")}</select></label><label>Plot type<select data-chart-mode><option value="line">Line chart</option><option value="scatter">Scatter plot</option></select></label></div><div class="dataset-download"><a class="text-link" href="${root}${experiment.download}" download>Download ${experiment.status === "Example fixture" ? "sample " : ""}CSV ${icon("download")}</a></div><div data-chart>${chartSvg(experiment, experiment.channels[0].key)}</div><p class="chart-tooltip mono" data-chart-tooltip role="status">Focus or point to a data point for its value.</p><div class="table-scroll" tabindex="0" role="region" aria-label="${esc(experiment.title)} data"><table><caption>${esc(experiment.title)} · ${esc(experiment.date)} · ${esc(experiment.status)}</caption><thead><tr><th scope="col">Time</th>${experiment.channels.map((c) => `<th scope="col">${c.label} (${c.unit})</th>`).join("")}</tr></thead><tbody>${experiment.rows.map((r) => `<tr><th scope="row">${r.label}</th>${experiment.channels.map((c) => `<td>${r.values[c.key]}</td>`).join("")}</tr>`).join("")}</tbody></table></div><details class="technical"><summary>Methodology & limitations</summary><p>${esc(experiment.methodology)}</p><p>${esc(experiment.limitations)}</p><a href="${references.find((r) => r.id === experiment.source)!.url}">Inspect the original CSV ${icon("external")}</a></details></section>`;
}
