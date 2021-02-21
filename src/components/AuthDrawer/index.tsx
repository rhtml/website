import React, { Fragment, useCallback, useEffect, useState } from 'react';
import useDrawerStyles from './css';
import LogIn from './LogIn';
import SignUp from './SignUp';
import ResetPassword from './ResetPassword';
import CloseIcon from '../../icons/CloseIcon';

const drawers = {
  resetPassword: ResetPassword,
  logIn: LogIn,
  signUp: SignUp,
};

type Props = {
  isOpen?: boolean,
  setIsOpen?: (string) => void
}

const AuthDrawer: React.FC<Props> = (props) => {
  const {
    isOpen,
    setIsOpen,
  } = props;

  const drawerClasses = useDrawerStyles();
  const [content, setContent] = useState('logIn');

  const DrawerContent = drawers[content];

  const bindEsc = useCallback((e) => {
    const { keyCode } = e;
    if (keyCode === 27) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', bindEsc, false);
    return () => document.removeEventListener('keydown', bindEsc, false);
  }, [bindEsc]);

  return (
    <div
      className={[
        drawerClasses.modal,
        isOpen && drawerClasses.isOpen,
      ].filter(Boolean).join(' ')}
    >
      <Fragment>
        <div
          className={drawerClasses.closeButton}
          onClick={() => setIsOpen(false)}
        >
          <CloseIcon />
        </div>
        {DrawerContent && <DrawerContent setContent={setContent} />}
      </Fragment>
    </div>
  );
};

export default AuthDrawer;
