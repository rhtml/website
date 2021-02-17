import React from 'react';
import { Props } from './types';
import useStyles from './css';
import MaxWidth from '../MaxWidth';
import DemoWidget from '../DemoWidget';

const HomeHero: React.FC<Props> = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <MaxWidth>
        <header className={classes.header}>
          <h1>
          Take screenshots of URLs or HTML
        </h1>
      </header>
      <div className={classes.widgetWrapper}>
        <DemoWidget />
      </div>
     </MaxWidth>
    </div>
  );
};

export default HomeHero;
