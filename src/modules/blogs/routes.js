import React from 'react';
import { Route, Routes } from 'react-router-dom';

const Blogs = React.lazy(() => import('./pages'));
const Blog = React.lazy(() => import('./pages/blog'));

const BlogRoutes = () => {
  return (
    <Routes>
      <Route index element={<Blogs />} />
      <Route path=':blogId' element={<Blog />} />
    </Routes>
  );
};

export default BlogRoutes;
