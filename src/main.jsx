import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '@fontsource-variable/bodoni-moda/wght.css';
import '@fontsource-variable/bodoni-moda/wght-italic.css';
import '@fontsource-variable/instrument-sans/wght.css';
import './styles.css';
import './stage.css';
import App from './App';

const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/';
const app = (
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

const root = document.getElementById('root');
// Production pages are prerendered, so hydrate them; in dev the root starts empty.
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);
