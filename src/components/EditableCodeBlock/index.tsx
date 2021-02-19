import React, { useCallback, useState } from 'react';
import Editor from 'react-simple-code-editor';
import { Props } from './types';
import useStyles from './css';
import CodeBlock from '../Markdown/renderers/CodeBlock';
import { code as codeTypeStyles } from '../../css/type';

const EditableCodeBlock: React.FC<Props> = (props) => {
  const {
    onChange,
    initialValue,
    className,
    textareaClassName,
  } = props;

  const [code, setCode] = useState(initialValue);

  const classes = useStyles();

  const handleChange = useCallback((incomingValue) => {
    if (typeof onChange === 'function') {
      onChange(incomingValue);
    }
    setCode(incomingValue);
  }, []);

  return (
    <div className={classes.editableCodeBlock}>
      <Editor
        value={code}
        onValueChange={handleChange}
        highlight={(incomingCode) => <CodeBlock language="html" value={incomingCode} />}
        style={{
          ...codeTypeStyles,
          width: '100%',
        }}
        textareaClassName={[
          classes.textArea,
          textareaClassName,
        ].filter(Boolean).join(' ')}
        className={className}
      />
    </div>
  );
};

export default EditableCodeBlock;
