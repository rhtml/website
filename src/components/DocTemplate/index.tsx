import React from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { Props } from './types';
import Jumplist from '../Jumplist';
import remarkTransforms from '../../utilities/remarkTransforms';

const DocTemplate: React.FC<Props> = (props) => {
  const {
    gitHubURL,
    markdown,
  } = props;

  return (
    <div>
      <div>
        <Jumplist
          list={[{
            label: 'hello',
            path: '/',
          }]}
        />
      </div>
      <Link href={gitHubURL}>
        <a target="_blank">
          Edit on GitHub
        </a>
      </Link>
      <ReactMarkdown
       plugins={[gfm]}
       renderers={remarkTransforms}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
};

export default DocTemplate;
