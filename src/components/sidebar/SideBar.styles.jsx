import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  /* background: #f4f4f4; */
  height: calc(100vh - 70px);
  border-right: 1px solid #ccc;
  display: flex;
  justify-content: center;
  position: fixed;
  left: 0;
  transition: all 1s ease;

  // if we wanted to make it a toggled sidebar
  /* top: 0; */ // We use top: 0 to go over the header
  /* left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10; */
`;

export const SidebarWrap = styled.div`
  width: 100%;
  color: #e1e9fc;

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
  color: #e1e9fc;
  text-decoration: none;

  overflow: hidden;
  transition: all 1s ease;

  &:hover {
    background: #252831;
    /* border-left: 4px solid #6d6b6b; */
    cursor: pointer;
  }
`;

export const Div = styled.div`
  /* transition: 0.875s all ease-in-out; */
  overflow: hidden;
  transition: all 0.5s ease;
`;

export const SubMenuLink = styled(Link)`
  /* background: #414717; */
  height: 40px;
  padding-left: 2.5rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  /* font-size: 16px; */
  /* transition: 0.875s all ease-in-out; */
  overflow: hidden;
  transition: all 1s ease;

  &.active {
    border-left: 4px solid #6d6b6b;
    padding-left: calc(2.5rem - 4px);
  }

  &:hover {
    background: #252831;
    cursor: pointer;
  }
`;
