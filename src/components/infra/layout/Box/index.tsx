import React from 'react';
import { StyleProp, TextStyle } from 'react-native';

import { BoxVariants, Container } from './styles';

interface BoxProps extends BoxVariants {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}

const Box: React.FC<BoxProps> = ({ children, style, ...rest }) => {
  return (
    <Container {...style} {...rest}>
      {children}
    </Container>
  );
};

export { Box };
