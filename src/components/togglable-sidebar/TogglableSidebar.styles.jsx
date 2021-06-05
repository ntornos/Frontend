import styled from 'styled-components';

export const SidebarContainer = styled.nav`
  background: #f4f4f4;
  width: 300px;
  height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  position: fixed;

  right: 0;
  transition: all 1s ease;
`;

export const SidebarWrap = styled.div`
  width: 100%;
  border-left: 1px solid #cacaca;

  /* overflow: hidden; */
  transition: all 1s ease;
`;

export const SidebarItemsContainer = styled.ul`
  margin: 0;
  padding: 0;
`;
