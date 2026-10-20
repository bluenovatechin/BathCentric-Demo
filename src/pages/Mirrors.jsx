import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';

export default function Mirrors() {
  const [activeShape, setActiveShape] = useState('all');

  const mirrorModels = [
    {
      id: 'pill',
      category: 'pill',
      title: 'Pill / Capsule Mirror',
      badge: 'Bestseller for Vanities',
      image: '/images/mirror-pill.jpg',
      desc: 'An elongated capsule with soft rounded ends. It softens straight tile lines and sits beautifully above single and double floating vanities.',
      specs: [
        'Available standard sizes: 450 × 900, 500 × 1000, 600 × 1200 mm, or bespoke',
        '5mm high-grade copper-free, lead-free silver float glass',
        'CNC diamond-ground flat polish with safety arris chamfering',
        'Concealed heavy-duty wall bracket holding mirror firmly to the wall'
      ]
    },
    {
      id: 'arch',
      category: 'arch',
      title: 'Architectural Arch Mirror',
      badge: 'Designer Statement',
      image: '/images/mirror-arch.jpg',
      desc: 'A tall architectural arch with a flat base that sits flush on a vanity backsplash or shelf, crowned by a generous curve.',
      specs: [
        'Available standard sizes: 500 × 800, 600 × 900, 750 × 1050 mm, or bespoke',
        'Flat bottom base designed to sit flush against stone or tile backsplashes',
        '5mm copper-free silvering impervious to moisture decay and black edges',
        'Concealed mounting bracket providing a seamless floating profile'
      ]
    },
    {
      id: 'round',
      category: 'round',
      title: 'Circular Round Mirror',
      badge: 'Minimalist Icon',
      image: '/images/mirror-round.jpg',
      desc: 'Timeless circular geometry that brings balance to powder rooms and compact bathrooms alike.',
      specs: [
        'Available standard diameters: 600, 750, 900, 1050 mm, or custom sizing',
        'Pristine, true-to-life reflection with zero optical distortion',
        'Diamond-polished perimeter edge with smooth safety chamfer',
        'Concealed French cleat / wall bracket for a flush floating appearance'
      ]
    },
    {
      id: 'rect',
      category: 'rect',
      title: 'Frameless Rectangular Mirror',
      badge: 'Classic Architectural',
      image: '/images/mirror-rect.jpg',
      desc: 'A crisp rectangle that can hang in portrait or landscape, wide enough to span a double-basin vanity.',
      specs: [
        'Available standard sizes: 600 × 800, 900 × 750, 1200 × 800, 1500 × 900 mm, or bespoke',
        'Dual orientation: engineered to mount in portrait or landscape',
        '5mm premium moisture-resistant copper-free silver mirror glass',
        'Precision diamond-polished safety edges with concealed fixings'
      ]
    }
  ];

  const filteredMirrors = activeShape === 'all'
    ? mirrorModels
    : mirrorModels.filter(m => m.category === activeShape);

  return (
    <main>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="hero-wordmark" aria-hidden="true">BATHCENTRIC</div>
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link> <span>/</span> <span>Bathroom Mirrors</span>
          </nav>
          <span className="eyebrow" style={{ color: 'var(--color-accent-dark)' }}>Custom Sized &amp; Concealed Mounting</span>
          <h1>Bathroom Mirrors, Made to Measure</h1>
          <p>
            Architectural bathroom mirrors crafted from 5mm copper-free, lead-free silver mirror glass with diamond-polished edges and concealed wall mounting, in standard sizes or tailored to your vanity.
          </p>
        </div>
      </section>

      {/* 4 Built For Bathrooms Features */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-white)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="eyebrow">Built For Bathrooms</span>
            <h2>Why BathCentric Mirrors Excel</h2>
            <p>Designed specifically to withstand high bathroom humidity and maintain pristine clarity for years.</p>
          </div>

          <div className="grid-4">
            <div className="feature-card" style={{ background: '#fff' }}>
              <div className="feature-icon"><Icon name="layers" /></div>
              <h3 className="feature-title">5mm Copper-Free Glass</h3>
              <p style={{ fontSize: '0.92rem' }}>
                Ordinary mirrors develop black spots at perimeter edges in humid bathrooms. Copper-free silvering resists moisture decay permanently.
              </p>
            </div>

            <div className="feature-card" style={{ background: '#fff' }}>
              <div className="feature-icon"><Icon name="ruler" /></div>
              <h3 className="feature-title">Sized to Your Vanity</h3>
              <p style={{ fontSize: '0.92rem' }}>
                Made to the exact width of your vanity and the lines of your tiles, in standard sizes or crafted strictly to measure.
              </p>
            </div>

            <div className="feature-card" style={{ background: '#fff' }}>
              <div className="feature-icon"><Icon name="sparkle" /></div>
              <h3 className="feature-title">Diamond-Polished Edges</h3>
              <p style={{ fontSize: '0.92rem' }}>
                Diamond-ground flat polished edges with a precision safety chamfer for a clean, architectural, and touch-safe look.
              </p>
            </div>

            <div className="feature-card" style={{ background: '#fff' }}>
              <div className="feature-icon"><Icon name="tools" /></div>
              <h3 className="feature-title">Concealed Mounting</h3>
              <p style={{ fontSize: '0.92rem' }}>
                A hidden heavy-duty wall bracket holds the mirror firmly and securely so it appears to float cleanly on the wall.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filterable Mirror Catalog */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <span className="eyebrow">Bespoke Silhouettes</span>
            <h2>Choose Your Mirror Silhouette</h2>
            <p>Custom fabricated to your vanity counter width, wall clearances, and architectural layout.</p>
          </div>

          {/* Filter Tabs */}
          <div className="filter-tabs">
            <button
              type="button"
              className={`filter-tab ${activeShape === 'all' ? 'active' : ''}`}
              onClick={() => setActiveShape('all')}
            >
              All Silhouettes ({mirrorModels.length})
            </button>
            <button
              type="button"
              className={`filter-tab ${activeShape === 'pill' ? 'active' : ''}`}
              onClick={() => setActiveShape('pill')}
            >
              Capsule / Pill
            </button>
            <button
              type="button"
              className={`filter-tab ${activeShape === 'arch' ? 'active' : ''}`}
              onClick={() => setActiveShape('arch')}
            >
              Architectural Arch
            </button>
            <button
              type="button"
              className={`filter-tab ${activeShape === 'round' ? 'active' : ''}`}
              onClick={() => setActiveShape('round')}
            >
              Circular Round
            </button>
            <button
              type="button"
              className={`filter-tab ${activeShape === 'rect' ? 'active' : ''}`}
              onClick={() => setActiveShape('rect')}
            >
              Rectangle
            </button>
          </div>

          <div className="grid-2" style={{ gap: '3rem' }}>
            {filteredMirrors.map((mirror) => (
              <article key={mirror.id} className="feature-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: '320px', borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '1.5rem', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)' }}>
                  <img src={mirror.image} alt={mirror.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <span className="badge-tag">{mirror.badge}</span>
                  <span style={{ fontSize: '0.82rem', color: 'var(--color-accent-dark)', fontWeight: 600 }}>High-Definition Clarity</span>
                </div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.6rem' }}>{mirror.title}</h3>
                <p style={{ fontSize: '0.95rem', marginBottom: '1.25rem' }}>{mirror.desc}</p>
                <ul style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem', marginBottom: '1.5rem' }}>
                  {mirror.specs.map((s, idx) => (
                    <li key={idx} style={{ display: 'flex', gap: '0.5rem' }}>
                      <span style={{ color: 'var(--color-accent)', fontWeight: 700 }}>✓</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
                <div style={{ borderTop: '1px dashed var(--color-border-strong)', paddingTop: '1.25rem', marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-light)', display: 'block' }}>Pricing Guide</span>
                    <strong style={{ fontSize: '1.05rem', color: 'var(--color-primary)' }}>As per client specifications</strong>
                  </div>
                  <Link to="/quote?type=mirror" className="btn btn-accent btn-sm">
                    Customize Sizing &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications Matrix */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-white)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="eyebrow">Specifications</span>
            <h2>Technical Engineering Standards</h2>
            <p>Built to luxury hotel and master ensuite longevity benchmarks.</p>
          </div>

          <div style={{ maxWidth: '880px', margin: '0 auto', overflowX: 'auto' }}>
            <table className="specs-table">
              <tbody>
                <tr>
                  <th style={{ width: '30%' }}>Glass Specification</th>
                  <td>5mm High-Grade Copper-Free, Lead-Free Silver Mirror Float Glass</td>
                </tr>
                <tr>
                  <th>Edge Detailing</th>
                  <td>CNC Diamond Ground Flat Polish with safety arris chamfering</td>
                </tr>
                <tr>
                  <th>Moisture Resistance</th>
                  <td>Copper-free silver backing resists humidity decay, black spots, and perimeter corrosion</td>
                </tr>
                <tr>
                  <th>Optical Clarity</th>
                  <td>Pristine, true-to-life reflection with zero optical distortion or waviness</td>
                </tr>
                <tr>
                  <th>Available Silhouettes</th>
                  <td>Pill / Capsule, Architectural Arch, Circular Round, and Rectangular</td>
                </tr>
                <tr>
                  <th>Sizing Options</th>
                  <td>Standard vanity sizes or custom fabricated made-to-measure for your vanity</td>
                </tr>
                <tr>
                  <th>Mounting System</th>
                  <td>Concealed heavy-duty wall bracket system for a clean floating aesthetic</td>
                </tr>
                <tr>
                  <th>Pricing</th>
                  <td>Quoted to your bespoke vanity size and silhouette</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Booking CTA Banner */}
      <section className="section">
        <div className="container">
          <div className="send-bathroom-banner">
            <div className="banner-content">
              <span className="eyebrow" style={{ color: 'var(--color-accent-on-dark)' }}>Custom Vanity Dimensions?</span>
              <h2 className="banner-title">Get Your Mirror Custom Sized During Your Site Visit</h2>
              <p className="banner-desc">
                Our technician measures your bathroom vanity width, backsplash tile lines, and wall clearances during the laser survey to produce a custom-fitted mirror.
              </p>
              <div className="banner-actions">
                <Link to="/quote" className="btn btn-accent btn-lg">Book Free Site Measurement</Link>
                <a
                  href="https://wa.me/919876543210?text=Hi%20BathCentric,%20I'd%20like%20to%20consult%20about%20custom%20bathroom%20mirrors."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-lg"
                >
                  Consult via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
