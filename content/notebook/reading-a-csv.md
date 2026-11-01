## Research objective

Inspect the input format used by the Python environmental-data grapher. The existing sample contains three rows dated 4 March 2026. They are example input, not wind-tunnel results.

## Software

The repository includes a Python grapher and a separate Flask correction prototype. This fieldbook's viewer displays the supplied rows without smoothing or extrapolation.

## Method

Read each channel with its unit. Preserve the source values. Plot elapsed minutes on the horizontal axis and one selected channel on the vertical axis. Make the underlying table available beside the chart.

```python
# Illustrative inspection of the repository sample format.
# This snippet is educational, not a quoted project implementation.
import csv

with open("sample.csv", newline="", encoding="utf-8") as source:
    for row in csv.DictReader(source):
        print(row)
```

## Data and analysis

The sample temperature values are 23.4, 23.5, and 23.6 °C. Humidity is 41.2, 41.0, and 40.9 %. Pressure is 1008.6, 1008.7, and 1008.8 hPa. These values demonstrate the file format. Three sample rows cannot establish an environmental trend or aerodynamic result.

## What could go wrong

A plot can look authoritative even when its input is only a fixture. The viewer therefore carries a persistent “Sample input only” label and a direct source link. Changing the chart type does not change the evidence status.

## What this note establishes

Data display and measurement validation are separate tasks. A faithful visualization preserves provenance, units, and limitations along with the numbers.

## Next steps

When actual experiments produce datasets, add the acquisition method, instrument configuration, calibration record, repeat runs, and uncertainty information to the same content structure.
