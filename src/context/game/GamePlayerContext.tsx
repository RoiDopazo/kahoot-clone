import React, { createContext, useReducer } from 'react';
import KHSocketClient from '@/services/socket-client/KHSocketClient';
import { useNavigate } from 'react-router-dom';
import Routes from '@/router/Routes';

interface IGamePlayerState {}

const gamePlayerInitialState: IGamePlayerState = {};

enum ActionKind {}

type Action = {
  type: ActionKind;
  payload: any;
};

export interface IGamePlayerContext {
  state: IGamePlayerState;
  mutations: {
    joinGame: ({ code, player }: { code?: number; player: string }) => void;
  };
}

const GamePlayerContext = createContext<IGamePlayerContext>({ state: gamePlayerInitialState, mutations: {} as any });

const userReducer = (state: IGamePlayerState, action: Action): IGamePlayerState => {
  switch (action.type) {
    default:
      throw new Error();
  }
};

const GamePlayerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, gamePlayerInitialState);
  const navigate = useNavigate();

  const joinGame = ({ code, player }: { code?: number; player: string }) => {
    KHSocketClient.joinGame({ code, player });
    KHSocketClient.onPlayerKicked({
      callback: (data) => {
        if (data.player === player) {
          KHSocketClient.leave({ code });
          navigate(Routes.Main);
        }
      }
    });
  };

  const mutations = {
    joinGame
  };

  return <GamePlayerContext.Provider value={{ state, mutations }}>{children}</GamePlayerContext.Provider>;
};

export { GamePlayerContext, GamePlayerProvider };
