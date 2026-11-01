import type { Reference } from "../src/content-types.ts";
export const repo = "https://github.com/aeriswghs-ux/Aerodynamics-Research-Lab";
const file = `${repo}/blob/main/01_wind_tunnel_design`;
export const references: Reference[] = [
  {
    id: "repository",
    title: "Aerodynamics Research Lab",
    url: repo,
    author: "Rithwik & Rithika Gummadi",
  },
  {
    id: "logger",
    title: "Arduino environmental and pressure logger",
    url: `${file}/code/src-arduino/testUpdatedProgram/testUpdatedProgram.ino`,
  },
  {
    id: "architecture",
    title: "Logger architecture notes",
    url: `${file}/code/src-arduino/testUpdatedProgram/README.md`,
  },
  {
    id: "honeycomb",
    title: "Current honeycomb 3MF archive",
    url: `${file}/design/3D_parts/honeyComb_Current.gcode.3mf`,
  },
  {
    id: "honeycomb-earlier",
    title: "Earlier honeycomb archive",
    url: `${file}/design/3D_parts/honeyComb.gcode.3mf`,
  },
  {
    id: "holder",
    title: "Honeycomb holder 3MF archive",
    url: `${file}/design/3D_parts/honeyComb_Holder.gcode.3mf`,
  },
  {
    id: "corners",
    title: "Support corners 3MF archive",
    url: `${file}/design/3D_parts/supportCorners.gcode.3mf`,
  },
  {
    id: "grapher",
    title: "Python CSV grapher source",
    url: `${file}/code/feature-csv-data-grapher/bme280_grapher.py`,
  },
  {
    id: "sample",
    title: "Original sample.csv fixture",
    url: `${file}/code/feature-csv-data-grapher/sample.csv`,
  },
  {
    id: "correction",
    title: "Data correction prototype",
    url: `${repo}/tree/main/01_wind_tunnel_design/code/feature-data-correction`,
  },
  {
    id: "journal",
    title: "Historical weekly-log template",
    url: `${repo}/blob/main/archive/legacy/research_journal/weekly_logs.md`,
  },
  {
    id: "airfoil",
    title: "Airfoil study documentation template",
    url: `${repo}/blob/main/archive/legacy/02_airfoil_experiments/challenges.md`,
  },
  {
    id: "drag",
    title: "Drag study documentation template",
    url: `${repo}/blob/main/archive/legacy/03_drag_analysis/challenges.md`,
  },
  {
    id: "flight",
    title: "Flight-validation documentation template",
    url: `${repo}/blob/main/archive/legacy/04_drone_or_rc_testing/challenges.md`,
  },
  {
    id: "earthrise",
    title: "Apollo 8 astronaut Bill Anders captures Earthrise",
    url: "https://www.nasa.gov/image-article/apollo-8-astronaut-bill-anders-captures-earthrise/",
    author: "NASA / Bill Anders",
  },
  {
    id: "solar",
    title: "Station solar arrays from the Russian Zarya module",
    url: "https://www.nasa.gov/image-article/station-solar-arrays-from-russian-zarya-module/",
    author: "NASA",
  },
  {
    id: "naca",
    title: "The National Advisory Committee for Aeronautics",
    url: "https://www.nasa.gov/history/the-national-advisory-committee-for-aeronautics-naca/",
    author: "NASA",
  },
  {
    id: "nasa-use",
    title: "NASA images and media usage guidelines",
    url: "https://www.nasa.gov/nasa-brand-center/images-and-media/",
  },
  {
    id: "dynamic-pressure",
    title: "Dynamic pressure — NASA Glenn",
    url: "https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/dynamic-pressure/",
  },
];
