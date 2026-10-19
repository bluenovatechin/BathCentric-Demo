import { Link } from 'react-router-dom';
import { FinishSwatch } from '../components/Swatches';
import { PageHeader, SectionHead, Label, CtaBand, Faq } from '../components/Blocks';
import { finishes, addOns, enclosures, faqs, answers, inr, GST_NOTE } from '../data/catalog';

export default function Pricing() {
  return (
    <>
      <PageHeader crumbs={[['Pricing']]} kicker="Price list 2026" no="01" title={<>Clear, simple <em>pricing</em></>} answer={answers.pricing} />

      <section className="section" aria-labelledby="rates-title">
        <div className="wrap">
          <SectionHead no="02" kicker="Enclosure rates" title={<>Price per <em>sft.</em></>} split id="rates-title">
            One rate for {enclosures.map((e) => e.short).join(', ')} enclosures, set by the finish of your fittings.
          </SectionHead>
          <ul className="rate-cards" data-reveal="stagger">
            {finishes.map((f) => (
              <li className="rate-card" key={f.id}>
                <FinishSwatch id={f.id} size="sm" />
                <h3>{f.name}</h3>
                <p className="price-num">{inr(f.price)}</p>
                <small>per sft*</small>
              </li>
            ))}
          </ul>
          <p className="note">{GST_NOTE}</p>
        </div>
      </section>

      <section className="section section-paper" aria-labelledby="addon-title">
        <div className="wrap two">
          <div>
            <Label no="03">Add-ons</Label>
            <h2 className="h2" data-reveal="title" id="addon-title" style={{ margin: '22px 0 18px' }}>Add-on <em>prices.</em></h2>
            <ul className="ledger" data-reveal="stagger">
              {addOns.map((a) => (
                <li key={a.id}><h3>{a.name}</h3><span className="amt">{inr(a.price)}<small>/ {a.unit}*</small></span><p>{a.text}</p></li>
              ))}
            </ul>
            <p className="note">{GST_NOTE}</p>
          </div>
          <div>
            <Label no="04">Your quote</Label>
            <h2 className="h2" data-reveal="title" style={{ margin: '22px 0 18px' }}>How it is <em>worked out.</em></h2>
            <ol className="steps-num" data-reveal="stagger">
              <li>We measure your shower area.</li>
              <li>The area in sft is multiplied by the rate for your chosen finish.</li>
              <li>Any add-ons you pick are added at the rates shown.</li>
              <li>GST is added at the prevailing rate on the date of invoicing.</li>
            </ol>
            <p className="muted" style={{ margin: '20px 0 28px' }}>Your written quotation confirms the final price before any work starts.</p>
            <div className="actions">
              <Link to="/quote" className="btn btn-ink btn-sm">Request a Quote</Link>
              <Link to="/shower-enclosures" className="link">Compare enclosures</Link>
            </div>
          </div>
        </div>
      </section>

      <Faq items={faqs} no="05" />
      <CtaBand />
    </>
  );
}
