import styled from 'styled-components';
import Card from '../card/Card';

export const ListingPreviewImage = styled.img`
  /* width: 100%;
  height: 100%;
  object-fit: fill; */

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  display: block;
  background-position: center;
  background-repeat: no-repeat;
`;

export const ListingPreviewCard = styled(Card)`
  width: 31.5%;
  margin: 10px 5px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  border: 1px solid;
  align-content: stretch;
  justify-content: space-evenly;
  align-items: stretch;
`;

export const ImgContainer = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
`;
