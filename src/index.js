import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './styles/styles.css';

// Find the root element in your HTML
const rootElement = document.getElementById('root');

// Use the new React 18 API to create the root
const root = ReactDOM.createRoot(rootElement);

// Render your app using the new API
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
