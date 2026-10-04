'use strict';
const scene = document.querySelector('a-scene');
const fallback = document.getElementById('scene-fallback');
const sceneStatus = document.getElementById('scene-status');
const controls = document.querySelector('.scene-controls');
function unavailable() {
  scene.hidden = true;
  fallback.hidden = false;
  controls.hidden = true;
  sceneStatus.textContent = '3D is unavailable here. The concept illustration shows the same main subsystems.';
}
if (!window.AFRAME) unavailable();
else {
  let yaw = -28;
  const satellite = document.getElementById('satellite');
  const render = () => { satellite.setAttribute('rotation', {x: 18, y: yaw, z: -10}); };
  const ready = () => {
    if (!scene.renderer) { unavailable(); return; }
    scene.hidden = false;
    fallback.hidden = true;
    controls.hidden = false;
    scene.resize();
    sceneStatus.textContent = 'Use Rotate to inspect the central body and solar-panel wings.';
    scene.canvas?.setAttribute('aria-hidden', 'true');
    scene.canvas?.addEventListener('webglcontextlost', unavailable);
  };
  document.getElementById('rotate-left').addEventListener('click', () => { yaw -= 30; render(); });
  document.getElementById('rotate-right').addEventListener('click', () => { yaw += 30; render(); });
  document.getElementById('reset-scene').addEventListener('click', () => { yaw = -28; render(); });
  if (scene.hasLoaded) ready(); else scene.addEventListener('loaded', ready, {once: true});
  setTimeout(() => { if (fallback.hidden === false) unavailable(); }, 12000);
  document.addEventListener('visibilitychange', () => { if(document.hidden) scene.pause(); else scene.play(); });
}
