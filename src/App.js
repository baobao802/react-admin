import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PrimaryLayout, SecondaryLayout } from './layouts';
import Home from './modules/home/pages';
import AuthRoutes from './modules/auth/routes';
import ProductRoutes from './modules/products/routes';
import { GuardRoute } from './router';
import BlogRoutes from './modules/blogs/routes';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<PrimaryLayout />}>
            <Route
              path='/'
              element={
                <GuardRoute>
                  <Home />
                </GuardRoute>
              }
            />
            <Route path='products/*' element={<ProductRoutes />} />
            <Route path='blogs/*' element={<BlogRoutes />} />
          </Route>
          <Route element={<SecondaryLayout />}>
            <Route path='/*' element={<AuthRoutes />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
