import React from 'react';

const flatten = (text: string, child: React.ReactElement): (string | React.ReactNode) => {
  if (typeof child === 'string') {
    return text + child;
  }

  return React.Children.toArray(child.props.children).reduce(flatten, text);
};

export default flatten;
