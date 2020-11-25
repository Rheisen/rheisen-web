import React from 'react';

import PageHead, { PageHeadProps } from 'components/page-head';
import Header from 'components/header';
import Footer from 'components/footer';

import styles from './layout.module.scss';

interface LayoutProps extends PageHeadProps {
  children?: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
  return (
    <>
      <PageHead {...props} />
      <Header />
      <div className={styles.contentWrapper}>{props.children}</div>
      <Footer />
    </>
  );
};
