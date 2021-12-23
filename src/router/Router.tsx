import React from 'react';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import LandingPage from '@/pages/game/join/landing/LandingPage';
import Routes from './Routes';
import LibraryPage from '@/pages/panel/library/LibraryPage';
import PrivateRoute from './PrivateRoute';
import InstructionsPage from '@/pages/game/join/instructions/InstructionsPage';
import LobbyPage from '@/pages/game/host/lobby/LobbyPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={Routes.Main} element={<LandingPage />} />
        <Route path={Routes.Instructions} element={<InstructionsPage />} />
        <Route
          path={Routes.LibraryPage}
          element={
            <PrivateRoute>
              <LibraryPage />
            </PrivateRoute>
          }
        />
        <Route
          path={Routes.Lobby}
          element={
            <PrivateRoute>
              <LobbyPage />
            </PrivateRoute>
          }
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
