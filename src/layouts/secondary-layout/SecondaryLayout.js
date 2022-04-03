import { Link } from '@chakra-ui/react';
import React, { Fragment } from 'react';
import { Outlet, Link as ReactLink } from 'react-router-dom';
import styles from './SecondaryLayout.module.css';

const SecondaryLayout = () => {
  return (
    <Fragment>
      <header className={styles.header}>
        <Link as={ReactLink} to='/'>
          BrandLogo
        </Link>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer></footer>
    </Fragment>
  );
};

export default SecondaryLayout;
