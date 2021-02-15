import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { base } from '../../../../css';
import useStyles from './css';
import { Props } from './types';

const CodeBlock: React.FC<Props> = (props) => {
  const {
    language,
    value,
  } = props;

  const classes = useStyles();

  return (
    <SyntaxHighlighter
      style={vscDarkPlus}
      language={language}
      className={classes.pre}
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
