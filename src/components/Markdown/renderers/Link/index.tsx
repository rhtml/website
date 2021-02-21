import NextLink from 'next/link';
import { useRouter } from 'next/router';
import Anchor from '../../../Anchor';
import { LinkProps } from './types';

const absoluteURLPattern = /^https?:\/\//i;

const Link: React.FC<LinkProps> = (props) => {
  const {
    href,
    node: {
      children,
    },
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

  return (
    <NextLink
      href={hrefToUse}
      passHref
    >
      <Anchor
        {...anchorAttributes}
        label={children?.[0]?.value}
      />
    </NextLink>
  );
};

export default Link;
