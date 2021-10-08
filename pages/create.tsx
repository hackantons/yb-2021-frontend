import React from 'react';
import type { NextPage } from 'next';
import CreateVideo from '@comps/CreateVideo';
import PageContent from '@comps/PageContent';

//const VIDEO_TYPES: Record<string, JSX.Element> = {};

const Create: NextPage = () => {
  return (
    <PageContent>
      <CreateVideo />
    </PageContent>
  );
};

export default Create;
