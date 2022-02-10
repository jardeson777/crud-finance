import React from 'react';
import Container from './Container';
import Content from './Content';

const Card: React.FC = ({ children }) => {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
};

export default Card;
