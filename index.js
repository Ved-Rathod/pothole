import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const container = document.getElementById('root');
if (!container) {
  // If the index.html is missing a root div, let's create one.
  const rootDiv = document.createElement('div');
  rootDiv.id = 'root';
  document.body.appendChild(rootDiv);
}

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
