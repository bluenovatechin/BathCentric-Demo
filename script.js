const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function initHeaderScroll() {
  const header = document.querySelector(".site-header");
  const progress = document.querySelector(".scroll-progress");
  let ticking = false;

  const update = () => {
    ticking = false;
    const scrollY = window.scrollY;
    header.classList.toggle("scrolled", scrollY > 8);
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.transform = `scaleX(${scrollable > 0 ? Math.min(scrollY / scrollable, 1) : 0})`;
  };

  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };

  update();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
}

function initMobileNav() {
  const toggleBtn = document.querySelector(".nav-toggle-btn");
  const closeBtn = document.querySelector(".mobile-nav-close");
  const overlay = document.querySelector(".mobile-nav-overlay");
  const drawer = document.querySelector(".mobile-nav-drawer");

  const setOpen = (open) => {
    toggleBtn.classList.toggle("active", open);
    toggleBtn.setAttribute("aria-expanded", open);
    overlay.classList.toggle("open", open);
    drawer.classList.toggle("open", open);
    drawer.setAttribute("aria-hidden", !open);
    document.body.style.overflow = open ? "hidden" : "";
  };

  toggleBtn.addEventListener("click", () => setOpen(!drawer.classList.contains("open")));
  closeBtn.addEventListener("click", () => setOpen(false));
  overlay.addEventListener("click", () => setOpen(false));
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setOpen(false);
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1120) setOpen(false);
  });
}

function initHeroParallax() {
  const hero = document.querySelector(".hero-construction");
  if (!hero || reduceMotion) return;
  const factor = 0.16;
  let ticking = false;

  const update = () => {
    ticking = false;
    const rect = hero.getBoundingClientRect();
    if (rect.bottom < -50 || rect.top > window.innerHeight) return;
    const shift = Math.max(0, -rect.top);
    hero.style.setProperty("--hero-shift", `${(shift * factor).toFixed(1)}px`);
  };

  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };

  update();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
}

initHeaderScroll();
initMobileNav();
initHeroParallax();
