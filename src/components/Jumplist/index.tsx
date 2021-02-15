import React from 'react';
import Link from 'next/link';
import { Props } from './types';
import useStyles from './css';

const List: React.FC<Props> = (props) => {
  const {
    list,
  } = props;

  if (Array.isArray(list) && list.length > 0) {
    return (
      <ul>
        {list.map((item, index) => {
          const {
            label,
            path,
            list: nestedList,
          } = item;

          if (path) {
            return (
              <li key={index}>
                <Link href={path}>
                  <a>
                    {label}
                  </a>
                </Link>
              </li>
            );
          }

          if (nestedList) {
            return (
              <div key={index}>
                {label}
                <List list={nestedList} />
              </div>
            );
          }

          return null;
        })}
      </ul>
    );
  }
};

const Jumplist: React.FC<Props> = (props) => {
  const {
    list,
  } = props;

  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <List list={list} />
    </div>
  );
};

export default Jumplist;
