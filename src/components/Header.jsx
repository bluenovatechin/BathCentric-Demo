import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Icon from './Icon';
import { asset, brand } from '../config';

export const NAV = [
  { to: '/shower-enclosures', label: 'Collection' },
  { to: '/finishes-and-glass', label: 'Materials' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/how-it-works', label: 'Process' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
];

// Footer and mobile menu also list these.
export const MORE = [
  { to: '/buying-guide', label: 'Buying Guide' },
  { to: '/about', label: 'Studio' },
  { to: '/add-ons', label: 'Add-ons' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const toggle = useRef(null);
  const close = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.documentElement.classList.toggle('menu-open', open);
    if (!open) return undefined;
    close.current?.focus();
    const onKey = (e) => e.key === 'Escape' && shut();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const shut = () => {
    setOpen(false);
    toggle.current?.focus();
  };
  const active = (to) => pathname === to || (to === '/shower-enclosures' && pathname.endsWith('-shower-enclosure')) || (to === '/finishes-and-glass' && pathname === '/add-ons');

  return (
    <>
      <header className={`header ${scrolled ? 'is-scrolled' : ''} ${pathname === '/' && !scrolled ? 'is-over' : ''}`}>
        <div className="wrap header-row">
          <Link to="/" className="logo" aria-label={`${brand.name} home`}>
            <img className="logo-dark" src={asset('brand/logo.svg')} alt={brand.name} width="164" height="30" />
            <img className="logo-light" src={asset('brand/logo-white.svg')} alt="" width="164" height="30" />
          </Link>
          <nav className="nav" aria-label="Main">
            {NAV.map((n) => (
              <NavLink key={n.to} to={n.to} className={() => (active(n.to) ? 'is-active' : '')} aria-current={active(n.to) ? 'page' : undefined}>
                {n.label}
              </NavLink>
            ))}
          </nav>
          <div className="header-cta">
            <Link to="/quote" className="btn btn-ink btn-sm header-quote">Request a Quote</Link>
            <button ref={toggle} type="button" className="menu-btn" aria-expanded={open} aria-controls="site-menu" onClick={() => setOpen(true)}>
              Menu <Icon name="menu" size={18} />
            </button>
          </div>
        </div>
      </header>

      <div id="site-menu" className={`menu ${open ? 'is-open' : ''}`} role="dialog" aria-modal="true" aria-label="Menu" inert={open ? undefined : ''}>
        <div className="menu-top">
          <img src={asset('brand/logo-white.svg')} alt={brand.name} width="152" height="28" />
          <button ref={close} type="button" className="menu-btn" onClick={shut}>
            Close <Icon name="close" size={18} />
          </button>
        </div>
        <nav aria-label="Mobile">
          <ol className="menu-list">
            <li><Link to="/" className={pathname === '/' ? 'is-active' : ''}>Home</Link></li>
            {[...NAV, ...MORE].map((n) => (
              <li key={n.to}><Link to={n.to} className={active(n.to) ? 'is-active' : ''}>{n.label}</Link></li>
            ))}
          </ol>
        </nav>
        <Link to="/quote" className="btn btn-light btn-block">Request a Quote <Icon name="arrow" size={16} /></Link>
      </div>
    </>
  );
}
