import React from 'react';
import ReactDOM from 'react-dom/client';
// import { ReactDOM } from 'react';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Eprof from './pages/editprofile';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import ProfileManagementPage from './pages/profile';
import TemplateSelection from './pages/news';
import Adprof from './pages/advprof';
import Payment from './pages/payment';
import { configureStore } from '@reduxjs/toolkit';

import Home from './pages/home';
import HomePa from './pages/HomePage';

import userReducer from './pages/store';
import Store from './pages/store';

// root.render(
    //  <App/>
    // {/* <Adprof/> */}
    // );
    const root = ReactDOM.createRoot(document.getElementById('root'));
const store=configureStore({
  reducer:{
    user:userReducer
  }
})
    root.render(
      <BrowserRouter>
        <Provider store={Store}>
      <App />
      {/* <HomePa/> */}
    </Provider>
    </BrowserRouter>
    // document.getElementById('root')
  );
  


reportWebVitals();
