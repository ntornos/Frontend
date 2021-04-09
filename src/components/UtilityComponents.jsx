import styled, { css } from 'styled-components';

const selector = css`
  background: red;
`;

export const Container = styled.div`
  display: ${({ display }) => display};
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
  flex-direction: ${({ direction }) => direction};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

export const Text = styled.span`
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ fontColor }) => fontColor};
  padding: ${({ padding }) => padding};

  &:hover {
    color: ${({ fontHoverColor }) => fontHoverColor};
  }
`;

export const Image = styled.img`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};

  &.selected {
    ${selector}
  }
`;
