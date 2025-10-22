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

function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Lakshmi Nilayam</title>
      </Helmet>
      {/* ...existing code... */}
    </>
  );
}