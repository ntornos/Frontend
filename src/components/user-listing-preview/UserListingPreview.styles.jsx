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

export const ListingPreviewCard = styled.div`
  /* width: 100%;
  margin: 10px 5px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  border: 1px solid;
  align-content: stretch;
  justify-content: space-evenly;
  align-items: stretch; */

  position: relative;
  margin: 0 1.5rem 1rem 0;
  width: 40%;
  /* min-width: 325px; */
  height: 400px;
  border: 1px solid #cacaca;
  box-shadow: 0 1px 1px 0 rgb(166 166 166 / 62%);
  background: #fff;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ImgContainer = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
`;
