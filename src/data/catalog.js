// Product facts (types, fittings, finishes, prices, glass, add-ons, quality, warranty) come from
// Catalogue 2026. Descriptions, benefits, process and FAQ wording were written for the website.
// Contact details and company names printed in the catalogue are intentionally not used.

export const tagline = 'Reimagine Your Shower Space';

export const about =
  'Shower enclosures have grown to be a vital element in any bathroom. It not just gives the bathroom a premium look and feel but also separates the wet and the dry area. Doing this makes cleaning easier, the space remains more hygienic, and it reduces the risk of bathroom users slipping.';

export const GST_NOTE = '*Additional GST applies at the prevailing rates on the date of invoicing.';

export const whyChooseUs = [
  {
    id: 'design',
    title: 'Design',
    points: [
      'Our shower enclosures feature a sleek and elegant design that comes in a variety of vivid colored fittings to blend seamlessly into the bathroom',
    ],
  },
  {
    id: 'quality',
    title: 'Quality',
    points: ['SS 304 grade premium stainless steel fittings', 'Saint-Gobain glass', '8mm toughened glass'],
  },
  {
    id: 'warranty',
    title: 'Warranty',
    points: ['Our stainless steel fittings come with a 7 year warranty', 'Glasses come with a 3 year breakage warranty'],
  },
];

export const warranties = [
  { years: 7, label: 'Year warranty', on: 'Stainless steel fittings' },
  { years: 3, label: 'Year warranty', on: 'Glass breakage' },
];

export const finishes = [
  { id: 'chrome', name: 'Chrome', price: 697 },
  { id: 'rose-gold', name: 'Rose Gold', price: 797 },
  { id: 'matte-black', name: 'Matte Black', price: 797 },
  { id: 'gold', name: 'Gold', price: 797 },
];

export const glasses = [
  { id: 'clear', name: 'Clear Glass', privacy: 'Open', text: 'Fully transparent toughened glass. Keeps the bathroom bright and open, and shows off your tiles.', bestFor: 'Making a small bathroom look larger' },
  { id: 'frosted', name: 'Frosted Glass', privacy: 'Full privacy', text: 'A soft, translucent surface that lets light through while hiding the view into the shower.', bestFor: 'Shared and family bathrooms' },
  { id: 'fluted', name: 'Fluted Glass', privacy: 'Partial privacy', text: 'Vertical ribbed glass that blurs what is behind it while keeping a light, textured look.', bestFor: 'A designer look with some privacy' },
];

export const addOns = [
  { id: 'stickering', name: 'Stickering', price: 80, unit: 'sft', text: 'Decorative or privacy film applied to the glass, such as a frosted band at eye level.' },
  { id: 'nanocoating', name: 'Nanocoating', price: 60, unit: 'sft', text: 'A water-repellent coating that helps water run off the glass and makes cleaning easier.' },
  { id: 'tinted', name: 'Tinted', price: 95, unit: 'sft', text: 'Tinted glass in place of clear for a warmer or moodier look.' },
  { id: 'frosting', name: 'Frosting', price: 80, unit: 'sft', text: 'A frosted finish on the glass for privacy while still letting light through.' },
  { id: 'granite-threshold', name: 'Granite Threshold', price: 3000, unit: 'bathroom', text: 'A granite strip at the shower entry that helps keep water inside the wet area.' },
];

export const fittings = {
  'support-rod': 'Support Rod',
  'rod-to-glass': 'Rod to Glass Connector',
  'wall-to-rod': 'Wall to Rod Connector',
  'l-connector': 'L-Connector',
  'u-connector': 'U-Connector',
  'door-hinge': 'Door Hinge',
  'handle-towel-rod': 'Door Handle / Towel Rod',
  'door-handle': 'Door Handle',
  'sliding-wheel': 'Sliding Wheel',
  'floor-guide': 'Floor Guide',
};

// What each fitting does.
export const fittingInfo = {
  'support-rod': 'Runs from the wall to the glass to keep the panel rigid and steady.',
  'rod-to-glass': 'Clamps the support rod securely to the glass panel.',
  'wall-to-rod': 'Fixes the support rod to the wall.',
  'l-connector': 'Joins glass to the wall, or two panels at 90°, at a clean right angle.',
  'u-connector': 'Holds the glass edge to the wall or floor.',
  'door-hinge': 'Lets a glass door swing open and closed smoothly.',
  'handle-towel-rod': 'A pull handle that doubles as a towel rod.',
  'door-handle': 'A round knob handle for the sliding door.',
  'sliding-wheel': 'Rollers that carry the sliding door along its rail.',
  'floor-guide': 'Keeps the sliding door on track at the bottom.',
};

// The four enclosures, in catalogue order, each with the ensemble of fittings the catalogue shows for it.
export const enclosures = [
  {
    slug: 'single-panel',
    name: 'Single Panel Shower Enclosure',
    short: 'Single Panel',
    badge: 'Walk-in',
    summary: 'One fixed glass panel that divides the wet and dry areas, with an open walk-in entry and no door.',
    description: 'The simplest way to separate the wet and dry areas. A single fixed panel of 8mm toughened glass is held by a support rod and connectors, leaving an open, door-free entry into the shower.',
    bestFor: ['Bathrooms with room for an open walk-in entry', 'A minimal look with the least hardware', 'Easy cleaning with no door to maintain'],
    operation: 'Fixed panel, open entry (no door)',
    fittings: ['support-rod', 'rod-to-glass', 'l-connector', 'wall-to-rod', 'u-connector'],
  },
  {
    slug: 'l-type',
    name: 'L-Type Shower Enclosure',
    short: 'L-Type',
    badge: 'Corner',
    summary: 'Two glass sides meeting at 90° to turn a bathroom corner into a closed shower.',
    description: 'Glass on two sides of a corner, joined at a right angle and braced by a support rod, with a door for entry. It turns an open corner into a fully enclosed shower.',
    bestFor: ['Showers in a corner of the bathroom', 'Square and rectangular layouts', 'Containing water on two open sides'],
    operation: 'Corner enclosure with an entry door',
    fittings: ['support-rod', 'wall-to-rod', 'rod-to-glass', 'handle-towel-rod', 'l-connector', 'door-hinge'],
  },
  {
    slug: 'sliding',
    name: 'Sliding Shower Enclosure',
    short: 'Sliding',
    badge: 'Space saving',
    summary: 'A glass door that slides on wheels behind a fixed panel, so it needs no room to swing.',
    description: 'The door glides on sliding wheels along a rail and is kept in line by a floor guide. Because nothing swings out, it suits compact bathrooms where a door would hit the basin, WC or entry door.',
    bestFor: ['Compact bathrooms', 'Layouts where a swinging door would clash with fixtures', 'Wide shower openings'],
    operation: 'Door slides along a rail',
    fittings: ['sliding-wheel', 'l-connector', 'door-handle', 'floor-guide'],
  },
  {
    slug: 'swing',
    name: 'Swing Shower Enclosure',
    short: 'Swing',
    badge: 'Hinged door',
    summary: 'A hinged glass door with fixed side panels that closes the shower fully.',
    description: 'A glass door on SS 304 hinges, set between fixed glass panels and braced by a support rod. The door swings open for easy access and closes the shower completely.',
    bestFor: ['Bathrooms with space for the door to open', 'Fully enclosing the shower area', 'A classic frameless look'],
    operation: 'Hinged door that swings open',
    fittings: ['door-hinge', 'support-rod', 'wall-to-rod', 'handle-towel-rod', 'l-connector'],
  },
];

// Temporary: enclosure-sliding.png is currently a copy of the swing photo, so the sliding enclosure
// uses hero-2 (a real sliding enclosure) until a new enclosure-sliding photo is added. Remove the
// entry when it is replaced.
const IMAGE_OVERRIDE = {};

enclosures.forEach((e) => {
  e.path = `/${e.slug}-shower-enclosure`;
  e.image = IMAGE_OVERRIDE[e.slug] || `enclosure-${e.slug}`;
});

export const enclosureBySlug = Object.fromEntries(enclosures.map((e) => [e.slug, e]));

export const benefits = [
  { icon: 'droplet', title: 'Separates wet and dry', text: 'Water stays inside the shower, so the rest of the bathroom stays dry.' },
  { icon: 'sparkle', title: 'Easier to clean', text: 'Less water on the floor and fixtures means less wiping and mopping.' },
  { icon: 'quality', title: 'More hygienic', text: 'A drier bathroom gives damp, mould and soap scum less chance to build up.' },
  { icon: 'hand', title: 'Lower risk of slipping', text: 'A dry floor outside the shower is safer for children, elders and guests.' },
];

// "Which enclosure suits your bathroom?" on the home page.
export const layouts = [
  { id: 'compact', tab: 'Compact bathroom', sub: 'Little room for a door to open', pick: 'sliding', why: 'The door slides along a rail instead of swinging out, so it never hits the basin, WC or bathroom door.' },
  { id: 'walk-in', tab: 'Open walk-in', sub: 'Space for a door-free entry', pick: 'single-panel', why: 'One fixed glass panel keeps the spray in with no door at all: the most minimal look and the easiest to clean.' },
  { id: 'standard', tab: 'Standard bathroom', sub: 'Room for a door to swing', pick: 'swing', why: 'A hinged glass door between fixed panels closes the shower completely and opens wide for easy access.' },
  { id: 'corner', tab: 'Shower in a corner', sub: 'Two open sides to enclose', pick: 'l-type', why: 'Glass on both open sides meets at 90°, turning the corner into a fully enclosed shower.' },
];

export const processSteps = [
  { id: 'enquiry', title: 'Enquiry', text: 'Send your requirements and bathroom photos through the quote form or WhatsApp.', detail: 'Fill in the quote form or message us on WhatsApp. Photos of your shower area and rough measurements help us understand your bathroom straight away.' },
  { id: 'measurement', title: 'Measurement', text: 'We take exact measurements of your shower area so every panel fits.', detail: 'We measure the shower area precisely, check the walls and floor, and talk through the enclosure type, glass and finish that suit your space.' },
  { id: 'quotation', title: 'Quotation', text: 'You get a clear quote based on the size, enclosure type, glass, finish and any add-ons.', detail: 'You receive a quote based on the measured area, your chosen finish and any add-ons, with GST shown separately. Nothing is made until you approve it.' },
  { id: 'manufacturing', title: 'Manufacturing', text: 'Your 8mm toughened glass and SS 304 fittings are prepared to your measurements.', detail: 'Your 8mm toughened Saint-Gobain glass is cut to your measurements and your SS 304 fittings are prepared in the finish you chose.' },
  { id: 'installation', title: 'Installation', text: 'Our team installs, aligns and seals the enclosure, ready to use.', detail: 'Our team installs the enclosure, aligns the glass, fixes the fittings and seals the joints, then hands it over ready to use.' },
];

// Gallery: an item appears only once its photo exists in photos/.
export const gallery = [
  { photo: 'hero-4', type: 'single-panel', caption: 'Single Panel walk-in, clear glass, chrome' },
  { photo: 'enclosure-single-panel', type: 'single-panel', caption: 'Single Panel, clear glass, chrome support rod' },
  { photo: 'hero-3', type: 'l-type', caption: 'L-Type corner, clear glass, gold' },
  { photo: 'enclosure-l-type', type: 'l-type', caption: 'L-Type, clear glass, matte black' },
  { photo: 'hero-1', type: 'l-type', caption: 'L-Type corner, clear glass, chrome' },
  { photo: 'gallery-l-type-black', type: 'l-type', caption: 'L-Type corner, clear glass, matte black' },
  { photo: 'hero-2', type: 'sliding', caption: 'Sliding, fluted glass, matte black' },
  { photo: 'enclosure-sliding', type: 'sliding', caption: 'Sliding, clear glass, chrome' },
  { photo: 'gallery-sliding-rose-gold', type: 'sliding', caption: 'Sliding, clear glass, rose gold' },
  { photo: 'enclosure-swing', type: 'swing', caption: 'Swing, clear glass, gold' },
  { photo: 'hero-5', type: 'swing', caption: 'Swing, frosted glass, rose gold' },
  { photo: 'addon-tinted', type: 'glass', caption: 'Tinted glass add-on' },
  { photo: 'addon-frosting', type: 'glass', caption: 'Frosting add-on' },
  { photo: 'addon-stickering', type: 'glass', caption: 'Stickering add-on' },
  // Real completed projects: add photos/project-1.jpg … project-12.jpg and write a caption for each here.
  ...Array.from({ length: 12 }, (_, i) => ({ photo: `project-${i + 1}`, type: 'project', caption: '' })),
];

export const START_PRICE = Math.min(...finishes.map((f) => f.price));
export const inr = (n) => `₹${Number(n).toLocaleString('en-IN')}`;

// Questions answered only with catalogue facts (shown on the site and used for FAQ structured data).
export const faqs = [
  {
    q: 'What types of shower enclosures are available?',
    a: 'Four types: Single Panel, L-Type, Sliding and Swing shower enclosures.',
  },
  {
    q: 'What is the price of a shower enclosure?',
    a: `Chrome fittings are ${inr(697)} per sq ft. Rose Gold, Matte Black and Gold fittings are ${inr(797)} per sq ft. Additional GST applies at the prevailing rates on the date of invoicing.`,
  },
  {
    q: 'Which glass is used?',
    a: '8mm toughened Saint-Gobain glass, available as clear glass, frosted glass or fluted glass.',
  },
  {
    q: 'What warranty is offered?',
    a: 'Stainless steel fittings come with a 7 year warranty. Glasses come with a 3 year breakage warranty.',
  },
  {
    q: 'Which fitting finishes can I choose?',
    a: 'Chrome, Rose Gold, Matte Black and Gold. All fittings are SS 304 grade premium stainless steel.',
  },
  {
    q: 'Which add-ons are available?',
    a: `Stickering (${inr(80)}/sft), Nanocoating (${inr(60)}/sft), Tinted (${inr(95)}/sft), Frosting (${inr(80)}/sft) and Granite Threshold (${inr(3000)} per bathroom). Additional GST applies.`,
  },
  {
    q: 'Which shower enclosure is best for a small bathroom?',
    a: 'A sliding enclosure is usually best for small bathrooms because the door slides instead of swinging out. If you have room for an open entry, a single panel enclosure is the most minimal option.',
  },
  {
    q: 'What is the difference between frosted and fluted glass?',
    a: 'Frosted glass has a smooth translucent surface that gives full privacy. Fluted glass has vertical ribs that blur the view for partial privacy with a textured, designer look.',
  },
  {
    q: 'How is my price worked out?',
    a: 'The measured area of your enclosure in sft is multiplied by the rate for your chosen finish. Any add-ons are added at their listed rates, and GST is added at the prevailing rate on the date of invoicing.',
  },
  {
    q: 'Why install a shower enclosure?',
    a: 'It gives the bathroom a premium look and feel and separates the wet and the dry area. Cleaning is easier, the space remains more hygienic, and it reduces the risk of bathroom users slipping.',
  },
];

// ---------------------------------------------------------------------------
// Answer-engine content: short direct answers and per-product questions, built
// only from the facts above so they always match the rest of the site.
// ---------------------------------------------------------------------------
const finishPrices = `${inr(697)} per sft in Chrome and ${inr(797)} per sft in Rose Gold, Matte Black or Gold`;

export const productFaqs = (e) => [
  { q: `What is a ${e.name.toLowerCase()}?`, a: e.description },
  { q: `How much does a ${e.short} shower enclosure cost?`, a: `A ${e.short} shower enclosure costs ${finishPrices}. Additional GST applies at the prevailing rates on the date of invoicing.` },
  { q: `Which fittings does a ${e.short} enclosure use?`, a: `${e.fittings.map((f) => fittings[f]).join(', ')}. All fittings are SS 304 grade premium stainless steel.` },
  { q: `Which glass can I choose for a ${e.short} enclosure?`, a: 'Clear, frosted or fluted 8mm toughened Saint-Gobain glass. Tinted glass is available as an add-on.' },
  { q: `Is a ${e.short} enclosure right for my bathroom?`, a: `It is best for: ${e.bestFor.join('; ').toLowerCase()}.` },
];

export const answers = {
  home: 'BathCentric makes made-to-measure shower enclosures (Single Panel, L-Type, Sliding and Swing) in 8mm toughened Saint-Gobain glass with SS 304 stainless steel fittings in Chrome, Rose Gold, Matte Black or Gold, from ₹697 per sft.',
  collection: 'There are four BathCentric shower enclosures: Single Panel (walk-in, no door), L-Type (corner), Sliding (space saving) and Swing (hinged door). All use 8mm toughened Saint-Gobain glass and SS 304 fittings.',
  materials: 'Every BathCentric enclosure uses 8mm toughened Saint-Gobain glass (clear, frosted or fluted) and SS 304 grade stainless steel fittings in Chrome, Rose Gold, Matte Black or Gold.',
  pricing: `BathCentric shower enclosures cost ${finishPrices}, plus GST. Add-ons range from ${inr(60)} per sft (Nanocoating) to ${inr(3000)} per bathroom (Granite Threshold).`,
  addons: `Five add-ons are available: Stickering ${inr(80)}/sft, Nanocoating ${inr(60)}/sft, Tinted ${inr(95)}/sft, Frosting ${inr(80)}/sft and Granite Threshold ${inr(3000)} per bathroom, plus GST.`,
  process: 'A BathCentric enclosure takes five steps: enquiry, measurement, quotation, manufacturing and installation.',
  guide: 'Choose a shower enclosure in four decisions: the type that fits your layout, the glass for the privacy you want, the fitting finish that matches your bathroom, and any add-ons.',
};

// Buying guide (/buying-guide).
export const guide = [
  {
    id: 'type',
    title: 'Choose the type for your layout',
    intro: 'Start with how your shower area is laid out and how much room there is for a door.',
    points: layouts.map((l) => ({ label: l.tab, value: enclosureBySlug[l.pick].name, text: l.why, href: enclosureBySlug[l.pick].path })),
  },
  {
    id: 'glass',
    title: 'Choose the glass for your privacy',
    intro: 'All three are 8mm toughened Saint-Gobain glass. The difference is how much they hide.',
    points: glasses.map((g) => ({ label: g.name, value: g.privacy, text: `${g.text} Best for: ${g.bestFor.toLowerCase()}.` })),
  },
  {
    id: 'finish',
    title: 'Choose a fitting finish',
    intro: 'All fittings are SS 304 grade premium stainless steel. Pick the finish that matches your taps and accessories.',
    points: finishes.map((f) => ({ label: f.name, value: `${inr(f.price)}/sft`, text: `${f.name} fittings: ${inr(f.price)} per sft.` })),
  },
  {
    id: 'addons',
    title: 'Add finishing touches',
    intro: 'Optional extras for privacy, easier cleaning and keeping water inside the shower.',
    points: addOns.map((a) => ({ label: a.name, value: `${inr(a.price)}/${a.unit}`, text: a.text })),
  },
];

export const guideFaqs = [
  faqs.find((f) => /small bathroom/i.test(f.q)),
  faqs.find((f) => /frosted and fluted/i.test(f.q)),
  faqs.find((f) => /price worked out/i.test(f.q)),
  faqs.find((f) => /warranty/i.test(f.q)),
].filter(Boolean);

// ---------------------------------------------------------------------------
// Images: hero slides and crop focus points (see IMAGE_GUIDE.md)
// ---------------------------------------------------------------------------

// Full-screen hero slider. Add photos/hero-1.jpg … hero-5.jpg; until then the wide enclosure
// photos are used. Each slide links to the enclosure it shows.
export const heroSlides = [
  { photo: 'hero-1', caption: 'L-Type · Clear glass · Chrome', to: 'l-type' },
  { photo: 'hero-2', caption: 'Sliding · Fluted glass · Matte Black', to: 'sliding' },
  { photo: 'hero-3', caption: 'L-Type · Clear glass · Gold', to: 'l-type' },
  { photo: 'hero-4', caption: 'Single Panel · Clear glass · Chrome', to: 'single-panel' },
  { photo: 'hero-5', caption: 'Swing · Frosted glass · Rose Gold', to: 'swing' },
];
export const heroFallbackSlides = [
  { photo: 'enclosure-swing', caption: 'Swing · Chrome', to: 'swing' },
  { photo: 'enclosure-sliding', caption: 'Sliding · Chrome', to: 'sliding' },
  { photo: 'enclosure-l-type', caption: 'L-Type · Chrome', to: 'l-type' },
  { photo: 'enclosure-single-panel', caption: 'Single Panel · Chrome', to: 'single-panel' },
];

// Where the subject sits in photos that are cropped by their slot (CSS object-position).
// New photos made with IMAGE_GUIDE.md keep the subject centred and need no entry here.
export const photoFocus = {
  'hero-2': '52% 50%', // also used for the sliding enclosure while its own photo is replaced
  about: '50% 55%',
};

// The six questions shown (and marked up) on the home page.
export const homeFaqs = [
  faqs.find((f) => /types of shower enclosures/i.test(f.q)),
  faqs.find((f) => /price of a shower enclosure/i.test(f.q)),
  faqs.find((f) => /Which glass/i.test(f.q)),
  faqs.find((f) => /warranty/i.test(f.q)),
  faqs.find((f) => /small bathroom/i.test(f.q)),
  faqs.find((f) => /add-ons are available/i.test(f.q)),
].filter(Boolean);
