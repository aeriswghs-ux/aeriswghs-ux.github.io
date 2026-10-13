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

// Content remains visible when animation or JavaScript is unavailable.
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
if (!reducedMotion.matches && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-entering');
      observer.unobserve(entry.target);
    });
  }, {threshold: 0.12});
  document.querySelectorAll('.hero-copy').forEach((element) => observer.observe(element));
}
