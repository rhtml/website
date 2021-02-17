import React, { useState } from 'react';
import { Props } from './types';
import useStyles from './css';
import EditableCodeBlock from '../EditableCodeBlock';

const initialValue = `
<html>
  <body>
    <p>
      Hello, world!
    </p>
  </body>
</html>
`;

const DemoWidget: React.FC<Props> = () => {
  const classes = useStyles();
  const [code, setCode] = useState(initialValue);

  return (
    <div className={classes.demoWidget}>
      <div className={classes.codeWrapper}>
        <EditableCodeBlock
          onChange={(incomingValue) => setCode(incomingValue)}
          initialValue={initialValue}
        />
      </div>
      <iframe srcDoc={code} />
    </div>
  );
};

export default DemoWidget;
