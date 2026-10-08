/* Sol Dillon — interacciones */

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
    nav.classList.toggle('is-scrolled', window.scrollY > 40);
    ticking = false;
  });
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

document.getElementById('year').textContent = new Date().getFullYear();
