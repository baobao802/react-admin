import React, { Fragment } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { GuardRoute } from '../../router';

const Products = React.lazy(() => import('./pages'));
const Product = React.lazy(() => import('./pages/product'));
const ProductModal = React.lazy(() => import('./pages/product-modal'));

const ProductRoutes = () => {
  const location = useLocation();

  const backgroundLocation = location.state?.backgroundLocation;

  return (
    <GuardRoute>
      <Routes location={backgroundLocation || location}>
        <Route index element={<Products />} />
        <Route path=':productId' element={<Product />} />
      </Routes>
      {backgroundLocation && (
        <Routes>
          <Route path=':productId' element={<ProductModal />} />
        </Routes>
      )}
    </GuardRoute>
  );
};

export default ProductRoutes;
