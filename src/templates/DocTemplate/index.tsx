import React from 'react';
import Link from 'next/link';
import { Props } from './types';
import Jumplist from '../../components/Jumplist';
import useStyles from './css';
import Markdown from '../../components/Markdown';
import Anchor from '../../components/Anchor';
import PrevNext from '../../components/PrevNext';
import MaxWidth from '../../components/MaxWidth';

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
              <Anchor
                target="_blank"
                label="Edit this page on GitHub"
               />
            </Link>
          </footer>
        </div>
      </MaxWidth>
    </div>
  );
};

export default DocTemplate;
