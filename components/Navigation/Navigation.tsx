import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Icon, IconType } from '@theme';
import cn from '@utils/classnames';
import styles from './Navigation.module.css';

const LINKS: Record<
  string,
  {
    path: string;
    icon: IconType;
    title: string;
  }
> = {
  create: {
    path: '/',
    icon: 'plus',
    title: 'Create',
  },
};

const Navigation = ({ className = '' }: { className?: string }) => {
  const { route } = useRouter();

  return (
    <nav className={cn(className, styles.root)}>
      <Link href="/">
        <a
          className={cn(styles.link, {
            [styles.linkActive]: route === '/',
          })}
        >
          <img src="yb-logo.svg" />
        </a>
      </Link>
      {Object.entries(LINKS).map(([key, link]) => (
        <Link key={key} href={link.path}>
          <a
            className={cn(styles.link, {
              [styles.linkActive]: route === link.path,
            })}
          >
            <span>{link.title}</span>
          </a>
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
