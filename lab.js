import { animate, createTimeline, utils } from "./assets/vendor/anime.esm.min.js";

const lab = document.querySelector("[data-lab]");

if (lab) {
  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  let reduced = motionQuery.matches;
  const tabs = [...lab.querySelectorAll("[data-lab-tab]")];
  const panels = new Map(
    tabs.map((tab) => [
      tab.dataset.labTab,
      document.getElementById(tab.getAttribute("aria-controls")),
    ]),
  );
  const scenes = new Map();
  const setText = (panel, selector, text) => {
    const node = panel.querySelector(selector);
    if (node) node.textContent = text;
  };

  const cubeSat = (panel) => {
    const svg = panel.querySelector("svg");
    const wingLeft = svg.querySelector(".sat-wing-left");
    const wingRight = svg.querySelector(".sat-wing-right");
    const antenna = svg.querySelector(".sat-antenna");
    const body = svg.querySelector(".sat-body");
    const orbit = svg.querySelector(".sat-orbit");
    const run = panel.querySelector('[data-lab-run="cubesat"]');
    const status = panel.querySelector("[data-lab-status]");
    const phase = (name, array, link, message) => {
      setText(panel, "[data-lab-phase]", name);
      setText(panel, "[data-lab-array]", array);
      setText(panel, "[data-lab-link]", link);
      if (message) status.textContent = message;
    };
    const timeline = createTimeline({
      autoplay: false,
      defaults: { ease: "outExpo" },
    })
      .add(
        orbit,
        { strokeDashoffset: [1, 0], duration: 1800, ease: "inOutSine" },
        0,
      )
      .add(body, { scale: [0.96, 1], duration: 1000, ease: "outBack" }, 0)
      .add(
        wingLeft,
        { rotate: [82, 0], duration: 1100, ease: "outBack" },
        300,
      )
      .add(
        wingRight,
        { rotate: [-82, 0], duration: 1100, ease: "outBack" },
        370,
      )
      .add(antenna, { scaleY: [0, 1], duration: 750 }, 1050)
      .call(() => phase("Panel release", "Stowed", "Standby"), 300)
      .call(() => phase("Array deploy", "Deploying", "Standby"), 700)
      .call(() => phase("Antenna extend", "Deployed", "Acquiring"), 1100)
      .call(
        () =>
          phase(
            "Nominal",
            "Deployed",
            "Nominal",
            "Deployment complete. Arrays and antenna shown in the nominal configuration.",
          ),
        1800,
      );

    const final = (message) => {
      timeline.pause();
      utils.set(orbit, { strokeDashoffset: 0 });
      utils.set([wingLeft, wingRight], { rotate: 0 });
      utils.set(antenna, { scaleY: 1 });
      utils.set(body, { scale: 1 });
      phase("Nominal", "Deployed", "Nominal", message);
    };
    run.addEventListener("click", () => {
      run.textContent = "Replay deployment";
      if (reduced) final("Static final state shown; motion is reduced.");
      else {
        status.textContent = "Running deployment sequence.";
        timeline.restart();
      }
    });
    return {
      play() {
        run.textContent = "Replay deployment";
        if (reduced) final("Static final state shown; motion is reduced.");
        else {
          status.textContent = "Running deployment sequence.";
          timeline.restart();
        }
      },
      complete() {
        final("Static final state shown; motion is reduced.");
      },
      stop() {
        timeline.pause();
      },
    };
  };

  const windTunnel = (panel) => {
    const svg = panel.querySelector("svg");
    const airfoil = svg.querySelector(".lab-airfoil");
    const wake = svg.querySelector(".lab-wake");
    const lift = svg.querySelector(".lab-lift");
    const slider = panel.querySelector("[data-lab-aoa]");
    const output = panel.querySelector("[data-lab-aoa-value]");
    const flowButton = panel.querySelector("[data-lab-flow]");
    const status = panel.querySelector("[data-lab-status]");
    let flowing = false;

    const render = (value, motion) => {
      const separated = value >= 12;
      const transitional = value >= 9;
      output.textContent = `${value.toFixed(1)}°`;
      setText(panel, "[data-lab-alpha]", `${value.toFixed(1)}°`);
      setText(
        panel,
        "[data-lab-flow-state]",
        separated ? "Separating" : transitional ? "Transitional" : "Attached",
      );
      setText(
        panel,
        "[data-lab-wake]",
        separated ? "Broad" : transitional ? "Growing" : "Thin",
      );
      const style = {
        wakeOpacity: separated ? 0.8 : transitional ? 0.48 : 0.16,
        wakeScale: separated ? 1.5 : transitional ? 1.05 : 0.55,
        wakeShift: Math.sin((value * Math.PI) / 180) * 95,
        liftScale:
          0.15 +
          (Math.sin((value * Math.PI) / 180) / Math.sin((16 * Math.PI) / 180)) *
            0.85,
      };
      if (motion) {
        animate(airfoil, { rotate: value, duration: 420, ease: "outQuart" });
        animate(wake, {
          opacity: style.wakeOpacity,
          scaleY: style.wakeScale,
          translateY: style.wakeShift,
          duration: 420,
          ease: "outQuart",
        });
        animate(lift, {
          scaleY: style.liftScale,
          duration: 420,
          ease: "outQuart",
        });
      } else {
        utils.set(airfoil, { rotate: value });
        utils.set(wake, {
          opacity: style.wakeOpacity,
          scaleY: style.wakeScale,
          translateY: style.wakeShift,
        });
        utils.set(lift, { scaleY: style.liftScale });
      }
    };

    const setFlow = (on) => {
      flowing = on;
      panel.classList.toggle("is-flowing", on);
      flowButton.textContent = on ? "Pause airflow" : "Start airflow";
      status.textContent = on
        ? "Airflow running. Drag the angle to change the wake."
        : "Airflow paused. The flow path remains visible.";
    };

    slider.addEventListener("input", () =>
      render(Number(slider.value), !reduced),
    );
    flowButton.addEventListener("click", () => setFlow(!flowing));
    render(Number(slider.value), false);

    const settle = () => {
      render(Number(slider.value), false);
      setFlow(false);
      status.textContent = "Static flow path shown; motion is reduced.";
    };
    return {
      play() {
        if (reduced) return settle();
        render(Number(slider.value), !reduced);
        setFlow(true);
      },
      complete: settle,
      stop() {
        setFlow(false);
      },
    };
  };

  const rocket = (panel) => {
    const svg = panel.querySelector("svg");
    const move = svg.querySelector(".rocket-move");
    const tilt = svg.querySelector(".rocket-tilt");
    const plumes = [...svg.querySelectorAll(".rocket-plume")];
    const chute = svg.querySelector(".rocket-chute");
    const trajectory = svg.querySelector(".lab-trajectory");
    const run = panel.querySelector('[data-lab-run="rocket"]');
    const status = panel.querySelector("[data-lab-status]");
    const telemetry = { t: 0, altitude: 0 };
    const paint = () => {
      setText(panel, "[data-lab-clock]", `T+ ${telemetry.t.toFixed(1)} s`);
      setText(
        panel,
        "[data-lab-altitude]",
        `${telemetry.altitude.toFixed(1)} km`,
      );
    };
    const phase = (name, message) => {
      setText(panel, "[data-lab-phase]", name);
      if (message) status.textContent = message;
    };
    const timeline = createTimeline({
      autoplay: false,
      defaults: { ease: "outExpo" },
    })
      .add(
        plumes,
        { scaleY: [0, 1], opacity: [0, 1], duration: 260, ease: "outQuart" },
        100,
      )
      .add(
        move,
        {
          translateX: [0, 120],
          translateY: [0, -180],
          duration: 2600,
          ease: "inOutQuad",
        },
        400,
      )
      .add(
        tilt,
        { rotate: [0, 52], duration: 1200, ease: "inOutQuad" },
        1700,
      )
      .add(
        trajectory,
        { strokeDashoffset: [1, 0], duration: 2600, ease: "inOutQuad" },
        400,
      )
      .add(
        telemetry,
        {
          t: [0, 4.2],
          altitude: [0, 62],
          duration: 2800,
          ease: "outQuad",
          onUpdate: paint,
        },
        400,
      )
      .add(
        plumes,
        { scaleY: [1, 0], opacity: [1, 0], duration: 280, ease: "inQuad" },
        2900,
      )
      .add(tilt, { rotate: 0, duration: 900, ease: "inOutQuad" }, 2950)
      .add(
        chute,
        { scale: [0, 1], opacity: [0, 1], duration: 520, ease: "outBack" },
        3600,
      )
      .call(() => phase("Ignition", "Ignition. Launch rail released."), 100)
      .call(() => phase("Ascent", "Ascent. Vehicle pitching downrange."), 900)
      .call(() => phase("Apogee", "Apogee. Engine cutoff."), 2920)
      .call(
        () =>
          phase(
            "Recovery",
            "Recovery. Concept sequence complete; no flight is claimed.",
          ),
        3900,
      );

    const final = (message) => {
      timeline.pause();
      utils.set(move, { translateX: 120, translateY: -180 });
      utils.set(tilt, { rotate: 0 });
      utils.set(plumes, { scaleY: 0, opacity: 0 });
      utils.set(chute, { scale: 1, opacity: 1 });
      utils.set(trajectory, { strokeDashoffset: 0 });
      telemetry.t = 4.2;
      telemetry.altitude = 62;
      paint();
      phase("Recovery", message);
    };
    const start = () => {
      run.textContent = "Replay launch";
      if (reduced) final("Static final state shown; motion is reduced.");
      else {
        status.textContent = "Launch sequence running.";
        timeline.restart();
      }
    };
    run.addEventListener("click", start);
    return {
      play: start,
      complete() {
        final("Static final state shown; motion is reduced.");
      },
      stop() {
        timeline.pause();
      },
    };
  };

  scenes.set("cubesat", cubeSat(panels.get("cubesat")));
  scenes.set("wind", windTunnel(panels.get("wind")));
  scenes.set("rocket", rocket(panels.get("rocket")));

  let started = false;
  let observer = null;
  const show = (index, focus, run) => {
    const key = tabs[index].dataset.labTab;
    tabs.forEach((tab, i) => {
      const selected = i === index;
      tab.setAttribute("aria-selected", String(selected));
      tab.tabIndex = selected ? 0 : -1;
    });
    for (const [name, panel] of panels) panel.hidden = name !== key;
    if (focus) tabs[index].focus();
    for (const [name, scene] of scenes) if (name !== key) scene.stop();
    if (run) {
      started = true;
      observer?.disconnect();
      scenes.get(key).play();
    }
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => show(index, false, true));
    tab.addEventListener("keydown", (event) => {
      const next = {
        ArrowRight: (index + 1) % tabs.length,
        ArrowLeft: (index + tabs.length - 1) % tabs.length,
        Home: 0,
        End: tabs.length - 1,
      }[event.key];
      if (next === undefined) return;
      event.preventDefault();
      show(next, true, true);
    });
  });

  lab.querySelector(".lab-tabs").hidden = false;
  show(0, false, false);

  if ("IntersectionObserver" in window) {
    observer = new IntersectionObserver(
      (entries) => {
        if (started || !entries.some((entry) => entry.isIntersecting)) return;
        started = true;
        observer.disconnect();
        const active = tabs.find(
          (tab) => tab.getAttribute("aria-selected") === "true",
        );
        scenes.get(active.dataset.labTab).play();
      },
      { threshold: 0.3 },
    );
    observer.observe(lab);
  } else {
    scenes.get("cubesat").play();
  }

  motionQuery.addEventListener?.("change", (event) => {
    reduced = event.matches;
  });
}
