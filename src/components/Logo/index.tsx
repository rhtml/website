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
      viewBox="0 0 400 400"
      className={[
        classes.wrapper,
        className,
      ].filter(Boolean).join(' ')}
    >
      <polygon className="stroke" points="66.67 133.33 66.67 333.33 333.33 333.33 333.33 66.67 133.33 66.67 66.67 133.33"/>
      <polygon className="fill-black" points="66.67 333.33 333.33 333.33 333.33 66.67 66.67 333.33"/>
      <line className="stroke" x1="100" y1="266.67" x2="133.33" y2="266.67"/>
      <line className="stroke" x1="100" y1="233.33" x2="166.67" y2="233.33"/>
      <line className="stroke" x1="100" y1="200" x2="200" y2="200"/>
      <line className="stroke" x1="100" y1="166.67" x2="233.33" y2="166.67"/>
      <line className="stroke" x1="166.67" y1="133.33" x2="266.67" y2="133.33"/>
      <polyline className="stroke" points="133.33 66.67 133.33 133.33 66.67 133.33"/>
      <circle className="fill-white" cx="268.85" cy="200" r="15.5"/>
      <polygon className="fill-white" points="146.67 300 200 300 300 300 260 260 240 280 203.33 243.33 146.67 300"/>
      <polyline className="stroke" points="400 66.67 333.33 66.67 333.33 0"/>
      <polyline className="stroke" points="66.67 400 66.67 333.33 0 333.33"/>
      <line className="stroke" x1="66.67" y1="333.33" x2="333.33" y2="66.67"/>
    </svg>
  );
};


export default Logo;
