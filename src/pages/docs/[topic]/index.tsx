import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import getPathsFromGitHubTree from '../../../utilities/getPathsFromGitHubTree';
import parseGitHubFileContents from '../../../utilities/parseGitHubFileContents';
import { getGitHubMasterTree, getGitHubFile } from '../../../github-api';
import DocTemplate from '../../../templates/DocTemplate';
import { GitHubJumplist } from '../../../types/GitHub';

type Props = {
  markdownFile: string,
  gitHubURL: string
  jumplist: GitHubJumplist
}

const Doc: React.FC<Props> = (props) => {
  const {
    markdownFile,
    gitHubURL,
    jumplist,
  } = props;

  return (
    <DocTemplate
      gitHubURL={gitHubURL}
      markdown={markdownFile}
      jumplist={jumplist}
    />
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

  const gitHubFile = await getGitHubFile(`src/${docSlug}.md`);
  const { html_url } = gitHubFile; // eslint-disable-line camelcase
  const parsedMarkdown = parseGitHubFileContents(gitHubFile);

  const jumplist = await getGitHubFile('jumplist.json');
  const parsedJumplist = parseGitHubFileContents(jumplist, true);

  return {
    props: {
      markdownFile: parsedMarkdown,
      gitHubURL: html_url,
      jumplist: parsedJumplist,
    },
  };
};

export default Doc;
