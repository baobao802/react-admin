import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

const SecondaryLayout = () => {
  return (
    <Fragment>
      <header></header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </Fragment>
  );
};

export default SecondaryLayout;
