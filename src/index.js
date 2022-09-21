import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import CountriesContextProvider from './context/CountriesContext';
import ThemeContextProvider from './context/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <CountriesContextProvider>
        <App />
      </CountriesContextProvider>
    </ThemeContextProvider>  
  </React.StrictMode>
);
