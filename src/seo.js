// Titles, descriptions and schema.org data for every page. Used at build time (prerender writes
// them into each HTML file) and in the browser (updated on client-side navigation).
import { brand, SITE_URL, absUrl, integrations } from './config';
import { enclosures, finishes, glasses, faqs, homeFaqs, productFaqs, guideFaqs, processSteps, inr, START_PRICE, tagline } from './data/catalog';
import photos from './generated/images.json';

const MAX_PRICE = Math.max(...finishes.map((f) => f.price));
const finishList = finishes.map((f) => f.name).join(', ');

export const pages = {
  '/': {
    title: `BathCentric | Shower Enclosures | ${tagline}`,
    description: `Single Panel, L-Type, Sliding and Swing shower enclosures in 8mm toughened Saint-Gobain glass with SS 304 fittings. From ${inr(START_PRICE)}/sft. 7 year fittings warranty.`,
    faqItems: homeFaqs,
  },
  '/shower-enclosures': {
    title: 'Shower Enclosures: Single Panel, L-Type, Sliding & Swing | BathCentric',
    description: `Explore the BathCentric shower enclosure collection and the ensemble of SS 304 fittings for each type. From ${inr(START_PRICE)}/sft + GST.`,
    crumbs: [['Shower Enclosures']],
    itemList: true,
  },
  ...Object.fromEntries(
    enclosures.map((e) => [
      e.path,
      {
        title: `${e.name} | From ${inr(START_PRICE)}/sft | BathCentric`,
        description: `${e.name} in 8mm toughened Saint-Gobain glass with SS 304 fittings in ${finishList}. Clear, frosted or fluted glass. 7 year fittings warranty.`,
        crumbs: [['Collection', '/shower-enclosures'], [e.short]],
        enclosure: e,
        faqItems: productFaqs(e),
      },
    ])
  ),
  '/finishes-and-glass': {
    title: `Materials: Saint-Gobain Glass, SS 304 Fittings & Finishes | BathCentric`,
    description: `Fittings in Chrome (${inr(697)}/sft), Rose Gold, Matte Black and Gold (${inr(797)}/sft). Clear, frosted and fluted 8mm toughened Saint-Gobain glass.`,
    crumbs: [['Materials']],
  },
  '/add-ons': {
    title: 'Shower Enclosure Add-ons: Stickering, Nanocoating, Tinted, Frosting | BathCentric',
    description: `Add-ons for your shower enclosure: Stickering ${inr(80)}/sft, Nanocoating ${inr(60)}/sft, Tinted ${inr(95)}/sft, Frosting ${inr(80)}/sft, Granite Threshold ${inr(3000)}/bathroom.`,
    crumbs: [['Materials', '/finishes-and-glass'], ['Add-ons']],
  },
  '/about': {
    title: 'About BathCentric Shower Enclosures | Why Choose Us',
    description: 'Design, quality and warranty: SS 304 stainless steel fittings, Saint-Gobain 8mm toughened glass, 7 year fittings warranty and 3 year glass breakage warranty.',
    crumbs: [['Studio']],
    faqItems: faqs,
  },
  '/pricing': {
    title: `Shower Enclosure Price List 2026: From ${inr(START_PRICE)}/sft | BathCentric`,
    description: `Price per sft by fitting finish (Chrome ${inr(697)}, Rose Gold, Matte Black and Gold ${inr(797)}) and add-on prices, plus how your quote is worked out.`,
    crumbs: [['Pricing']],
    faqItems: faqs,
  },
  '/how-it-works': {
    title: 'How It Works: Enquiry to Installation | BathCentric',
    description: 'Five steps to your shower enclosure: enquiry, measurement, quotation, manufacturing and installation.',
    crumbs: [['Process']],
    howTo: true,
  },
  '/buying-guide': {
    title: 'How to Choose a Shower Enclosure: Buying Guide 2026 | BathCentric',
    description: 'Choose the right shower enclosure: type for your layout, clear, frosted or fluted glass, fitting finish and add-ons, with prices per sft.',
    crumbs: [['Buying Guide']],
    article: true,
    faqItems: guideFaqs,
  },
  '/gallery': {
    title: 'Shower Enclosure Gallery | BathCentric',
    description: 'Single Panel, L-Type, Sliding and Swing shower enclosures in clear, frosted and fluted glass with chrome, rose gold, matte black and gold fittings.',
    crumbs: [['Gallery']],
  },
  '/contact': {
    title: 'Contact BathCentric | Shower Enclosures',
    description: 'Get in touch with BathCentric about a shower enclosure for your bathroom.',
    crumbs: [['Contact']],
  },
  '/quote': {
    title: 'Get a Quote for Your Shower Enclosure | BathCentric',
    description: 'Tell us about your bathroom and choose your enclosure, finish, glass and add-ons. We will get back to you with a quote.',
    crumbs: [['Get a Quote']],
  },
  '/privacy-policy': {
    title: 'Privacy Policy | BathCentric',
    description: 'How BathCentric collects, uses and protects the information you share on this website.',
    crumbs: [['Privacy Policy']],
  },
  '/terms': {
    title: 'Terms & Conditions | BathCentric',
    description: 'Terms for using the BathCentric website and for quotations.',
    crumbs: [['Terms & Conditions']],
  },
};

export const notFound = {
  title: 'Page Not Found | BathCentric',
  description: 'This page does not exist. Explore BathCentric shower enclosures or get a quote.',
  noindex: true,
};

export const metaFor = (path) => pages[path] || notFound;

function schema(path, meta) {
  const org = `${SITE_URL}/#organization`;
  const url = absUrl(path);
  const graph = [
    {
      '@type': 'Organization',
      '@id': org,
      name: brand.name,
      url: `${SITE_URL}/`,
      logo: absUrl('/brand/logo-512.png'),
      slogan: tagline,
      ...(brand.phone ? { telephone: brand.phone } : {}),
      ...(brand.email ? { email: brand.email } : {}),
    },
    { '@type': 'WebSite', '@id': `${SITE_URL}/#website`, url: `${SITE_URL}/`, name: brand.name, publisher: { '@id': org }, inLanguage: 'en-IN' },
    { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: meta.title, description: meta.description, isPartOf: { '@id': `${SITE_URL}/#website` }, inLanguage: 'en-IN' },
  ];
  if (meta.crumbs) {
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: [['Home', '/'], ...meta.crumbs].map(([name, href], i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name,
        item: absUrl(href || path),
      })),
    });
  }
  if (meta.enclosure) {
    const e = meta.enclosure;
    graph.push({
      '@type': 'Product',
      name: e.name,
      ...(photos[e.image] ? { image: absUrl(`/img/${e.image}.jpg`) } : {}),
      category: 'Shower Enclosures',
      brand: { '@type': 'Brand', name: brand.name },
      description: meta.description,
      material: 'SS 304 grade stainless steel fittings, 8mm toughened Saint-Gobain glass',
      additionalProperty: [
        { '@type': 'PropertyValue', name: 'Glass', value: glasses.map((g) => g.name).join(', ') },
        { '@type': 'PropertyValue', name: 'Finishes', value: finishList },
        { '@type': 'PropertyValue', name: 'Fittings warranty', value: '7 years' },
        { '@type': 'PropertyValue', name: 'Glass breakage warranty', value: '3 years' },
      ],
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'INR',
        lowPrice: START_PRICE,
        highPrice: MAX_PRICE,
        offerCount: finishes.length,
        offers: finishes.map((f) => ({
          '@type': 'Offer',
          name: `${f.name} finish`,
          price: f.price,
          priceCurrency: 'INR',
          priceSpecification: { '@type': 'UnitPriceSpecification', price: f.price, priceCurrency: 'INR', unitText: 'per sq ft', valueAddedTaxIncluded: false },
        })),
      },
    });
  }
  if (meta.faqItems) {
    graph.push({ '@type': 'FAQPage', mainEntity: meta.faqItems.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) });
  }
  if (meta.itemList) {
    graph.push({
      '@type': 'ItemList',
      name: 'BathCentric shower enclosures',
      itemListElement: enclosures.map((e, i) => ({ '@type': 'ListItem', position: i + 1, name: e.name, url: absUrl(e.path) })),
    });
  }
  if (meta.howTo) {
    graph.push({
      '@type': 'HowTo',
      name: 'How a BathCentric shower enclosure is made and installed',
      step: processSteps.map((st, i) => ({ '@type': 'HowToStep', position: i + 1, name: st.title, text: st.detail })),
    });
  }
  if (meta.article) {
    graph.push({
      '@type': 'Article',
      headline: meta.title,
      description: meta.description,
      author: { '@id': org },
      publisher: { '@id': org },
      datePublished: '2026-10-19',
      dateModified: '2026-10-19',
      mainEntityOfPage: url,
    });
  }
  return { '@context': 'https://schema.org', '@graph': graph };
}

function tags(path, meta) {
  const canonical = absUrl(path);
  const image = absUrl('/brand/og-image.jpg');
  return {
    title: meta.title,
    canonical,
    metas: [
      ['name', 'description', meta.description],
      ['name', 'robots', meta.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large'],
      ['property', 'og:type', 'website'],
      ['property', 'og:site_name', brand.name],
      ['property', 'og:locale', 'en_IN'],
      ['property', 'og:title', meta.title],
      ['property', 'og:description', meta.description],
      ['property', 'og:url', canonical],
      ['property', 'og:image', image],
      ['property', 'og:image:width', '1200'],
      ['property', 'og:image:height', '630'],
      ['property', 'og:image:alt', `${brand.name}: ${tagline}`],
      ['name', 'twitter:card', 'summary_large_image'],
      ['name', 'twitter:title', meta.title],
      ['name', 'twitter:description', meta.description],
      ['name', 'twitter:image', image],
    ],
    schema: meta.noindex ? null : schema(path, meta),
  };
}

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export function headHtml(path, meta) {
  const t = tags(path, meta);
  return [
    `<title>${esc(t.title)}</title>`,
    ...t.metas.map(([a, k, v]) => `<meta ${a}="${k}" content="${esc(v)}" data-seo>`),
    meta.noindex ? '' : `<link rel="canonical" href="${esc(t.canonical)}" data-seo>`,
    integrations.googleVerification ? `<meta name="google-site-verification" content="${esc(integrations.googleVerification)}">` : '',
    t.schema ? `<script type="application/ld+json" data-seo>${JSON.stringify(t.schema).replace(/</g, '\\u003c')}</script>` : '',
  ]
    .filter(Boolean)
    .join('\n    ');
}

export function applyHead(path, meta) {
  const t = tags(path, meta);
  document.title = t.title;
  document.head.querySelectorAll('[data-seo]').forEach((n) => n.remove());
  const add = (el) => {
    el.setAttribute('data-seo', '');
    document.head.appendChild(el);
  };
  t.metas.forEach(([a, k, v]) => {
    const m = document.createElement('meta');
    m.setAttribute(a, k);
    m.setAttribute('content', v);
    add(m);
  });
  if (!meta.noindex) {
    const l = document.createElement('link');
    l.rel = 'canonical';
    l.href = t.canonical;
    add(l);
  }
  if (t.schema) {
    const s = document.createElement('script');
    s.type = 'application/ld+json';
    s.textContent = JSON.stringify(t.schema);
    add(s);
  }
}
