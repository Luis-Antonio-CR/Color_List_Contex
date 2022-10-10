import React from 'react';
import ColorProvider from './color-hook';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ColorProvider>
    <App />
  </ColorProvider>
);
