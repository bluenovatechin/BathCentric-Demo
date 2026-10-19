import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import Photo from '../components/Photo';
import { FinishSwatch } from '../components/Swatches';
import { Label, Faq } from '../components/Blocks';
import { HeroSlider, Marquee, CollectionCards, GlassCompare, FinishShowcase } from '../components/Showcase';
import { processSteps, addOns, finishes, glasses, homeFaqs, inr, START_PRICE, GST_NOTE } from '../data/catalog';
import { brand } from '../config';
import { whatsappUrl } from '../lib/whatsapp';

const pad = (n) => String(n).padStart(2, '0');

export default function Home() {
  return (
    <>
      <HeroSlider>
        <p className="stage-kicker">Shower enclosures · Made to measure</p>
        <h1 className="stage-title">Reimagine your <em>shower</em> space.</h1>
        <p className="stage-lead">8mm Saint-Gobain glass. SS 304 fittings. Four finishes. From {inr(START_PRICE)}/sft.</p>
        <div className="actions">
          <Link to="/quote" className="btn btn-light">Request a Quote <Icon name="arrow" size={16} /></Link>
          <Link to="/shower-enclosures" className="link link-light">View the collection</Link>
        </div>
      </HeroSlider>

      {/* 01 · The standard, in numbers */}
      <section className="section-tight facts-band" aria-label="At a glance">
        <ul className="wrap facts" data-reveal="stagger">
          <li><strong><span data-count="8">8</span><small>mm</small></strong><span>Toughened Saint-Gobain glass</span></li>
          <li><strong>SS <span data-count="304">304</span></strong><span>Premium stainless steel fittings</span></li>
          <li><strong><span data-count="7">7</span><small>yrs</small></strong><span>Warranty on fittings</span></li>
          <li><strong><span data-count="3">3</span><small>yrs</small></strong><span>Glass breakage warranty</span></li>
        </ul>
      </section>

      {/* 02 · Collection */}
      <section className="section" aria-labelledby="collection-title">
        <div className="wrap">
          <div className="head head-split">
            <div>
              <Label no="01">The collection</Label>
              <h2 className="h2" id="collection-title" data-reveal="title">Four enclosures. <em>One</em> standard.</h2>
            </div>
            <Link to="/shower-enclosures" className="link" data-reveal="up">Compare all four</Link>
          </div>
          <CollectionCards />
        </div>
      </section>

      {/* 03 · Materials */}
      <section className="section section-paper" aria-labelledby="materials-title">
        <div className="wrap">
          <div className="head head-split">
            <div>
              <Label no="02">Materials</Label>
              <h2 className="h2" id="materials-title" data-reveal="title">Glass and steel, <em>your</em> way.</h2>
            </div>
            <Link to="/finishes-and-glass" className="link" data-reveal="up">All materials</Link>
          </div>
          <div className="mat">
            <div data-reveal="up">
              <GlassCompare />
              <p className="mat-cap"><strong>{glasses.map((g) => g.name.replace(' Glass', '')).join(' · ')}</strong> — 8mm toughened Saint-Gobain glass.</p>
            </div>
            <div data-reveal="up">
              <FinishShowcase />
            </div>
          </div>
        </div>
      </section>

      <Marquee items={['Single Panel', 'L-Type', 'Sliding', 'Swing', 'Saint-Gobain glass', 'SS 304 fittings', 'Chrome · Rose Gold · Matte Black · Gold']} />

      {/* 04 · Prices at a glance */}
      <section className="section" aria-labelledby="price-title">
        <div className="wrap">
          <div className="head head-split">
            <div>
              <Label no="03">Pricing</Label>
              <h2 className="h2" id="price-title" data-reveal="title">Clear <em>pricing.</em></h2>
            </div>
            <Link to="/pricing" className="link" data-reveal="up">Full price list</Link>
          </div>
          <div className="two">
            <div>
              <p className="label" style={{ marginBottom: 18 }}>Enclosures · per sft</p>
              <ul className="ledger" data-reveal="stagger">
                {finishes.map((f) => (
                  <li key={f.id}><h3 className="ledger-swatch"><FinishSwatch id={f.id} size="sm" />{f.name}</h3><span className="amt">{inr(f.price)}<small>/ sft*</small></span></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="label" style={{ marginBottom: 18 }}>Add-ons</p>
              <ul className="ledger" data-reveal="stagger">
                {addOns.map((a) => (
                  <li key={a.id}><h3>{a.name}</h3><span className="amt">{inr(a.price)}<small>/ {a.unit}*</small></span></li>
                ))}
              </ul>
            </div>
          </div>
          <p className="note">{GST_NOTE}</p>
        </div>
      </section>

      {/* 05 · Process */}
      <section className="section on-ink parallax-host" aria-labelledby="process-title">
        <div className="parallax-bg" data-parallax="0.08" aria-hidden="true"><Photo name="process-installation" alt="" sizes="100vw" fallback={null} /></div>
        <div className="wrap" style={{ position: 'relative' }}>
          <div className="head head-split">
            <div>
              <Label no="04">The process</Label>
              <h2 className="h2" id="process-title" data-reveal="title">Five steps to <em>installation.</em></h2>
            </div>
            <Link to="/how-it-works" className="link" data-reveal="up">How it works</Link>
          </div>
          <ol className="steps" data-reveal="stagger">
            {processSteps.map((s, i) => (
              <li className="step" key={s.id}><b>{pad(i + 1)}</b><h3>{s.title}</h3><p>{s.text}</p></li>
            ))}
          </ol>
        </div>
      </section>

      <Faq items={homeFaqs} no="05" />

      {/* CTA */}
      <section className="cta" aria-labelledby="cta-title">
        <div className="cta-media" data-parallax="0.06" aria-hidden="true"><Photo name="cta" alt="" sizes="100vw" fallback={null} /></div>
        <div className="wrap cta-inner on-ink">
          <Label>Private consultation</Label>
          <h2 className="display" id="cta-title" data-reveal="title">Let’s design <em>yours.</em></h2>
          <div className="actions" data-reveal="up">
            <Link to="/quote" className="btn btn-light">Request a Quote <Icon name="arrow" size={16} /></Link>
            {brand.whatsapp && <a href={whatsappUrl(`Hello ${brand.name}, I would like to discuss a shower enclosure.`)} className="link link-light" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>}
          </div>
        </div>
      </section>
    </>
  );
}
