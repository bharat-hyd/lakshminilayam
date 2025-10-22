import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Helmet } from "react-helmet";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function ApartmentGuntur() {
  return (
    <>
      <Helmet>
        <title>Apartment Guntur | 2 & 3 BHK Flats | Lakshmi Nilayam</title>
      </Helmet>
      {/* ...existing code... */}
    </>
  );
}