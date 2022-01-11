import React, { useContext } from 'react';
import { Navigate, Route, useLocation } from 'react-router-dom';
import Routes from './Routes';
import { UserContext } from '@/context/user/UserContext';

const PrivateRoute = ({ children }) => {
  const { state: userState } = useContext(UserContext);

  if (!userState.isAdmin) {
    return <Navigate to={Routes.Main} state={{ from: location }} />;
  }

  return children;
};

export default PrivateRoute;
