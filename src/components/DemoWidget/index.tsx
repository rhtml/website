import React from 'react';
import { Props } from './types';
import useStyles from './css';

const DemoWidget: React.FC<Props> = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      demo
    </div>
  );
};

export default DemoWidget;
