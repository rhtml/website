import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import toKebabCase from 'lodash.kebabcase';
import LinkIcon from '../../../../icons/LinkIcon';
import useStyles from './css';
import { HeadingProps, HeadingTagProps } from './types';
import flatten from './flatten';

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

  const classes = useStyles();

  return (
    <div
      className={classes.wrapper}
    >
      <HeadingTag tag={`h${level}`} >
        {children}
      </HeadingTag>
      <Link
        href={pathname}
        as={`${asPath.split('#')[0]}#${id}`}
      >
        <a
          id={id}
          className={classes.linkIcon}
        >
          <LinkIcon />
        </a>
      </Link>
    </div>
  );
};

export default Heading;
