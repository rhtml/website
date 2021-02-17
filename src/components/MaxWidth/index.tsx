import React from 'react';
import { Props } from './types';
import useStyles from './css';

const MaxWidth: React.FC<Props> = (props) => {
  const {
    children,
    className,
  } = props;

  const classes = useStyles();

  return (
    <div
      className={[
        classes.maxWidth,
        className,
      ].filter(Boolean).join(' ')}
    >
      {children}
    </div>
  );
};


export default MaxWidth;
