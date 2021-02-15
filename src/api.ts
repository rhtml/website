import { GitHubFile, GitHubTree } from './types/GitHub';

export const getGitHubMasterTree = async (): Promise<GitHubTree> => {
  const res = await fetch('https://api.github.com/repos/rhtml/docs/git/trees/master?recursive=1', {
    method: 'GET',
    headers: {
      Accept: 'application/vnd.github.v3+json.html',
    },
  });

  const json = await res.json();

  const {
    tree,
  } = json;

  return tree;
};

export const getGitHubFile = async (fileName: string): Promise<GitHubFile> => {
  const res = await fetch(`https://api.github.com/repos/rhtml/docs/contents/${fileName}`, {
    method: 'GET',
    headers: {
      Accept: 'application/vnd.github.v3+json.html',
    },
  });

  const json = await res.json();

  return json;
};
