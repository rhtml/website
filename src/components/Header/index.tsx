import React from 'react';
import Link from 'next/link';
import { Props } from './types';
import useStyles from './css';
import Logo from '../Logo';

const Header: React.FC<Props> = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.logoWrapper}>
        <Link href="/">
          <a className={classes.logoAnchor}>
            <Logo className={classes.logoIcon} />
            <b>
              Rasterize HTML
            </b>
          </a>
        </Link>
      </div>
      <ul className={classes.menu}>
        <li>
          <Link href="/docs">
            <a className={classes.menuItem}>
              <b>
                Docs
              </b>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/pricing">
            <a className={classes.menuItem}>
              <b>
                Pricing
              </b>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
