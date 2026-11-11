import { esc, icon } from "../render.ts";
import { media } from "../../content/media.ts";
import { mediaImage } from "./content.ts";

const plate = (id: string, root: string, note: string): string => {
  const m = media.find((item) => item.id === id)!;
  const href = m.source.startsWith("http") ? m.source : root + m.source;
  return `<figure class="lab-plate">${mediaImage(id, root, { className: "lab-plate-img", sizes: "(max-width: 900px) 100vw, 330px" })}<figcaption><span>${esc(note)}</span><a href="${href}">${esc(m.credit)} ${icon("external")}</a></figcaption></figure>`;
};

const runButton = (key: string, label: string): string =>
  `<button class="lab-button" type="button" data-lab-run="${key}">${label}</button>`;

export function apparatusLab(root: string): string {
  return `<section class="apparatus" id="apparatus" data-lab>
<div class="wrap">
<div class="apparatus-head section-head"><div><p class="eyebrow">03 — Apparatus bench</p><h2>Three machines.<br><em>One way of asking.</em></h2></div><div class="section-aside"><p>Concept mechanisms you can set in motion. Illustrative only — not CAD, CFD, or measured hardware.</p></div></div>
<div class="lab-tabs" role="tablist" aria-label="Choose a concept apparatus" hidden>
<button class="lab-tab" id="lab-tab-cubesat" type="button" role="tab" aria-selected="true" aria-controls="lab-panel-cubesat" tabindex="0" data-lab-tab="cubesat"><span class="lab-tab-index">01</span><span class="lab-tab-copy"><strong>CubeSat</strong><small>Deployment</small></span></button>
<button class="lab-tab" id="lab-tab-wind" type="button" role="tab" aria-selected="false" aria-controls="lab-panel-wind" tabindex="-1" data-lab-tab="wind"><span class="lab-tab-index">02</span><span class="lab-tab-copy"><strong>Wind tunnel</strong><small>Flow &amp; angle</small></span></button>
<button class="lab-tab" id="lab-tab-rocket" type="button" role="tab" aria-selected="false" aria-controls="lab-panel-rocket" tabindex="-1" data-lab-tab="rocket"><span class="lab-tab-index">03</span><span class="lab-tab-copy"><strong>Sounding rocket</strong><small>Ascent</small></span></button>
</div>

<section class="lab-panel" id="lab-panel-cubesat" role="tabpanel" aria-labelledby="lab-tab-cubesat" tabindex="0" data-lab-panel="cubesat">
<div class="lab-visual">
<div class="lab-screen">
<div class="lab-screen-tag"><span>Fig. 01 — Deployment sequence</span><span>Concept / not to scale</span></div>
<svg class="lab-svg" viewBox="0 0 720 500" aria-hidden="true" focusable="false">
<g class="lab-grid"><path d="M120 70v360M240 70v360M360 70v360M480 70v360M600 70v360M70 140h580M70 250h580M70 360h580"/></g>
<g class="lab-stars"><circle cx="94" cy="92" r="1.4"/><circle cx="164" cy="58" r="1"/><circle cx="258" cy="108" r="1.6"/><circle cx="402" cy="72" r="1.1"/><circle cx="512" cy="120" r="1.5"/><circle cx="604" cy="62" r="1"/><circle cx="668" cy="154" r="1.3"/><circle cx="118" cy="196" r="1"/><circle cx="560" cy="204" r="1.2"/><circle cx="212" cy="404" r="1.1"/></g>
<circle class="sat-earth" cx="648" cy="760" r="480"/>
<circle class="sat-earth sat-earth-inner" cx="648" cy="760" r="456"/>
<path class="sat-orbit" pathLength="1" d="M90 260a270 88 0 1 0 540 0a270 88 0 1 0-540 0" transform="rotate(-12 360 260)"/>
<g class="sat-float">
<g class="sat-wing sat-wing-left"><rect x="102" y="202" width="208" height="66" rx="3"/><path d="M171 202v66M240 202v66"/><path class="sat-hinge" d="M308 235h6"/></g>
<g class="sat-wing sat-wing-right"><rect x="410" y="202" width="208" height="66" rx="3"/><path d="M479 202v66M548 202v66"/><path class="sat-hinge" d="M406 235h6"/></g>
<g class="sat-body"><rect x="312" y="180" width="96" height="110" rx="5"/><path d="M312 216h96M312 254h96M360 180v110"/><rect class="sat-detail" x="324" y="192" width="30" height="12"/><circle cx="330" cy="272" r="2"/><circle cx="342" cy="272" r="2"/><circle cx="354" cy="272" r="2"/></g>
<g class="sat-antenna"><path d="M360 180V112"/><path d="M360 118 348 104M360 118l12-14"/><circle cx="360" cy="106" r="5"/></g>
</g>
</svg>
<div class="lab-hud"><div><span>Phase</span><strong data-lab-phase>Launch lock</strong></div><div><span>Arrays</span><strong data-lab-array>Stowed</strong></div><div><span>Link</span><strong data-lab-link>Standby</strong></div></div>
</div>
<div class="lab-toolbar">${runButton("cubesat", "Run deployment")}<p class="lab-status" data-lab-status role="status">Deployment sequence ready.</p></div>
</div>
<div class="lab-info">
<p class="lab-kicker">CubeSat / exploratory</p>
<h3>Four hinges between a stack and a spacecraft.</h3>
<p>A 3U CubeSat is mostly compromise: power, volume, thermal margin. The deployment order is still an open research question, not a mission configuration.</p>
<a class="text-link light" href="${root}projects/cubesat/">Open the CubeSat record ${icon("arrow")}</a>
${plate("solar", root, "ISS solar arrays, 2015. Reference, not our hardware.")}
</div>
</section>

<section class="lab-panel" id="lab-panel-wind" role="tabpanel" aria-labelledby="lab-tab-wind" tabindex="0" data-lab-panel="wind" hidden>
<div class="lab-visual">
<div class="lab-screen">
<div class="lab-screen-tag"><span>Fig. 02 — Low-speed tunnel</span><span>Concept / NACA 0018 profile</span></div>
<svg class="lab-svg" viewBox="0 0 720 500" aria-hidden="true" focusable="false">
<g class="lab-grid"><path d="M120 70v360M240 70v360M360 70v360M480 70v360M600 70v360M70 140h580M70 250h580M70 360h580"/></g>
<g class="lab-duct"><path d="M82 158c78 0 106 36 168 36h200c62 0 98-30 170-30"/><path d="M82 342c78 0 106-36 168-36h200c62 0 98 30 170 30"/><path d="M82 158v184M620 164v172"/><path d="M104 158v184M124 158v184"/><path d="M104 184h20M104 212h20M104 240h20M104 268h20M104 296h20M104 324h20"/></g>
<g class="lab-streams"><path class="lab-stream" d="M96 204h152c52 0 72 9 112 9 46 0 72-9 126-9h134"/><path class="lab-stream" d="M96 226h160c54 0 72 2 104 2 42 0 68-2 120-2h140"/><path class="lab-stream" d="M96 274h160c54 0 72-2 104-2 42 0 68 2 120 2h140"/><path class="lab-stream" d="M96 296h152c52 0 72-9 112-9 46 0 72 9 126 9h134"/></g>
<g class="lab-wake"><path d="M412 238c22-8 40 8 62 0s40 8 62 0 40 8 58 0"/><path d="M412 250c22-6 40 6 62 0s40 6 62 0 40 6 58 0"/><path d="M412 262c22-8 40 8 62 0s40 8 62 0 40 8 58 0"/></g>
<g class="lab-airfoil"><path d="M255 250c22-16 42-19 70-19 28 0 54 6 70 19-16 13-42 19-70 19-28 0-48-3-70-19Z"/><path class="lab-chord" d="M238 250h184"/><circle cx="425" cy="250" r="2.5"/></g>
<g class="lab-lift"><path d="M330 226v-48"/><path d="M322 186l8-12 8 12"/></g>
<g class="lab-fan-housing"><circle cx="648" cy="250" r="40"/><g class="lab-fan"><path d="M648 250v-32M648 250l28-16M648 250l28 16M648 250v32M648 250l-28 16M648 250l-28-16"/></g><circle class="lab-fan-hub" cx="648" cy="250" r="5"/></g>
</svg>
<div class="lab-hud"><div><span>AoA</span><strong data-lab-alpha>6.0°</strong></div><div><span>Flow</span><strong data-lab-flow-state>Attached</strong></div><div><span>Wake</span><strong data-lab-wake>Thin</strong></div></div>
</div>
<div class="lab-toolbar"><div class="lab-range"><label for="lab-aoa">Angle of attack</label><input id="lab-aoa" type="range" min="0" max="16" step="0.5" value="6" data-lab-aoa><output for="lab-aoa" data-lab-aoa-value>6.0°</output></div><button class="lab-button" type="button" data-lab-flow>Pause airflow</button></div>
<p class="lab-status" data-lab-status role="status">Drag the angle to watch the streamline and wake change.</p>
</div>
<div class="lab-info">
<p class="lab-kicker">Wind tunnel / instrument in progress</p>
<h3>Make the invisible measurable.</h3>
<p>Smoke turns a flow field into something a camera can read. Move the airfoil and watch the wake widen — a concept of the apparatus, not the unfinished instrument.</p>
<a class="text-link light" href="${root}projects/wind-tunnel/">Open the tunnel record ${icon("arrow")}</a>
${plate("naca", root, "Richard Whitcomb, 1959. Historical reference.")}
</div>
</section>

<section class="lab-panel" id="lab-panel-rocket" role="tabpanel" aria-labelledby="lab-tab-rocket" tabindex="0" data-lab-panel="rocket" hidden>
<div class="lab-visual">
<div class="lab-screen">
<div class="lab-screen-tag"><span>Fig. 03 — Ascent profile</span><span>Concept / not to scale</span></div>
<svg class="lab-svg" viewBox="0 0 720 500" aria-hidden="true" focusable="false">
<g class="lab-grid"><path d="M120 70v360M240 70v360M360 70v360M480 70v360M600 70v360M70 140h580M70 250h580M70 360h580"/></g>
<g class="lab-ruler"><path d="M66 130v300"/><path d="M66 430h14M66 330h18M66 230h18M66 130h14"/><text x="92" y="433">0 km</text><text x="92" y="333">25</text><text x="92" y="233">50</text><text x="92" y="133">75</text></g>
<path class="lab-ground" d="M40 430h640"/>
<g class="lab-pad"><path d="M300 430V322M420 430V356"/><path d="M300 348h36M300 386h30M420 398h-32"/></g>
<path class="lab-trajectory" pathLength="1" d="M330 420c6-80 50-170 126-224"/>
<g class="rocket-move"><g class="rocket-tilt">
<g class="rocket-chute"><path d="M288 230c8-34 76-34 84 0"/><path d="M330 238 288 230M330 238 310 204M330 238l20-34M330 238l42-8"/></g>
<path class="rocket-plume" d="M318 404c2 26 8 52 12 72 4-20 10-46 12-72Z"/><path class="rocket-plume rocket-plume-inner" d="M325 404c1 20 4 38 5 52 1-14 4-32 5-52Z"/>
<path class="rocket-nose" d="M330 238c-8 26-14 50-18 70h36c-4-20-10-44-18-70Z"/>
<rect class="rocket-body" x="312" y="308" width="36" height="74" rx="3"/>
<path class="rocket-lines" d="M312 330h36M312 352h36"/>
<path class="rocket-fin" d="M312 354 292 402l20-14Z"/><path class="rocket-fin" d="M348 354 368 402l-20-14Z"/>
<path class="rocket-bell" d="M318 382 310 404h40l-8-22Z"/>
</g></g>
</svg>
<div class="lab-hud"><div><span>Phase</span><strong data-lab-phase>Launch rail</strong></div><div><span>Mission time</span><strong data-lab-clock>T+ 0.0 s</strong></div><div><span>Altitude</span><strong data-lab-altitude>0.0 km</strong></div></div>
</div>
<div class="lab-toolbar">${runButton("rocket", "Run launch")}<p class="lab-status" data-lab-status role="status">Ascent sequence ready.</p></div>
</div>
<div class="lab-info">
<p class="lab-kicker">Flight validation / future direction</p>
<h3>The first thirty seconds decide the rest.</h3>
<p>A sounding rocket trades thrust for altitude, then gives the vehicle back to gravity and a parachute. This profile is illustrative; no flight experiment is established.</p>
<a class="text-link light" href="${root}research/flight-validation/">Read the flight direction ${icon("arrow")}</a>
${plate("sounding-rocket", root, "Black Brant IX, Wallops. Not our flight.")}
</div>
</section>
</div>
</section>`;
}
