import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import JoinGamePage from '@/pages/game/join-game/JoinGamePage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<JoinGamePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
