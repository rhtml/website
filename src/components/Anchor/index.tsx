import React from 'react';
import { Props } from './types';
import useStyles from './css';

const Anchor = React.forwardRef<HTMLAnchorElement, Props>((props, ref) => {
  const {
    label,
    unstyled,
    ...rest
  } = props;

  const classes = useStyles();

  return (
    <a
      className={[
        classes.anchor,
        unstyled && classes.unstyled,
      ].filter(Boolean).join(' ')}
      {...rest}
      ref={ref}
    >
      {label}
    </a>
  );
});

export default Anchor;
