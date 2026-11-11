import type { ResearchPaper } from "../src/content-types.ts";
import { researchPlan } from "./research-plan.ts";
const authors = ["Rithwik Krishna Gummadi", "Rithika Priya Gummadi"];
const stageGateTable = [
  "| Stage | Objective | Exit evidence |",
  "| --- | --- | --- |",
  ...researchPlan.phases.map(
    (phase) =>
      `| **${phase.number} — ${phase.title}** | ${phase.objective} | ${phase.gate} |`,
  ),
].join("\n");
const candidateTable = [
  "| Direction | Motivation from the interviews | Feasibility or novelty condition |",
  "| --- | --- | --- |",
  ...researchPlan.candidates.map(
    (candidate) =>
      `| **${candidate.direction}** | ${candidate.motivation} | ${candidate.condition} |`,
  ),
].join("\n");
export const research: ResearchPaper[] = [
  {
    id: "guided-aerodynamics-plan",
    title: "Earn the measurement before making the claim.",
    kind: "Research plan",
    authors,
    date: "2026-11-06",
    status: "In progress",
    project: "wind-tunnel",
    abstract:
      "A stage-gated plan for turning an assembled low-cost wind tunnel into a characterized low-Reynolds-number instrument, then testing whether dynamic pitch offers a defensible original question. Revised 6 November 2026 after four researcher conversations. No experimental results are claimed.",
    question: researchPlan.question,
    methodology:
      "Advance only when the evidence for the current stage exists: finish and document the instrument; map the empty tunnel; reproduce a fixed-angle NACA 0018 baseline; choose one literature-defined question; cross-check the physics; publish the full record. The sequence is a research design, not a schedule.",
    findings:
      "No measured findings. The conversations changed the plan in three ways: validation comes before novelty, instrument characterization comes before force interpretation, and a dynamic-pitch experiment must pass a mechanical and temporal-response gate before it is treated as feasible. The estimated 50,000–100,000 Reynolds-number range and the verbal “8 by 8” test-section size remain unverified.",
    limitations:
      "Interview guidance is not experimental validation. No velocity map, calibration record, force dataset, measured Reynolds number, or confirmed literature gap exists yet. The dynamic-pitch direction, publication path, and mentoring arrangement are not guaranteed. Public attribution of the interviewees still requires confirmation.",
    sections: [
      {
        id: "why-the-plan-changed",
        title: "Why the plan changed",
        body:
          "The original objective was to build an affordable wind tunnel and investigate a conventional airfoil, beginning with NACA 0018. The facility now exists in some form, but the measurement system is unfinished. The interviews made that distinction central.\n\nA fabricated tunnel is an engineering project. A validated instrument is a stronger claim: it produces a measured flow, a documented calibration, and a result another person can inspect. Repeating a well-studied NACA result may establish the second. It does not, by itself, establish a novel contribution.\n\nThe revised order is therefore: **characterize, validate, then choose**. The dynamic-angle question remains the preferred exploratory candidate, but only if the apparatus can resolve it without confusing aerodynamics with vibration, sensor lag, or mounting response.",
      },
      {
        id: "stage-gates",
        title: "Stage gates and exit evidence",
        body:
          `${stageGateTable}\n\nNo stage is complete because time has passed or a part has been built. It is complete when its exit evidence can be inspected. The first two stages are the current work; the later stages remain conditional.`,
      },
      {
        id: "candidate-experiments",
        title: "Candidate original experiments",
        body:
          `${candidateTable}\n\nThe current preference is transient angle of attack on a finite NACA 0018 wing. That preference is provisional. A static finite-span comparison or a measurement-method study may be more credible if the dynamic rig cannot separate the expected force change from mechanical response.`,
      },
      {
        id: "what-would-stop-the-plan",
        title: "What would stop the plan",
        body:
          `The plan should change if any of these conditions fails:\n\n${researchPlan.stopRules
            .map((rule) => `- ${rule}`)
            .join("\n")}\n\nThe response is to improve the instrument or narrow the question, not to reinterpret noise as a result. Negative or inconclusive findings belong in the record when they are honestly measured.`,
      },
      {
        id: "next-actions",
        title: "Immediate next actions",
        body: researchPlan.nextMoves
          .map((move, index) => `${index + 1}. ${move}`)
          .join("\n"),
      },
      {
        id: "review-boundary",
        title: "Review boundary and next mentor meeting",
        body:
          "The Caltech researcher agreed to serve as a PCIS mentor at approximately one hour per month, with scheduling flexibility. That is conceptual feedback, not sustained hands-on supervision, laboratory placement, authorship, or institutional sponsorship. Publication remains an aspiration rather than a promised deliverable. Public names, titles, and permission to attribute the conversations still need confirmation.\n\nThe next review should bring measured characterization evidence and three concrete questions:\n\n" +
          researchPlan.mentorQuestions
            .map((question, index) => `${index + 1}. ${question}`)
            .join("\n"),
      },
    ],
    references: ["repository", "logger", "dynamic-pressure", "naca"],
  },
  {
    id: "measurement-method",
    title: "Toward a repeatable wind-tunnel measurement.",
    kind: "Methodology note",
    authors,
    date: "2026-10-13",
    status: "Draft",
    project: "wind-tunnel",
    abstract:
      "A proposed evidence structure for the new measurement stand: mounting geometry, calibration, repeated observations, and uncertainty. This is an editorial planning document, not a completed investigation.",
    question:
      "What evidence is needed before lift and drag measurements can be compared?",
    methodology:
      "Document hardware and mounting; establish reference checks for each channel; define controlled runs; preserve raw data and report uncertainty. The procedure has not yet been executed.",
    findings:
      "No measured findings. The stand is under development and a 3D mounting model is planned.",
    limitations:
      "No completed calibration record, final stand CAD, or repeated-run dataset supplied.",
    references: ["logger", "correction", "repository"],
    code: "logger",
  },
  {
    id: "airfoil-comparison",
    title: "Airfoil comparison under comparable conditions.",
    kind: "Experimental investigation",
    authors,
    date: "2026-10-03",
    status: "Draft",
    project: "wind-tunnel",
    abstract:
      "An open research direction from the existing fieldbook. Current documentation contains templates and hypothetical examples, not completed experiments.",
    question:
      "How does changing an airfoil profile affect lift and drag under comparable conditions?",
    methodology:
      "Pending: named airfoil profiles, controlled test conditions, mounting configuration, calibrated measurement channels, and a repeat-run protocol.",
    findings: "Pending. No airfoil comparison data supplied.",
    limitations:
      "The planned stand and its mounting model must be completed and characterized before comparisons are meaningful.",
    references: ["airfoil", "repository"],
  },
  {
    id: "drag-reduction",
    title: "Drag reduction and the cost of a design change.",
    kind: "Experimental investigation",
    authors,
    date: "2026-10-03",
    status: "Draft",
    project: "wind-tunnel",
    abstract:
      "A planned investigation into design changes and their effect on drag and lift. The historical folder currently provides a documentation template.",
    question:
      "Which design changes reduce drag without an unacceptable trade-off in lift?",
    methodology:
      "Pending: a baseline configuration, documented revisions, repeat runs, and uncertainty bounds.",
    findings: "Pending. No drag-reduction result is claimed.",
    limitations:
      "No baseline, quantitative acceptance criteria, or calibrated force dataset supplied.",
    references: ["drag", "repository"],
  },
  {
    id: "flight-validation",
    title: "From the test bench to flight.",
    kind: "Validation plan",
    authors,
    date: "2026-10-03",
    status: "Draft",
    project: "wind-tunnel",
    abstract:
      "A future direction for comparing laboratory observations with a drone or RC aircraft. No platform or flight experiment is established by the current record.",
    question:
      "How would a finding from the test bench translate to a drone or RC aircraft?",
    methodology:
      "Pending: a documented platform, flight-test method, telemetry, and comparison with laboratory results.",
    findings: "Pending. No flight results supplied.",
    limitations:
      "The current source is a planning template. No completed platform, test procedure, or telemetry is claimed.",
    references: ["flight", "repository"],
  },
];
