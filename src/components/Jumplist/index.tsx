import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Props } from './types';
import useStyles from './css';

const List: React.FC<Props> = (props) => {
  const {
    list,
    isNested,
  } = props;

  const { asPath } = useRouter();

  const classes = useStyles();

  if (Array.isArray(list) && list.length > 0) {
    return (
      <ul
        className={[
          classes.list,
          isNested && classes.isNested,
        ].filter(Boolean).join(' ')}
      >
        {list.map((item, index) => {
          const {
            label,
            path,
            list: nestedList,
          } = item;

          const isActive = asPath.startsWith(path);

          if (path) {
            return (
              <li key={index}>
                <Link href={path}>
                  <a
                    className={[
                      classes.anchor,
                      isActive && classes.isActive,
                    ].filter(Boolean).join(' ')}
                  >
                    {label}
                  </a>
                </Link>
              </li>
            );
          }

          if (nestedList) {
            const nestedHasActive = nestedList.find(({ path: nestedPath }) => asPath.startsWith(nestedPath));

            return (
              <li key={index}>
                <div
                  className={[
                    classes.nestedListLabel,
                    nestedHasActive && classes.isActive,
                  ].filter(Boolean).join(' ')}
                >
                  {label}
                </div>
                  <List
                    list={nestedList}
                    isNested
                  />
              </li>
            );
          }

          return null;
        })}
      </ul>
    );
  }

  return null;
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
