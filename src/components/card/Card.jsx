import React from 'react';

import { Container, CardArrow } from './Card.styles';

const Card = ({ children }) => {
  return (
    <Container role='dialog' aria-modal='true' tabIndex={-1}>
      <CardArrow />
      {children}
    </Container>
  );
};

export default Card;
