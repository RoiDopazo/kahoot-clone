import React from 'react';
import ReactDOM from 'react-dom';
import './app.scss';
import Router from '@/router/Router';
import { AppGlobalProvider } from '@/context/AppGlobalProvider';

ReactDOM.render(
  <React.StrictMode>
    <AppGlobalProvider>
      <Router />
    </AppGlobalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
