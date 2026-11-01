## Research objective

Separate a useful plot from a defensible measurement. The current stand needs a way to connect sensor readings to known reference values before those readings can support force measurements.

## Background research

The earlier correction prototype contains default offsets. Subtracting an offset changes a number; a reference comparison is needed to justify the correction. The Arduino source also includes a modeled pressure channel with simulated noise and conditioning.

## Proposed method

This is a planning note. Document a reference, collect repeat readings at known conditions, record zero behavior and drift, then evaluate how the response changes across the intended range. Keep the raw observations alongside any fit or correction.

## Technical context

For a flow with density $\rho$ and speed $V$, dynamic pressure is:

$$q = \frac{1}{2}\rho V^2$$

If a suitable measurement establishes dynamic pressure, the corresponding relation is:

$$V = \sqrt{\frac{2q}{\rho}}$$

These are general relations, not results from this tunnel. Applying them requires an appropriate pressure arrangement, density assumptions, and a calibrated measurement. A generic differential-pressure sensor reading is not automatically dynamic pressure.

## Data and observations

No reference-calibration dataset has been supplied. No coefficients, fit quality, or uncertainty values are asserted here.

## What could go wrong

Mounting interference, zero drift, cross-axis sensitivity, incorrect units, or treating a modeled input as a physical reading could all undermine an interpretation. These are proposed checks, not observed failures of this stand.

## What this note establishes

The question is not whether software can draw a smooth line. It is whether the value on that line can be traced to a documented measurement process.

## Next steps

Choose and document reference checks for each channel once the stand geometry is settled. Record assumptions and uncertainty before reporting aerodynamic conclusions.
