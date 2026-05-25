import { StrictMode, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import ReactGA from 'react-ga4'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import SplashLoader from './../src/components/SplashLoader.jsx'

const gaMeasurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
if (gaMeasurementId) {
  ReactGA.initialize(gaMeasurementId);
}

function Root() {
  return (
      <BrowserRouter>
        <App />
      </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(<Root />);