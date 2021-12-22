import React from 'react';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import JoinGamePage from '@/pages/game/join-game/JoinGamePage';
import Routes from './Routes';
import LibraryPage from '@/pages/panel/library/LibraryPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={Routes.Main} element={<JoinGamePage />} />
        <Route path={Routes.LibraryPage} element={<LibraryPage />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
