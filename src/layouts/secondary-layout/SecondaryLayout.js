import { Link } from '@chakra-ui/react';
import React, { Fragment } from 'react';
import { Outlet, Link as ReactLink } from 'react-router-dom';

const SecondaryLayout = () => {
  return (
    <Fragment>
      <header>
        <Link as={ReactLink} to='/'>
          BrandLogo
        </Link>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </Fragment>
  );
};

export default SecondaryLayout;
