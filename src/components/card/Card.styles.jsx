import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 240px;
  /* min-width: 230px;
  max-width: 240px; */
  padding: 0;
  top: 65px;
  right: 0.5%;
  z-index: 5;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 10px;

  border: 0.7px solid rgba(230, 230, 230, 1);
`;

export const CardArrow = styled.div`
  position: relative;
  /* border-bottom: 1px solid rgba(230, 230, 230, 1); */
  box-shadow: rgb(117 117 117) -1px -1px 1px -1px;

  ::after {
    background: rgb(255, 255, 255);
    height: 12px;
    width: 12px;
    position: absolute;
    content: '';
    border: 0.7px solid rgba(230, 230, 230, 1);
    border-bottom-width: 0px;
    border-right-width: 0px;
    transform: rotate(45deg);
    bottom: -5px;
    left: 175px;
  }
`;
