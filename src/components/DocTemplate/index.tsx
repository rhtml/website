import React from 'react';
import Link from 'next/link';
import { Props } from './types';
import Jumplist from '../Jumplist';
import useStyles from './css';
import Markdown from '../Markdown';
import Anchor from '../Anchor';
import PrevNext from '../PrevNext';
import MaxWidth from '../MaxWidth';

const DocTemplate: React.FC<Props> = (props) => {
  const {
    gitHubURL,
    markdown,
    jumplist,
  } = props;

  const classes = useStyles();

  return (
    <div className={classes.docTemplate}>
      <MaxWidth className={classes.maxWidth}>
        <div className={classes.sidebar}>
          <Jumplist list={jumplist}/>
        </div>
        <div className={classes.content}>
          <div className={classes.markdownWrapper}>
            <Markdown markdown={markdown} />
          </div>
          <PrevNext list={jumplist} />
          <footer className={classes.footer}>
            <Link
              href={gitHubURL}
              passHref
            >
              <Anchor target="_blank">
                Edit this page on GitHub
              </Anchor>
            </Link>
          </footer>
        </div>
      </MaxWidth>
    </div>
  );
};

export default DocTemplate;
