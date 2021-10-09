import type { NextPage } from 'next';
import Head from 'next/head';
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
          <h1>center.bscyb.dev</h1>
        </div>
      )}
    />
  );
};

export default Home;
