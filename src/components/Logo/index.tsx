import React from 'react';
import { Props } from './types';
import useStyles from './css';

const Logo: React.FC<Props> = (props) => {
  const {
    className,
  } = props;

  const classes = useStyles();

  return (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 500 520"
    className={[
      classes.wrapper,
      className,
    ].filter(Boolean).join(' ')}
  >
    <line y1="299.82" x2="500" y2="299.82"/>
    <polyline points="301.25 10 301.25 116.39 407.63 116.39"/>
    <polygon points="407.63 116.39 301.25 10 92.37 10 92.37 224.14 92.37 510 407.63 510 407.63 116.39"/>
    <polygon points="361.65 454.88 271.54 364.77 223 413.31 201.05 391.36 138.35 454.06 361.65 454.88"/>
    <circle cx="345.79" cy="364.77" r="15.86"/>
  </svg>
  );
};


export default Logo;
