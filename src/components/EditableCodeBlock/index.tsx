import React, { useCallback, useState } from 'react';
import Editor from 'react-simple-code-editor';
import sanitizeHtml from 'sanitize-html';
import { Props } from './types';
import useStyles from './css';
import CodeBlock from '../Markdown/renderers/CodeBlock';
import { code as codeTypeStyles } from '../../css/type';

const EditableCodeBlock: React.FC<Props> = (props) => {
  const {
    onChange,
    initialValue,
  } = props;

  const [code, setCode] = useState(initialValue);

  const classes = useStyles();

  const handleChange = useCallback((incomingValue) => {
    const sanitizedHTML = sanitizeHtml(incomingValue, {
      allowedTags: sanitizeHtml.defaults.allowedTags.concat(['html', 'body']),
    });

    setCode(sanitizedHTML);
    if (typeof onChange === 'function') {
      onChange(sanitizedHTML);
    }
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
        textareaClassName={classes.textArea}
      />
    </div>
  );
};

export default EditableCodeBlock;
