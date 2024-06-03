import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import 'modern-normalize';
import './index.css';

import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store.js';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
      <ToastContainer />
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);
