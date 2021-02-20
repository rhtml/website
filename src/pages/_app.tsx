import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import GlobalCSS from '../wrappers/GlobalCSS';
import Header from '../blocks/Header';
import Footer from '../blocks/Footer';
import Notifications from '../wrappers/Notifications';
import Authentication from '../wrappers/Authentication';

type Props = {
  pageProps: Record<string, unknown>
}

const App: React.FC<Props> = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    const style = document.getElementById('server-side-styles');

    if (style) {
      style.parentNode.removeChild(style);
    }
  });

  return (
    <GlobalCSS>
      <Notifications>
        <Authentication>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </Authentication>
      </Notifications>
    </GlobalCSS>
  );
};

export default App;
