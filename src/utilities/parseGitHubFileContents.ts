import { GitHubFile } from '../types/GitHub';

const parseGitHubFile = (props: GitHubFile, parseJSON = false): (string|Record<string, unknown>) => {
  let parsedFile = '';

  const {
    content,
    encoding,
    type,
  } = props;

  if (content && type === 'file' && encoding === 'base64') {
    // decode from Base64 to binary ('.atob()' is not supported in node)
    parsedFile = Buffer.from(content, 'base64').toString('binary');
  }

  if (parseJSON) {
    parsedFile = JSON.parse(parsedFile);
  }

  return parsedFile;
};

export default parseGitHubFile;
