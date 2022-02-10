import React from 'react';

import { ButtonVariants, Container } from './styles';

interface ButtonProps extends ButtonVariants {
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ onPress, children, ...rest }) => {
  return (
    <Container onPress={onPress} {...rest}>
      {children}
    </Container>
  );
};

export default Button;
