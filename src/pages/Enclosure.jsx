import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import Photo from '../components/Photo';
import EnclosureDiagram from '../components/EnclosureDiagram';
import { FinishSwatch } from '../components/Swatches';
import { SectionHead, Figure, CtaBand, Faq, Label } from '../components/Blocks';
import { GlassCompare } from '../components/Showcase';
import { enclosures, fittings, fittingInfo, finishes, glasses, addOns, productFaqs, inr, GST_NOTE } from '../data/catalog';

const pad = (n) => String(n).padStart(2, '0');

export default function Enclosure({ slug }) {
  const i = enclosures.findIndex((x) => x.slug === slug);
  const e = enclosures[i];
  const ref = `BC-${pad(i + 1)}`;
  const others = enclosures.filter((x) => x.slug !== slug);

  return (
    <>
      <section className="product">
        <div className="wrap">
          <nav aria-label="Breadcrumb">
            <ol className="crumbs">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shower-enclosures">Collection</Link></li>
              <li><span aria-current="page">{e.short}</span></li>
            </ol>
          </nav>
          <div className="product-grid">
            <Figure name={e.image} alt={`${e.name} in 8mm toughened glass with SS 304 fittings`} sizes="(min-width: 1000px) 55vw, 100vw" priority fallback={<EnclosureDiagram enclosure={e} showNumbers={false} />} caption={<><span>Ref. {ref}</span><span>{e.operation}</span></>} />
            <div>
              <p className="ref">Ref. {ref} · {e.badge}</p>
              <h1 className="h1">{e.short} <em>Shower Enclosure</em></h1>
              <div className="answer">
                <p className="answer-h">In short</p>
                <p>{e.summary} From {inr(697)} per sft in Chrome; {inr(797)} per sft in Rose Gold, Matte Black or Gold.</p>
              </div>
              <p className="lead" style={{ marginTop: 28 }}>{e.description}</p>
              <div className="rates">
                <p className="rates-h"><span>Fitting finish</span><span>Price per sft*</span></p>
                <ul>
                  {finishes.map((f) => (
                    <li key={f.id}><span><FinishSwatch id={f.id} size="sm" />{f.name}</span><span className="price-num">{inr(f.price)}</span></li>
                  ))}
                </ul>
                <p className="note">{GST_NOTE}</p>
              </div>
              <Link to={`/quote?enclosure=${e.slug}`} className="btn btn-ink btn-block">Request a Quote <Icon name="arrow" size={16} /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section blueprint on-ink" aria-labelledby="parts-title">
        <div className="wrap">
          <SectionHead no="01" kicker="An ensemble of fittings" title={<>The <em>anatomy</em> of the {e.short}.</>} split id="parts-title">
            Every fitting is SS 304 grade premium stainless steel, finished in the colour you choose.
          </SectionHead>
          <div className="blueprint-grid">
            <div className="blueprint-sheet">
              <EnclosureDiagram enclosure={e} />
              <span className="sheet-tag">Sheet {ref} · Not to scale</span>
            </div>
            <ol className="parts" data-reveal="stagger">
              {e.fittings.map((f, n) => (
                <li key={f}>
                  <span className="n" aria-hidden="true">{n + 1}</span>
                  <span className="pic"><Photo name={`fitting-${f}`} alt="" sizes="64px" fallback={null} /></span>
                  <span><strong>{fittings[f]}</strong><small>{fittingInfo[f]}</small></span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="spec-title">
        <div className="wrap two">
          <div>
            <Label no="02">Specification</Label>
            <h2 className="h2" data-reveal="title" id="spec-title" style={{ margin: '22px 0 32px' }}>Specification <em>sheet.</em></h2>
            <table className="spec" data-reveal="stagger">
              <tbody>
                <tr><th scope="row">Reference</th><td>{ref} · {e.name}</td></tr>
                <tr><th scope="row">How it opens</th><td>{e.operation}</td></tr>
                <tr><th scope="row">Glass</th><td>8mm toughened Saint-Gobain glass</td></tr>
                <tr><th scope="row">Glass types</th><td>{glasses.map((g) => g.name).join(', ')}</td></tr>
                <tr><th scope="row">Fittings</th><td>SS 304 grade premium stainless steel</td></tr>
                <tr><th scope="row">Finishes</th><td>{finishes.map((f) => f.name).join(', ')}</td></tr>
                <tr><th scope="row">Size</th><td>Made to your measured shower area</td></tr>
                <tr><th scope="row">Warranty</th><td>7 years on stainless steel fittings · 3 year glass breakage</td></tr>
              </tbody>
            </table>
          </div>
          <div>
            <Label no="03">Best for</Label>
            <ul className="ticks" data-reveal="stagger" style={{ marginTop: 26 }}>{e.bestFor.map((b) => <li key={b}>{b}</li>)}</ul>
            <div className="info-card">
              <h3 className="h3">What is included</h3>
              <ul className="ticks" data-reveal="stagger">
                <li>Measurement of your shower area</li>
                <li>8mm toughened glass cut to your measurements</li>
                <li>All SS 304 fittings in your chosen finish</li>
                <li>Installation, alignment and sealing by our team</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-paper" aria-labelledby="glass-title">
        <div className="wrap two" style={{ alignItems: 'center' }}>
          <div>
            <Label no="04">Our collection of glass</Label>
            <h2 className="h2" data-reveal="title" id="glass-title" style={{ margin: '22px 0 18px' }}>Clear, frosted <em>or</em> fluted.</h2>
            <ul className="glass-list" data-reveal="stagger">
              {glasses.map((g) => <li key={g.id}><strong>{g.name}</strong><em>{g.privacy}</em><p>{g.text}</p></li>)}
            </ul>
            <h3 className="h3" style={{ marginTop: 40 }}>Add-ons</h3>
            <ul className="ledger" data-reveal="stagger" style={{ marginTop: 16 }}>
              {addOns.map((a) => <li key={a.id}><h3>{a.name}</h3><span className="amt">{inr(a.price)}<small>/ {a.unit}*</small></span></li>)}
            </ul>
            <p className="note">{GST_NOTE}</p>
          </div>
          <GlassCompare />
        </div>
      </section>

      <Faq items={productFaqs(e)} no="05" title={<>The {e.short}, <em>answered.</em></>} />

      <section className="section section-sand" aria-labelledby="more-title">
        <div className="wrap">
          <SectionHead no="06" kicker="The collection" title={<>More <em>enclosures.</em></>} id="more-title" />
          <div className="addon-grid" data-reveal="stagger">
            {others.map((o) => (
              <Link key={o.slug} to={o.path} className="addon-card">
                <div className="figure-frame"><Photo name={o.image} alt="" sizes="(min-width: 900px) 33vw, 100vw" fallback={<EnclosureDiagram enclosure={o} showNumbers={false} />} /></div>
                <h2 style={{ marginTop: 14 }}>{o.short}</h2>
                <p>{o.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
