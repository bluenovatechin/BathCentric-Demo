import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Elements that fade/slide in as they enter the viewport. Applied by selector so
// individual pages do not need to be edited.
const SELECTOR = [
  '.section-header',
  '.category-card',
  '.feature-card',
  '.process-step',
  '.project-card',
  '.send-bathroom-banner',
  '.product-price-box',
  '.product-schematic-box',
  '.quote-card',
  '.specs-table',
  '.grid-2 > *',
  '.trust-strip',
].join(',');

export default function useReveal() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    if (
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return undefined;
    }

    const nodes = Array.from(document.querySelectorAll(SELECTOR));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );

    // Stagger siblings so grids cascade rather than pop in together.
    const counters = new Map();
    nodes.forEach((node) => {
      const parent = node.parentElement;
      const index = counters.get(parent) || 0;
      counters.set(parent, index + 1);
      node.style.setProperty('--reveal-delay', `${Math.min(index, 5) * 70}ms`);
      node.classList.add('reveal');
      observer.observe(node);
    });

    return () => {
      observer.disconnect();
      nodes.forEach((node) => node.classList.remove('reveal', 'is-visible'));
    };
  }, [pathname]);
}
