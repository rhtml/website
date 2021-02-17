import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { base } from '../../../../css';
import useStyles from './css';
import { Props } from './types';
import { code as codeTypeStyles } from '../../../../css/type';
import colors from '../../../../css/colors';

const CodeBlock: React.FC<Props> = (props) => {
  const {
    language,
    value,
    marginBottom,
    background,
  } = props;

  return (
    <SyntaxHighlighter
      style={vscDarkPlus}
      language={language}
      customStyle={{
        padding: base(),
        borderRadius: '4px',
        marginTop: 0,
        marginBottom: marginBottom ? base() : 0,
        background: background ? colors.darkGray : 'transparent',
        ...codeTypeStyles,
      }}
      codeTagProps={{
        style: {
          ...codeTypeStyles,
        },
      }}
    >
      {value}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
