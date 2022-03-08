import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../../components/common';
import styles from './PrimaryLayout.module.css';

const PrimaryLayout = () => {
  return (
    <Fragment>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
};

export default PrimaryLayout;
