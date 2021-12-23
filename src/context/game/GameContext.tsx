import produce from 'immer';
import React, { createContext, useContext, useReducer } from 'react';
import { UserContext } from '@/context/user/UserContext';
import KHSocketClient from '../../services/socket-client/KHSocketClient';

// It doesnt support more than 1 game per session.
// Further work would be add this functionality here.
interface IGameState {
  code?: number;
  host?: string;
  players: string[];
}

const gameInitialState: IGameState = {
  code: undefined,
  host: undefined,
  players: []
};

enum ActionKind {
  HOST_NEW_GAME = 'HOST_NEW_GAME',
  ON_PLAYER_ADDED = 'ON_PLAYER_ADDED',
  JOIN_GAME = 'JOIN_GAME'
}

type Action = {
  type: ActionKind;
  payload: any;
};

export interface IGameContext {
  state: IGameState;
  mutations: {
    hostNewGame: () => void;
    joinNewGame: ({ code, player }: { code?: number; player: string }) => void;
    onPlayerJoined: () => void;
  };
}

const GameContext = createContext<IGameContext>({ state: gameInitialState, mutations: {} as any });

const userReducer = (state: IGameState, action: Action): IGameState => {
  switch (action.type) {
    case ActionKind.HOST_NEW_GAME: {
      const randomCode = Math.floor(100000 + Math.random() * 900000);

      KHSocketClient.createNewGame({ code: randomCode });

      return produce(state, (draft) => {
        draft.code = randomCode;
        draft.host = action.payload.host;
      });
    }

    case ActionKind.ON_PLAYER_ADDED: {
      return produce(state, (draft) => {
        draft.players.push(action.payload.player);
      });
    }

    case ActionKind.JOIN_GAME: {
      if (!action.payload.code || action.payload.code !== state.code) {
        //TODO: Improve error handling
        console.log('La partida no existe');
        throw new Error();
      }

      KHSocketClient.joinGame({ code: action.payload.code, player: action.payload.player });

      return state;
    }

    default:
      throw new Error();
  }
};

const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, gameInitialState);
  const { state: userState } = useContext(UserContext);

  const onPlayerAdded = ({ player }) => {
    dispatch({ type: ActionKind.ON_PLAYER_ADDED, payload: { player } });
  };

  const onPlayerJoined = () => {
    KHSocketClient.onPlayerJoin(({ player }) => onPlayerAdded({ player }));
  };

  const hostNewGame = () => {
    dispatch({ type: ActionKind.HOST_NEW_GAME, payload: { host: userState.user } });
  };

  const joinNewGame = ({ code, player }: { code?: number; player: string }) => {
    KHSocketClient.joinGame({ code: code, player });
  };

  const mutations = {
    hostNewGame,
    joinNewGame,
    onPlayerJoined
  };

  return <GameContext.Provider value={{ state, mutations }}>{children}</GameContext.Provider>;
};

export { GameContext, GameProvider };
