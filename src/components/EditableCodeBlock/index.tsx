import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import { Props } from './types';
import useStyles from './css';
import CodeBlock from '../Markdown/renderers/CodeBlock';
import { code as codeTypeStyles } from '../../css/type';

const initialCode = `
<html>
  <body>
    <p>
      Hello, world!
    </p>
  </body>
</html>
`;

const EditableCodeBlock: React.FC<Props> = () => {
  const [code, setCode] = useState(initialCode);

  const classes = useStyles();

  return (
    <div className={classes.editableCodeBlock}>
      <Editor
        value={code}
        onValueChange={(incomingCode) => setCode(incomingCode)}
        highlight={(incomingCode) => <CodeBlock language="html" value={incomingCode} />}
        style={{
          ...codeTypeStyles,
          width: '100%',
        }}
        textareaClassName={classes.textArea}
      />
    </div>
  );
};

export default EditableCodeBlock;
