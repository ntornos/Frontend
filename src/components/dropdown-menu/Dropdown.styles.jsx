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

  &:nth-child(6) {
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
