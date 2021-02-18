import React, { useCallback, useEffect, useState } from 'react';
import { APIError, Props } from './types';
import useStyles from './css';
import EditableCodeBlock from '../EditableCodeBlock';
import Button from '../Button';
import HiddenDownloadButton from '../HiddenDownloadButton';
import arrayBufferToBase64 from '../../utilities/arrayBufferToBase64';
import Chevron from '../../icons/Chevron';
import Input from '../../forms/fields/Input';
import Errors from '../../forms/Errors';

const initialValue = `
<html>
  <body style="background-color: white; width: 400px; height: 500px;">
    <p>
      Hello, world!
    </p>
  </body>
</html>
`;

interface IRes {
  errors: APIError[]
}

const DemoWidget: React.FC<Props> = () => {
  const classes = useStyles();
  const [code, setCode] = useState(initialValue);
  const [hrefToDownload, setHrefToDownload] = useState<string>();
  const [isDownloadingImage, setIsDownloadingImage] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [filename, setFilename] = useState();
  const [selectedImageType, setSelectedImageType] = useState('png');
  const [apiErrors, setAPIErrors] = useState<APIError[]>();

  const generateImage = useCallback(async () => {
    const minifiedCode = code.replace(/\n\s+|\n/g, '');

    const res = await fetch('http://localhost:8000', { // https://rhtml.io or http://localhost:8000
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        html: [minifiedCode],
        type: selectedImageType,
      }),
    });

    const json = await res.json();

    if (json) {
      const {
        errors,
      } = json as IRes;

      if (res.status === 200) {
        const {
          document: {
            data,
          },
        } = json.images[0];
        const base64 = arrayBufferToBase64(data);
        if (base64) setHrefToDownload(`data:image/${selectedImageType};base64,${base64}`);
      }

      if (Array.isArray(errors) && errors.length > 0) {
        setAPIErrors(errors);
        setHrefToDownload(undefined);
        setIsDownloadingImage(false);
      }
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
        <div className={classes.titleWrapper}>
          <h3 className={classes.title}>
            Try it
          </h3>
          <Errors
            className={classes.errors}
            errors={apiErrors}
          />
       </div>
        <Button
          label={isDownloadingImage ? 'Downloading...' : 'Export'}
          onClick={() => {
            if (!isDownloadingImage) { // protect against brute force
              setIsDownloadingImage(true);
            }
          }}
        />
        <div className={classes.dropdown}>
          <div
            className={classes.dropdownButton}
            onClick={() => {
              setSettingsOpen(!settingsOpen);
            }}
          >
            <Chevron
              size="s"
              color="white"
              rotation="90"
            />
          </div>
          <div
            className={[
              classes.dropdownContent,
              settingsOpen && classes.dropdownOpen,
            ].filter(Boolean).join(' ')}
          >
            <Input
              type="text"
              label="Filename:"
              name="filename"
              onChange={(incomingValue) => {
                setFilename(incomingValue);
              }}
              placeholder={`rhtml-rocks.${selectedImageType}`}
              value={filename}
            />
            <div className={classes.imageTypeWrapper}>
              <div className={classes.imageTypeLabel}>
                Type:
              </div>
              <div className={classes.imageTypes}>
                <div
                  onClick={() => setSelectedImageType('png')}
                  className={[
                    classes.imageType,
                    selectedImageType === 'png' && classes.activeImageType,
                  ].filter(Boolean).join(' ')}
                >
                  PNG
                </div>
                <div
                  onClick={() => setSelectedImageType('jpg')}
                  className={[
                    classes.imageType,
                    selectedImageType === 'jpg' && classes.activeImageType,
                  ].filter(Boolean).join(' ')}
                >
                  JPG
                </div>
              </div>
            </div>
          </div>
        </div>
        <HiddenDownloadButton
          onDownload={onDownload}
          href={hrefToDownload}
          filename={filename}
          fileExtension={`.${selectedImageType}`}
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
