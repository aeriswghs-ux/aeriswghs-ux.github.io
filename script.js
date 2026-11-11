"use strict";

const siteRoot = document.body.dataset.root || "./";
const normalize = (value) =>
  String(value || "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
const termsMatch = (text, query) =>
  normalize(query)
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .every((term) => normalize(text).includes(term));

// Preferences are optional; unavailable storage never prevents navigation.
const themeButton = document.querySelector("[data-theme-toggle]");
if (themeButton) {
  const isDark = () =>
    (document.documentElement.dataset.theme ||
      document.documentElement.dataset.defaultTheme) === "dark";
  const updateThemeButton = () => {
    themeButton.setAttribute("aria-pressed", String(isDark()));
    themeButton.setAttribute(
      "aria-label",
      isDark()
        ? "Switch to light notebook mode"
        : "Switch to dark exploration mode",
    );
  };
  themeButton.hidden = false;
  updateThemeButton();
  themeButton.addEventListener("click", () => {
    const next = isDark() ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("fieldbook-theme", next);
    } catch {
      /* Session-only preference. */
    }
    updateThemeButton();
  });
}
const menuButton = document.querySelector("[data-menu-toggle]");
const primaryNav = document.getElementById("primary-nav");
if (menuButton && primaryNav) {
  document.documentElement.classList.add("nav-enhanced");
  menuButton.hidden = false;
  const closeMenu = () => {
    primaryNav.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
  };
  menuButton.addEventListener("click", () => {
    const open = primaryNav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute(
      "aria-label",
      open ? "Close navigation" : "Open navigation",
    );
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && primaryNav.classList.contains("is-open")) {
      closeMenu();
      menuButton.focus();
    }
  });
  primaryNav.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });
  document.addEventListener("pointerdown", (event) => {
    if (!primaryNav.contains(event.target) && !menuButton.contains(event.target)) {
      closeMenu();
    }
  });
  document.addEventListener("focusin", (event) => {
    if (!primaryNav.contains(event.target) && !menuButton.contains(event.target)) {
      closeMenu();
    }
  });
  window.matchMedia("(min-width: 901px)").addEventListener("change", closeMenu);
}

// Collection filters share one semantic, URL-addressable implementation.
document.querySelectorAll("[data-collection]").forEach((collection) => {
  const bar = collection.querySelector("[data-filters]");
  const search = collection.querySelector("[data-filter-search]");
  const category = collection.querySelector("[data-filter-category]");
  const status = collection.querySelector("[data-filter-status]");
  const tag = collection.querySelector("[data-filter-tag]");
  const items = [...collection.querySelectorAll("[data-filter-item]")];
  const count = collection.querySelector("[data-filter-count]");
  const empty = collection.querySelector("[data-filter-empty]");
  const fields = { q: search, category, status, tag };
  const readURL = () => {
    const params = new URLSearchParams(location.search);
    Object.entries(fields).forEach(([key, field]) => {
      if (field) field.value = params.get(key) || "";
    });
  };
  const filter = (writeURL = true) => {
    let visible = 0;
    items.forEach((item) => {
      const matches =
        termsMatch(item.dataset.search, search?.value || "") &&
        (!category?.value || item.dataset.category === category.value) &&
        (!status?.value || item.dataset.status === status.value) &&
        (!tag?.value ||
          (item.dataset.tags || "").split("|").includes(tag.value));
      item.hidden = !matches;
      if (matches) visible++;
    });
    count.textContent = `${visible} of ${items.length} records`;
    count.hidden = false;
    empty.hidden = visible !== 0;
    if (writeURL) {
      const params = new URLSearchParams();
      Object.entries(fields).forEach(([key, field]) => {
        if (field?.value) params.set(key, field.value);
      });
      history.replaceState(
        null,
        "",
        location.pathname + (params.size ? `?${params}` : "") + location.hash,
      );
    }
  };
  readURL();
  filter(false);
  bar.hidden = false;
  Object.values(fields).forEach((field) =>
    field?.addEventListener(
      field.tagName === "INPUT" ? "input" : "change",
      () => filter(),
    ),
  );
  collection.querySelectorAll("[data-filter-reset]").forEach((button) =>
    button.addEventListener("click", () => {
      Object.values(fields).forEach((field) => {
        if (field) field.value = "";
      });
      filter();
      search?.focus();
    }),
  );
  window.addEventListener("popstate", () => {
    readURL();
    filter(false);
  });
});

// Preserve the original artifact tab interaction and its arrow-key behavior.
document.querySelectorAll("[data-viewer]").forEach((viewer) => {
  const tablist = viewer.querySelector('[role="tablist"]');
  const tabs = [...tablist.querySelectorAll('[role="tab"]')];
  const panels = tabs.map((tab) =>
    document.getElementById(tab.getAttribute("aria-controls")),
  );
  if (panels.some((panel) => !panel)) return;
  const select = (index, focus = false) => {
    tabs.forEach((tab, i) => {
      tab.setAttribute("aria-selected", String(i === index));
      tab.tabIndex = i === index ? 0 : -1;
      panels[i].hidden = i !== index;
    });
    if (focus) tabs[index].focus();
  };
  panels.forEach((panel, i) => {
    panel.setAttribute("role", "tabpanel");
    panel.setAttribute("aria-labelledby", tabs[i].id);
    panel.tabIndex = 0;
  });
  tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => select(i));
    tab.addEventListener("keydown", (event) => {
      const next = {
        ArrowRight: (i + 1) % tabs.length,
        ArrowLeft: (i + tabs.length - 1) % tabs.length,
        Home: 0,
        End: tabs.length - 1,
      }[event.key];
      if (next === undefined) return;
      event.preventDefault();
      select(next, true);
    });
  });
  select(0);
  tablist.hidden = false;
});

const technical = document.getElementById("technical");
const depths = [...document.querySelectorAll("[data-depth]")];
if (technical && depths.length) {
  document.querySelector("[data-depth-controls]").hidden = false;
  const sync = () =>
    depths.forEach((button) => {
      const selected =
        technical.open === (button.dataset.depth === "technical");
      button.classList.toggle("selected", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
  depths.forEach((button) =>
    button.addEventListener("click", () => {
      technical.open = button.dataset.depth === "technical";
      sync();
      if (technical.open) technical.scrollIntoView({ block: "start" });
    }),
  );
  technical.addEventListener("toggle", sync);
  const revealHash = () => {
    if (!location.hash) return;
    let id;
    try {
      id = decodeURIComponent(location.hash.slice(1));
    } catch {
      return;
    }
    const target = document.getElementById(id);
    if (target && technical.contains(target)) {
      technical.open = true;
      sync();
      requestAnimationFrame(() => target.scrollIntoView({ block: "start" }));
    }
  };
  window.addEventListener("hashchange", revealHash);
  revealHash();
}

// Timeline stages use native details, allowing comparison and complete printing.

const openSatellite = document.getElementById("open-satellite");
if (openSatellite) {
  const closeSatellite = document.getElementById("close-satellite");
  const stage = document.getElementById("sat-stage");
  const status = document.getElementById("sat-status");
  openSatellite.hidden = false;
  openSatellite.addEventListener("click", () => {
    if (stage.querySelector("iframe")) return;
    const frame = document.createElement("iframe");
    frame.src = `${siteRoot}cubesat-viewer.html`;
    frame.title = "Illustrative CubeSat anatomy";
    stage.append(frame);
    stage.querySelector("img").hidden = true;
    openSatellite.hidden = true;
    closeSatellite.hidden = false;
    status.textContent =
      "Loading the optional 3D view. Its static illustration remains available if WebGL cannot load.";
    frame.addEventListener("load", () => {
      status.textContent =
        "Use the viewer controls to inspect the concept. Close the view to return to the illustration.";
      frame.focus();
    });
  });
  closeSatellite.addEventListener("click", () => {
    stage.querySelector("iframe")?.remove();
    stage.querySelector("img").hidden = false;
    closeSatellite.hidden = true;
    openSatellite.hidden = false;
    status.textContent = "";
    openSatellite.focus();
  });
}

// Precomputed SVG variants keep the browser bundle small and display exact source values.
document.querySelectorAll("[data-dataset]").forEach((viewer) => {
  const tooltip = viewer.querySelector("[data-chart-tooltip]");
  const bindPoints = () =>
    viewer.querySelectorAll("[data-point-label]").forEach((point) => {
      ["focus", "pointerenter"].forEach((event) =>
        point.addEventListener(event, () => {
          tooltip.textContent = point.dataset.pointLabel;
        }),
      );
    });
  bindPoints();
  fetch(`${siteRoot}assets/data/${viewer.dataset.dataset}.json`)
    .then((response) => {
      if (!response.ok) throw new Error("Dataset unavailable");
      return response.json();
    })
    .then((dataset) => {
      const channel = viewer.querySelector("[data-chart-channel]");
      const mode = viewer.querySelector("[data-chart-mode]");
      const render = () => {
        const svg = dataset.plots?.[channel.value]?.[mode.value];
        if (typeof svg !== "string") return;
        viewer.querySelector("[data-chart]").innerHTML = svg;
        tooltip.textContent = "Focus or point to a data point for its value.";
        bindPoints();
      };
      channel.addEventListener("change", render);
      mode.addEventListener("change", render);
      viewer.querySelector(".chart-controls").hidden = false;
    })
    .catch(() => {
      tooltip.textContent =
        "Interactive controls could not load. The original chart and complete data table remain available below.";
    });
});

const globalSearch = document.querySelector("[data-global-search]");
if (globalSearch) {
  const form = globalSearch.querySelector("form");
  const input = form.querySelector("input");
  const type = form.querySelector("select");
  const output = globalSearch.querySelector("[data-search-results]");
  const status = globalSearch.querySelector("[data-search-status]");
  let index = null;
  const readURL = () => {
    const params = new URLSearchParams(location.search);
    input.value = params.get("q") || "";
    type.value = params.get("type") || "";
  };
  const render = (updateURL = true) => {
    if (!index) return;
    const matches = index.filter(
      (record) =>
        (!type.value || record.type === type.value) &&
        termsMatch(
          `${record.title} ${record.summary} ${record.text}`,
          input.value,
        ),
    );
    const fragment = document.createDocumentFragment();
    matches.forEach((record) => {
      const article = document.createElement("article");
      article.className = "search-result";
      const label = document.createElement("span");
      label.className = "small-note";
      label.textContent = record.type;
      const heading = document.createElement("h2");
      const link = document.createElement("a");
      link.href = siteRoot + record.url;
      link.textContent = record.title;
      heading.append(link);
      const description = document.createElement("p");
      description.textContent = record.summary;
      article.append(label, heading, description);
      fragment.append(article);
    });
    output.replaceChildren(fragment);
    status.textContent = matches.length
      ? `${matches.length} matching ${matches.length === 1 ? "record" : "records"}`
      : "No matching records. Try fewer words or a different content type.";
    if (!matches.length) {
      const reset = document.createElement("button");
      reset.className = "button";
      reset.textContent = "Clear search";
      reset.addEventListener("click", () => {
        input.value = "";
        type.value = "";
        render();
        input.focus();
      });
      output.append(reset);
    }
    if (updateURL) {
      const params = new URLSearchParams();
      if (input.value) params.set("q", input.value);
      if (type.value) params.set("type", type.value);
      history.replaceState(
        null,
        "",
        location.pathname + (params.size ? `?${params}` : ""),
      );
    }
  };
  readURL();
  status.textContent = "Loading the searchable index…";
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    render();
  });
  input.addEventListener("input", () => render());
  type.addEventListener("change", () => render());
  window.addEventListener("popstate", () => {
    readURL();
    render(false);
  });
  fetch(`${siteRoot}assets/search-index.json`)
    .then((response) => {
      if (!response.ok) throw new Error("Index unavailable");
      return response.json();
    })
    .then((data) => {
      index = data;
      render(false);
    })
    .catch(() => {
      status.textContent =
        "Search could not load. Browse the complete index below, or reload to try again.";
    });
}

document.querySelectorAll("[data-print]").forEach((button) => {
  button.hidden = false;
  button.addEventListener("click", () => window.print());
});
let printDetails = [];
window.addEventListener("beforeprint", () => {
  printDetails = [...document.querySelectorAll("details:not([open])")];
  printDetails.forEach((detail) => {
    detail.open = true;
  });
});
window.addEventListener("afterprint", () => {
  printDetails.forEach((detail) => {
    detail.open = false;
  });
  printDetails = [];
});
