import React from 'react';

import '../styles/globals.css';

import { MenuTop } from '../components/MenuTop';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function MyApp({ Component, pageProps }) {
  return (
    <>
      <MenuTop />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
