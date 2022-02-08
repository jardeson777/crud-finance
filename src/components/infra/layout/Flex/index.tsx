import React from 'react';
import { Container, FlexVariants } from './styles';

interface FlexProps extends FlexVariants {
  children: React.ReactNode;
}

const Flex: React.FC<FlexProps> = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

export default Flex;
