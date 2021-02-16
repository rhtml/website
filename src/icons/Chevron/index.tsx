import React from 'react';
import { Props } from './types';
import useIconStyles from '../useIconStyles';

const Chevron: React.FC<Props> = (props) => {
  const {
    className,
    color,
    size = 's',
    rotation,
  } = props;

  const iconClasses = useIconStyles({ color, rotation });

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 56.57 84.85"
      className={[
        iconClasses.wrapper,
        className,
        size && iconClasses[size],
        rotation && iconClasses.rotation,
      ].filter(Boolean).join(' ')}
    >
      <polyline
        className={iconClasses.stroke}
        points="7.07 7.07 42.43 42.43 7.07 77.78"
      />
</svg>

  );
};


export default Chevron;
