import { Link } from 'react-router-dom';
import Icon from './Icon';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-cta">
          <div>
            <span className="eyebrow">Start your project</span>
            <h2>Ready for glass &amp; accessories that fit <em>your</em> bathroom?</h2>
          </div>
          <Link to="/quote" className="btn btn-accent btn-lg">
            Book a Free Site Visit
            <Icon name="arrow" size={18} strokeWidth={2} />
          </Link>
        </div>

        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/images/logo-white.svg" alt="BathCentric" width="200" />
            <p>
              Custom architectural bathroom glass, matching luxury solid brass accessories, and bespoke shower enclosures. Designed and laser-measured around your sanctuary.
            </p>
            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.75rem' }}>
              <a href="https://wa.me/919876543210?text=Hi%20BathCentric,%20I'd%20like%20to%20enquire%20about%20bathroom%20glass%20and%20accessories." target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-sm">
                WhatsApp Enquiries
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h5>Glass &amp; Enclosures</h5>
            <ul className="footer-links">
              <li><Link to="/enclosures">All Shower Enclosures</Link></li>
              <li><Link to="/fixed">Fixed Walk-In Screens</Link></li>
              <li><Link to="/swing">Swing Frameless Doors</Link></li>
              <li><Link to="/sliding">Sliding Glass Systems</Link></li>
              <li><Link to="/l-shaped">L-Shaped Corner Units</Link></li>
              <li><Link to="/glass">Toughened &amp; Fluted Glass</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Products &amp; Fittings</h5>
            <ul className="footer-links">
              <li><Link to="/mirrors">Smart LED Vanity Mirrors</Link></li>
              <li><Link to="/drains">Tile-Insert Linear Drains</Link></li>
              <li><Link to="/hardware">Solid Brass Towel Bars</Link></li>
              <li><Link to="/hardware">Designer Robe Hooks &amp; Shelves</Link></li>
              <li><Link to="/hardware">Coordinated PVD Finishes</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Design &amp; Services</h5>
            <ul className="footer-links">
              <li><Link to="/about">Bespoke Bathroom Design</Link></li>
              <li><Link to="/about">Bathroom Redesign &amp; Renovation</Link></li>
              <li><Link to="/about">Preventive Maintenance &amp; Care</Link></li>
              <li><Link to="/projects">Completed Installations</Link></li>
              <li><Link to="/quote">Book Free Site Visit</Link></li>
              <li style={{ marginTop: '0.5rem' }}><Link to="/admin" className="admin-badge">Admin Portal</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Contact &amp; Support</h5>
            <ul className="footer-links footer-contact">
              <li><a href="tel:+919876543210"><Icon name="phone" size={16} /> +91 98765 43210</a></li>
              <li><a href="mailto:enquiries@bathcentric.in"><Icon name="mail" size={16} /> enquiries@bathcentric.in</a></li>
              <li><span><Icon name="pin" size={16} /> Mumbai • Bengaluru • Delhi NCR • Hyderabad • Pune</span></li>
              <li><Link to="/quote" style={{ color: 'var(--color-accent)', fontWeight: 600 }}>Get Free Quote &rarr;</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© 2026 BATHCENTRIC. All rights reserved. Domain: <a href="https://bathcentric.in" style={{ color: 'inherit' }}>bathcentric.in</a></div>
          <div>Toughened Safety Glass Certified EN 12150 / IS 2553 • 5-Year Hardware Warranty</div>
        </div>
      </div>
      {/* <div className="footer-wordmark" aria-hidden="true">BATHCENTRIC</div> */}
    </footer>
  );
}
