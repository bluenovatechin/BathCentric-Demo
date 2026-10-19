import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import Icon from '../components/Icon';
import { PageHeader } from '../components/Blocks';
import { FinishSwatch } from '../components/Swatches';
import WhatsAppForm, { TextField, ChoiceGroup } from '../components/WhatsAppForm';
import { brand, telHref, mailHref } from '../config';
import { enclosures, finishes, glasses, addOns, inr } from '../data/catalog';

const STAGES = ['New bathroom', 'Renovation', 'Existing bathroom'];

const toFields = (v) => ({
  Name: v.name,
  Mobile: v.phone,
  City: v.city,
  'Bathroom stage': v.stage,
  Enclosure: v.enclosure || 'Not sure',
  Finish: v.finish || 'Not sure',
  Glass: v.glass || 'Not sure',
  'Add-ons': v.addons.join(', '),
  'Approx. size': v.dimensions,
  Message: v.message,
});

export default function Quote() {
  const [params] = useSearchParams();
  const pre = enclosures.find((x) => x.slug === params.get('enclosure'));
  const initial = useMemo(
    () => ({ name: '', phone: '', city: '', stage: '', enclosure: pre ? pre.name : '', finish: '', glass: '', addons: [], dimensions: '', message: '' }),
    [pre]
  );

  return (
    <>
      <PageHeader crumbs={[['Request a Quote']]} kicker="Request a quote" no="01" title={<>Tell us about <em>your</em> shower</>}>
        Choose what you like. Your request opens in WhatsApp, ready to send with photos of your space.
      </PageHeader>

      <section className="section">
        <div className="wrap quote-grid">
          <WhatsAppForm
            key={initial.enclosure}
            formName="quote"
            title="I would like a quote for a shower enclosure."
            initial={initial}
            toFields={toFields}
            submitLabel="Send request on WhatsApp"
            render={({ v, errors, onChange, aria }) => (
              <>
                <div className="grid-3">
                  <TextField id="quote-name" label="Name" error={errors.name}>
                    <input id="quote-name" name="name" type="text" autoComplete="name" value={v.name} onChange={onChange} required {...aria('name')} />
                  </TextField>
                  <TextField id="quote-phone" label="Mobile" error={errors.phone}>
                    <input id="quote-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" value={v.phone} onChange={onChange} required {...aria('phone')} />
                  </TextField>
                  <TextField id="quote-city" label="City" error={errors.city}>
                    <input id="quote-city" name="city" type="text" autoComplete="address-level2" value={v.city} onChange={onChange} required {...aria('city')} />
                  </TextField>
                </div>
                <ChoiceGroup legend="Enclosure" name="enclosure" value={v.enclosure} onChange={onChange} options={enclosures.map((e) => ({ value: e.name, label: e.short }))} />
                <ChoiceGroup legend="Finish" name="finish" value={v.finish} onChange={onChange} options={finishes.map((f) => ({ value: f.name, label: `${f.name} · ${inr(f.price)}`, icon: <FinishSwatch id={f.id} size="xs" /> }))} />
                <ChoiceGroup legend="Glass" name="glass" value={v.glass} onChange={onChange} options={glasses.map((g) => ({ value: g.name, label: g.name.replace(' Glass', '') }))} />
                <ChoiceGroup legend="Add-ons" name="addons" multiple value={v.addons} onChange={onChange} options={addOns.map((a) => ({ value: a.name, label: a.name }))} />
                <ChoiceGroup legend="Bathroom" name="stage" value={v.stage} onChange={onChange} options={STAGES.map((s) => ({ value: s, label: s }))} />
                <div className="grid-2">
                  <TextField id="quote-dimensions" label="Approximate size" optional>
                    <input id="quote-dimensions" name="dimensions" type="text" placeholder="e.g. 4 ft × 7 ft" maxLength={60} value={v.dimensions} onChange={onChange} />
                  </TextField>
                  <TextField id="quote-message" label="Note" optional error={errors.message}>
                    <input id="quote-message" name="message" type="text" maxLength={300} value={v.message} onChange={onChange} {...aria('message')} />
                  </TextField>
                </div>
              </>
            )}
          />

          <aside className="quote-aside" aria-label="How it works">
            <h2 className="h3">How it works</h2>
            <ol className="steps-num" data-reveal="stagger">
              <li>Choose your enclosure, finish and glass.</li>
              <li>Send the request on WhatsApp and attach photos of your shower area.</li>
              <li>We measure and send your written quote.</li>
            </ol>
            {(brand.phone || brand.email) && (
              <ul className="contact-list" style={{ marginTop: 28 }}>
                {brand.phone && <li><a href={telHref}><Icon name="phone" /> {brand.phone}</a></li>}
                {brand.email && <li><a href={mailHref}><Icon name="mail" /> {brand.email}</a></li>}
              </ul>
            )}
          </aside>
        </div>
      </section>
    </>
  );
}
