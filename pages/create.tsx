import React from 'react';
import type { NextPage } from 'next';
import CreateVideo from '@comps/CreateVideo';
import PageContent from '@comps/PageContent';
import styles from '../styles/Home.module.css';

//const VIDEO_TYPES: Record<string, JSX.Element> = {};

const Create: NextPage = () => {
  return (
    <PageContent>
      <CreateVideo />
    </PageContent>
  );
};

export default Create;
