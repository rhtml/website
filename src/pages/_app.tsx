import React, { useEffect } from 'react';
import { AppProps } from 'next/app';

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
    <Component {...pageProps} />
  );
};

export default App;
