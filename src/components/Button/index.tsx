import React from 'react';
import Link from 'next/link';
import { Props } from './types';
import useStyles from './css';
import Arrow from '../../icons/Arrow';
import Chevron from '../../icons/Chevron';
import DownloadIcon from '../../icons/DownloadIcon';

const icons = {
  arrow: Arrow,
  chevron: Chevron,
  download: DownloadIcon,
};

const Button: React.FC<Props> = (props) => {
  const {
    href,
    label,
    iconRotation,
    icon,
    iconColor,
    onClick,
    className,
  } = props;

  const classes = useStyles();

  const Icon = icons[icon];

  if (href) {
    return (
      <div
        className={[
          classes.button,
          className,
        ].filter(Boolean).join(' ')}
      >
        <Link href={href}>
          <a
            className={classes.anchor}
            onClick={onClick}
            {...props}
          >
            {label}
            {label && Icon && (
              <span className={classes.separator} />
            )}
            {Icon && (
              <Icon
                rotation={iconRotation}
                color={iconColor}
                size="m"
              />
            )}
          </a>
        </Link>
      </div>
    );
  }

  return (
    <button
      className={classes.button}
      onClick={onClick}
    >
      {label}
      {label && Icon && (
        <span className={classes.separator} />
      )}
      {Icon && (
        <Icon
          rotation={iconRotation}
          color={iconColor}
          size="m"
        />
      )}
    </button>
  );
};

export default Button;
