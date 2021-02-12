import React from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { Props } from './types';
import Jumplist from '../Jumplist';
import remarkTransforms from '../../utilities/remarkTransforms';
import useStyles from './css';

const DocTemplate: React.FC<Props> = (props) => {
  const {
    gitHubURL,
    markdown,
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
          list={[{
            label: 'hello',
            path: '/',
          }]}
        />
      </div>
      <div className={classes.content}>
        <ReactMarkdown
          plugins={[gfm]}
          renderers={remarkTransforms}
        >
          {markdown}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default DocTemplate;
