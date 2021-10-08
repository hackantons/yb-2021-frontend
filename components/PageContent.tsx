import React from 'react';
import styles from './PageContent.module.css';

const PageContent = ({
  className = '',
  children,
}: {
  className?: string;
  children?: JSX.Element | Array<JSX.Element>;
}) => {
  return (
    <div className={styles.root}>
      <header className={styles.header}>Logo</header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}> footer</footer>
    </div>
  );
};

export default PageContent;
