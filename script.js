'use strict';

// Progressive enhancement: without JavaScript every artifact remains visible.
document.querySelectorAll('[data-viewer]').forEach((viewer) => {
  const tablist = viewer.querySelector('[role="tablist"]');
  const tabs = [...tablist.querySelectorAll('[role="tab"]')];
  const panels = tabs.map((tab) => document.getElementById(tab.getAttribute('aria-controls')));
  if (panels.some((panel) => !panel)) return;

  const select = (index, moveFocus = false) => {
    tabs.forEach((tab, i) => {
      tab.setAttribute('aria-selected', String(i === index));
      tab.tabIndex = i === index ? 0 : -1;
      panels[i].hidden = i !== index;
    });
    if (moveFocus) tabs[index].focus();
  };

  panels.forEach((panel, i) => {
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('aria-labelledby', tabs[i].id);
    panel.tabIndex = 0;
  });
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => select(i));
    tab.addEventListener('keydown', (event) => {
      const next = { ArrowRight: (i + 1) % tabs.length, ArrowLeft: (i + tabs.length - 1) % tabs.length, Home: 0, End: tabs.length - 1 }[event.key];
      if (next === undefined) return;
      event.preventDefault();
      select(next, true);
    });
  });
  select(0);
  tablist.hidden = false;
});

// A short, optional opening. Reduced motion and deep links go straight to content.
const motion = matchMedia('(prefers-reduced-motion: reduce)');
const intro = document.getElementById('flight-intro');
const replay = document.getElementById('replay-flight');
let flightTimer;
let returnFocus;
function finishFlight(showProject = false) {
  clearTimeout(flightTimer);
  if (!intro.open) return;
  intro.close();
  if (showProject) {
    const work = document.getElementById('work');
    work.tabIndex = -1;
    work.focus({preventScroll: true});
    work.scrollIntoView({behavior: 'instant'});
  } else if (returnFocus) returnFocus.focus({preventScroll: true});
}
function startFlight() {
  if (motion.matches) { document.getElementById('work').scrollIntoView(); return; }
  returnFocus = document.activeElement;
  intro.showModal();
  flightTimer = setTimeout(() => finishFlight(true), 4200);
}
if (typeof intro.showModal === 'function') {
  replay.hidden = false;
  replay.addEventListener('click', startFlight);
  document.getElementById('skip-flight').addEventListener('click', () => finishFlight());
  intro.addEventListener('cancel', event => { event.preventDefault(); finishFlight(); });
  motion.addEventListener('change', () => { if (motion.matches) finishFlight(); });
  try {
    if (!sessionStorage.getItem('aero-flight-seen') && !location.hash && !motion.matches) startFlight();
    sessionStorage.setItem('aero-flight-seen', '1');
  } catch { /* Storage restrictions leave the opening available on request. */ }
}

// Load WebGL only after an explicit request; the illustrated alternative remains.
const openSatellite = document.getElementById('open-satellite');
const closeSatellite = document.getElementById('close-satellite');
const stage = document.getElementById('sat-stage');
const status = document.getElementById('sat-status');
openSatellite.hidden = false;
openSatellite.addEventListener('click', () => {
  const frame = document.createElement('iframe');
  frame.src = 'cubesat-viewer.html';
  frame.title = 'Interactive illustrative CubeSat anatomy';
  stage.append(frame);
  stage.querySelector('img').hidden = true;
  openSatellite.hidden = true;
  closeSatellite.hidden = false;
  status.textContent = 'Use the controls inside the viewer to rotate the concept. The drawing returns when you close it.';
  frame.addEventListener('load', () => frame.focus());
});
closeSatellite.addEventListener('click', () => {
  stage.querySelector('iframe')?.remove();
  stage.querySelector('img').hidden = false;
  closeSatellite.hidden = true;
  openSatellite.hidden = false;
  status.textContent = '';
  openSatellite.focus();
});
