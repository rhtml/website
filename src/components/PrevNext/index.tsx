import Link from 'next/link';
import React from 'react';
import useStyles from './css';
import getPrevNext from './getPrevNext';
import { Props } from './types';

const PrevNext: React.FC<Props> = (props) => {
  const {
    list,
  } = props;

  const classes = useStyles();

  const {
    prev,
    next,
  } = getPrevNext(list);

  return (
    <div className={classes.wrapper}>
      {prev && (
        <Link href={prev.path}>
        <a className={classes.prev}>
          <h4>
            Previous
          </h4>
          {prev.label}
        </a>
        </Link>
      )}
      {next && (
        <Link href={next.path}>
          <a className={classes.next}>
          <h4>
            Up Next
          </h4>
          {next.label}
          </a>
        </Link>
      )}
    </div>
  );
};

export default PrevNext;
