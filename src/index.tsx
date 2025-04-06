import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Get the root element
const rootElement = document.getElementById('root');

// Create a root
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  
  // Render the app
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} 