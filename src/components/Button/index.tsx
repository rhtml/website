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
    size = 'm',
  } = props;

  const classes = useStyles();

  const Icon = icons[icon];

  const classList = [
    classes.button,
    className,
    size && classes[size],
  ].filter(Boolean).join(' ');

  if (href) {
    return (
      <div className={classList}>
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
      className={classList}
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
