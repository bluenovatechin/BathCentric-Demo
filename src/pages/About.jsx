import { PageHeader, SectionHead, Figure, CtaBand, Faq, Label } from '../components/Blocks';
import { about, whyChooseUs, benefits, faqs } from '../data/catalog';

const pad = (n) => String(n).padStart(2, '0');

export default function About() {
  return (
    <>
      <PageHeader crumbs={[['Studio']]} kicker="The studio" no="01" title={<>Shower enclosures, <em>made to measure</em></>} answer={about.split('. ').slice(0, 2).join('. ') + '.'} />

      <section className="section" aria-labelledby="story-title">
        <div className="wrap statement">
          <Figure name="about" alt="Frameless glass shower enclosure with gold fittings" sizes="(min-width: 1000px) 35vw, 100vw" caption={<><span>Wet & dry</span><span>SS 304 · Saint-Gobain</span></>} />
          <div>
            <Label no="02">What we do</Label>
            <h2 className="sr-only" id="story-title">What we do</h2>
            <blockquote data-reveal="up" style={{ marginTop: 28 }}>{about}</blockquote>
            <ol className="benefits" data-reveal="stagger">
              {benefits.map((b, i) => <li key={b.title}><b>{pad(i + 1)}</b><strong>{b.title}</strong><p>{b.text}</p></li>)}
            </ol>
          </div>
        </div>
      </section>

      <section className="section section-paper" aria-labelledby="why-title">
        <div className="wrap">
          <SectionHead no="03" kicker="Why choose us" title={<>Design, quality <em>&amp;</em> warranty.</>} id="why-title" />
          <div className="pillars" data-reveal="stagger">
            {whyChooseUs.map((w, i) => (
              <article className="pillar" key={w.id}>
                <p className="ref">{pad(i + 1)}</p>
                <h3 className="h3">{w.title}</h3>
                <ul>{w.points.map((p) => <li key={p}>{p}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section on-ink" aria-labelledby="standard-title">
        <div className="wrap">
          <SectionHead no="04" kicker="The standard" title={<>Built to <em>last.</em></>} id="standard-title" />
          <ul className="numbers" data-reveal="stagger">
            <li><strong>8<small>mm</small></strong><span>Toughened Saint-Gobain glass</span></li>
            <li><strong>304</strong><span>SS 304 grade premium stainless steel fittings</span></li>
            <li><strong>7<small>yrs</small></strong><span>Warranty on stainless steel fittings</span></li>
            <li><strong>3<small>yrs</small></strong><span>Glass breakage warranty</span></li>
          </ul>
        </div>
      </section>

      <Faq items={faqs} no="05" />
      <CtaBand />
    </>
  );
}
