import React from 'react'

import ReactDOM from 'react-dom/client'

// import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import the AOS styles
import AOS from 'aos';

import App from './App.jsx'
import './index.css'

// Initialize AOS
AOS.init();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
