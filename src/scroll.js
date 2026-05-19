import Lenis from "lenis";

export const lenis = new Lenis({
  duration: 1.2,
  smoothWheel: true,
});

export function startSmoothScroll() {
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
}