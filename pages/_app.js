import Head from 'next/head';
import '../styles/globals.css';
import RootLayout from '../app/layout';

const MyApp = ({ Component, pageProps }) => (
  <RootLayout>
    <Head>
      <title>Metaversus</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
    </Head>
    <Component {...pageProps} />
  </RootLayout>
);

export default MyApp;
