import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const MapContainer = styled.div`
  position: relative;
  flex: 1 1 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const PageContentContainer = styled.div`
  display: flex;
  height: calc(100% - 125px);
  flex-direction: row-reverse;
  overflow: hidden;
`;

export const FilterContainer = styled.div`
  border-bottom: 1px solid rgb(204, 204, 204);
  min-height: 55px;
  height: 55px;
  padding: 0px 12px;
`;
