import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import { PageHeader } from '../components/Blocks';
import WhatsAppForm, { TextField } from '../components/WhatsAppForm';
import { brand, telHref, mailHref } from '../config';
import { whatsappUrl } from '../lib/whatsapp';

const initial = { name: '', phone: '', city: '', message: '' };
const toFields = (v) => ({ Name: v.name, Mobile: v.phone, City: v.city, Message: v.message });

export default function Contact() {
  const details = [
    brand.whatsapp && { icon: 'chat', label: 'WhatsApp', node: <a href={whatsappUrl(`Hello ${brand.name},`)} target="_blank" rel="noopener noreferrer">Chat with us</a> },
    brand.phone && { icon: 'phone', label: 'Phone', node: <a href={telHref}>{brand.phone}</a> },
    brand.email && { icon: 'mail', label: 'Email', node: <a href={mailHref}>{brand.email}</a> },
    brand.address && { icon: 'pin', label: 'Studio', node: <span>{brand.address}</span> },
    brand.area && { icon: 'pin', label: 'Service area', node: <span>{brand.area}</span> },
    brand.hours && { icon: 'clock', label: 'Hours', node: <span>{brand.hours}</span> },
  ].filter(Boolean);

  return (
    <>
      <PageHeader crumbs={[['Contact']]} kicker="Contact" no="01" title={<>Let’s <em>talk</em></>}>
        Send a message and it opens in WhatsApp, ready to send.
      </PageHeader>

      <section className="section">
        <div className="wrap quote-grid">
          <WhatsAppForm
            formName="contact"
            title="I have a question about your shower enclosures."
            initial={initial}
            toFields={toFields}
            requireMessage
            render={({ v, errors, onChange, aria }) => (
              <>
                <div className="grid-3">
                  <TextField id="contact-name" label="Name" error={errors.name}>
                    <input id="contact-name" name="name" type="text" autoComplete="name" value={v.name} onChange={onChange} required {...aria('name')} />
                  </TextField>
                  <TextField id="contact-phone" label="Mobile" error={errors.phone}>
                    <input id="contact-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" value={v.phone} onChange={onChange} required {...aria('phone')} />
                  </TextField>
                  <TextField id="contact-city" label="City" error={errors.city}>
                    <input id="contact-city" name="city" type="text" autoComplete="address-level2" value={v.city} onChange={onChange} required {...aria('city')} />
                  </TextField>
                </div>
                <TextField id="contact-message" label="Message" error={errors.message}>
                  <textarea id="contact-message" name="message" rows={4} maxLength={1000} value={v.message} onChange={onChange} required {...aria('message')} />
                </TextField>
              </>
            )}
          />

          <aside className="quote-aside" aria-label="Contact details">
            <h2 className="h3">Reach us</h2>
            {details.length > 0 ? (
              <ul className="detail-list">
                {details.map((d) => <li key={d.label}><Icon name={d.icon} /><span><strong>{d.label}</strong>{d.node}</span></li>)}
              </ul>
            ) : (
              <p className="muted">Contact details will appear here.</p>
            )}
            <div className="info-card">
              <h3 className="h3">Want a price?</h3>
              <p className="muted">Choose your enclosure, finish and glass.</p>
              <Link to="/quote" className="btn btn-ink btn-sm">Request a Quote</Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
