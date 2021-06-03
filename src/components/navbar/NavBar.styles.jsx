import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.nav`
  flex-direction: row;
  height: 70px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  background: #fff;
  border-bottom: 1px solid #cacaca;
`;

export const Option = styled(Link)`
  margin: 15px;
  cursor: pointer;
  color: ${({ theme }) => theme.fontColor};
  text-decoration: none;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 0px 25px;
  text-decoration: none;
  color: ${({ theme }) => theme.fontColor};
`;

export const OptionsContainer = styled.div`
  height: 100%;
  width: 40%;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
