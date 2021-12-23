import React, { ComponentProps, FC } from 'react';
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

const providers: any = [UserProvider];

export const AppProvider = combineComponents(...providers);
