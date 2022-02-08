import React from 'react';

import { Container, CSSContainerVariants } from './styles';

interface HeadingProps extends CSSContainerVariants {
  children: React.ReactNode;
}

const Heading: React.FC<HeadingProps> = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

export { Heading };
