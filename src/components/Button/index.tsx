import React from 'react';
import Link from 'next/link';
import { Props } from './types';
import useStyles from './css';

const Button: React.FC<Props> = (props) => {
  const {
    href,
    label,
  } = props;

  const classes = useStyles();

  if (href) {
    return (
      <div className={classes.button}>
        <Link href={href}>
          <a
            className={classes.anchor}
            {...props}
          >
            {label}
          </a>
        </Link>
      </div>
    );
  }

  return (
    <button className={classes.button}>
      {label}
    </button>
  );
};

export default Button;
