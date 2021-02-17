
import React from 'react';
import useIconStyles from '../useIconStyles';
import { Props } from './types';

const DownloadIcon: React.FC<Props> = (props) => {
  const {
    color,
    rotation,
    className,
    size,
  } = props;

  const classes = useIconStyles({ color, rotation });

  return (
    <svg
      className={[
        classes.wrapper,
        className,
        size && classes[size],
      ].filter(Boolean).join(' ')}
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        className={classes.stroke}
        x1="7.5"
        x2="7.5"
        y2="10"
      />
      <line
        className={classes.stroke}
        y1="14"
        x2="15"
        y2="14"
      />
      <polyline
        className={classes.stroke}
        points="10.5 7 7.5 10 4.5 7"
      />
    </svg>
  );
};

export default DownloadIcon;
