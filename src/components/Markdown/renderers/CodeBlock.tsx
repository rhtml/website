import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { base } from '../../../css';

type CodeProps = {
  language: string,
  value: string,
}

const CodeBlock: React.FC<CodeProps> = (props) => {
  const {
    language,
    value,
  } = props;

  return (
    <SyntaxHighlighter
      style={vscDarkPlus}
      language={language}
      customStyle={{
        padding: base(),
        borderRadius: '4px',
        marginTop: 0,
        marginBottom: base(),
      }}
    >
      {value}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
