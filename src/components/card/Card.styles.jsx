import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 240px;
  min-width: 230px;
  max-width: 240px;
  /* padding: 0; */
  /* top: 65px;
  right: 0.5%; */
  z-index: 4;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 10px;
  inset: 0px auto auto 0px;
  transform: translate3d(calc(${({ size }) => `${size.width}px`} - 250px), 60px, 0px);

  border: 0.7px solid rgba(230, 230, 230, 1);
`;
