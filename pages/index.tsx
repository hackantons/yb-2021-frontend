import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Loader } from '@theme';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>Hello World</h1>
      <Loader /> Hello
    </div>
  );
};

export default Home;
