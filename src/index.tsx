import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import '@/styles/base/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root') as HTMLElement;

// React-snap pre-renders the HTML, so we need to hydrate instead of render
// This improves SEO by making content available to crawlers immediately
if (rootElement.hasChildNodes()) {
  // Hydrate pre-rendered HTML (from react-snap)
  ReactDOM.hydrateRoot(
    rootElement,
    <React.StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </React.StrictMode>
  );
} else {
  // Normal render for development or if pre-rendering failed
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </React.StrictMode>
  );
}

reportWebVitals();
