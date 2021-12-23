import React from 'react';
import ReactDOM from 'react-dom';
import './app.scss';
import Router from '@/router/Router';
import { AppProvider } from '@/context/AppProvider';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Router />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
