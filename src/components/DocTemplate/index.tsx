import React from 'react';
import Link from 'next/link';
import { Props } from './types';
import Jumplist from '../Jumplist';
import useStyles from './css';
import Markdown from '../Markdown';

const DocTemplate: React.FC<Props> = (props) => {
  const {
    gitHubURL,
    markdown,
    jumplist,
  } = props;

  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.sidebar}>
        <Link href={gitHubURL}>
          <a target="_blank">
            Edit on GitHub
          </a>
        </Link>
        <Jumplist
          list={jumplist}
        />
      </div>
      <div className={classes.content}>
        <Markdown markdown={markdown} />
      </div>
    </div>
  );
};

export default DocTemplate;
