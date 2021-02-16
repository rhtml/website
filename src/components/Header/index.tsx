import React from 'react';
import Link from 'next/link';
import { Props } from './types';
import useStyles from './css';
import Logo from '../Logo';

const Header: React.FC<Props> = () => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <div className={classes.maxWidth}>
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
