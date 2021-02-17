import React from 'react';
import { Props } from './types';
import useStyles from './css';
import EditableCodeBlock from '../EditableCodeBlock';

const DemoWidget: React.FC<Props> = () => {
  const classes = useStyles();

  return (
    <div className={classes.demoWidget}>
    <div className={classes.codeWrapper}>
      <EditableCodeBlock />
    </div>
    </div>
  );
};

export default DemoWidget;
