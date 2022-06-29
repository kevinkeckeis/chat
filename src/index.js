import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { store } from './app/store';
import { Provider } from 'react-redux';

import { HashRouter, Routes, Route, BrowserRouter } from 'react-router-dom';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <HashRouter>
      <Routes>
        <Route path='/*' element={<App />} />
      </Routes>
    </HashRouter>
  </Provider>
);
