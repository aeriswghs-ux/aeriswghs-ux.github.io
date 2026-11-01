import type { Experiment } from "../src/content-types.ts";
export const experiments: Experiment[] = [
  {
    id: "environmental-sample",
    title: "Environmental logger sample",
    project: "scientific-computing",
    status: "Example fixture",
    date: "2026-03-04",
    caption:
      "Sample input only. Exact values from the grapher’s existing three-row CSV fixture; not measured aerodynamic performance.",
    methodology:
      "Values reproduced from the earlier source record without smoothing, extrapolation, or correction. Elapsed time is calculated from the sample timestamps.",
    limitations:
      "Three example rows demonstrate the input format. They do not establish a physical trend, calibration, lift, drag, or tunnel performance.",
    source: "sample",
    download: "assets/data/environmental-sample.csv",
    xLabel: "Elapsed time",
    xUnit: "min",
    channels: [
      { key: "temperature", label: "Temperature", unit: "°C" },
      { key: "humidity", label: "Humidity", unit: "%" },
      { key: "pressure", label: "Pressure", unit: "hPa" },
    ],
    rows: [
      {
        x: 0,
        label: "10:00:00",
        values: { temperature: 23.4, humidity: 41.2, pressure: 1008.6 },
      },
      {
        x: 1,
        label: "10:01:00",
        values: { temperature: 23.5, humidity: 41.0, pressure: 1008.7 },
      },
      {
        x: 2,
        label: "10:02:00",
        values: { temperature: 23.6, humidity: 40.9, pressure: 1008.8 },
      },
    ],
  },
];
