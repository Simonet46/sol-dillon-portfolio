/* María Soldilon — interacciones */

/* ── Video real (opcional) ─────────────────────────────
   Cuando tengan el video de María, guardarlo en assets/proceso.mp4
   y poner:  const VIDEO_SRC = 'assets/proceso.mp4';
   El video avanza al ritmo del scroll y reemplaza la ilustración. */
const VIDEO_SRC = 'assets/proceso.mp4';

const scene = document.querySelector('.scene');
const sceneSvg = document.querySelector('.scene__svg');
const sceneVideo = document.querySelector('.scene__video');
const elements = [...document.querySelectorAll('.sc-el')];
const captions = [...document.querySelectorAll('.scene__caption')];

let videoActive = false;
if (VIDEO_SRC) {
  sceneVideo.src = VIDEO_SRC;
  sceneVideo.load();
  /* el poster se ve de inmediato mientras el video termina de cargar */
  sceneVideo.hidden = false;
  sceneSvg.style.display = 'none';
  sceneVideo.addEventListener('loadedmetadata', () => {
    videoActive = true;
    renderScene();
  });
  sceneVideo.addEventListener('error', () => {
    videoActive = false;
    sceneVideo.hidden = true;
    sceneSvg.style.display = '';
  });
}

/* origen: la cabeza de María dentro del viewBox del SVG */
const ORIGIN = { x: 520, y: 260 };
const ease = t => 1 - Math.pow(1 - t, 3);
const clamp01 = v => Math.min(1, Math.max(0, v));

function sceneProgress() {
  const rect = scene.getBoundingClientRect();
  const total = rect.height - window.innerHeight;
  return clamp01(-rect.top / total);
}

function renderScene() {
  const p = sceneProgress();

  if (videoActive && sceneVideo.duration) {
    const t = p * sceneVideo.duration;
    /* evita saturar a Safari con seeks más finos que un frame */
    if (Math.abs(sceneVideo.currentTime - t) > 0.034) sceneVideo.currentTime = t;
  } else {
    elements.forEach(el => {
      const i = +el.dataset.i;
      const start = 0.06 + i * 0.055;          // cada elemento entra escalonado
      const t = ease(clamp01((p - start) / 0.22));
      const tx = ORIGIN.x + (+el.dataset.tx - ORIGIN.x) * t;
      const ty = ORIGIN.y + (+el.dataset.ty - ORIGIN.y) * t;
      const rot = (+el.dataset.r) * t;
      const wobble = Math.sin(p * 6 + i) * 4 * t; // flotan levemente
      el.style.opacity = t;
      el.setAttribute('transform', `translate(${tx} ${ty + wobble}) rotate(${rot}) scale(${0.4 + 0.6 * t})`);
    });
  }

  const step = p < 0.3 ? 0 : p < 0.66 ? 1 : 2;
  captions.forEach((c, i) => c.classList.toggle('is-on', i === step && p > 0.03 && p < 0.97));
}

/* ── Reveal al hacer scroll ── */
const io = new IntersectionObserver(
  entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('is-in')),
  { threshold: 0.15 }
);
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

/* ── Nav con borde al scrollear ── */
const nav = document.querySelector('.nav');

let ticking = false;
function onScroll() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    renderScene();
    nav.classList.toggle('is-scrolled', window.scrollY > 40);
    ticking = false;
  });
}
window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('resize', onScroll);
renderScene();

document.getElementById('year').textContent = new Date().getFullYear();
