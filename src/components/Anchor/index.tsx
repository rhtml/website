import React from 'react';
import { Props } from './types';
import useStyles from './css';

const Anchor = React.forwardRef<HTMLAnchorElement, Props>((props, ref) => {
  const {
    children,
  } = props;

  const classes = useStyles();

  return (
    <a
      className={classes.anchor}
      {...props}
      ref={ref}
    >
      {children}
    </a>
  );
});

export default Anchor;
