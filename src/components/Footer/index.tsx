import React from 'react';
import Link from 'next/link';
import { Props } from './types';
import useStyles from './css';
import Anchor from '../Anchor';

const Footer: React.FC<Props> = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div className={classes.maxWidth}>
        <div className={classes.copyrightWrapper}>
          <Link href="/">
            <a className={classes.logoAnchor}>
              <b>
                Rasterize HTML
              </b>
            </a>
          </Link>
          &nbsp;&mdash;&nbsp;
          Copyright
          &nbsp;&copy;&nbsp;
          {`${new Date().getFullYear()}`}
          &nbsp;
          <Anchor
            href="https://github.com/jacobsfletch"
            target="_blank"
            rel="noopener noreferrer"
            unstyled
          >
            Jacob Fletcher
          </Anchor>
        </div>
        <div className={classes.social}>
          <Anchor
            href="https://github.com/rhtml/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Anchor>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
