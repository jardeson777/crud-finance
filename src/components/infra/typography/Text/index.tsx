import React from 'react';

import { Container, TextVariants } from './styles';

interface TextProps extends TextVariants {
  //
}

const Text: React.FC<TextProps> = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

export default Text;
