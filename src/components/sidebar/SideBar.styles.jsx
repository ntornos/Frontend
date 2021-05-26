import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SidebarNav = styled.nav`
  background: #f4f4f4;
  width: 250px;
  height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  position: fixed;
  left: 0;
  transition: all 1s ease;

  margin-top: 70px;
  // if we wanted to make it a toggled sidebar
  /* top: 0; */ // We use top: 0 to go over the header
  /* left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10; */
`;

export const SidebarWrap = styled.div`
  width: 100%;
  border-right: 1px solid #cacaca;

  overflow: hidden;
  transition: all 1s ease;
`;

export const SidebarLink = styled(Link)`
  display: flex;
`;

export const SidebarLabel = styled.span`
  margin-left: 16px;
`;

export const SubMenuWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  font-size: 18px;
  /* color: #e1e9fc; */
  text-decoration: none;

  overflow: hidden;
  transition: all 1s ease;

  &:hover {
    background: #c15a0c;
    cursor: pointer;
  }
`;

export const Div = styled.div`
  overflow: hidden;
  transition: all 0.5s ease;
`;

export const SubMenuLink = styled(Link)`
  height: 40px;
  padding-left: 2.5rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000;

  overflow: hidden;
  transition: all 1s ease;

  &.active {
    border-left: 4px solid #6d6b6b;
    padding-left: calc(2.5rem - 4px);
  }

  &:hover {
    /* background: #fa002a6e; */
    background: #c15a0c;
    cursor: pointer;
  }
`;
