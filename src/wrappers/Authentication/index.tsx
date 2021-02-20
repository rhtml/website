import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';
import { useRouter } from 'next/router';
import { fireRequest, requests } from '../../api';
import { useNotifications } from '../Notifications';

import {
  IAuthenticationContext,
} from './types';

const AuthenticationContext = createContext<IAuthenticationContext | Record<string, unknown>>({});
export const useAuthentication = (): IAuthenticationContext => useContext(AuthenticationContext);

const Authentication: React.FC = (props) => {
  const { setTimedNotification } = useNotifications();
  const { children } = props;
  const [exp, setExp] = useState(undefined); // in seconds
  const [user, setUser] = useState(undefined);
  const router = useRouter();
  const { pathname } = router;

  const isLoggedIn = user === undefined ? undefined : Boolean(user);

  const handleUser = useCallback((incomingUser) => {
    if (incomingUser) {
      setTimedNotification({
        id: 'loginSuccessful',
        message: 'You are now logged in',
      });
    }

    setUser(incomingUser);
  }, [setTimedNotification]);

  const refreshToken = useCallback(() => {
    if (isLoggedIn) {
      const makeRequest = async () => {
        const {
          res,
          json,
          err,
        } = await fireRequest({
          method: 'post',
          url: `${process.env.CMS_URL}/api/users/refresh-token`,
        });

        if (err) setUser(null);

        if (res) {
          const { status } = res;

          const {
            errors,
            exp: incomingExp,
          } = json;

          if (status === 200) setExp(incomingExp);
          if (errors) setUser(null);
        }
      };

      makeRequest();
    }
  }, [isLoggedIn]);

  const fetchMe = useCallback(() => {
    const makeRequest = async () => {
      const {
        res,
        err,
        json,
      } = await fireRequest({
        method: 'get',
        url: `${process.env.NEXT_PUBLIC_CMS_URL}/api/users/me`,
      });

      if (err) setUser(null);

      if (res) {
        const { status } = res;

        const {
          errors,
          user: incomingUser,
        } = json;

        if (status === 200) { handleUser(incomingUser); }
        if (errors) setUser(null);
      }
    };

    makeRequest();
  }, [handleUser]);

  const logOut = useCallback(async () => {
    setUser(null);
    requests.post({
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/users/logout`,
    });
    localStorage.removeItem('cancelledAuthReminder');
  }, []);

  // On mount, first check if the user is logged in
  useEffect(() => {
    fetchMe();
  }, [fetchMe]);

  // On every route change, refresh the token
  useEffect(() => {
    refreshToken();
  }, [pathname, refreshToken]);

  // coordinate an automatic force logout and redirection when the token expires
  useEffect(() => {
    let timerID;
    if (exp) {
      const now = Math.round((new Date()).getTime() / 1000);
      const remainingTime = -(now - exp);
      timerID = setTimeout(() => {
        logOut();
        router.push('/logged-out');
        setTimedNotification({
          id: 'inactiveLogOut',
          message: 'You have been logged out due to inactivity',
        });
      }, remainingTime * 1000);
    }
    return () => {
      if (timerID) clearTimeout(timerID);
    };
  }, [exp, logOut]);

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isLoggedIn,
        logOut,
        setUser: handleUser,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default Authentication;
