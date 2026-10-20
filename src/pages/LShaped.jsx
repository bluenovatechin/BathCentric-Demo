import { Link } from 'react-router-dom';
import FinishSelector from '../components/FinishSelector';

export default function LShaped() {
  return (
    <main>
      <div style={{ backgroundColor: 'var(--color-bg-white)', borderBottom: '1px solid var(--color-border)', padding: '1rem 0' }}>
        <div className="hero-wordmark" aria-hidden="true">BATHCENTRIC</div>

        <div className="container">
          <nav className="breadcrumb" style={{ marginBottom: 0 }}>
            <Link to="/">Home</Link> <span>/</span>
            <Link to="/enclosures">Enclosures</Link> <span>/</span>
            <span>L-Shaped Corner</span>
          </nav>
        </div>
      </div>

      <section className="section" style={{ paddingTop: '3.5rem' }}>
        <div className="container">
          <div className="product-hero-grid">

            <div className="product-gallery">
              <div className="product-main-image">
                <img src="/images/l-shaped.jpg" alt="L-Shaped Corner Frameless Glass Shower Enclosure" id="main-product-img" />
              </div>

              <div className="product-schematic-box">
                <div className="product-schematic-title">Architectural Floorplan & Clearance</div>
                <img src="/images/l-shaped-diagram.svg" alt="L-Shaped Corner Shower Floorplan Schematic" style={{ width: '100%', borderRadius: '4px' }} />
                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-light)', marginTop: '0.5rem' }}>Uses 90° corner junction. Can be configured with front swing door or corner-entry sliders.</p>
              </div>
            </div>

            <div className="product-details">
              <span className="eyebrow">Complete Corner Transformation</span>
              <h1>L-Shaped Corner Shower Enclosure</h1>
              <p style={{ fontSize: '1.15rem', marginBottom: '1.25rem' }}>
                Enclose any 90-degree corner into an architectural glass sanctum. Combines a fixed return panel with an entry front panel, connected by micro-engineered 90° glass-to-glass clamps or corner profiles.
              </p>

              <div className="product-price-box">
                {/* <div className="price-title">Starting Price Guide</div> */}
                {/* <div className="price-amount">₹28,000*</div> */}
                {/* <div className="price-disclaimer">*Indicative price for standard 900mm x 900mm x 2000mm corner enclosure in 10mm clear toughened glass. Final quotation is based on exact site measurements.</div> */}
                <div className="price-title">Pricing &amp; Quotation</div>
                <div className="price-amount" style={{ fontSize: '1.25rem', fontWeight: 600 }}>As per client specifications</div>
                <div className="price-disclaimer">Every L-shaped corner unit is custom manufactured to your bathroom dimensions, preferred glass type, and chosen hardware finish. Book a free site visit for an exact quotation.</div>
              </div>

              {/* Finish Switcher */}
              <FinishSelector defaultFinish="Polished Chrome" />

              {/* Specs Table */}
              <h3 style={{ fontSize: '1.3rem', marginTop: '2rem' }}>Technical Specifications</h3>
              <table className="specs-table">
                <tbody>
                  <tr>
                    <th>Standard Heights</th>
                    <td>1950mm, 2000mm, 2100mm</td>
                  </tr>
                  <tr>
                    <th>Corner Footprint Range</th>
                    <td>800mm x 800mm up to 1500mm x 1200mm (Equal or Offset Rectangle Layouts)</td>
                  </tr>
                  <tr>
                    <th>Glass Thickness</th>
                    <td>10mm Toughened Architectural Safety Glass (EN 12150 certified)</td>
                  </tr>
                  <tr>
                    <th>Corner Connection</th>
                    <td>Precision CNC 90° Solid Brass Glass-to-Glass Brackets or continuous 90° corner profile</td>
                  </tr>
                  <tr>
                    <th>Door Configurations</th>
                    <td>Front Hinged Swing Door with Fixed Inline + 90° Return, OR Corner Dual Sliders</td>
                  </tr>
                  <tr>
                    <th>Corner Support</th>
                    <td>SUS 304 Diagonal 45° Corner Reinforcement Stabilizer Arm</td>
                  </tr>
                  <tr>
                    <th>Magnetic Sealing</th>
                    <td>High-strength 90° magnetic corner seal strips preventing all water escape</td>
                  </tr>
                  <tr>
                    <th>Warranty</th>
                    <td>5-Year Hardware Warranty; Lifetime Structural Glass Alignment Support</td>
                  </tr>
                </tbody>
              </table>

              {/* What's Included */}
              <div style={{ background: 'var(--color-bg-white)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1.5rem', margin: '2rem 0' }}>
                <h4 style={{ marginBottom: '0.75rem' }}>Included In Your Package:</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem' }}>
                  <li>✓ Multi-point laser 3D angle verification for squareness of corner tiles</li>
                  <li>✓ CNC custom-cut front and return glass panels with polished pencil edges</li>
                  <li>✓ 90° architectural corner brackets and wall anchoring profiles</li>
                  <li>✓ Solid brass hinges, matching handle, and 45° corner stabilizer arm</li>
                  <li>✓ Full magnetic corner seals and sanitary anti-fungal silicone application</li>
                  <li>✓ White-glove installation and water spray tightness certification</li>
                </ul>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
                <Link to="/quote?type=l-shaped" className="btn btn-accent btn-lg">Request Measurement / Quote</Link>
                <a href="https://wa.me/919876543210?text=Hi%20BathCentric,%20I'd%20like%20to%20quote%20an%20L-Shaped%20Corner%20Shower." target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-lg">Chat on WhatsApp</a>
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
            <h2>L-Shaped Corner Projects</h2>
            <p>See real BathCentric corner installations turning unused bathroom corners into showpieces.</p>
          </div>
          <div className="grid-3">
            <div className="project-card">
              <div className="project-img"><img src="/images/l-shaped.jpg" alt="Corner Enclosure Delhi" loading="lazy" /></div>
              <div className="project-body">
                <div className="project-loc">Golf Links, New Delhi</div>
                <h4 className="project-title">1000x1000mm Corner Frameless</h4>
                <p style={{ fontSize: '0.85rem' }}>Polished chrome hardware with 90° glass return and minimalist towel bar.</p>
              </div>
            </div>
            <div className="project-card">
              <div className="project-img"><img src="/images/project-3.jpg" alt="Offset Corner Enclosure" loading="lazy" /></div>
              <div className="project-body">
                <div className="project-loc">Alipore, Kolkata</div>
                <h4 className="project-title">1200x900mm Offset Master Ensuite</h4>
                <p style={{ fontSize: '0.85rem' }}>Matte black 90° corner clamps with low-iron ultra-clear safety glass.</p>
              </div>
            </div>
            <div className="project-card">
              <div className="project-img"><img src="/images/project-7.jpg" alt="Brass Corner Enclosure" loading="lazy" /></div>
              <div className="project-body">
                <div className="project-loc">Banjara Hills, Hyderabad</div>
                <h4 className="project-title">Brushed Brass Luxury Corner</h4>
                <p style={{ fontSize: '0.85rem' }}>Dual 90° fixed return panels with magnetic seal and matching floor drain.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
