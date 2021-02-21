import React from 'react';
import { Props } from './types';
import useIconStyles from '../useIconStyles';

const CloseIcon: React.FC<Props> = (props) => {
  const { color, rotation, className, size } = props;
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
        x1="2"
        y1="2"
        x2="13"
        y2="13"
      />
      <line
        className={classes.stroke}
        x1="13"
        y1="2"
        x2="2"
        y2="13"
      />
    </svg>
  );
};

export default CloseIcon;
