import { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
        <Head>
            <title>👨🏽‍💻 Melqui Sodré Desenvolvedor Front-End</title>
            <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
        </Head>
        <Component {...pageProps} />
    </>
  );
}

export default MyApp;
