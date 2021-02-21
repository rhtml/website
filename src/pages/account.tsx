import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import AccountTemplate from '../templates/AccountTemplate';
import { useAuthentication } from '../wrappers/Authentication';

const Account: React.FC = () => {
  const {
    isLoggedIn,
  } = useAuthentication();

  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn === false) {
      router.push('/not-logged-in');
    }
  }, [router, isLoggedIn]);

  if (isLoggedIn === true) {
    return (
      <div>
        <AccountTemplate />
      </div>
    );
  }

  return null;
};

export default Account;
