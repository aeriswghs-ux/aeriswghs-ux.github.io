export type PlanTone =
  | "current"
  | "next"
  | "gate"
  | "decision"
  | "support"
  | "outcome";

export interface ResearchPlanPhase {
  number: string;
  title: string;
  state: string;
  tone: PlanTone;
  objective: string;
  gate: string;
}

export interface ResearchPlanDate {
  date: string;
  title: string;
  note: string;
  entry: string;
}

export const researchPlan = {
  updated: "2026-11-06",
  question:
    "Can a low-cost, characterized wind-tunnel system reliably quantify aerodynamic-force changes at low Reynolds number — and what changes when angle of attack moves dynamically rather than holding fixed?",
  questionNote:
    "Provisional, not a novelty claim. The dynamic-pitch clause depends on measured force bandwidth, mount stiffness, time synchronization, and vibration tests.",
  dates: [
    {
      date: "2026-11-02",
      title: "Validation before novelty",
      note: "Scott and a Texas A&M aerospace researcher separated a useful baseline from a publishable contribution.",
      entry: "a-tunnel-is-not-yet-an-instrument",
    },
    {
      date: "2026-11-05",
      title: "Instrument before signal",
      note: "A Caltech researcher explained how sensor faults and mount resonance can impersonate aerodynamic behavior.",
      entry: "a-surprising-signal-is-not-yet-a-result",
    },
    {
      date: "2026-11-06",
      title: "The plan is revised",
      note: "The stage gates below replace the earlier build-first sequence and define what must be true before the next claim.",
      entry: "guided-aerodynamics-plan",
    },
  ] satisfies ResearchPlanDate[],
  phases: [
    {
      number: "01",
      title: "Finish the instrument",
      state: "Current focus",
      tone: "current",
      objective:
        "Turn the assembled tunnel into a documented measurement system: dimensions, rigid airfoil holder, repeatable angle stand, independent lift and drag channels, calibration references, and a raw-data format.",
      gate:
        "Dimensioned diagram, wiring schematic, calibration log, data-logging demonstration, and an angle-setting repeatability check.",
    },
    {
      number: "02",
      title: "Characterize the empty tunnel",
      state: "Next",
      tone: "next",
      objective:
        "Map speed across the test section, quantify variation over time and between runs, and fit control input to measured airspeed rather than trusting fan specifications.",
      gate:
        "Velocity map, centerline profile, control-to-speed fit with residuals, repeatability plot, and a written uncertainty statement.",
    },
    {
      number: "03",
      title: "Reproduce the NACA 0018 baseline",
      state: "Validation gate",
      tone: "gate",
      objective:
        "Compare fixed-angle lift and drag with published data at the closest achievable Reynolds number, aspect ratio, surface condition, and test geometry.",
      gate:
        "Coefficient curves with uncertainty, traceable raw data and calculations, and a reasoned account of agreement or disagreement.",
    },
    {
      number: "04",
      title: "Choose one original question",
      state: "Decision gate",
      tone: "decision",
      objective:
        "Use a focused literature review and a feasibility matrix to select one question the apparatus can distinguish from noise, vibration, mounting artifacts, and flow non-uniformity.",
      gate:
        "A written, cited gap; a comparable-conditions table; and an experimental design that can resolve the expected signal.",
    },
    {
      number: "05",
      title: "Cross-check the physics",
      state: "Supporting",
      tone: "support",
      objective:
        "Use CFD or a simpler aerodynamic model to test whether observed trends are plausible after the static baseline is understood — not to certify an uncalibrated instrument.",
      gate:
        "Documented geometry and boundary conditions, mesh and convergence checks, and a clear account of where the model departs from the experiment.",
    },
    {
      number: "06",
      title: "Publish the record",
      state: "Outcome",
      tone: "outcome",
      objective:
        "Release the protocol, calibration, raw and cleaned data, analysis, null results, and limitations for inspection before pursuing a paper or competition.",
      gate:
        "A reproducible report and external review. Publication is considered only when the evidence and contribution justify it.",
    },
  ] satisfies ResearchPlanPhase[],
  candidates: [
    {
      direction: "Transient angle of attack",
      motivation:
        "Compare the force during motion with the force at the same angle held steady; vary the rate of change.",
      condition:
        "Controlled actuation, synchronized force/angle/velocity sampling, known sensor bandwidth, and a vibration test that can separate aerodynamic response from mount resonance.",
    },
    {
      direction: "Finite-span / three-dimensional effects",
      motivation:
        "Study how a real finite wing departs from the two-dimensional assumption behind a NACA section.",
      condition:
        "Controlled aspect ratio, documented end conditions and wall effects, and a baseline that already agrees with section data.",
    },
    {
      direction: "Morphing or moving geometry",
      motivation:
        "Examine how a changing surface affects forces over time.",
      condition:
        "A repeatable mechanism and enough independent measurements to separate geometry, motion rate, and mounting effects. Novelty is not assumed.",
    },
    {
      direction: "Reverse-flow airfoil orientation",
      motivation:
        "Explore a condition motivated by advancing and retreating rotor-blade aerodynamics.",
      condition:
        "A confirmed literature gap, controlled orientation, and a test geometry that represents the intended condition.",
    },
    {
      direction: "Measurement-method study",
      motivation:
        "Use the characterization itself to establish what affordable hardware can and cannot resolve.",
      condition:
        "A specific methodological comparison, a trusted reference, and an uncertainty analysis strong enough to support a claim about method rather than a single result.",
    },
  ],
  stopRules: [
    "The empty tunnel cannot hold a repeatable speed, or its non-uniformity is too large to assign a defensible Reynolds number.",
    "The force channels cannot separate lift from drag, or their resolution is too coarse for the loads the airfoil produces.",
    "A dynamic rig cannot distinguish aerodynamic response from structural vibration, motor noise, or sensor lag.",
    "The focused literature review finds no gap this apparatus can address.",
  ],
  nextMoves: [
    "Measure the actual test-section geometry and produce a dimensioned diagram. Confirm the units behind the verbal “8 by 8” estimate.",
    "Finish the rigid airfoil holder and repeatable angle stand. Record commanded versus measured angle.",
    "Run the first empty-tunnel velocity map at several settings, including center, edges, repeats, and stabilization time.",
  ],
  mentorQuestions: [
    "What minimum velocity-field measurements and uncertainty checks would make this tunnel credible for low-Reynolds-number force measurements?",
    "Which published NACA 0018 data are sufficiently similar to the measured operating conditions to serve as a reasonable validation baseline?",
    "Would a dynamic-pitch experiment be realistically distinguishable from mechanical vibration and sensor response in this apparatus, or should static finite-span comparisons come first?",
  ],
} as const;
