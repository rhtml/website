import React, { useState, useEffect, useRef } from 'react';
import formatDateTime from '../../utilities/formatDateTime';
import { Props } from './types';

const initialDownloadAttributes = {
  download: 'Untitled',
  href: undefined,
};

const HiddenDownloadButton: React.FC<Props> = (props) => {
  const {
    href: hrefFromProps,
    onDownload,
    filename,
    fileExtension = '.png',
  } = props;

  const anchorRef = useRef<HTMLAnchorElement>(null);
  const [downloadAttributes, setDownloadAttributes] = useState(initialDownloadAttributes);

  useEffect(() => {
    if (hrefFromProps) {
      setDownloadAttributes({
        download: `${filename || formatDateTime()}${fileExtension}`,
        href: hrefFromProps,
      });
    }
  }, [hrefFromProps]);

  // needs to be a separate effect because 'anchorRef.current.click()' depends on an updated DOM (button with attributes)
  useEffect(() => {
    const { href } = downloadAttributes;
    if (href) {
      anchorRef.current.click();
      setDownloadAttributes(initialDownloadAttributes);
      if (typeof onDownload === 'function') onDownload();
    }
  }, [downloadAttributes, onDownload]);

  return (
    <a
      role="button"
      tabIndex={0}
      {...downloadAttributes || {}}
      style={{ display: 'none' }}
      ref={anchorRef}
    >
      Download
    </a>
  );
};

export default HiddenDownloadButton;
