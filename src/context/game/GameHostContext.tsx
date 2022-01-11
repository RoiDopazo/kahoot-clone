import produce from 'immer';
import React, { createContext, useContext, useReducer } from 'react';
import { UserContext } from '@/context/user/UserContext';
import KHSocketClient from '@/services/socket-client/KHSocketClient';

interface IGameHostState {
  code?: number;
  host?: string;
  players: string[];
}

const gameHostInitialState: IGameHostState = {
  code: undefined,
  host: undefined,
  players: []
};

enum ActionKind {
  HOST_NEW_GAME = 'HOST_NEW_GAME',
  ON_PLAYER_ADDED = 'ON_PLAYER_ADDED',
  REMOVE_PLAYER = 'REMOVE_PLAYER'
}

type Action = {
  type: ActionKind;
  payload: any;
};

export interface IGameHostContext {
  state: IGameHostState;
  mutations: {
    hostNewGame: () => void;
    onPlayerJoined: () => void;
    kickPlayer: ({ player }: { player: string }) => void;
  };
}

const GameHostContext = createContext<IGameHostContext>({ state: gameHostInitialState, mutations: {} as any });

const userReducer = (state: IGameHostState, action: Action): IGameHostState => {
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

    case ActionKind.REMOVE_PLAYER: {
      return produce(state, (draft) => {
        draft.players = draft.players.filter((player) => player !== action.payload.player);
      });
    }

    default:
      throw new Error();
  }
};

const GameHostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, gameHostInitialState);
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

  const kickPlayer = ({ player }) => {
    KHSocketClient.kickPlayer({ code: state.code, player });
    dispatch({ type: ActionKind.REMOVE_PLAYER, payload: { player } });
  };

  const mutations = {
    hostNewGame,
    onPlayerJoined,
    kickPlayer
  };

  return <GameHostContext.Provider value={{ state, mutations }}>{children}</GameHostContext.Provider>;
};

export { GameHostContext, GameHostProvider };
