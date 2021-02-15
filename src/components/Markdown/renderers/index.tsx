import Link from './Link';
import InlineCode from './InlineCode';
import CodeBlock from './CodeBlock';
import List from './List';
import Heading from './Heading';

const renderers = {
  link: Link,
  code: CodeBlock,
  inlineCode: InlineCode,
  list: List,
  heading: Heading,
};

export default renderers;
