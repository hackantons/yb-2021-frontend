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
        <footer className={styles.footer}>
          <p>
            Written in 24h at{' '}
            <a
              href="https://hackathon.bscyb.ch/"
              target="_blank"
              rel="noopener noreferrer"
            >
              YB Hackathon
            </a>{' '}
            2021 by{' '}
            <a
              href="https://github.com/JonnyBurger"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jonny Burger
            </a>
            ,{' '}
            <a
              href="https://github.com/simonmesserli"
              target="_blank"
              rel="noopener noreferrer"
            >
              Simon Messerli
            </a>
            ,{' '}
            <a
              href="https://github.com/JonasNiestroj"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jonas Niestroj
            </a>{' '}
            and{' '}
            <a
              href="https://github.com/nico-martin/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nico Martin
            </a>
            . The code is available on{' '}
            <a
              href="https://github.com/hackantons/yb-2021-frontend"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            . Powered by {' '}
            <a
              href="https://aws.amazon.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              AWS
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default PageContent;
