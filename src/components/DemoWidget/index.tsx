import React, { Fragment, useCallback, useEffect, useState } from 'react';
import sanitizeHTML from 'sanitize-html';
import { Props } from './types';
import useStyles from './css';
import EditableCodeBlock from '../EditableCodeBlock';
import Button from '../Button';
import HiddenDownloadButton from '../HiddenDownloadButton';
import arrayBufferToBase64 from '../../utilities/arrayBufferToBase64';
import Chevron from '../../icons/Chevron';
import Input from '../../forms/fields/Input';
import Errors from '../../forms/Errors';
import allowedTags from './allowedTags';
import allowedAttributes from './allowedAttributes';
import HelpTooltip from '../HelpTooltip';
import Anchor from '../Anchor';
import { useNotifications } from '../../wrappers/Notifications';
import { APIError } from '../../api';

const initialValue = `
<html>
  <body style="width: 200px; height: 100px; display: flex;">
    <div style="background-color: pink; flex-grow: 1;">
      Hello, world!
    </div>
  </body>
</html>
`;

interface IRes {
  errors: APIError[]
}

const DemoWidget: React.FC<Props> = () => {
  const classes = useStyles();
  const [sanitizedCode, setSanitizedCode] = useState(initialValue);
  const [hrefToDownload, setHrefToDownload] = useState<string>();
  const [isDownloadingImage, setIsDownloadingImage] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [filename, setFilename] = useState();
  const [selectedImageType, setSelectedImageType] = useState('png');
  const [apiErrors, setAPIErrors] = useState<APIError[]>();
  const { setTimedNotification } = useNotifications();

  const generateImage = useCallback(async () => {
    const minifiedCode = sanitizedCode.replace(/\n\s+|\n/g, '');

    try {
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
    } catch (err) {
      console.warn(err);
      setAPIErrors([{ message: err.message }]);
      setHrefToDownload(undefined);
      setIsDownloadingImage(false);
    }
  }, []);

  const handleCodeChange = useCallback((incomingValue) => {
    const newlySanitizedCode = sanitizeHTML(incomingValue, {
      allowedTags,
      allowedAttributes,
    });

    setSanitizedCode(newlySanitizedCode);
  }, []);

  const onDownload = useCallback(() => {
    setHrefToDownload(undefined);
    setIsDownloadingImage(false);
    setTimedNotification({
      id: 'imageDownloadCompleted',
      message: 'Your image has been downloaded!',
    });
  }, []);

  useEffect(() => {
    if (isDownloadingImage) generateImage();
  }, [isDownloadingImage, generateImage]);

  const bindEsc = useCallback((e) => {
    const { keyCode } = e;
    if (keyCode === 27) {
      setSettingsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', bindEsc, false);
    return () => document.removeEventListener('keydown', bindEsc, false);
  }, [bindEsc]);

  const handleDownloadButtonClick = useCallback(() => {
    setAPIErrors(undefined);
    setSettingsOpen(false);
    if (!isDownloadingImage) { // protect against brute force
      setIsDownloadingImage(true);
    }
  }, [isDownloadingImage]);

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
          onClick={handleDownloadButtonClick}
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
              placeholder="rhtml-rocks"
              value={filename}
              appendText={`.${selectedImageType}`}
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
          <div className={classes.itemTitle}>
            Source
            <HelpTooltip
              className={classes.tooltip}
              Content={(
                <Fragment>
                  {'Change image size by adjusting the width and height of the document body. See '}
                  <Anchor href="/docs/guides/capturing-html">
                    Capturing HTML
                  </Anchor>
                  {' for more information.'}
                </Fragment>
              )}
            />
          </div>
          <EditableCodeBlock
            onChange={handleCodeChange}
            initialValue={initialValue}
            className={classes.codeBlock}
            textareaClassName={classes.codeBlockTextArea}
          />
        </div>
        <div className={classes.item}>
          <div className={classes.itemTitle}>
            Preview
            <HelpTooltip
              className={classes.tooltip}
              Content="For security, this editor sanitizes your markup before rendering it. Send your html through a cURL request if you're experiencing unexpected results."
            />
          </div>
          <iframe
            className={classes.iFrame}
            srcDoc={sanitizedCode}
          />
        </div>
      </div>
    </div>
  );
};

export default DemoWidget;
