import React, { ComponentProps, FC } from 'react';
import { AppProvider } from './app/AppContext';
import { GameHostProvider } from './game/GameHostContext';
import { GamePlayerProvider } from './game/GamePlayerContext';
import { UserProvider } from './user/UserContext';

export const combineComponents = (...components: FC[]): any => {
  return components.reduce(
    (AccumulatedComponents, CurrentComponent) => {
      return ({ children }: ComponentProps<FC>): any => {
        return (
          <AccumulatedComponents>
            <CurrentComponent>{children}</CurrentComponent>
          </AccumulatedComponents>
        );
      };
    },
    ({ children }) => <>{children}</>
  );
};

const providers: any = [UserProvider, GameHostProvider, GamePlayerProvider, AppProvider];

export const AppGlobalProvider = combineComponents(...providers);
