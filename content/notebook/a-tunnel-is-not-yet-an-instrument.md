## Research objective

Decide what the wind tunnel is for before asking it for a result. The tunnel is already a useful build. The harder question is whether it can become an instrument that produces evidence another person could inspect and repeat.

The 2 November review brought together two conversations: one with Scott, whose research has moved through experimental combustion, computational fluid dynamics, mathematical modeling, dynamics and control, and multi-agent systems; and one with an aerospace researcher at Texas A&M. They approached the problem from different directions and arrived at the same boundary between engineering and research.

## What changed

A working tunnel is not automatically a validated scientific instrument. Rebuilding a familiar NACA result can be excellent training, but the result is not automatically a contribution.

Scott's test was direct: read the literature, identify an unresolved question, and design the measurement around it. The Texas A&M researcher made the same distinction experimentally: first show that the apparatus can reproduce published lift and drag behavior at a comparable Reynolds number. Only then use the apparatus to probe something less characterized.

That reorders the project:

1. Establish what the tunnel actually produces.
2. Reproduce a known baseline.
3. Choose a question that survives a focused literature review.
4. Attempt the original experiment.

The interviews did not supply a research question that is already known to be novel. They supplied a procedure for deciding whether one is worth pursuing.

## What the conversations agreed on

| Guidance | Consequence for this project |
| --- | --- |
| A familiar result is not automatically new. | The NACA 0018 comparison is validation, not the final paper. |
| A research contribution needs a literature-defined gap. | No novelty claim until comparable sources have been read and recorded. |
| Low-Reynolds-number measurements are sensitive and hard to reproduce. | Agreement with a suitable reference would itself be a meaningful result. |
| Lift and drag need distinct, properly arranged force measurements. | A single ambiguous force channel is not enough for coefficient curves. |
| Advanced optics are not the first step. | PIV is not feasible here; the first task is credible velocity and force measurement. |
| The mechanism matters more than the software stack. | Each measurement should connect to an aerodynamic quantity, an assumption, and an uncertainty. |

The Texas A&M researcher also described particle image velocimetry as an advanced method well beyond the present budget. That was not a reason to avoid measurement. It was a reminder that even an expensive technique depends on experiment design, calibration, data handling, and an answerable question.

## The validation target

The working airfoil choice is NACA 0018. The proposed sequence is to hold angle of attack fixed, record the actual flow speed and ambient conditions, and compute lift and drag coefficients using documented reference dimensions. The results would then be compared with published data at the closest achievable Reynolds number and test geometry.

The comparison is not a formality. The eventual report would need to explain differences caused by flow non-uniformity, finite-span and end effects, blockage, mounting interference, force-system cross-talk, alignment, surface condition, or measurement noise. A disagreement could be more informative than a tidy curve if the cause is investigated honestly.

Several inputs are still missing. The test-section size has been described verbally as “8 by 8,” but the units and actual dimensions are unconfirmed. An approximate Reynolds-number range of 50,000 to 100,000 has been discussed, but it is based on fan specifications and informal estimates. It is not a measured operating range. The fan setting does not establish the velocity in the assembled test section; the velocity has to be measured.

## The literature problem

Scott cautioned that conventional two-dimensional NACA behavior has been studied extensively. He suggested looking beyond a repetition of that result toward finite-wing and three-dimensional effects, moving or morphing geometry, transient forces, or applications such as quieter propellers and rotors. Those were brainstorming directions, not verified gaps.

The Texas A&M conversation added rapid changes in angle of attack as a candidate: the force during motion can differ from the force at the same angle held steady, and the rate of motion may itself be a variable. Reverse-flow airfoil behavior, motivated by advancing and retreating rotor-blade conditions, was offered as another possible direction. Again, neither suggestion came with a literature review.

That leaves a clear task before any novel experiment: find out what has already been measured, under which conditions, and with what uncertainty. A direction becomes a research question only after that work.

## The provisional question

The plan now points toward a question that combines the interviews but remains unproven:

> At a measured low Reynolds number, how does the rate of change of angle of attack alter the time-dependent lift response of a finite NACA 0018 wing relative to fixed-angle baselines?

This is a candidate, not a final hypothesis. It is only credible if the apparatus can resolve the expected signal. Force-sensor bandwidth, dynamic mount stiffness, actuation, sampling, calibration, and synchronization all have to be tested first. If they cannot separate an aerodynamic response from mechanical vibration, a static finite-span or measurement-method study may be the more honest investigation.

## What this note establishes

The project now has two tracks that must not be confused:

- **Validation:** can the apparatus reproduce a known NACA 0018 result under documented conditions?
- **Contribution:** after the literature review, is there a specific unanswered question this apparatus can address?

The first track is executable now. The second remains a decision, not a promise. A peer-reviewed publication is an aspiration, not a guaranteed deliverable.

## Next steps

- Measure the tunnel and test-section geometry, and record the units.
- Find published NACA 0018 data at the closest achievable Reynolds number, aspect ratio, surface condition, and test method. Read each source before citing it.
- Document lift and drag as separate force channels with a calibration and alignment plan.
- Write the fixed-angle baseline protocol before running the first coefficient sweep.
- Review the dynamic-pitch literature and the apparatus requirements separately. Do not let one substitute for the other.

## Revision record

**2 November 2026:** Created from the first research-planning conversations. No measurements, coefficients, or novelty claims were added.

**6 November 2026:** Edited for publication alongside the revised research plan and the 5 November instrumentation note.
