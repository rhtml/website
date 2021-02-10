import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import gfm from 'remark-gfm';
import Jumplist from '../../../components/Jumplist';
import remarkTransforms from '../../../utilities/remarkTransforms';
import getPathsFromGitHubTree from '../../../utilities/getPathsFromGitHubTree';
import parseGitHubFile from '../../../utilities/parseGitHubFile';

type Props = {
  markdownFile: string,
  gitHubURL: string
}

const Doc: React.FC<Props> = (props) => {
  const {
    markdownFile,
    gitHubURL,
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
        {markdownFile}
      </ReactMarkdown>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://api.github.com/repos/rhtml/docs/git/trees/master?recursive=1', {
    method: 'GET',
    headers: {
      Accept: 'application/vnd.github.v3+json.html',
    },
  });

  const json = await res.json();
  const { tree: masterTree } = json;
  const paths = getPathsFromGitHubTree(masterTree);

  return {
    paths,
    fallback: false,
  };
};


export const getStaticProps: GetStaticProps = async (context) => {
  const {
    params: { topic: docSlug },
  } = context;

  const res = await fetch(`https://api.github.com/repos/rhtml/docs/contents/${docSlug}.md`, {
    method: 'GET',
    headers: {
      Accept: 'application/vnd.github.v3+json.html',
    },
  });

  const json = await res.json();
  const { html_url } = json; // eslint-disable-line camelcase

  return {
    props: {
      markdownFile: parseGitHubFile(json),
      gitHubURL: html_url,
    },
  };
};

export default Doc;
