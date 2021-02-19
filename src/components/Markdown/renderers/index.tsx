import Link from './Link';
import InlineCode from './InlineCode';
import CodeBlock from './CodeBlock';
import List from './List';
import Heading from './Heading';
import { Props as CodeBlockProps } from './CodeBlock/types';

const renderers = {
  link: Link,
  code: (props: CodeBlockProps): React.ReactElement => <CodeBlock {...props} marginBottom background />,
  inlineCode: InlineCode,
  list: List,
  heading: Heading,
};

export default renderers;
