export type GitHubTreeItem = {
  type: string,
  path: string,
}

export type GitHubTree = GitHubTreeItem[];

export type GitHubFile = {
  content: string,
  encoding: string,
  type: string,
  html_url: string // eslint-disable-line camelcase
}

export type GitHubJumplistItem = {
  label: string,
  path?: string,
  list?: GitHubJumplistItem[]
}

export type GitHubJumplist = GitHubJumplistItem[];
