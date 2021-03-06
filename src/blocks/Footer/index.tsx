import React from 'react';
import Link from 'next/link';
import { Props } from './types';
import useStyles from './css';
import Anchor from '../../components/Anchor';
import MaxWidth from '../../components/MaxWidth';

const Footer: React.FC<Props> = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <MaxWidth className={classes.maxWidth}>
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
            unstyled={true}
            label="Jacob Fletcher"
          />
        </div>
        <div className={classes.social}>
          <Anchor
            href="https://github.com/rhtml/docs"
            target="_blank"
            rel="noopener noreferrer"
            label="GitHub"
          />
        </div>
      </MaxWidth>
    </footer>
  );
};

export default Footer;
