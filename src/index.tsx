// Import only the font weights we actually use
import '@fontsource/public-sans/300.css';
// light
import '@fontsource/public-sans/400.css';
// regular (default)
import '@fontsource/public-sans/600.css';
import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

const root = createRoot(rootElement);
root.render(<App />);
