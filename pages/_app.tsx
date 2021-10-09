import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,user-scalable=yes"
          key="viewport"
        />
        <meta name="robots" content="all" key="robots" />
        <link rel="manifest" href="./manifest.json" />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}
export default MyApp;
