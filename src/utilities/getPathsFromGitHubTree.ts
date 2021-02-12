import { GitHubTree } from '../types/GitHub';

const getPathsFromGitHubTree = (items: GitHubTree, drillTo = 1): string[] => {
  let paths = [];

  if (Array.isArray(items) && items.length > 0) {
    paths = items.map((itemInTree) => {
      const {
        type,
        path,
      } = itemInTree;

      if (path.startsWith('src/')) {
        const hasMarkdownExt = path.match('.md$');
        const isMarkdownFile = type === 'blob' && hasMarkdownExt;

        let sanitizedPath = path;
        sanitizedPath = sanitizedPath.replace('src/', '');
        sanitizedPath = sanitizedPath.replace('.md', '');

        const pathSegments = sanitizedPath.split('/');

        if (drillTo === 1 && pathSegments.length === 1 && isMarkdownFile) {
          const slug = pathSegments[0];
          return `/docs/${slug}`;
        }

        if (drillTo === 2 && pathSegments.length === 2 && isMarkdownFile) {
          const topic = pathSegments[0];
          const slug = pathSegments[1];
          return `/docs/${topic}/${slug}`;
        }
      }

      return null;
    });
  }

  const sanitizedPaths = paths.filter((path) => path);

  return sanitizedPaths;
};

export default getPathsFromGitHubTree;
