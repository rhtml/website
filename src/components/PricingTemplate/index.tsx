import React from 'react';
import { Props } from './types';
import useStyles from './css';
import Button from '../Button';

const PricingTemplate: React.FC<Props> = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <header className={classes.header}>
        <h1>
          Only pay for what you use
        </h1>
      </header>
      <div className={classes.priceBlock}>
        <div className={classes.maxWidth}>
          <div className={classes.tier}>
            <div>
              <b>
                10 images per month
              </b>
            </div>
            <div className={classes.tierTitle}>
              <h2 className={classes.jumbo}>
                Free
              </h2>
            </div>
            <Button label="Get started" />
          </div>
          <div className={classes.tier}>
            <div>
              <b>
                500,000 imgs/mo
              </b>
            </div>
            <div className={classes.tierTitle}>
              <div className={classes.jumboWrapper}>
                <b className={classes.pricePrefix}>
                  $
                </b>
                <h2 className={classes.jumbo}>
                  0.005
                </h2>
                <b>
                  per img
                </b>
              </div>
            </div>
            <Button label="Buy a license" />
          </div>
          <div className={classes.tier}>
            <div>
              <b>
                500,000+ imgs/mo
              </b>
            </div>
            <div className={classes.tierTitle}>
              <h2 className={classes.jumbo}>
                Let's Talk
              </h2>
            </div>
            <Button label="Contact us" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingTemplate;
