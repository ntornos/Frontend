import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
`;

// export const Divider = styled.div`

// `
