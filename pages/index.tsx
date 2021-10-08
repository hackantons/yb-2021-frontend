import type { NextPage } from 'next';
import PageContent from '@comps/PageContent';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <PageContent>
      <div className={styles.container}>
        <h1>Hello World</h1>
      </div>
    </PageContent>
  );
};

export default Home;
