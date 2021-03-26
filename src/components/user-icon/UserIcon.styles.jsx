import styled from 'styled-components';

export const UserIconContainer = styled.div`
  padding: 0px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 35px;
  height: 35px;
  border: 2px solid rgba(230, 230, 230, 1);
  border-radius: 20px;
`;

export const UserIconArrow = styled.div`
  position: absolute;
  transform: translate3d(-8px, 26px, 0px);
  clip: rect(-3px, 19px, 9px, -5px);
  z-index: 6;

  ::after {
    height: 14px;
    width: 14px;
    background: white;
    position: absolute;
    content: '';
    display: block;
    border: 0.7px solid rgba(230, 230, 230, 1);
    border-bottom-width: 0px;
    border-right-width: 0px;
    transform: rotate(45deg);
  }
`;
