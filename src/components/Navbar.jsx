import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Icon from './Icon';

const navClass = ({ isActive }) => `nav-link ${isActive ? 'active' : ''}`;

const ENCLOSURE_LINKS = [
  { to: '/enclosures', icon: 'door', title: 'All Enclosure Systems', desc: 'Compare every configuration side by side' },
  { to: '/fixed', icon: 'panel', title: 'Fixed Walk-In Screens', desc: 'Open, barrier-free wet-room glass' },
  { to: '/swing', icon: 'door', title: 'Swing Frameless Doors', desc: 'Solid-brass hinged frameless doors' },
  { to: '/sliding', icon: 'layers', title: 'Sliding Glass Systems', desc: 'Space-saving soft-close sliders' },
  { to: '/l-shaped', icon: 'ruler', title: 'L-Shaped Corner Units', desc: 'Two-panel corner cubicles' },
];

const PRODUCT_LINKS = [
  { to: '/glass', icon: 'panel', title: 'Bathroom Glass', desc: 'Clear, fluted, frosted and tinted glass' },
  { to: '/mirrors', icon: 'mirror', title: 'Smart LED Mirrors', desc: 'Round, arch, pill and rectangular' },
  { to: '/drains', icon: 'drain', title: 'Linear Floor Drains', desc: 'Tile-insert and slim-channel drains' },
  { to: '/hardware', icon: 'hook', title: 'Accessories & Hardware', desc: 'Towel bars, hooks, shelves, hinges' },
];

const ENCLOSURE_PATHS = ENCLOSURE_LINKS.map((l) => l.to);
const PRODUCT_PATHS = PRODUCT_LINKS.map((l) => l.to);

function MegaMenu({ id, links, footer }) {
  return (
    <div className="mega" id={id}>
      <div className="mega-grid">
        {links.map((l) => (
          <Link key={l.to} to={l.to} className="mega-item">
            <span className="mega-icon"><Icon name={l.icon} size={20} /></span>
            <span className="mega-text">
              <span className="mega-title">{l.title}</span>
              <span className="mega-desc">{l.desc}</span>
            </span>
          </Link>
        ))}
      </div>
      <Link to="/quote" className="mega-footer">
        <span>{footer}</span>
        <Icon name="arrow" size={16} strokeWidth={2} />
      </Link>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const progressRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      setScrolled(y > 8);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`;
      }
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
  }, [location.pathname]);

  // Close mobile drawer on route navigation
  useEffect(() => {
    setMobileMenuOpen(false);
    document.body.style.overflow = '';
  }, [location.pathname]);

  // Close drawer with Escape, and if the viewport grows into the desktop layout
  useEffect(() => {
    if (!mobileMenuOpen) return undefined;
    const close = () => {
      setMobileMenuOpen(false);
      document.body.style.overflow = '';
    };
    const onKey = (e) => {
      if (e.key === 'Escape') close();
    };
    const onResize = () => {
      if (window.innerWidth >= 1120) close();
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    const nextState = !mobileMenuOpen;
    setMobileMenuOpen(nextState);
    document.body.style.overflow = nextState ? 'hidden' : '';
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = '';
  };

  const isEnclosureActive = ENCLOSURE_PATHS.includes(location.pathname);
  const isProductActive = PRODUCT_PATHS.includes(location.pathname);

  return (
    <>
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        {/* Utility strip — scrolls away, the main bar stays pinned */}
        <div className="topbar">
          <div className="topbar-inner">
            <div className="topbar-group">
              <a href="tel:+919876543210"><Icon name="phone" size={14} /> +91 98765 43210</a>
              <a href="mailto:enquiries@bathcentric.in" className="topbar-email"><Icon name="mail" size={14} /> enquiries@bathcentric.in</a>
            </div>
            <div className="topbar-group">
              <span className="topbar-cities"><Icon name="pin" size={14} /> Mumbai · Bengaluru · Delhi NCR · Hyderabad · Pune</span>
              <a
                href="https://wa.me/919876543210?text=Hi%20BathCentric,%20I'd%20like%20to%20enquire%20about%20a%20bathroom%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="topbar-cta"
              >
                <Icon name="chat" size={14} /> WhatsApp us
              </a>
            </div>
          </div>
        </div>

        <div className="header-bar">
          <div className="header-inner">
            <Link to="/" className="brand-logo" aria-label="BathCentric Home">
              <img src="/images/logo.svg" alt="BathCentric Architectural Glass" width="220" height="36" />
            </Link>

            <nav className="nav-desktop" aria-label="Primary Navigation">
              <NavLink to="/" className={navClass} end>Home</NavLink>

              <div className="nav-item">
                <Link
                  to="/enclosures"
                  className={`nav-link ${isEnclosureActive ? 'active' : ''}`}
                  aria-haspopup="true"
                >
                  Shower Enclosures
                  <Icon name="chevron" size={14} strokeWidth={2.2} className="nav-chevron" />
                </Link>
                <MegaMenu id="mega-enclosures" links={ENCLOSURE_LINKS} footer="Not sure which system fits? Book a free site visit" />
              </div>

              <div className="nav-item">
                <Link
                  to="/glass"
                  className={`nav-link ${isProductActive ? 'active' : ''}`}
                  aria-haspopup="true"
                >
                  Products
                  <Icon name="chevron" size={14} strokeWidth={2.2} className="nav-chevron" />
                </Link>
                <MegaMenu id="mega-products" links={PRODUCT_LINKS} footer="Matching finishes across glass, mirrors and fittings — ask us" />
              </div>

              <NavLink to="/projects" className={navClass}>Projects</NavLink>
              <NavLink to="/about" className={navClass}>About &amp; Services</NavLink>
              <NavLink to="/contact" className={navClass}>Contact</NavLink>
            </nav>

            <div className="header-actions">
              <Link to="/quote" className="btn btn-accent btn-sm header-quote" aria-label="Book a free site visit">
                <Icon name="calendar" size={16} strokeWidth={2} />
                <span>Book Free Visit</span>
              </Link>

              <button
                className={`nav-toggle-btn ${mobileMenuOpen ? 'active' : ''}`}
                onClick={toggleMobileMenu}
                aria-label="Toggle Menu"
                aria-expanded={mobileMenuOpen}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
          <div className="scroll-progress" ref={progressRef} aria-hidden="true" />
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`mobile-nav-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={closeMobileMenu}
      />
      <aside
        className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}
        aria-label="Mobile Navigation"
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mobile-nav-head">
          <Link to="/" className="brand-logo">
            <img src="/images/logo.svg" alt="BathCentric" width="170" />
          </Link>
          <button className="mobile-nav-close" onClick={closeMobileMenu} aria-label="Close Menu">
            <Icon name="close" size={20} strokeWidth={2} />
          </button>
        </div>

        <Link to="/" className="mobile-nav-link">Home</Link>

        <div className="mobile-nav-group">Shower Enclosures</div>
        <div className="mobile-nav-sublist">
          {ENCLOSURE_LINKS.map((l) => (
            <Link key={l.to} to={l.to} className="mobile-nav-sublink">{l.title}</Link>
          ))}
        </div>

        <div className="mobile-nav-group">Products</div>
        <div className="mobile-nav-sublist">
          {PRODUCT_LINKS.map((l) => (
            <Link key={l.to} to={l.to} className="mobile-nav-sublink">{l.title}</Link>
          ))}
        </div>

        <Link to="/projects" className="mobile-nav-link">Completed Projects</Link>
        <Link to="/about" className="mobile-nav-link">About &amp; Services</Link>
        <Link to="/contact" className="mobile-nav-link">Contact</Link>

        <div className="mobile-nav-cta">
          <Link to="/quote" className="btn btn-accent">Book Free Site Visit</Link>
          <a href="tel:+919876543210" className="btn btn-outline">Call +91 98765 43210</a>
        </div>
      </aside>
    </>
  );
}
