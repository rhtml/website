type Props = {
  content: string,
  encoding: string,
  type: string,
}

const parseGitHubFile = (props: Props): string => {
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

  return parsedFile;
};

export default parseGitHubFile;
