import { GitHubFile, GitHubTree } from './types/GitHub';

const defaultHeaders = {
  Accept: 'application/vnd.github.v3+json.html',
  Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`,
};

export const getGitHubMasterTree = async (): Promise<GitHubTree> => {
  const res = await fetch('https://api.github.com/repos/rhtml/docs/git/trees/master?recursive=1', {
    method: 'GET',
    headers: defaultHeaders,
  });

  const json = await res.json();

  const {
    message,
    tree,
  } = json;

  if (res.status === 200) {
    return tree;
  }

  // there is a rate limit on the GitHub API
  // 60 per hour for unauthenticated users
  // 5000 per hour for for when authenticating with access token
  // 403 is status code returns, if reached
  throw new Error(message);
};

export const getGitHubFile = async (fileName: string): Promise<GitHubFile> => {
  const res = await fetch(`https://api.github.com/repos/rhtml/docs/contents/${fileName}`, {
    method: 'GET',
    headers: defaultHeaders,
  });

  const json = await res.json();
  const { message } = json;

  if (res.status === 200) {
    return json;
  }

  throw new Error(message);
};
