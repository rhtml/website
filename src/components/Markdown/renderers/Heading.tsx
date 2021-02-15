import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import toKebabCase from 'lodash.kebabcase';

interface HeadingTagProps {
  tag: string;
}

const HeadingTag: React.FC<HeadingTagProps & React.HTMLAttributes<HTMLOrSVGElement>> = (props) => {
  const {
    tag: Tag,
    children,
    ...rest
  } = props;

  return (
    <Tag {...rest}>
      {children}
    </Tag>
  );
};

type HeadingProps = {
  level: number,
}

const flatten = (text, child): string => {
  if (typeof child === 'string') {
    return text + child;
  }
  return React.Children.toArray(child.props.children).reduce(flatten, text);
};

const Heading: React.FC<HeadingProps> = (props) => {
  const {
    level,
    children,
  } = props;

  const {
    asPath,
    pathname,
  } = useRouter();

  const childrenAsArray = React.Children.toArray(props.children);
  const text = childrenAsArray.reduce(flatten, '').toString();
  const id = toKebabCase(text);

  return (
    <Link
      href={pathname}
      as={`${asPath.split('#')[0]}#${id}`}
    >
      <a id={id}>
        <HeadingTag tag={`h${level}`}>
          {children}
        </HeadingTag>
      </a>
    </Link>
  );
};

export default Heading;
