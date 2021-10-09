import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import CreateVideo from '@comps/CreateVideo';
import PageContent from '@comps/PageContent';
import cn from '@utils/classnames';
import styles from '../styles/Home.module.css';

//const VIDEO_TYPES: Record<string, JSX.Element> = {};

const Create: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Event View - YB MEDIA CENTER</title>
      </Head>
      <PageContent
        Main={({ className = '' }) => <CreateVideo className={className} />}
      />
    </React.Fragment>
  );
};

export default Create;
