import React from 'react';
import { Props } from './types';
import useStyles from './css';

const Anchor = React.forwardRef<HTMLAnchorElement, Props>((props, ref) => {
  const {
    children,
    unstyled,
  } = props;

  const classes = useStyles();

  return (
    <a
      className={[
        classes.anchor,
        unstyled && classes.unstyled,
      ].filter(Boolean).join(' ')}
      {...props}
      ref={ref}
    >
      {children}
    </a>
  );
});

export default Anchor;
