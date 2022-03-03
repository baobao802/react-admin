import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../../components/common';

const PrimaryLayout = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
};

export default PrimaryLayout;
