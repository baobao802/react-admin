import React from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import homeRoutes from './modules/home/routes';
import authRoutes from './modules/auth/routes';

const NotFound = React.lazy(() => import('./404'));

const Routes = () => {
  return useRoutes([
    ...homeRoutes,
    ...authRoutes,
    { path: '404', element: <NotFound /> },
    { path: '*', element: <Navigate to='/404' replace /> },
  ]);
};

export default Routes;
