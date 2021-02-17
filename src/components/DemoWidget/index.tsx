import React, { useCallback, useEffect, useState } from 'react';
import { Props } from './types';
import useStyles from './css';
import EditableCodeBlock from '../EditableCodeBlock';
import Button from '../Button';
import HiddenDownloadButton from '../HiddenDownloadButton';
import arrayBufferToBase64 from '../../utilities/arrayBufferToBase64';

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
  const [hrefToDownload, setHrefToDownload] = useState<string>();
  const [isDownloadingImage, setIsDownloadingImage] = useState(false);

  const generateImage = useCallback(async () => {
    const minifiedCode = code.replace(/\n\s+|\n/g, '');

    const res = await fetch('http://localhost:8000', { // https://rhtml.io or http://localhost:8000
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        html: [minifiedCode],
      }),
    });

    const json = await res.json();

    if (res.status === 200) {
      const {
        document: {
          data,
        },
      } = json.images[0];
      const base64 = arrayBufferToBase64(data);
      if (base64) setHrefToDownload(`data:image/png;base64,${base64}`);
    }
  }, []);

  const onDownload = useCallback(() => {
    setHrefToDownload(undefined);
    setIsDownloadingImage(false);
    // setTimedNotification({
    //   id: 'pngDownloadCompleted',
    //   message: 'Your PNG has been downloaded!',
    // });
  }, []);

  useEffect(() => {
    if (isDownloadingImage) generateImage();
  }, [isDownloadingImage, generateImage]);

  return (
    <div className={classes.demoWidget}>
      <header className={classes.header}>
        <h3 className={classes.title}>
          Try it
        </h3>
        <Button
          icon="download"
          label={isDownloadingImage ? '...' : undefined}
          onClick={() => {
            if (!isDownloadingImage) { // protect against brute force
              setIsDownloadingImage(true);
            }
          }}
        />
        <HiddenDownloadButton
          onDownload={onDownload}
          href={hrefToDownload}
        />
      </header>
      <div className={classes.innerWrapper}>
        <div className={classes.item}>
          <p>
            Source
          </p>
          <EditableCodeBlock
            onChange={(incomingValue) => setCode(incomingValue)}
            initialValue={initialValue}
            className={classes.codeBlock}
          />
        </div>
        <div className={classes.item}>
          <p>
            Preview
          </p>
          <iframe className={classes.iFrame} srcDoc={code} />
        </div>
      </div>
    </div>
  );
};

export default DemoWidget;
