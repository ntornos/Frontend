import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
`;

export const Text = styled.span`
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ fontColor }) => fontColor};

  &:hover {
    color: ${({ fontHoverColor }) => fontHoverColor};
  }
`;
