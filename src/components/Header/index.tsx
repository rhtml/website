import React from 'react';
import Link from 'next/link';
import { Props } from './types';
import useStyles from './css';

const Header: React.FC<Props> = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.logo}>
        <Link href="/">
          <a>
            Rasterize HTML
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
