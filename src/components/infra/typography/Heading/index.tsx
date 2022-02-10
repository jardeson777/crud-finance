import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import { Container, CSSContainerVariants } from './styles';

interface HeadingProps extends CSSContainerVariants {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const Heading: React.FC<HeadingProps> = ({ children, style, ...rest }) => {
  return (
    <Container {...style} {...rest}>
      {children}
    </Container>
  );
};

export { Heading };
