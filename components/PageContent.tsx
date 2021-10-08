import React from 'react';
import Navigation from '@comps/Navigation/Navigation';
import cn from '@utils/classnames';
import styles from './PageContent.module.css';

const PageContent = ({
  className = '',
  Main,
}: {
  className?: string;
  Main: Function;
}) => {
  return (
    <div className={cn(className, styles.root)}>
      <Navigation className={styles.navigation} />
      <div className={styles.content}>
        <Main className={styles.main} />
        <footer className={styles.footer}>© 2021 hackantons</footer>
      </div>
    </div>
  );
};

export default PageContent;
