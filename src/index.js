import React, { createContext } from 'react';
import color from './color-data.json'
import ReactDOM from 'react-dom/client';
import App from './App';

export const ColorContex = createContext();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ColorContex.Provider value={color}>
    <App />
  </ColorContex.Provider>
);
