import styled from 'styled-components';

export const UserIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 30px;
  height: 30px;
`;

export const CardArrow = styled.div`
  position: absolute;
  box-shadow: rgb(117 117 117) -1px -1px 1px -1px;
  transform: translate3d(-6px, 18px, 0px);
  z-index: 5;

  ::after {
    background: rgb(255, 255, 255);
    height: 12px;
    width: 12px;
    /* z-index: 4; */
    position: absolute;
    content: '';
    display: block;
    border: 0.7px solid rgba(230, 230, 230, 1);
    border-bottom-width: 0px;
    border-right-width: 0px;
    transform: rotate(45deg);
  }
`;
