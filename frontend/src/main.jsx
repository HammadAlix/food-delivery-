import React from 'react';

import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client'; 
import StoreContextProvider from './context/StoreContext.jsx';// Import from react-dom/client for createRoot


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <StoreContextProvider>
      <App />
      </StoreContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
