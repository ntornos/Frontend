import React from 'react';

import { Span, DividerContainer } from './Divider.styles';

const Divider = ({ children }) => {
  return (
    <DividerContainer>
      <Span>{children}</Span>
    </DividerContainer>
  );
};

export default Divider;
