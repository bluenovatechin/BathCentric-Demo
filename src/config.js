// Deployment settings and business contact details. All values come from VITE_* environment
// variables (see .env.example). Contact details are not part of the catalogue, so anything left
// empty is simply not shown on the site.
const env = import.meta.env;

export const SITE_URL = String(env.VITE_SITE_URL || 'https://bluenovatechin.github.io/BathCentric-Demo').replace(/\/+$/, '');
export const BASE = env.BASE_URL || '/';

export const brand = {
  name: 'BathCentric',
  phone: env.VITE_PHONE || '', // shown as written, e.g. "+91 90000 00000"
  whatsapp: String(env.VITE_WHATSAPP || '').replace(/\D/g, ''), // digits with country code, e.g. 919000000000
  email: env.VITE_EMAIL || '',
  address: env.VITE_ADDRESS || '', // showroom / office address
  area: env.VITE_SERVICE_AREA || '', // e.g. "Ahmedabad and Gandhinagar"
  hours: env.VITE_HOURS || '', // e.g. "Mon–Sat, 10 am – 7 pm"
};

export const integrations = {
  gaId: env.VITE_GA_ID || '', // GA4, loaded only after cookie consent
  googleVerification: env.VITE_GOOGLE_SITE_VERIFICATION || '',
};

export const asset = (p) => `${BASE}${String(p).replace(/^\/+/, '')}`;
export const absUrl = (p = '/') => SITE_URL + (p.startsWith('/') ? p : `/${p}`);
export const telHref = brand.phone ? `tel:${brand.phone.replace(/[^\d+]/g, '')}` : '';
export const mailHref = brand.email ? `mailto:${brand.email}` : '';
export const waHref = (text = '') =>
  brand.whatsapp ? `https://wa.me/${brand.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}` : '';
