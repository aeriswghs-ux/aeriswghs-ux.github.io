## Research objective

Learn to distinguish an aerodynamic phenomenon from an instrument artifact before attempting a dynamic experiment.

The 5 November conversation with a Caltech researcher made this the organizing rule for the next stage. A novel-looking signal is not evidence until the measurement system, the structure, and the software have each been tested as possible sources. The point is not to become suspicious of every result. It is to make the alternatives inspectable.

## Three possible sources of one trace

| Source | What it can look like | Evidence needed |
| --- | --- | --- |
| Aerodynamic | Separation, shear-layer motion, finite-span loading, unsteady force | Repeatable dependence on flow speed, angle, and geometry, with a plausible mechanism |
| Mechanical | Mount resonance, bracket vibration, fan excitation, sensor cross-axis load | Zero-flow and motor-only tests, stiffness checks, impact or frequency-response tests |
| Software | Stuck-at-zero sensor, dropped sample, wrong unit, silent failure handling | Reference checks, range tests, timestamp checks, explicit invalid-value states |

The researcher described a reinforcement-learning experiment that appeared to converge because faulty sensors returned zero readings, which the software interpreted as zero error. They also described how an apparent force oscillation in a hypothetical airfoil/shear-layer experiment could come from a resonance of the mounts, brackets, or supports rather than from the flow. Neither example proves that this tunnel has the same fault. Together they show why the fault must be ruled out before the phenomenon is named.

## What to measure before measuring forces

The immediate recommendation was to map the velocity field first:

- Measure at the centerline and near the corners and edges of the test section.
- Move a single sensor through a grid if a sensor array is unavailable.
- Repeat the map at several stable fan or PWM settings.
- Record ambient temperature and pressure with the velocity observations.
- Document sampling duration, grid spacing, stabilization time, and repeat count instead of leaving them arbitrary.
- Measure the relation between PWM command and actual test-section velocity, then fit it with residuals. Any approximately linear behavior must be verified on this assembled tunnel, not assumed from a fan datasheet.
- Repeat conditions across runs, not only within one run.

This turns the empty tunnel into the first experiment. It also produces the reference needed to assign a Reynolds number. A fan's rated flow rate or duty cycle does not establish the velocity in the test section.

The researcher introduced shear layers as gradients in flow speed transverse to the main direction, with mixing and vortical motion as possible consequences. That is a phenomenon worth understanding. It is not evidence that the present tunnel has generated one.

## The dynamic experiment gate

A moving-angle-of-attack test adds four requirements at once:

1. A controlled, repeatable motion with a measured angle history.
2. Force, angle, speed, and environmental data on a common timeline.
3. Enough sensor bandwidth to resolve the expected force change.
4. A mount stiff enough that its resonances are outside, or clearly separable from, the frequency range of interest.

Before committing to a dynamic-pitch investigation, the apparatus needs zero-airflow force baselines, motor-only vibration records, a mount-stiffness assessment, sensor cross-axis checks, and a timing test. If those checks cannot separate a structural oscillation from an aerodynamic one, the experiment is not ready. A static finite-span or measurement-method comparison may be the stronger next study.

## Sensor failure is a data problem too

One practical lesson is easy to postpone: a disconnected or failed sensor must not become a plausible zero. The data pipeline should mark out-of-range values, detect a channel that never changes, preserve raw readings, and make dropped samples visible. A calibration record should include the reference, the date, the expected range, the observed offset or drift, and the units.

This is also a software requirement. A smooth plot is not proof that the values behind it are meaningful.

## Mentorship, with limits

The follow-up conversation confirmed that the Caltech researcher would serve as a PCIS mentor at roughly one hour of contact per month, subject to a busy schedule and possible rescheduling. They offered conceptual feedback and some possible access to surplus equipment. They did not promise sustained hands-on experimental supervision, regular code review, laboratory placement, authorship, or a recommendation.

The mentor supported aiming high while making clear that a peer-reviewed publication is uncertain given time and resources. Their advice was to choose a question worth sustaining because the learning matters even if the most ambitious publication goal is not reached. They discussed several directions, including wind prediction, aerodynamics, and propulsion, but did not select the final topic.

Public-facing names, titles, and approval to attribute the conversations are still to be confirmed. The mentoring arrangement should be documented separately from technical supervision, authorship, or institutional sponsorship.

## What changed

The earlier plan treated the stand as the next build milestone and the airfoil test as the next experiment. The revised order is stricter:

1. Finish and document the instrument.
2. Characterize the empty tunnel.
3. Validate a NACA 0018 baseline.
4. Only then choose a novel question.

The 2 November conversations supplied the research logic. The 5 November conversation supplied the measurement scepticism. Both are now part of the same gate.

## Next steps

- Write the empty-tunnel velocity-grid protocol with explicit grid, sampling, stabilization, and repeat rules.
- Test sensor-failure handling before collecting a dataset.
- Build the zero-flow and motor-only force records.
- Measure the actual PWM-to-speed relation, with residuals.
- Bring the characterization results and three technical questions to the next mentor meeting.
- Keep the dynamic experiment conditional until its mechanical and temporal response is measured.

## Revision record

**5 November 2026:** Created from the Caltech researcher conversations. No force or velocity dataset was supplied.

**6 November 2026:** Edited for publication with the revised research plan and the 2 November validation note.
