import { Link } from 'react-router-dom';
import FinishSelector from '../components/FinishSelector';

export default function Swing() {
  return (
    <main>
      <div style={{ backgroundColor: 'var(--color-bg-white)', borderBottom: '1px solid var(--color-border)', padding: '1rem 0' }}>
        <div className="hero-wordmark" aria-hidden="true">BATHCENTRIC</div>
        <div className="container">
          <nav className="breadcrumb" style={{ marginBottom: 0 }}>
            <Link to="/">Home</Link> <span>/</span>
            <Link to="/enclosures">Enclosures</Link> <span>/</span>
            <span>Swing Frameless</span>
          </nav>
        </div>
      </div>

      <section className="section" style={{ paddingTop: '3.5rem' }}>
        <div className="container">
          <div className="product-hero-grid">

            <div className="product-gallery">
              <div className="product-main-image">
                <img src="/images/swing.jpg" alt="Swing Frameless Hinged Shower Door" id="main-product-img" />
              </div>

              <div className="product-schematic-box">
                <div className="product-schematic-title">Architectural Floorplan & Clearance</div>
                <img src="/images/swing-diagram.svg" alt="Frameless Swing Door Floorplan Schematic" style={{ width: '100%', borderRadius: '4px' }} />
                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-light)', marginTop: '0.5rem' }}>Door swings 90° out or dual 180° swing. Requires clear radius in front of enclosure.</p>
              </div>
            </div>

            <div className="product-details">
              <span className="eyebrow">Architectural Luxury</span>
              <h1>Frameless Swing Shower Enclosure</h1>
              <p style={{ fontSize: '1.15rem', marginBottom: '1.25rem' }}>
                The timeless standard of five-star luxury bathrooms. Forged solid brass hinges provide a substantial, weighted feel on opening and closing, combined with concealed magnetic water seals.
              </p>

              <div className="product-price-box">
                {/* <div className="price-title">Starting Price Guide</div> */}
                {/* <div className="price-amount">₹21,000*</div> */}
                {/* <div className="price-disclaimer">*Indicative price for standard 900mm x 2000mm single door in 10mm clear toughened glass with brass hinges. Final price depends on exact measurements and configuration.</div> */}
                <div className="price-title">Pricing &amp; Quotation</div>
                <div className="price-amount" style={{ fontSize: '1.25rem', fontWeight: 600 }}>As per client specifications</div>
                <div className="price-disclaimer">Every frameless swing door is custom manufactured to your bathroom dimensions, preferred glass type, and chosen hardware finish. Book a free site visit for an exact quotation.</div>
              </div>

              {/* Finish Switcher */}
              <FinishSelector defaultFinish="Brushed Brass / Gold" />

              {/* Specs Table */}
              <h3 style={{ fontSize: '1.3rem', marginTop: '2rem' }}>Technical Specifications</h3>
              <table className="specs-table">
                <tbody>
                  <tr>
                    <th>Standard Heights</th>
                    <td>1950mm, 2000mm, 2100mm (Custom full-height up to 2400mm)</td>
                  </tr>
                  <tr>
                    <th>Door Width Range</th>
                    <td>600mm to 900mm (Single door); paired with fixed inline panels up to 1800mm total width</td>
                  </tr>
                  <tr>
                    <th>Glass Thickness</th>
                    <td>10mm Toughened Architectural Safety Glass (EN 12150 certified)</td>
                  </tr>
                  <tr>
                    <th>Hinges</th>
                    <td>Heavy-Duty Forged Solid Brass (Wall-to-Glass 90° or Glass-to-Glass 180°), self-centering at 25°</td>
                  </tr>
                  <tr>
                    <th>Handle Style</th>
                    <td>Back-to-back Architectural D-handle, Contemporary Square Pull, or Minimal Knob</td>
                  </tr>
                  <tr>
                    <th>Sealing System</th>
                    <td>Ultra-clear UV-stabilized magnetic door gasket + translucent bottom sweep with drip rail</td>
                  </tr>
                  <tr>
                    <th>Water Threshold</th>
                    <td>Low-profile aluminum water-dam threshold (5mm height) for absolute dry floors</td>
                  </tr>
                  <tr>
                    <th>Warranty</th>
                    <td>5-Year Hardware Warranty; 1-Year Gasket & Silicone Warranty</td>
                  </tr>
                </tbody>
              </table>

              {/* What's Included */}
              <div style={{ background: 'var(--color-bg-white)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1.5rem', margin: '2rem 0' }}>
                <h4 style={{ marginBottom: '0.75rem' }}>Included In Your Package:</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem' }}>
                  <li>✓ Precision laser survey accounting for wall out-of-plumb angles</li>
                  <li>✓ Custom CNC glass fabrication with precision cutouts for hinges and handles</li>
                  <li>✓ 2x Heavy-duty solid brass hinges (tested to 100,000 cycles)</li>
                  <li>✓ Architectural handle in matching PVD finish</li>
                  <li>✓ Full magnetic gasket set and bottom water deflector</li>
                  <li>✓ Complete white-glove on-site installation and water spray testing</li>
                </ul>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
                <Link to="/quote?type=swing" className="btn btn-accent btn-lg">Request Measurement / Quote</Link>
                <a href="https://wa.me/919876543210?text=Hi%20BathCentric,%20I'd%20like%20to%20quote%20a%20Frameless%20Swing%20shower%20door." target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-lg">Chat on WhatsApp</a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery Feature */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-white)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Real Installations</span>
            <h2>Frameless Swing Projects</h2>
            <p>Explore recent hinged frameless installations featuring bespoke glass and designer finishes.</p>
          </div>
          <div className="grid-3">
            <div className="project-card">
              <div className="project-img"><img src="/images/swing.jpg" alt="Swing Door Project" loading="lazy" /></div>
              <div className="project-body">
                <div className="project-loc">Worli, Mumbai</div>
                <h4 className="project-title">Brushed Brass Frameless Hinged</h4>
                <p style={{ fontSize: '0.85rem' }}>10mm Low-Iron extra clear glass with dual brass hinges and 450mm ladder pull.</p>
              </div>
            </div>
            <div className="project-card">
              <div className="project-img"><img src="/images/project-1.jpg" alt="Alcove Swing Door" loading="lazy" /></div>
              <div className="project-body">
                <div className="project-loc">Jubilee Hills, Hyderabad</div>
                <h4 className="project-title">Door + Inline Panel Alcove</h4>
                <p style={{ fontSize: '0.85rem' }}>1500mm wide alcove with 700mm swing door and 800mm fixed inline glass.</p>
              </div>
            </div>
            <div className="project-card">
              <div className="project-img"><img src="/images/project-5.jpg" alt="Matte Black Swing" loading="lazy" /></div>
              <div className="project-body">
                <div className="project-loc">Koregaon Park, Pune</div>
                <h4 className="project-title">Matte Black Architectural Swing</h4>
                <p style={{ fontSize: '0.85rem' }}>Black PVD hinges paired with charcoal stone tile and rain shower head.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
