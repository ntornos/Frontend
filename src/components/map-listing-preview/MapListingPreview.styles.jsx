import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MapListingPreviewContainer = styled.li`
  list-style-type: none;
  min-height: 14rem;
  border: 1px solid #b1b1b1;
  margin: 0 0 0.5rem;
  width: 100%;
`;

export const ListCard = styled.article`
  width: 100%;
  height: 100%;
`;

export const ListCardInfo = styled.div`
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
`;

export const ListCardTop = styled.div``;

export const ListCardLink = styled(Link)`
  display: block;
  padding-top: 41.67%;
  overflow: hidden;
  position: relative;
  background-color: #f1f1f4;
`;

export const ListCardImg = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  max-width: 100%;
  width: 100%;
  height: auto;
  transform: translate3d(-50%, -50%, 0);
`;
