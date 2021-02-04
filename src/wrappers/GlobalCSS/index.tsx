import React, { Fragment } from 'react';
import useStyles from './css';

const GlobalCSS: React.FC = ({ children }) => {
  useStyles();
  return (
    <Fragment>
      {children}
    </Fragment>
  );
};

export default GlobalCSS;
