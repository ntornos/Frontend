import { Link } from 'react-router-dom';
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
  position: relative;
  margin: 0 1.5rem 1rem 0;
  width: 40%;
  /* min-width: 325px; */
  height: 400px;
  border: 1px solid #cacaca;
  box-shadow: 0 1px 1px 0 rgb(166 166 166 / 62%);
  background: #fff;
  border-radius: 5px;
  /* overflow: hidden; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ImgContainer = styled.div`
  width: 100%;
  height: 50%;
  position: relative;
`;

export const UserListingPreviewOptionsBtn = styled.button`
  height: 24px;
  width: 40px;
  color: #77b800;
  background: #fff;
  cursor: pointer;
  border-radius: 3px;
  border: 1px solid #cacaca;
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  margin: 0.5rem;
`;

export const MiniModal = styled.div`
  position: absolute;
  width: 200px;
  border: 1px solid #e8e8e8;
  border-radius: 3px;
  background: #fff;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 19%);
  top: 35px;
  right: 7px;
  /* padding: 1rem; */
  z-index: 10;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

export const MiniModalButton = styled.button`
  background: #fff;
  padding: 10px;
  border: none;
  font-size: 1rem;
  /* width: 65%; */
  cursor: pointer;

  &:hover {
    background: #cacaca;
    color: red;
  }
`;

export const ListingPreviewDetailsContainer = styled.div`
  position: relative;
  padding: 16px 20px;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ListingPreviewDetailsText = styled.span`
  padding: 5px;

  &.listing-preview-title {
    font-size: 1.1rem;
    border-bottom: 0.5px solid #cacaca;
    padding-bottom: 10px;
    margin-bottom: 10px;
    cursor: pointer;
  }
`;

export const ListingEditLink = styled(Link)`
  font-size: 1.1rem;
  border-bottom: 0.5px solid #cacaca;
  padding-bottom: 10px;
  margin-bottom: 10px;
  /* cursor: pointer; */
  text-decoration: none;
  color: #000;
`;
