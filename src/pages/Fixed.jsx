import { Link } from 'react-router-dom';
import FinishSelector from '../components/FinishSelector';

export default function Fixed() {
  return (
    <main>
      <div style={{ backgroundColor: 'var(--color-bg-white)', borderBottom: '1px solid var(--color-border)', padding: '1rem 0' }}>
        <div className="hero-wordmark" aria-hidden="true">BATHCENTRIC</div>

        <div className="container">
          <nav className="breadcrumb" style={{ marginBottom: 0 }}>
            <Link to="/">Home</Link> <span>/</span>
            <Link to="/enclosures">Enclosures</Link> <span>/</span>
            <span>Fixed Walk-In</span>
          </nav>
        </div>
      </div>

      <section className="section" style={{ paddingTop: '3.5rem' }}>
        <div className="container">
          <div className="product-hero-grid">

            <div className="product-gallery">
              <div className="product-main-image">
                <img src="/images/fixed.jpg" alt="Minimalist Fixed Walk-In Glass Screen" id="main-product-img" />
              </div>

              <div className="product-schematic-box">
                <div className="product-schematic-title">Architectural Floorplan & Clearance</div>
                <img src="/images/fixed-diagram.svg" alt="Fixed Walk-In Shower Floorplan Schematic" style={{ width: '100%', borderRadius: '4px' }} />
                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-light)', marginTop: '0.5rem' }}>Recommended minimum walkway opening: 550mm to 700mm.</p>
              </div>
            </div>

            <div className="product-details">
              <span className="eyebrow">Minimalist Wetroom System</span>
              <h1>Fixed Walk-In Shower Enclosure</h1>
              <p style={{ fontSize: '1.15rem', marginBottom: '1.25rem' }}>
                Pure architectural simplicity. A stationary frameless glass panel anchored by an engineered stabilizer bar and recessed floor/wall profile, creating a luxurious barrier-free wetroom entry.
              </p>

              <div className="product-price-box">
                {/* <div className="price-title">Starting Price Guide</div> */}
                {/* <div className="price-amount">₹14,500*</div> */}
                {/* <div className="price-disclaimer">*Indicative price for standard 800mm x 2000mm in 10mm clear toughened glass. Final quotation is custom calculated based on your exact on-site laser measurements and selected finish.</div> */}
                <div className="price-title">Pricing &amp; Quotation</div>
                <div className="price-amount" style={{ fontSize: '1.25rem', fontWeight: 600 }}>As per client specifications</div>
                <div className="price-disclaimer">Every enclosure is custom manufactured to your bathroom dimensions, preferred glass type, and chosen hardware finish. Book a free site visit for an exact quotation.</div>
              </div>

              {/* Interactive Finish Switcher */}
              <FinishSelector defaultFinish="Matte Black" />

              {/* Technical Specifications Table */}
              <h3 style={{ fontSize: '1.3rem', marginTop: '2rem' }}>Technical Specifications</h3>
              <table className="specs-table">
                <tbody>
                  <tr>
                    <th>Standard Heights</th>
                    <td>1950mm, 2000mm, 2100mm, or Custom Full-Height up to 2400mm</td>
                  </tr>
                  <tr>
                    <th>Panel Widths</th>
                    <td>Custom manufactured from 600mm to 1400mm (Single Panel)</td>
                  </tr>
                  <tr>
                    <th>Glass Thickness</th>
                    <td>10mm or 12mm Toughened Architectural Safety Glass</td>
                  </tr>
                  <tr>
                    <th>Glass Variants</th>
                    <td>Clear Toughened, Low-Iron Extra Clear, Fluted / Reeded, Frosted, Tinted Grey</td>
                  </tr>
                  <tr>
                    <th>Stabilizing Bar</th>
                    <td>Solid SUS 304 Stainless Steel (Ceiling-mount or 45°/90° Wall-mount)</td>
                  </tr>
                  <tr>
                    <th>Channel / Clamps</th>
                    <td>Slimline aluminum wall profile (15mm visible face) or discrete floor/wall brass clamps</td>
                  </tr>
                  <tr>
                    <th>Surface Treatment</th>
                    <td>EasyClean Hydrophobic Anti-Limescale Coating (Both Faces)</td>
                  </tr>
                  <tr>
                    <th>Warranty</th>
                    <td>5 Years on Hardware & Structural Integrity; 1 Year on Silicone Sealing</td>
                  </tr>
                </tbody>
              </table>

              {/* What's Included */}
              <div style={{ background: 'var(--color-bg-white)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1.5rem', margin: '2rem 0' }}>
                <h4 style={{ marginBottom: '0.75rem' }}>What Is Included In Every BathCentric Installation:</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem' }}>
                  <li>✓ On-site digital laser surveying and level verification</li>
                  <li>✓ CNC custom-cut and tempered safety glass panel with pencil polished edges</li>
                  <li>✓ Heavy-duty architectural stabilizer bar and wall mounting hardware</li>
                  <li>✓ Mildew-resistant architectural grade silicone seal</li>
                  <li>✓ White-glove installation by certified BathCentric technicians</li>
                </ul>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
                <Link to="/quote?type=fixed" className="btn btn-accent btn-lg">Request Measurement / Quote</Link>
                <a href="https://wa.me/919876543210?text=Hi%20BathCentric,%20I'd%20like%20to%20quote%20a%20Fixed%20Walk-In%20shower%20enclosure." target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-lg">Chat on WhatsApp</a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Projects Feature */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-white)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Real Installations</span>
            <h2>Fixed Walk-In Projects</h2>
            <p>See how architects and homeowners have integrated BathCentric fixed walk-in screens into modern master ensuites.</p>
          </div>
          <div className="grid-3">
            <div className="project-card">
              <div className="project-img"><img src="/images/project-4.jpg" alt="Walk-In Master Ensuite" loading="lazy" /></div>
              <div className="project-body">
                <div className="project-loc">Mumbai Penthouse</div>
                <h4 className="project-title">1200mm Reeded Glass Screen</h4>
                <p style={{ fontSize: '0.85rem' }}>Paired with brushed brass ceiling stabilizer bar and marble slab tiles.</p>
              </div>
            </div>
            <div className="project-card">
              <div className="project-img"><img src="/images/project-fixed-reeded.jpg" alt="Wetroom Walk In" loading="lazy" /></div>
              <div className="project-body">
                <div className="project-loc">Bengaluru Residence</div>
                <h4 className="project-title">Low-Iron Ultra-Clear Screen</h4>
                <p style={{ fontSize: '0.85rem' }}>Matte black slimline wall profile with frameless floor silicone seal.</p>
              </div>
            </div>
            <div className="project-card">
              <div className="project-img"><img src="/images/project-8.jpg" alt="Luxury Walk-In" loading="lazy" /></div>
              <div className="project-body">
                <div className="project-loc">Gurgaon Villa</div>
                <h4 className="project-title">Double Entry Walk-In Wetroom</h4>
                <p style={{ fontSize: '0.85rem' }}>Twin fixed panels with central open entry for a resort-style ensuite.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
