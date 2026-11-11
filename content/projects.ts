import type { Project, Milestone } from "../src/content-types.ts";
const authors = ["Rithwik Krishna Gummadi", "Rithika Priya Gummadi"];
const stages = [
  "Question",
  "Research",
  "Design",
  "Prototype",
  "Test",
  "Analyze",
  "Iterate",
] as const;
const timeline = (items: [string, string][]): Milestone[] =>
  items.map(([status, detail], i) => ({ stage: stages[i], status, detail }));
export const projects: Project[] = [
  {
    id: "wind-tunnel",
    title: "Learning to measure the air.",
    category: "Aerodynamics",
    status: "In progress",
    summary:
      "A student-built wind tunnel, dry-ice flow visualization, and a measurement stand taking shape.",
    question: "How can a small wind tunnel produce measurements we can trust?",
    media: "honeycomb",
    tools: ["Arduino", "BME280", "HX711 / load cells", "3D printing", "Python"],
    contributors: authors,
    updated: "2026-11-06",
    timeline: timeline([
      [
        "Defined",
        "Make airflow visible, then develop a trustworthy lift and drag measurement setup.",
      ],
      [
        "Source available",
        "Earlier logger code, print archives, and analysis tools are linked below.",
      ],
      [
        "In progress",
        "A new sensor stand is being developed. A 3D model for airfoils and model aircraft is planned.",
      ],
      [
        "Build reported",
        "A two-fan tunnel with a plexiglass body and printed supports was reported on October 3. The October 13 update clarifies the dry-ice inlet setup.",
      ],
      [
        "Pending calibration",
        "Load-cell calibration was unfinished in the October 3 record. No subsequent calibration completion or measured test results have been supplied.",
      ],
      [
        "Tools available",
        "The Python grapher and correction prototype exist. Their sample input is not experimental evidence.",
      ],
      [
        "Ongoing",
        "Smoke-system setbacks led to dry ice in water. The measurement stand is the next area of iteration.",
      ],
    ]),
    sections: [
      {
        id: "overview",
        title: "Overview",
        body: "A working fieldbook of a wind tunnel and its instruments. Rithwik leads the build and research; Rithika documents the work, proposed the dry-ice approach, helped review code, and explores CubeSat possibilities. The latest account is a **user-reported update received 13 October 2026**, not an independently verified performance test.",
      },
      {
        id: "motivation",
        title: "Motivation & background",
        body: "The project connects an observable flow with the harder question of measuring forces reliably. The tunnel is a platform for learning aerodynamics, instrumentation, fabrication, and analysis together.",
      },
      {
        id: "requirements",
        title: "Requirements & constraints",
        body: "The stand needs to support airfoils and model aircraft while enabling lift and drag measurement. Sensor calibration, mounting geometry, repeatable conditions, and an uncertainty estimate remain necessary. Numerical design requirements and acceptance thresholds have not yet been supplied.",
      },
      {
        id: "design",
        title: "Design concepts",
        body: "The reported tunnel has a plexiglass test body with printed supports and inlet/outlet components. **Dry ice is placed in water in front of the inlet. Air is blown into that setup, and an outlet fan draws it through the tunnel.** The new stand uses differential pressure, load cells for lift and drag, and a BME280 for environmental conditions. The exact pressure-sensor model remains unconfirmed.",
      },
      {
        id: "tradeoffs",
        title: "Engineering trade-offs",
        body: "Repeated smoke-system setbacks prompted a change in visualization method. Rithika proposed dry ice. A visible flow pattern helps observe movement, but it does not by itself establish flow uniformity, airspeed, or measurement accuracy. The stand must also balance mechanical support with interference in the flow; that trade-off is still open.",
      },
      {
        id: "calculations",
        title: "Calculations & simulations",
        body: "The earlier Arduino code contains a modeled differential-pressure channel with simulated noise and conditioning. It is an inspectable software artifact. A verified pressure-to-speed calculation requires an appropriate pressure measurement, air-density assumptions, and a calibrated sensor. No validated CFD, airspeed, lift, or drag result is currently available.",
      },
      {
        id: "prototype",
        title: "Prototype development",
        body: "The October 3 update reports a built two-fan tunnel, printed inlet/outlet, plexiglass body, and printed supports. The October 13 update adds a measurement stand still being developed. A **3D model to accommodate airfoils and model aircraft is planned**. Updated stand CAD and source will be added to GitHub later; existing files remain the linked evidence.",
      },
      {
        id: "methodology",
        title: "Experimental methodology",
        body: "**Proposed next procedure:** document the final stand and wiring; calibrate each force channel against a known reference; establish zero and repeatability; record ambient conditions; then define controlled comparison runs. This is a planning outline, not a performed experiment or an approved calibration protocol.",
      },
      {
        id: "results",
        title: "Results & data",
        body: "Rithwik reports that the dry-ice setup produces a smooth visible flow into the inlet. This is a qualitative build observation. **No measured aerodynamic results or completed calibration records have been supplied.** The available CSV rows below are software sample input only.",
      },
      {
        id: "failures",
        title: "Problems & failed attempts",
        body: "The original smoke approach required repeated changes to materials, filaments, air pumps, and the setup. The shift to dry ice in water is the documented response. A dated run-by-run failure log and photographs are still needed to make those iterations reproducible.",
      },
      {
        id: "validation",
        title: "Verification & validation",
        body: "Repository code, 3MF archives, and embedded previews can be inspected. Physical accuracy is not established by those files. Outstanding evidence includes updated wiring and stand CAD, calibration records, repeat trials, reference measurements, and an uncertainty budget.",
      },
      {
        id: "limitations",
        title: "Limitations",
        body: "The latest stand is unfinished. No completed airfoil/aircraft mounting model, exact new pressure-sensor part number, flow-uniformity map, or force dataset has been supplied. The GitHub record predates the latest reported hardware configuration.",
      },
      {
        id: "lessons",
        title: "Lessons & open learning",
        body: "The documented iteration separates making a phenomenon visible from measuring it. The change in visualization method solved a reported practical obstacle; reliable force measurement remains the next learning task. More detailed personal reflections can be added as they are recorded.",
      },
      {
        id: "next",
        title: "Future improvements",
        body: "Finish the stand and measurement chain, characterize the empty tunnel, and reproduce a NACA 0018 baseline before selecting a novel question. The [guided research plan](../../research/guided-aerodynamics-plan/) records the current stage gates, decision rules, and the evidence required before a dynamic experiment. The updated source and original photographs remain to be published.",
      },
    ],
    references: [
      "repository",
      "logger",
      "architecture",
      "honeycomb",
      "honeycomb-earlier",
      "holder",
      "corners",
      "grapher",
      "sample",
      "correction",
    ],
  },
  {
    id: "cubesat",
    title: "From airflow to orbit.",
    category: "Spacecraft systems",
    status: "Exploratory",
    summary:
      "An open investigation into CubeSat missions, subsystems, and what to simulate first.",
    question: "What useful question could a small satellite help investigate?",
    media: "cubesat",
    tools: ["Literature research", "Systems thinking", "Simulation planning"],
    contributors: authors,
    updated: "2026-10-03",
    timeline: timeline([
      ["Open", "No mission or payload has been selected."],
      ["Exploratory", "Rithika is researching CubeSat possibilities."],
      ["Pending", "Subsystem requirements depend on the mission question."],
      ["Not started", "No built spacecraft has been reported."],
      ["Not started", "No test hardware or test records supplied."],
      ["Planned", "Simulation objectives remain to be defined."],
      [
        "Future",
        "Revisit architecture after a mission and constraints are documented.",
      ],
    ]),
    sections: [
      {
        id: "overview",
        title: "Overview",
        body: "CubeSat is a future research direction for the fieldbook. Rithika is researching possibilities, and the team is exploring how simulation could help understand a mission. The illustration and optional 3D viewer explain possible subsystems; neither represents selected hardware.",
      },
      {
        id: "motivation",
        title: "Motivation & background",
        body: "A spacecraft asks several disciplines to work together. This direction opens questions about power, instruments, communication, structure, and the compromises between them.",
      },
      {
        id: "requirements",
        title: "Requirements & constraints",
        body: "Mission, payload, orbit, operating lifetime, power budget, and communication requirements have not been selected. Record these before comparing candidate architectures.",
      },
      {
        id: "design",
        title: "Design concepts & trade-offs",
        body: "The explanatory illustration includes a central body, side solar panels, and an antenna. Configuration and proportions are illustrative. The interaction is not orbital simulation or validated spacecraft CAD.",
      },
      {
        id: "calculations",
        title: "Calculations & simulations",
        body: "Simulation planning is exploratory. No numerical model or output has been supplied. A useful next document would identify a research question, assumptions, model inputs, and a way to check the model.",
      },
      {
        id: "prototype",
        title: "Prototype development",
        body: "No physical spacecraft prototype or selected hardware is documented.",
      },
      {
        id: "methodology",
        title: "Methodology",
        body: "Proposed sequence: compare mission questions, document constraints, identify subsystem interfaces, and choose a small simulation with a checkable reference. No completed procedure is claimed.",
      },
      {
        id: "results",
        title: "Results & data",
        body: "Pending. No spacecraft, launch, flight results, or measured performance are claimed.",
      },
      {
        id: "failures",
        title: "Problems & failed attempts",
        body: "No project-specific failure account has been supplied yet. Future design decisions should record rejected alternatives and why they were rejected.",
      },
      {
        id: "validation",
        title: "Verification & validation",
        body: "Pending selection of a mission and a model. The current interactive view is an educational illustration only.",
      },
      {
        id: "limitations",
        title: "Limitations",
        body: "The research direction is open and has no dedicated technical report, source model, or validated subsystem design.",
      },
      {
        id: "lessons",
        title: "Lessons & next steps",
        body: "Define the question before choosing hardware. The next milestone is a written mission comparison with references and explicit assumptions.",
      },
    ],
    references: ["repository", "solar"],
  },
  {
    id: "scientific-computing",
    title: "From a signal to a useful record.",
    category: "Scientific computing",
    status: "Source available",
    summary:
      "CSV plotting and an offset-correction prototype for inspecting environmental data.",
    question:
      "How do we make collected sensor data inspectable without confusing correction with calibration?",
    media: "acquisition",
    tools: ["Python", "CSV", "Flask", "Arduino"],
    contributors: authors,
    updated: "2026-10-03",
    timeline: timeline([
      ["Defined", "Inspect logged environmental channels."],
      ["Source reviewed", "Existing Python and Arduino files are linked."],
      [
        "Implemented in source",
        "CSV plotting and correction functions are present.",
      ],
      [
        "Source available",
        "The Flask tool is a prototype, not a service on this website.",
      ],
      [
        "Not verified",
        "Runtime operation and instrument accuracy were not established by the source review.",
      ],
      [
        "Sample input only",
        "Three existing sample rows demonstrate the input format.",
      ],
      [
        "Open",
        "Validate the measurement process before interpreting corrected signals.",
      ],
    ]),
    sections: [
      {
        id: "overview",
        title: "Overview",
        body: "The Python grapher reads environmental channels and creates plots. A separate Flask prototype explores offset correction, summary statistics, and CSV export. These tools support the wind-tunnel project.",
      },
      {
        id: "motivation",
        title: "Motivation & background",
        body: "A record is easier to question when its raw values, units, and transformations stay visible. Plotting is part of inspection; it is not proof of sensor accuracy.",
      },
      {
        id: "requirements",
        title: "Requirements & constraints",
        body: "Keep raw and transformed data distinct. Preserve timestamps and units. The Flask prototype requires its own runtime and is linked as source; it does not run on GitHub Pages.",
      },
      {
        id: "design",
        title: "Design concepts & trade-offs",
        body: "The earlier firmware schedules CSV records every two seconds. That is a configured interval, not a benchmark. A separate correction tool makes offsets inspectable but risks implying accuracy if calibration records are absent.",
      },
      {
        id: "calculations",
        title: "Calculations & simulations",
        body: "The earlier modeled pressure channel includes noise and conditioning. Default offsets in the correction prototype are not treated as measured calibration coefficients.",
      },
      {
        id: "prototype",
        title: "Prototype development",
        body: "Source files for the logger, grapher, and correction tool exist in the linked repository. The current website provides a lightweight viewer for the exact three-row sample fixture.",
      },
      {
        id: "methodology",
        title: "Methodology",
        body: "For the website viewer, reproduce the existing CSV values exactly, preserve units, and expose a table alongside the chart. No smoothing, extrapolation, or inference is applied.",
      },
      {
        id: "results",
        title: "Results & data",
        body: "The sample values demonstrate software input. They are not measured wind-tunnel results and cannot support claims about lift, drag, or flow uniformity.",
      },
      {
        id: "failures",
        title: "Problems & failed attempts",
        body: "No dated software failure log is present in the reviewed record. The available limitation is the absence of independent calibration evidence for default offsets.",
      },
      {
        id: "validation",
        title: "Verification & validation",
        body: "The website checks that chart coordinates and table values reproduce the supplied fixture. This verifies display behavior only; it does not validate the original instruments or research software.",
      },
      {
        id: "limitations",
        title: "Limitations",
        body: "Only three sample rows are available. Runtime testing of the original Flask/Python tools and verification of sensor accuracy are outside the evidence currently supplied.",
      },
      {
        id: "lessons",
        title: "Lessons & future improvements",
        body: "A corrected number needs a reason. Publish raw datasets, a calibration procedure, units, uncertainties, and source versions with future experiments.",
      },
    ],
    references: ["grapher", "sample", "correction", "logger"],
  },
];
