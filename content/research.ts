import type { ResearchPaper } from "../src/content-types.ts";
const authors = ["Rithwik Krishna Gummadi", "Rithika Priya Gummadi"];
export const research: ResearchPaper[] = [
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
