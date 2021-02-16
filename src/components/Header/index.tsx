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
            <span>
              Rasterize HTML
            </span>
          </a>
        </Link>
      </div>
      <ul className={classes.menu}>
        <li>
          <Link href="/docs">
            <a>
              Docs
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
