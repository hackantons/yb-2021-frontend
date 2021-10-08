import React from 'react';
import Navigation from '@comps/Navigation/Navigation';
import cn from '@utils/classnames';
import styles from './PageContent.module.css';

const PageContent = ({
  className = '',
  children,
}: {
  className?: string;
  children?: JSX.Element | Array<JSX.Element>;
}) => {
  return (
    <div className={cn(className, styles.root)}>
      <Navigation className={styles.navigation} />
      <div className={styles.content}>
        <main className={styles.main}>{children}</main>
        <footer className={styles.footer}> footer</footer>
      </div>
    </div>
  );
};

export default PageContent;
