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
            <title>YB MEDIA CENTER</title>
          </Head>
          <h1>YB Media Center</h1>
        </div>
      )}
    />
  );
};

export default Home;
