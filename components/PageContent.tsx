import React from 'react';
import Navigation from '@comps/Navigation/Navigation';
import { PasswordProtectedProvider } from '@comps/passwordProtected/PasswordProtectedProvider';
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
        <PasswordProtectedProvider>
          <Main className={styles.main} />
        </PasswordProtectedProvider>
        <footer className={styles.footer}>
          © 2021 hackantons -{' '}
          <a
            href="https://github.com/hackantons/yb-2021-frontend"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </footer>
      </div>
    </div>
  );
};

export default PageContent;
