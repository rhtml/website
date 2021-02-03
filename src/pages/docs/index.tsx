import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const RootDocsRedirect: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/docs/getting-started');
  }, []);

  return null;
};

export default RootDocsRedirect;
