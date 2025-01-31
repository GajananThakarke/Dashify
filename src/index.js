import React from 'react';
import ReactDOM from 'react-dom/client';  // Make sure to import from 'react-dom/client'
import App from './App';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);