import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import GlobalCSS from '../wrappers/GlobalCSS';
import Header from '../components/Header';

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
      <Header />
      <Component {...pageProps} />
    </GlobalCSS>
  );
};

export default App;
