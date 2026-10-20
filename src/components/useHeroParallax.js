import { useEffect } from 'react';

// Gentle scroll parallax for the hero background: sets --hero-shift (px) on the
// hero element, which the .hero-media layer turns into a translateY.
// No-ops when the user prefers reduced motion.
export default function useHeroParallax(ref, factor = 0.16) {
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      // Only work while the hero is on screen
      if (rect.bottom < -50 || rect.top > window.innerHeight) return;
      const scrolled = Math.max(0, -rect.top);
      el.style.setProperty('--hero-shift', `${(scrolled * factor).toFixed(1)}px`);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [ref, factor]);
}
