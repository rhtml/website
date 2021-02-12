import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import gfm from 'remark-gfm';
import Jumplist from '../../../components/Jumplist';
import remarkTransforms from '../../../utilities/remarkTransforms';
import getPathsFromGitHubTree from '../../../utilities/getPathsFromGitHubTree';
import parseGitHubFileContents from '../../../utilities/parseGitHubFileContents';
import { getGitHubMasterTree, getGitHubFile } from '../../../api';

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
  const gitHubTree = await getGitHubMasterTree();
  const paths = getPathsFromGitHubTree(gitHubTree);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const {
    params: { topic: docSlug },
  } = context;

  const gitHubFile = await getGitHubFile(`${docSlug}.md`);
  const { html_url } = gitHubFile; // eslint-disable-line camelcase
  const parsedContents = parseGitHubFileContents(gitHubFile);

  return {
    props: {
      markdownFile: parsedContents,
      gitHubURL: html_url,
    },
  };
};

export default Doc;
