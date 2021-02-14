import React from 'react';
import Link from 'next/link';
import { Props } from './types';
import useStyles from './css';

const Jumplist: React.FC<Props> = (props) => {
  const {
    list,
  } = props;

  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      {(Array.isArray(list) && list.length > 0) && (
        <ul className={classes.list}>
          {list.map((item, index) => {
            const {
              label,
            } = item;

            return (
              <li key={index}>
                <Link href="/">
                  <a>
                    {label}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Jumplist;
