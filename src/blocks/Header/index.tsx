import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Props } from './types';
import useStyles from './css';
import Logo from '../../components/Logo';
import MaxWidth from '../../components/MaxWidth';
import AuthDrawer from '../../components/AuthDrawer';
import { useAuthentication } from '../../wrappers/Authentication';
import Button from '../../components/Button';

const Header: React.FC<Props> = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const router = useRouter();
  const { pathname } = router;

  const {
    isLoggedIn,
    user,
  } = useAuthentication();

  const classes = useStyles();

  return (
    <header className={classes.header}>
      <MaxWidth className={classes.maxWidth}>
        <Link href="/">
          <a className={classes.logoAnchor}>
            <Logo className={classes.logoIcon} />
            <b>
              Rasterize HTML
            </b>
          </a>
        </Link>
        <ul className={classes.menu}>
          <li className={classes.menuItem}>
            <Link href="/docs">
              <a className={classes.itemAnchor}>
                <b>
                  Docs
                </b>
              </a>
            </Link>
          </li>
          <li className={classes.menuItem}>
            <Link href="/pricing">
              <a className={classes.itemAnchor}>
                <b>
                  Pricing
                </b>
              </a>
            </Link>
          </li>
          {isLoggedIn && (
            <li className={classes.menuItem}>
              <Link
                href="/account"
              >
                <a
                  className={[
                    classes.accountLink,
                    pathname === '/account' && classes.accountLinkActive,
                  ].filter(Boolean).join(' ')}
                    >
                  <b>
                    {user?.email || 'Account'}
                  </b>
                </a>
              </Link>
            </li>
          )}
            {!isLoggedIn && (
              <li className={classes.menuItem}>
                <button
                  className={classes.itemAnchor}
                  onClick={() => {
                    setDrawerIsOpen(!drawerIsOpen);
                  }}
                >
                  <b>
                    Login
                  </b>
                </button>
              </li>
            )}
          <li className={classes.menuItem}>
            <Button
              label="Buy a license"
              href="/checkout"
              size="s"
            />
          </li>
        </ul>
        <AuthDrawer
          isOpen={drawerIsOpen}
          setIsOpen={setDrawerIsOpen}
        />
      </MaxWidth>
    </header>
  );
};

export default Header;
