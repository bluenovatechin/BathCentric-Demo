import { Link } from 'react-router-dom';
import Photo from '../components/Photo';
import { PageHeader, SectionHead, Label, CtaBand } from '../components/Blocks';
import { GlassCompare, FinishShowcase } from '../components/Showcase';
import { FinishSwatch } from '../components/Swatches';
import { finishes, glasses, fittings, fittingInfo, enclosures, whyChooseUs, answers, inr, GST_NOTE } from '../data/catalog';

const usedIn = (id) => enclosures.filter((e) => e.fittings.includes(id)).map((e) => e.short).join(' · ');
const design = whyChooseUs.find((w) => w.id === 'design').points[0];

export default function FinishesGlass() {
  return (
    <>
      <PageHeader crumbs={[['Materials']]} kicker="Materials" no="01" title={<>Glass, steel <em>&amp;</em> finish</>} answer={answers.materials}>
        {design}.
      </PageHeader>

      <section className="section" aria-labelledby="finish-title">
        <div className="wrap two" style={{ alignItems: 'center' }}>
          <FinishShowcase />
          <div>
            <Label no="02">A variety of finishes</Label>
            <h2 className="h2" data-reveal="title" id="finish-title" style={{ margin: '22px 0 18px' }}>Four <em>finishes.</em></h2>
            <p className="lead">All fittings on your enclosure come in one finish, so they match your taps and accessories.</p>
            <ul className="ledger" data-reveal="stagger" style={{ marginTop: 32 }}>
              {finishes.map((f) => (
                <li key={f.id}><h3 style={{ display: 'flex', alignItems: 'center', gap: 14 }}><FinishSwatch id={f.id} size="sm" />{f.name}</h3><span className="amt">{inr(f.price)}<small>/ sft*</small></span></li>
              ))}
            </ul>
            <p className="note">{GST_NOTE}</p>
          </div>
        </div>
      </section>

      <section className="section section-paper" aria-labelledby="glass-title">
        <div className="wrap two" style={{ alignItems: 'center' }}>
          <div>
            <Label no="03">Our collection of glass</Label>
            <h2 className="h2" data-reveal="title" id="glass-title" style={{ margin: '22px 0 18px' }}>Saint-Gobain, <em>8mm</em> toughened.</h2>
            <ul className="glass-list" data-reveal="stagger">
              {glasses.map((g) => (
                <li key={g.id}><strong>{g.name}</strong><em>{g.privacy}</em><p>{g.text} Best for: {g.bestFor.toLowerCase()}.</p></li>
              ))}
            </ul>
            <table className="spec" data-reveal="stagger" style={{ marginTop: 36 }}>
              <tbody>
                <tr><th scope="row">Glass</th><td>Saint-Gobain</td></tr>
                <tr><th scope="row">Thickness</th><td>8mm</td></tr>
                <tr><th scope="row">Treatment</th><td>Toughened glass</td></tr>
                <tr><th scope="row">Types</th><td>Clear, frosted, fluted (tinted as an add-on)</td></tr>
                <tr><th scope="row">Warranty</th><td>3 year breakage warranty</td></tr>
              </tbody>
            </table>
          </div>
          <GlassCompare />
        </div>
      </section>

      <section className="section" aria-labelledby="parts-title">
        <div className="wrap">
          <SectionHead no="04" kicker="An ensemble of fittings" title={<>The <em>components.</em></>} split id="parts-title">
            SS 304 grade premium stainless steel. Our stainless steel fittings come with a 7 year warranty.
          </SectionHead>
          <ul className="parts-grid" data-reveal="stagger">
            {Object.keys(fittings).map((id) => (
              <li className="part" key={id}>
                <div className="figure-frame"><Photo name={`fitting-${id}`} alt={`${fittings[id]}, SS 304 shower enclosure fitting`} sizes="(min-width: 900px) 20vw, 50vw" /></div>
                <h3>{fittings[id]}</h3>
                <p>{fittingInfo[id]}</p>
                <p className="used">{usedIn(id)}</p>
              </li>
            ))}
          </ul>
          <div className="actions" style={{ marginTop: 40 }}><Link to="/add-ons" className="link">Add-ons for your glass</Link></div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
