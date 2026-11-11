import { esc, date, icon } from "../render.ts";
import { researchPlan } from "../../content/research-plan.ts";

export function futurePlanSection(root: string): string {
  const dates = researchPlan.dates
    .map(
      (item) => `<article class="plan-date">
<time datetime="${item.date}">${date(item.date)}</time>
<h3><a href="${root}${item.entry === "guided-aerodynamics-plan" ? "research/guided-aerodynamics-plan/" : `notebook/${item.entry}/`}">${esc(item.title)}</a></h3>
<p>${esc(item.note)}</p>
</article>`,
    )
    .join("");

  const phases = researchPlan.phases
    .map(
      (phase) => `<li class="plan-step${phase.tone === "current" ? " is-current" : ""}">
<div class="plan-step-marker"><span class="plan-number">${phase.number}</span><span class="plan-state ${phase.tone}">${esc(phase.state)}</span></div>
<div class="plan-step-copy"><h3>${esc(phase.title)}</h3><p>${esc(phase.objective)}</p><p class="plan-gate"><strong>Exit evidence</strong> ${esc(phase.gate)}</p></div>
</li>`,
    )
    .join("");

  const stops = researchPlan.stopRules
    .map((rule) => `<li>${esc(rule)}</li>`)
    .join("");
  const moves = researchPlan.nextMoves
    .map(
      (move, index) =>
        `<li><span>${String(index + 1).padStart(2, "0")}</span><p>${esc(move)}</p></li>`,
    )
    .join("");

  return `<section class="wrap future-plan" id="future-plans" aria-labelledby="future-plan-title">
<div class="future-plan-head">
<div><p class="plan-kicker">Future plans · Living document</p><h2 id="future-plan-title">Earn the measurement<br><em>before making the claim.</em></h2></div>
<div class="future-plan-intro"><p><strong>The tunnel is assembled. The instrument is not yet validated.</strong> Four researcher conversations have changed the next stage from “run an airfoil test” to “establish what this apparatus can actually measure.”</p><p>Revised ${date(researchPlan.updated)}. The plan now advances through evidence gates: finish the hardware, map the empty tunnel, reproduce a published NACA 0018 baseline, then choose one original question the apparatus can distinguish from noise. No stage is complete without its exit evidence.</p><a class="text-link" href="${root}research/guided-aerodynamics-plan/">Read the full plan, decision rules, and candidate matrix ${icon("arrow")}</a></div>
</div>
<div class="plan-dates" aria-label="Conversations that changed the plan">${dates}</div>
<ol class="plan-track" aria-label="Six research stages">${phases}</ol>
<div class="plan-decisions">
<div class="plan-question"><p class="plan-label">Provisional research question</p><p class="plan-question-text">${esc(researchPlan.question)}</p><p class="small-note">${esc(researchPlan.questionNote)}</p></div>
<div class="plan-stop"><p class="plan-label">What would stop the plan</p><ul>${stops}</ul><p class="small-note">Change the question or improve the instrument. Never reinterpret noise as a result.</p></div>
</div>
<div class="plan-now"><p class="plan-label">Next concrete moves</p><ol>${moves}</ol></div>
</section>`;
}
