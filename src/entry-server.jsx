// Build-time only: scripts/prerender.mjs renders every page to static HTML with this.
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { metaFor, headHtml, pages } from './seo';

export { pages };
export { SITE_URL } from './config';
export { enclosures, finishes, glasses, addOns, fittings, faqs, about, tagline, GST_NOTE, inr } from './data/catalog';

export function render(path) {
  const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/';
  const location = basename === '/' ? path : `${basename}${path === '/' ? '/' : path}`;
  const html = renderToString(
    <React.StrictMode>
      <StaticRouter location={location} basename={basename}>
        <App />
      </StaticRouter>
    </React.StrictMode>
  );
  return { html, head: headHtml(path, metaFor(path)) };
}
