import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router } from 'react-router-dom';
import './assets/styles/styles.scss';
import reportWebVitals from './reportWebVitals';
import { RootCmp } from './root-cmp';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <RootCmp />
    </Router>
  </React.StrictMode>
);


reportWebVitals();
