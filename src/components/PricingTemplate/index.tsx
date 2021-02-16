import React from 'react';
import { Props } from './types';
import useStyles from './css';

const PricingTemplate: React.FC<Props> = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.header}>
        Pricing
      </h1>
      <div className={classes.priceBlock}>
        <div className={classes.priceContent}>
          <div>
            0.005 per image
          </div>
          <div>
            Up to 500,000 images per month
          </div>
        </div>
      </div>
    </div>
  );
};


export default PricingTemplate;
