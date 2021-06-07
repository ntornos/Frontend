import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: 375px;
  flex: 0 0 375px;

  overflow-y: auto;
  position: relative;
  overflow-x: hidden;
  transition: all 1s ease;
  box-shadow: -2px 2px 5px 0 rgb(0 0 0 / 40%);
  z-index: 5;
`;

export const SidebarWrap = styled.div`
  width: 100%;
  border-left: 1px solid #cacaca;
  transition: all 1s ease;
`;

export const SidebarItemsContainer = styled.ul`
  margin: 0;
  padding: 0 1rem;

  &:last-child {
    margin: 0 0 1rem;
  }
`;
