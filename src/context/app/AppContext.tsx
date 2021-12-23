import produce from 'immer';
import React, { createContext, useContext, useReducer } from 'react';
import { KH_SOCKET_SERVER_URL } from '@/environment';

interface IAppState {
  socketUrl: string;
}

const appInitialState: IAppState = {
  socketUrl: KH_SOCKET_SERVER_URL
};

enum ActionKind {
  CHANGE_SOCKET_URL = 'CHANGE_SOCKET_URL'
}

type Action = {
  type: ActionKind;
  payload: any;
};

export interface IAppContext {
  state: IAppState;
  mutations: {
    changeSocketUrl: ({ socketUrl }: { socketUrl: string }) => void;
  };
}

const AppContext = createContext<IAppContext>({ state: appInitialState, mutations: {} as any });

const userReducer = (state: IAppState, action: Action): IAppState => {
  switch (action.type) {
    case ActionKind.CHANGE_SOCKET_URL: {
      return produce(state, (draft) => {
        draft.socketUrl = action.payload.socketUrl;
      });
    }

    default:
      throw new Error();
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, appInitialState);

  const changeSocketUrl = ({ socketUrl }: { socketUrl: string }) => {
    dispatch({ type: ActionKind.CHANGE_SOCKET_URL, payload: { socketUrl } });
  };

  const mutations = {
    changeSocketUrl
  };

  return <AppContext.Provider value={{ state, mutations }}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
