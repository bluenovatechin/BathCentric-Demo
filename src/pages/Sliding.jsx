import { Link } from 'react-router-dom';
import FinishSelector from '../components/FinishSelector';

export default function Sliding() {
  return (
    <main>
      <div style={{ backgroundColor: 'var(--color-bg-white)', borderBottom: '1px solid var(--color-border)', padding: '1rem 0' }}>
        <div className="hero-wordmark" aria-hidden="true">BATHCENTRIC</div>
        <div className="container">
          <nav className="breadcrumb" style={{ marginBottom: 0 }}>
            <Link to="/">Home</Link> <span>/</span>
            <Link to="/enclosures">Enclosures</Link> <span>/</span>
            <span>Sliding Systems</span>
          </nav>
        </div>
      </div>

      <section className="section" style={{ paddingTop: '3.5rem' }}>
        <div className="container">
          <div className="product-hero-grid">

            <div className="product-gallery">
              <div className="product-main-image">
                <img src="/images/sliding.jpg" alt="Sliding Glass Shower Door Enclosure" id="main-product-img" />
              </div>

              <div className="product-schematic-box">
                <div className="product-schematic-title">Architectural Floorplan & Clearance</div>
                <img src="/images/sliding-diagram.svg" alt="Sliding Shower Door Floorplan Schematic" style={{ width: '100%', borderRadius: '4px' }} />
                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-light)', marginTop: '0.5rem' }}>Zero front clearance required. Door panel slides parallel behind fixed glass panel.</p>
              </div>
            </div>

            <div className="product-details">
              <span className="eyebrow">Space Optimization & Quiet Motion</span>
              <h1>Architectural Sliding Shower System</h1>
              <p style={{ fontSize: '1.15rem', marginBottom: '1.25rem' }}>
                The premier space-saving solution for bathrooms where a swinging door would interfere with bathroom fixtures. Engineered with an exposed or concealed top-hung SUS 304 track and soft-close deceleration dampers.
              </p>

              <div className="product-price-box">
                {/* <div className="price-title">Starting Price Guide</div> */}
                {/* <div className="price-amount">₹26,500*</div> */}
                {/* <div className="price-disclaimer">*Indicative price for standard 1200mm x 2000mm 1 Fixed + 1 Sliding Panel in 8mm/10mm toughened glass. Final quotation is based on exact span dimensions and options.</div> */}
                <div className="price-title">Pricing &amp; Quotation</div>
                <div className="price-amount" style={{ fontSize: '1.25rem', fontWeight: 600 }}>As per client specifications</div>
                <div className="price-disclaimer">Every sliding glass system is custom manufactured to your bathroom dimensions, preferred glass type, and chosen hardware finish. Book a free site visit for an exact quotation.</div>
              </div>

              {/* Finish Switcher */}
              <FinishSelector defaultFinish="Matte Black" />

              {/* Specs Table */}
              <h3 style={{ fontSize: '1.3rem', marginTop: '2rem' }}>Technical Specifications</h3>
              <table className="specs-table">
                <tbody>
                  <tr>
                    <th>Standard Heights</th>
                    <td>1950mm, 2000mm, 2100mm</td>
                  </tr>
                  <tr>
                    <th>Span Width Range</th>
                    <td>1000mm to 2000mm (Single Slider); up to 2800mm (Double Sliding Doors)</td>
                  </tr>
                  <tr>
                    <th>Glass Thickness</th>
                    <td>8mm or 10mm Toughened Architectural Safety Glass (EN 12150 certified)</td>
                  </tr>
                  <tr>
                    <th>Track System</th>
                    <td>SUS 304 Solid Stainless Steel Tubular or Rectangular Top Track with Anti-Jump Stops</td>
                  </tr>
                  <tr>
                    <th>Roller Assembly</th>
                    <td>Dual heavy-duty sealed stainless bearings wrapped in POM nylon for whisper-quiet travel</td>
                  </tr>
                  <tr>
                    <th>Soft-Close Feature</th>
                    <td>Integrated hydraulic soft-close dampers on both open and close stops (prevent glass slam)</td>
                  </tr>
                  <tr>
                    <th>Floor Guide</th>
                    <td>Discrete bottom corner guide block (no raised floor track to collect dirt or trip over)</td>
                  </tr>
                  <tr>
                    <th>Warranty</th>
                    <td>5-Year Hardware Warranty; Lifetime Roller Mechanism Alignment Support</td>
                  </tr>
                </tbody>
              </table>

              {/* What's Included */}
              <div style={{ background: 'var(--color-bg-white)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1.5rem', margin: '2rem 0' }}>
                <h4 style={{ marginBottom: '0.75rem' }}>Included In Your Package:</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem' }}>
                  <li>✓ Precision laser verification of alcove wall width and vertical plumb</li>
                  <li>✓ Custom CNC glass panels (Fixed Panel + Precision Drilled Sliding Door)</li>
                  <li>✓ Top track system with anti-derailment pins & dual soft-close cylinders</li>
                  <li>✓ Recessed architectural finger pull or flush-mount modern handle</li>
                  <li>✓ Magnetic door closure seal and vertical anti-splash water seal</li>
                  <li>✓ Certified installation and track leveling by BathCentric specialists</li>
                </ul>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
                <Link to="/quote?type=sliding" className="btn btn-accent btn-lg">Request Measurement / Quote</Link>
                <a href="https://wa.me/919876543210?text=Hi%20BathCentric,%20I'd%20like%20to%20quote%20a%20Sliding%20Shower%20System." target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-lg">Chat on WhatsApp</a>
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
            <h2>Sliding Enclosure Projects</h2>
            <p>Discover how BathCentric sliding enclosures maximize spatial utility without compromising design.</p>
          </div>
          <div className="grid-3">
            <div className="project-card">
              <div className="project-img"><img src="/images/sliding.jpg" alt="Sliding Enclosure Bengaluru" loading="lazy" /></div>
              <div className="project-body">
                <div className="project-loc">Indiranagar, Bengaluru</div>
                <h4 className="project-title">1400mm Soft-Close Alcove Slider</h4>
                <p style={{ fontSize: '0.85rem' }}>Matte black stainless track with 10mm low-iron glass and soft dampers.</p>
              </div>
            </div>
            <div className="project-card">
              <div className="project-img"><img src="/images/project-2.jpg" alt="Fluted Glass Sliding Door" loading="lazy" /></div>
              <div className="project-body">
                <div className="project-loc">South Extension, Delhi</div>
                <h4 className="project-title">Reeded Fluted Glass Slider</h4>
                <p style={{ fontSize: '0.85rem' }}>Combining privacy reeded glass texture with smooth polished chrome rollers.</p>
              </div>
            </div>
            <div className="project-card">
              <div className="project-img"><img src="/images/project-6.jpg" alt="Compact Ensuite Slider" loading="lazy" /></div>
              <div className="project-body">
                <div className="project-loc">Bandra West, Mumbai</div>
                <h4 className="project-title">Compact Luxury Apartment Ensuite</h4>
                <p style={{ fontSize: '0.85rem' }}>1100mm alcove with brushed brass top track fitting neatly beside a vanity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
