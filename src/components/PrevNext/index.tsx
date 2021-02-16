import Link from 'next/link';
import React from 'react';
import Chevron from '../../icons/Chevron';
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
          <a className={`${classes.prev} ${classes.item}`}>
            <div className={classes.label}>
              <div className={classes.arrowIcon}>
                <Chevron
                  color="darkGray"
                  rotation="180"
                />
              </div>
              <b>
                Previous
              </b>
            </div>
            {prev.label}
          </a>
        </Link>
      )}
      {next && (
        <Link href={next.path}>
          <a className={`${classes.next} ${classes.item}`}>
            <div className={classes.label}>
              <b>
                Up Next
              </b>
              <div className={classes.arrowIcon}>
                <Chevron color="darkGray" />
              </div>
            </div>
            {next.label}
          </a>
        </Link>
      )}
    </div>
  );
};

export default PrevNext;
