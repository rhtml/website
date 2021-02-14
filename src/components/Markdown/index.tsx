import React from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { Props } from './types';
import renderers from './renderers';

const Markdown: React.FC<Props> = (props) => {
  const {
    markdown,
  } = props;

  return (
    <ReactMarkdown
      plugins={[gfm]}
      renderers={renderers}
    >
      {markdown}
    </ReactMarkdown>
  );
};

export default Markdown;
