import React from 'react';

import { Container } from './Card.styles';

const Card = ({ children, ...otherProps }) => {
  return (
    <Container role='dialog' aria-modal='true' {...otherProps} tabIndex={0}>
      {children}
    </Container>
  );
};

export default Card;
