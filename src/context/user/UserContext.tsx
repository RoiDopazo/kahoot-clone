import produce from 'immer';
import React, { createContext, useReducer } from 'react';

interface IUserState {
  isAdmin: boolean;
  user: string;
}

const userInitialState: IUserState = {
  isAdmin: Boolean(import.meta.env.VITE_USERNAME),
  user: import.meta.env.VITE_USERNAME as string
};

enum ActionKind {
  CHANGE_USERNAME = 'CHANGE_USERNAME'
}

type Action = {
  type: ActionKind;
  payload: any;
};

export interface IUserContext {
  state: IUserState;
  mutations: {
    setUser: ({ username }: { username: string }) => void;
  };
}

const UserContext = createContext<IUserContext>({ state: userInitialState, mutations: {} as any });

const userReducer = (state: IUserState, action: Action): IUserState => {
  switch (action.type) {
    case ActionKind.CHANGE_USERNAME: {
      return produce(state, (draft) => {
        draft.user = action.payload.user;
      });
    }
    default:
      throw new Error();
  }
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, userInitialState);

  const setUser = ({ username }) => {
    dispatch({ type: ActionKind.CHANGE_USERNAME, payload: { user: username } });
  };

  const mutations = {
    setUser
  };

  return <UserContext.Provider value={{ state, mutations }}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
