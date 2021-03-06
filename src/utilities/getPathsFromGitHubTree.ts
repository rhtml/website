import { GitHubTree } from '../types/GitHub';

// drillTo: -1 for deep

const getPathsFromGitHubTree = (tree: GitHubTree, drillTo = 1): string[] => {
  let paths = [];

  if (Array.isArray(tree) && tree.length > 0) {
    paths = tree.map((itemInTree) => {
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
          return {
            params: {
              topic: slug,
            },
          };
        }

        if (drillTo === 2 && pathSegments.length === 2 && isMarkdownFile) {
          const topic = pathSegments[0];
          const slug = pathSegments[1];
          return {
            params: {
              topic,
              doc: slug,
            },
          };
        }
      }

      return null;
    });
  }

  const sanitizedPaths = paths.filter((path) => path);

  return sanitizedPaths;
};

export default getPathsFromGitHubTree;
