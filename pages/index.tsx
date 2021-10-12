import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Badge2021 } from '@theme';
import PageContent from '@comps/PageContent';
import cn from '@utils/classnames';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <PageContent
      Main={({ className = '' }) => (
        <div className={cn(className, styles.container)}>
          <Head>
            <title>YB Smart Content Center</title>
          </Head>
          <Badge2021 className={styles.badge} />
          <h1>YB Smart Content Center</h1>
          <p className={styles.catchphrase}>
            The smart way to produce videos for live events
          </p>
        </div>
      )}
    />
  );
};

export default Home;
