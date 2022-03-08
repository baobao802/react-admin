import React, { Fragment } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

const Products = React.lazy(() => import('./pages'));
const Product = React.lazy(() => import('./pages/product'));

const ProductRoutes = () => {
  const location = useLocation();

  const backgroundLocation = location.state?.backgroundLocation;

  return (
    <Fragment>
      <Routes location={backgroundLocation || location}>
        <Route index element={<Products />} />
        <Route path=':productId' element={<Product />} />
      </Routes>
      {backgroundLocation && (
        <Routes>
          <Route path=':productId' element={<Product />} />
        </Routes>
      )}
    </Fragment>
  );
};

export default ProductRoutes;
