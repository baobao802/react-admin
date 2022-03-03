import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PrimaryLayout } from '../../layouts';

const Home = React.lazy(() => import('./pages'));

const HomeRoutes = () => (
  <Routes>
    <Route path='/' element={<PrimaryLayout />}>
      <Route index element={<Home />} />
    </Route>
  </Routes>
);

export default HomeRoutes;
