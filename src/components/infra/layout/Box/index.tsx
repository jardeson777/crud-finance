import React from 'react';

import { BoxVariants, Container } from './styles';

interface BoxProps extends BoxVariants {
  children: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

export { Box };
