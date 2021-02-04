import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import GlobalCSS from '../wrappers/GlobalCSS';

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
      <Component {...pageProps} />
    </GlobalCSS>
  );
};

export default App;
