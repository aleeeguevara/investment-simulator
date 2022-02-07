// 3rd parties
import Head from 'next/head';
import PropTypes from 'prop-types';

// styles
import GlobalStyle from '@/components/GlobalStyle/styles';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
      </Head>

      <GlobalStyle />

      <Component {...pageProps} />
    </>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape({}).isRequired,
};

export default App;
