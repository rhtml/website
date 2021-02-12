import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import getPathsFromGitHubTree from '../../../utilities/getPathsFromGitHubTree';
import parseGitHubFileContents from '../../../utilities/parseGitHubFileContents';
import { getGitHubMasterTree, getGitHubFile } from '../../../api';
import DocTemplate from '../../../components/DocTemplate';

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
    <DocTemplate
      gitHubURL={gitHubURL}
      markdown={markdownFile}
    />
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const gitHubTree = await getGitHubMasterTree();
  const paths = getPathsFromGitHubTree(gitHubTree, 2);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const {
    params: {
      topic: docTopic,
      doc: docSlug,
    },
  } = context;

  const gitHubFile = await getGitHubFile(`${docTopic}/${docSlug}.md`);
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
