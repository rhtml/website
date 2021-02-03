import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import gfm from 'remark-gfm';

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
      <Link href={gitHubURL}>
        <a target="_blank">
          Edit on GitHub
        </a>
      </Link>
      <ReactMarkdown plugins={[gfm]} >
        {markdownFile}
      </ReactMarkdown>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://api.github.com/repos/rhtml/docs/git/trees/master?recursive=1', {
    method: 'GET',
    headers: {
      Accept: 'application/vnd.github.v3+json.html',
    },
  });

  const json = await res.json();

  const {
    tree: masterTree,
  } = json;

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
        const pathWithoutFileExtension = path.replace('.md', '');
        if (isMarkdownFile && pathWithoutFileExtension !== 'README') {
          const pathSegments = pathWithoutFileExtension.split('/');
          const slug = pathSegments[pathSegments.length - 1];
          let asURL;
          if (pathSegments.length === 1) {
            asURL = `/docs/${slug}`;
          }
          return asURL;
        }
      }

      return null;
    });
  }

  const sanitizedPaths = paths.filter((path) => path);

  return {
    paths: sanitizedPaths,
    fallback: false,
  };
};


export const getStaticProps: GetStaticProps = async (context) => {
  const {
    params: {
      doc: docSlug,
    },
  } = context;

  const res = await fetch(`https://api.github.com/repos/rhtml/docs/contents/${docSlug}.md`, {
    method: 'GET',
    headers: {
      Accept: 'application/vnd.github.v3+json.html',
    },
  });

  const json = await res.json();

  const {
    content,
    encoding,
    type,
    html_url, // eslint-disable-line camelcase
  } = json;

  let markdownFile;
  if (type === 'file' && encoding === 'base64') {
    // decode from Base64 to binary ('.atob()' is not supported in node)
    markdownFile = Buffer.from(content, 'base64').toString('binary');
  }

  return {
    props: {
      markdownFile,
      gitHubURL: html_url,
    },
  };
};

export default Doc;
