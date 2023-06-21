import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalContextProvider } from './context/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GlobalContextProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </GlobalContextProvider>
);

