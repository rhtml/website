import Link from './Link';
import InlineCode from './InlineCode';
import CodeBlock from './CodeBlock';
import List from './List';

const renderers = {
  link: Link,
  code: CodeBlock,
  inlineCode: InlineCode,
  list: List,
};

export default renderers;
