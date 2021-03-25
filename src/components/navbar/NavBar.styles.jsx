import styled from 'styled-components';
import { Container } from '../UtilityComponents';
import { Link } from 'react-router-dom';

export const Header = styled(Container)`
  flex-direction: row;
  height: 70px;
  width: 100%;
`;

export const Option = styled(Link)`
  padding: 10px 10px;
  cursor: pointer;
  color: ${({ theme }) => theme.fontColor};
  text-decoration: none;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 10px 25px;
  text-decoration: none;
`;

export const OptionsContainer = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
