import React, { ReactNode } from 'react';
import { Heading } from '../../infra/typography/Heading';
import { Container } from './styles';

interface HeaderProps {
  text: string;
  children: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ text, children }) => {
  return (
    <Container>
      <Heading fontSize="xl" color="white">
        {text}
      </Heading>
      {children}
    </Container>
  );
};

export { Header };
