import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { LinkProps } from './types';
import useStyles from './css';

const absoluteURLPattern = /^https?:\/\//i;

const Link: React.FC<LinkProps> = (props) => {
  const {
    href,
    children,
  } = props;

  const {
    query: {
      topic,
      doc,
    },
  } = useRouter();

  const isNested = topic && doc;

  let hrefToUse = href;
  const isAbsolutePath = absoluteURLPattern.test(href);
  if (!isAbsolutePath) {
    const withoutExt = href.replace('.md', '');
    // scope all relative links to correct path
    hrefToUse = `/docs${isNested ? `/${topic}` : ''}/${withoutExt}`;
  }

  let anchorAttributes = {};
  if (isAbsolutePath) {
    anchorAttributes = {
      target: '_blank',
      rel: 'noopener noreferrer',
    };
  }

  const classes = useStyles();

  return (
    <NextLink href={hrefToUse}>
      <a
        {...anchorAttributes}
        className={classes.anchor}
      >
        {children}
      </a>
    </NextLink>
  );
};

export default Link;
