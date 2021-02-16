import React from 'react';
import { Props } from './types';
import useStyles from './css';

const InlineCode: React.FC<Props> = (props) => {
  const {
    value,
  } = props;

  const classes = useStyles();

  return (
    <code className={classes.code}>
      {value}
    </code>
  );
};

export default InlineCode;
