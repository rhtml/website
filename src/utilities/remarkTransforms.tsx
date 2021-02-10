import React from 'react';
import Link from 'next/link';

const absoluteURLPattern = /^https?:\/\//i;

type Props = {
  href?: string,
}

const NewLink: React.FC<Props> = (props) => {
  const {
    href,
    children,
  } = props;

  const isAbsolutePath = absoluteURLPattern.test(href);

  let hrefToUse = href;
  if (!isAbsolutePath) {
    hrefToUse = href.replace('.md', '');
  }

  let anchorAttributes = {};
  if (isAbsolutePath) {
    anchorAttributes = {
      target: '_blank',
      rel: 'noopener noreferrer',
    };
  }

  return (
    <Link href={hrefToUse}>
      <a {...anchorAttributes}>
        {children}
      </a>
    </Link>
  );
};

export default {
  link: NewLink,
};
