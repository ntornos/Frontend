import React from 'react';

import { Container } from './Card.styles';
import useResize from '../../hooks/dimensions.hook';

const Card = ({ children }) => {
  const { width, height } = useResize();

  return (
    <Container role='dialog' size={{ width, height }} aria-modal='true' tabIndex={0}>
      {children}
    </Container>
  );
};

export default Card;
