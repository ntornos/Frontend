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
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  position: ${({ position }) => position};
`;

export const Text = styled.span`
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ fontColor }) => fontColor};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  line-height: ${({ lineHeight }) => lineHeight};
  font-weight: ${({ fontWeight }) => fontWeight};
  text-overflow: ${({ textOverflow }) => textOverflow};
  white-space: ${({ whiteSpace }) => whiteSpace};

  margin: 0;
  min-width: 0;
  overflow: hidden;

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

export const GlobalWrapper = styled.div`
  position: relative;
  overflow-x: ${({ overflowX }) => overflowX};
  overflow-y: ${({ overflowY }) => overflowY};
  overflow: ${({ overflow }) => overflow};
  min-height: 100%;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #f2f2f2;
  z-index: 0;
`;
