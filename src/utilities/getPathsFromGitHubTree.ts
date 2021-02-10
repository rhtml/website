type ItemInTree = {
  type: string,
  path: string
}

const getPathsFromGitHubTree = (masterTree: ItemInTree[], drillTo = 1): string[] => {
  let paths = [];

  if (Array.isArray(masterTree) && masterTree.length > 0) {
    paths = masterTree.map((itemInTree) => {
      const {
        type,
        path,
      } = itemInTree;

      // could be a file (blob), or a directory
      if (type === 'blob' && path !== 'README.md') {
        const isMarkdownFile = path.match('.md$');
        if (isMarkdownFile) {
          const pathWithoutFileExt = path.replace('.md', '');
          const pathSegments = pathWithoutFileExt.split('/');

          let asURL;

          if (pathSegments.length === 1 && drillTo === 1) {
            const slug = pathSegments[0];
            asURL = `/docs/${slug}`;
          }

          if (pathSegments.length === 2 && drillTo === 2) {
            const topic = pathSegments[0];
            const slug = pathSegments[1];
            asURL = `/docs/${topic}/${slug}`;
          }

          return asURL;
        }
      }

      return null;
    });
  }

  const sanitizedPaths = paths.filter((path) => path);

  return sanitizedPaths;
};

export default getPathsFromGitHubTree;
