import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { SecondaryLayout } from '../../layouts';

const Login = React.lazy(() => import('./pages/login'));
const SignUp = React.lazy(() => import('./pages/signup'));
const NotFound = React.lazy(() => import('../../404'));

const AuthRoutes = () => (
  <Routes>
    <Route path='/' element={<SecondaryLayout />}>
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<SignUp />} />
      <Route path='404' element={<NotFound />} />
      <Route path='*' element={<Navigate to='/404' replace />} />
    </Route>
  </Routes>
);

export default AuthRoutes;
