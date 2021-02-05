import React from 'react';
import Link from 'next/link';
import { Props } from './types';

const Jumplist: React.FC<Props> = (props) => {
  const {
    list,
  } = props;

  if (Array.isArray(list) && list.length > 0) {
    <ul>
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
    </ul>;
  }

  return null;
};

export default Jumplist;
