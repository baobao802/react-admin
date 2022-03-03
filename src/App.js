import { Suspense } from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import AuthRoutes from './modules/auth/routes';
import HomeRoutes from './modules/home/routes';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <AuthRoutes />
        <HomeRoutes />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
