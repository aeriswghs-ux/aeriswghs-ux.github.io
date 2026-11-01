import type { Exploration } from "../src/content-types.ts";
export const explorations: Exploration[] = [
  {
    id: "earthrise",
    title: "A change in perspective.",
    collection: "Planetary exploration",
    media: "earthrise",
    summary: "Earthrise, seen from Apollo 8.",
    context:
      "Bill Anders photographed Earth above the lunar horizon on 24 December 1968. This historical image gives the fieldbook a wider context: the small systems we learn to build are part of a much larger human effort to observe and understand.",
    interest:
      "A useful starting question: what changes when the observer moves? That question connects a spacecraft’s view with the choice of a reference frame in an experiment.",
    relatedProject: "cubesat",
    references: ["earthrise"],
  },
  {
    id: "honeycomb",
    title: "Geometry with a job to do.",
    collection: "Engineering sketches",
    media: "honeycomb",
    summary: "A layer trace from the actual honeycomb print file.",
    context:
      "This image follows positive-extrusion moves at Z = 10 mm from the archived print instructions. The pattern is a digital artifact, not evidence of measured flow conditioning.",
    interest:
      "The interesting step is moving between geometry, a manufactured part, and a testable effect. Each transition needs its own evidence.",
    relatedProject: "wind-tunnel",
    relatedEntry: "inside-a-print-file",
    references: ["honeycomb"],
  },
  {
    id: "solar-arrays",
    title: "Power, unfolded.",
    collection: "Spacecraft architecture",
    media: "solar",
    summary: "Solar arrays above Earth, photographed from the ISS.",
    context:
      "This NASA photograph shows station solar arrays over a darkening Earth on 1 January 2015. The visible hardware offers an accessible way to begin thinking about spacecraft power and configuration.",
    interest:
      "For the exploratory CubeSat direction, this opens a question rather than supplies an answer: how should a mission’s energy needs shape its geometry?",
    relatedProject: "cubesat",
    references: ["solar"],
  },
  {
    id: "wind-tunnel-history",
    title: "Making the invisible inspectable.",
    collection: "Aerodynamics",
    media: "naca",
    summary: "Richard Whitcomb with a wind-tunnel model, 1959.",
    context:
      "NASA’s historical archive documents the NACA’s experimental aeronautics work. This photograph of Richard Whitcomb and a model places the student tunnel in the broader tradition of asking questions through physical tests.",
    interest:
      "The useful connection is methodological: isolate a question, define a model, and make the evidence inspectable. The historical facility is not our equipment.",
    relatedProject: "wind-tunnel",
    relatedEntry: "calibration-before-conclusions",
    references: ["naca"],
  },
  {
    id: "signal-path",
    title: "Follow the signal.",
    collection: "Computational science",
    media: "acquisition",
    summary: "From a sensor input to a timestamped record.",
    context:
      "The earlier firmware combines BME280 environmental inputs, a modeled differential-pressure channel, and SD storage. The pressure path contains simulated noise and conditioning. This diagram represents source architecture, not verified wiring.",
    interest:
      "Every transformation is a place to ask what changed, which units remain, and whether raw observations can still be recovered.",
    relatedProject: "scientific-computing",
    relatedEntry: "reading-a-csv",
    references: ["logger", "architecture"],
  },
  {
    id: "print-supports",
    title: "The parts around the experiment.",
    collection: "Engineering sketches",
    media: "corners",
    summary: "The original support-corner slicer preview.",
    context:
      "Support corners appear in an archived 3MF file. Their embedded thumbnail is preserved here unchanged. The latest build account reports printed supports but does not establish the exact archive version used.",
    interest:
      "The support is part of the experiment too. Future records can connect a mounting choice to a force path, a constraint, and a repeatable setup.",
    relatedProject: "wind-tunnel",
    relatedEntry: "stand-in-progress",
    references: ["corners"],
  },
  {
    id: "cubesat-anatomy",
    title: "A system of smaller questions.",
    collection: "Spacecraft architecture",
    media: "cubesat",
    summary: "An illustrative CubeSat, with the mission still open.",
    context:
      "This original illustration shows a central body, solar-panel wings, and an antenna. It is an educational concept. No mission, payload, final architecture, or spacecraft hardware has been selected.",
    interest:
      "The first design decision is the question the spacecraft should answer. Hardware choices follow from that question and its constraints.",
    relatedProject: "cubesat",
    references: ["repository"],
  },
];
