import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Core styles
import '@styles/globals.css';
import '@styles/animations.css';
import '@styles/variables.css';

// RTL support
import '@styles/rtl.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
