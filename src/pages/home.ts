import { layout } from "../components/layout.ts";
import { mediaImage } from "../components/content.ts";
import { apparatusLab } from "../components/apparatus.ts";
import { esc, icon, date } from "../render.ts";
import { projects } from "../../content/projects.ts";
import { notebook } from "../../content/notebook.ts";
import { explorations } from "../../content/explorations.ts";
import { repo } from "../../content/references.ts";
export function home(root: string): string {
  const wind = projects.find((p) => p.id === "wind-tunnel")!;
  const cubesat = projects.find((p) => p.id === "cubesat")!;
  const computing = projects.find((p) => p.id === "scientific-computing")!;
  const latestNote = notebook[0];
  const solar = explorations.find((e) => e.id === "solar-arrays")!;
  const naca = explorations.find((e) => e.id === "wind-tunnel-history")!;
  const honeycomb = explorations.find((e) => e.id === "honeycomb")!;
  const arrow = icon("arrow");
  const external = icon("external");
  const category = (projectId: string) =>
    esc(projects.find((p) => p.id === projectId)!.category);
  const explorationTile = (
    e: (typeof explorations)[number],
    offset: string,
  ) => {
    const toolpath = e.media === "honeycomb";
    const credit = toolpath ? "Fieldbook" : "NASA archive";
    return `<article class="exploration ${offset}">
<a class="exploration-media${toolpath ? " is-toolpath" : ""}" href="${root}explorations/${e.id}/" tabindex="-1" aria-hidden="true">${mediaImage(e.media, root, { className: "exploration-img", sizes: "(max-width: 960px) 100vw, 31vw" })}${toolpath ? `<span class="toolpath-caption">Z = 10 mm — Actual toolpath</span>` : ""}</a>
<div class="card-meta"><span>${esc(e.collection)}</span><span>${credit}</span></div>
<h3><a href="${root}explorations/${e.id}/">${esc(e.title)}</a></h3>
<p>${esc(e.summary)}</p>
</article>`;
  };
  const noteLine = (n: (typeof notebook)[number]) => `<article class="note-row">
<div class="note-date"><span>N° ${esc(n.number)}</span><time datetime="${n.date}">${date(n.date)}</time></div>
<div class="note-main"><p class="note-meta">${esc(n.type)} · ${category(n.project)}</p><h3><a href="${root}notebook/${n.id}/">${esc(n.title)}</a></h3><p class="note-summary">${esc(n.summary)}</p><p class="note-tags">${n.tags.map((t) => `<span>${esc(t)}</span>`).join("")}</p></div>
<a class="row-arrow" href="${root}notebook/${n.id}/" aria-label="Read ${esc(n.title)}">${arrow}</a>
</article>`;
  const body = `<section class="hero">
<div class="wrap hero-grid">
<div class="hero-copy">
<p class="hero-eyebrow"><span class="rule" aria-hidden="true"></span><span>A fieldbook in progress</span><span class="rule short" aria-hidden="true"></span><span>N° 06 / 2026</span></p>
<h1>Curiosity,<br><em>engineered<span class="dot">.</span></em></h1>
<p class="hero-intro">An evolving fieldbook of aerospace engineering, experiments, and the process of turning questions into working systems.</p>
<div class="hero-actions"><a class="button-primary" href="${root}projects/">Explore the laboratory ${arrow}</a><a class="hero-secondary" href="${root}notebook/">Open the research notebook ${external}</a></div>
<div class="hero-byline"><span class="avatars" aria-hidden="true"><span class="avatar ink">RK</span><span class="avatar paper">RP</span></span><p>Field notes by Rithwik &amp; Rithika Gummadi<br><span>Two student engineers, one shared fieldbook.</span></p></div>
</div>
<figure class="archive-plate">
<div class="plate-meta"><span>Archive plate</span><span>NASA / 1968</span></div>
<a class="plate-frame" href="${root}explorations/earthrise/" aria-label="Explore the Earthrise archive plate">${mediaImage("earthrise", root, { eager: true, sizes: "(max-width: 960px) 100vw, 442px", className: "plate-img" })}<span class="plate-index">01</span></a>
<figcaption class="plate-caption"><span class="plate-titles"><span class="plate-title">Earthrise — Apollo 8</span><span class="plate-credit">NASA / Bill Anders · 24 Dec 1968</span></span><a class="plate-open" href="${root}explorations/earthrise/" aria-label="Open the Earthrise plate">${external}</a></figcaption>
</figure>
</div>
</section>
<div class="field-strip"><div class="wrap field-strip-inner"><p class="strip-label"><span class="strip-rule" aria-hidden="true"></span>A fieldbook in progress</p><p class="strip-number">N° 06 / 2026</p><a class="strip-latest" href="${root}notebook/${latestNote.id}/"><span class="strip-eyebrow">Latest note</span><span class="strip-title">${esc(latestNote.title)}</span><time datetime="${latestNote.date}">${date(latestNote.date)}</time><span class="strip-read">Read the note ${arrow}</span></a></div></div>
<section class="intro" id="about"><div class="wrap">
<div class="eyebrow-row"><span>01 — Why this exists</span><span>An open record, not a showcase</span></div>
<div class="intro-grid"><h2>Big questions.<br><em>Small, deliberate steps.</em></h2><div class="intro-copy"><p>We’re Rithwik and Rithika, siblings exploring engineering through building, questioning, and documenting. This is where the source files meet the unfinished ideas.</p><a class="text-link" href="${root}about/">Meet the people behind the fieldbook ${arrow}</a></div></div>
<div class="question-rail"><div class="question"><span>Q.01</span><p>What makes air move the way it does?</p></div><div class="question"><span>Q.02</span><p>How do we measure something we can’t see?</p></div><div class="question"><span>Q.03</span><p>What happens when the first design doesn’t work?</p></div></div>
</div></section>
<section class="workbench" id="work"><div class="wrap">
<div class="section-head"><div><p class="eyebrow">02 — On the bench</p><h2>On the workbench.</h2></div><div class="section-aside"><p>Selected work, updated as it develops</p><a class="text-link" href="${root}projects/">All projects ${arrow}</a></div></div>
<div class="work-grid">
<article class="feature-card">
<a class="feature-plate" href="${root}projects/${wind.id}/" aria-label="Open the wind tunnel project">${mediaImage(wind.media, root, { className: "feature-img" })}<span class="card-index">01</span><span class="plate-top"><span>Fabrication / toolpath</span><span>Z = 10 mm</span></span><span class="plate-bottom"><span>Layer trace — actual print file<small>Not a simulation or measured flow field</small></span><span class="plate-open">${external}</span></span></a>
<div class="feature-meta"><span class="meta-label">${esc(wind.category)} | Wind tunnel</span><span class="status status-amber"><i aria-hidden="true"></i>${esc(wind.status)}</span></div>
<h3><a href="${root}projects/${wind.id}/">${esc(wind.title)}</a></h3>
<p class="feature-summary">${esc(wind.summary)}</p>
<div class="question-block"><span>The question</span><p>${esc(wind.question)}</p></div>
<p class="tags">${wind.tools.slice(0, 3).map((t) => `<span>${esc(t)}</span>`).join("")}</p>
</article>
<div class="side-stack">
<article class="side-card">
<a class="side-plate" href="${root}projects/${cubesat.id}/" aria-label="Open the CubeSat project">${mediaImage(cubesat.media, root, { className: "side-img" })}<span class="card-index">02</span><span class="plate-label">Concept illustration</span><span class="plate-caption">No mission configuration established</span></a>
<div class="feature-meta"><span class="meta-label">${esc(cubesat.category)}</span><span class="meta-status">${esc(cubesat.status)}</span></div>
<h3><a href="${root}projects/${cubesat.id}/">${esc(cubesat.title)}</a></h3>
<p class="side-summary">${esc(cubesat.summary)}</p>
</article>
<a class="computing-card" href="${root}projects/${computing.id}/"><span class="computing-top"><span>03 / Scientific computing</span><span class="plate-open">${external}</span></span><h3>From a signal to a useful record.</h3><p>A Python data grapher, an inspection viewer, and the original sample values.</p><svg class="sparkline" viewBox="0 0 132 28" width="132" height="28" fill="none" aria-hidden="true"><path d="M2 22 20 19 36 22 54 13 70 17 88 8 114 11 130 4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="130" cy="4" r="2.2" fill="currentColor"/></svg></a>
</div>
</div>
</div></section>
${apparatusLab(root)}
<section class="investigation" id="acquisition"><div class="wrap">
<div class="investigation-head"><p class="live-label"><i aria-hidden="true"></i>Currently investigating</p><p class="investigation-meta">Research plan / 06 Nov 2026</p></div>
<div class="investigation-grid"><div class="investigation-copy"><h2>A tunnel built.<br><em>An instrument still to prove.</em></h2><p>Four researcher conversations changed the next stage: characterize the empty tunnel, validate a NACA 0018 baseline, then choose an original question the apparatus can distinguish from noise.</p><a class="text-link light" href="${root}research/#future-plans">Read the future plan ${arrow}</a></div>
<div class="ledger" aria-label="Measurement stand status"><div class="ledger-row"><span>Differential pressure</span><span class="ledger-status build">In build</span></div><div class="ledger-row"><span>Lift / drag load cells</span><span class="ledger-status calibrating">Calibrating</span></div><div class="ledger-row"><span>Airfoil mounting</span><span class="ledger-status planned">Planned</span></div><div class="ledger-row"><span>Data pipeline</span><span class="ledger-status planned">Sample input only</span></div><p class="ledger-note">Uncalibrated readings are not aerodynamic results.</p></div></div>
</div></section>
<section class="explorations"><div class="wrap">
<div class="section-head"><div><p class="eyebrow">04 — Explorations</p><h2>Follow your curiosity.</h2></div><div class="section-aside"><p>Images that open a door to an idea.</p><a class="text-link" href="${root}explorations/">Enter explorations ${arrow}</a></div></div>
<div class="exploration-grid">${explorationTile(solar, "")}${explorationTile(naca, "offset-mid")}${explorationTile(honeycomb, "offset-low")}</div>
</div></section>
<section class="notebook-band" id="notebook"><div class="wrap notebook-grid">
<div class="notebook-intro"><p class="eyebrow">05 — Notebook</p><h2>The work<br><em>between the results.</em></h2><p class="notebook-copy">Build notes, design decisions, and questions worth returning to. An open notebook, including the parts still unresolved.</p><a class="text-link" href="${root}notebook/">Open the notebook ${arrow}</a><span class="scribble">Observe. Record. Reconsider.</span></div>
<div class="note-list"><p class="note-list-head">Open record · Latest entry ${date(latestNote.date)}</p>${notebook.slice(0, 3).map((n) => noteLine(n)).join("")}</div>
</div></section>
<section class="evidence"><div class="wrap">
<div class="evidence-grid"><div class="evidence-intro"><p class="eyebrow">06 — Evidence</p><h2>Look closer.</h2></div>
<a class="evidence-col" href="${root}research/"><span class="evidence-index">01</span><h3>Research archive</h3><p>Questions, methods, and limitations</p><span class="evidence-link">Open archive ${arrow}</span></a>
<a class="evidence-col" href="${root}projects/${computing.id}/#data"><span class="evidence-index">02</span><h3>Sample data</h3><p>Interactive plots with the original values</p><span class="evidence-link">Explore the data ${arrow}</span></a>
<a class="evidence-col" href="${repo}"><span class="evidence-index">03</span><h3>Source code</h3><p>Code, print files, and documentation</p><span class="evidence-link">Inspect on GitHub ${external}</span></a></div>
</div></section>`;
  return layout({
    title: "Curiosity, Engineered",
    description:
      "An aerospace engineering fieldbook by Rithwik and Rithika Gummadi. Explore wind-tunnel development, a living notebook, source code, and open research questions.",
    body,
    root,
    home: true,
    lab: true,
  });
}
