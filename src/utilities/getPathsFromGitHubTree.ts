type ItemInTree = {
  type: string,
  path: string,
  name: string
}

const getPathsFromGitHubTree = (docs: ItemInTree[], drillTo = 1): string[] => {
  let paths = [];

  if (Array.isArray(docs) && docs.length > 0) {
    paths = docs.map((itemInTree) => {
      const {
        type,
        name,
        path,
      } = itemInTree;

      if (type === 'file') {
        const isMarkdownFile = name.match('.md$');

        if (isMarkdownFile) {
          let sanitizedPath = path;
          sanitizedPath = sanitizedPath.replace('src/', '');
          sanitizedPath = sanitizedPath.replace('.md', '');
          const pathSegments = sanitizedPath.split('/');

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
