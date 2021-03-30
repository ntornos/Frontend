import styled from 'styled-components';
import { Option } from '../navbar/NavBar.styles';

export const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MenuItem = styled(Option)`
  color: #757575;
  font-size: 15px;
  margin: 0;
  padding: 5% 10%;
  cursor: pointer;
  z-index: 20;

  &:hover {
    color: black;
  }

  &:nth-child(7) {
    margin-bottom: 10px;
  }
`;

export const DropdownUserIconContainer = styled.div`
  display: flex;
  padding: 16px 15px 6px 8px;
  align-items: center;
  justify-items: center;
`;

export const DropdownDivider = styled.div`
  margin: 10px 0;
  position: relative;
  width: 100%;
  z-index: 1;

  &::before {
    background: white;
    border-top: 1px solid rgb(184, 196, 194);
    content: '';
    position: absolute;
    inset: 50% 0px 0px;
    transform: translateY(-50%);
  }
`;

export const UserIconArrow = styled.div`
  position: absolute;
  transform: translate3d(155px, -8px, 0px);
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
