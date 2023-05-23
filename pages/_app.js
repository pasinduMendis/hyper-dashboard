/* eslint-disable @next/next/no-sync-scripts */
import React from 'react';

const MyApp = ({ Component, pageProps }) => {
  return (
    <React.Fragment>
      <Component {...pageProps} />
    </React.Fragment>
  );
};

export default MyApp;
