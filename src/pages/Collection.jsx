import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import EnclosureDiagram from '../components/EnclosureDiagram';
import { PageHeader, SectionHead, Figure, CtaBand, Label } from '../components/Blocks';
import { Matcher } from '../components/Showcase';
import { enclosures, fittings, answers, inr, START_PRICE, GST_NOTE } from '../data/catalog';

const pad = (n) => String(n).padStart(2, '0');

export default function Collection() {
  return (
    <>
      <PageHeader crumbs={[['Shower Enclosures']]} kicker="The collection" no="01" title={<>Shower <em>enclosures</em></>} answer={answers.collection} />

      {enclosures.map((e, i) => (
        <section key={e.slug} className={`section ${i % 2 ? 'section-paper' : ''}`} aria-labelledby={`enc-${e.slug}`}>
          <div className="wrap two" style={{ alignItems: 'center' }}>
            <div style={{ order: i % 2 ? 2 : 0 }}>
              <Figure name={e.image} alt={e.name} sizes="(min-width: 1000px) 45vw, 100vw" fallback={<EnclosureDiagram enclosure={e} showNumbers={false} />} caption={<><span>No. {pad(i + 1)}</span><span>{e.operation}</span></>} />
            </div>
            <div>
              <Label no={pad(i + 1)}>{e.badge}</Label>
              <h2 className="h2" data-reveal="title" id={`enc-${e.slug}`} style={{ margin: '22px 0 18px' }}>{e.name}</h2>
              <p className="lead">{e.description}</p>
              <ul className="ticks" data-reveal="stagger">{e.bestFor.map((b) => <li key={b}>{b}</li>)}</ul>
              <p className="muted" style={{ marginBottom: 28 }}>From <span className="price-num" style={{ fontSize: '1.6rem' }}>{inr(START_PRICE)}</span> / sft*</p>
              <div className="actions">
                <Link to={e.path} className="btn btn-ink btn-sm">View the {e.short} <Icon name="arrow" size={14} /></Link>
                <Link to={`/quote?enclosure=${e.slug}`} className="link">Request a quote</Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="section section-sand" aria-labelledby="fit-title">
        <div className="wrap">
          <SectionHead no="02" kicker="Find your fit" title={<>Which suits <em>your</em> bathroom?</>} id="fit-title" />
          <Matcher />
        </div>
      </section>

      <section className="section on-ink" aria-labelledby="compare-title" style={{ background: 'var(--ink)' }}>
        <div className="wrap">
          <SectionHead no="03" kicker="Side by side" title={<>Compare the <em>four.</em></>} id="compare-title" />
          <div className="table-wrap" role="region" aria-label="Enclosure comparison" tabIndex={0} style={{ borderColor: 'var(--on-ink)' }}>
            <table className="table" style={{ color: 'var(--on-ink)' }}>
              <thead>
                <tr><th scope="col"><span className="sr-only">Feature</span></th>{enclosures.map((e) => <th scope="col" key={e.slug}>{e.short}</th>)}</tr>
              </thead>
              <tbody>
                {[
                  ['How it opens', (e) => e.operation],
                  ['Best for', (e) => e.bestFor[0]],
                  ['Glass', () => '8mm toughened Saint-Gobain · clear, frosted or fluted'],
                  ['Fittings', (e) => e.fittings.map((f) => fittings[f]).join(', ')],
                  ['Price per sft*', () => `${inr(697)} Chrome · ${inr(797)} other finishes`],
                ].map(([label, get]) => (
                  <tr key={label} style={{ borderColor: 'var(--line-ink)' }}>
                    <th scope="row" style={{ color: 'var(--on-ink-2)', borderColor: 'var(--line-ink)' }}>{label}</th>
                    {enclosures.map((e) => <td key={e.slug} style={{ borderColor: 'var(--line-ink)' }}>{get(e)}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="note" style={{ color: 'var(--on-ink-2)' }}>{GST_NOTE}</p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
