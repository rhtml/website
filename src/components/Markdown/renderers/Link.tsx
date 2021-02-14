import NextLink from 'next/link';

const absoluteURLPattern = /^https?:\/\//i;

type LinkProps = {
  href?: string,
}

const Link: React.FC<LinkProps> = (props) => {
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
    <NextLink href={hrefToUse}>
      <a {...anchorAttributes}>
        {children}
      </a>
    </NextLink>
  );
};

export default Link;
