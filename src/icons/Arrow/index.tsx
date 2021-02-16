import React from 'react';
import { Props } from './types';
import useIconStyles from '../useIconStyles';

const Arrow: React.FC<Props> = (props) => {
  const {
    className,
    color,
    size = 'm',
    rotation,
  } = props;

  const iconClasses = useIconStyles({ color, rotation });

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 114.14 84.85"
      className={[
        iconClasses.wrapper,
        className,
        size && iconClasses[size],
        rotation && iconClasses.rotation,
      ].filter(Boolean).join(' ')}
    >
      <line
        className={iconClasses.stroke}
        y1="42.43"
        x2="100"
        y2="42.43"
      />
      <polyline
        className={iconClasses.stroke}
        points="64.64 7.07 100 42.43 64.64 77.78"
      />
  </svg>
  );
};


export default Arrow;
