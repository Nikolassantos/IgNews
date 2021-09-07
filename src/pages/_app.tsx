import { AppProps } from 'next/app';
import { Fragment } from 'react';
import '../../styles/global.scss';
import Header from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Header />
      <Component {...pageProps} />;
    </Fragment>
  );
}

export default MyApp;
