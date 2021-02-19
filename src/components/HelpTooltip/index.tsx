import React, { useState } from 'react';
import { Props } from './types';
import useStyles from './css';

const HelpTooltip: React.FC<Props> = (props) => {
  const {
    className,
    onClick,
    Content,
  } = props;

  const [isOpen, setIsOpen] = useState(false);

  const classes = useStyles();

  return (
    <div
      className={[
        className,
        classes.helpTooltip,
        isOpen && classes.isOpen,
      ].filter(Boolean).join(' ')}
    >
      <div
        className={classes.button}
        onClick={() => {
          setIsOpen(!isOpen);
          if (typeof onClick === 'function') onClick();
        }}
      >
        <div className={classes.icon}>
          ?
        </div>
      </div>
      {Content && (
        <div className={classes.content}>
          {Content}
        </div>
      )}
    </div>
  );
};

export default HelpTooltip;
