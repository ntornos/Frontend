import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from '../../components/navbar/NavBar';

export const ListingsManagerHeader = styled(NavBar)`
  position: fixed;
  z-index: 10;
  /* width: 99vw; */
`;

export const MainContent = styled.div`
  background: #fff;
  width: calc(100% - 280px);
  margin-left: 250px;
  position: relative;

  padding: 0 1rem;
  min-height: calc(100vh);
  overflow-y: auto;
  margin-bottom: 65px;
  z-index: 0;
  margin-top: 70px;
`;

export const MainContentHeader = styled.div`
  padding: 30px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled(Link)`
  width: ${props => props.width};
  height: 40px;
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.fontColor};

  font-size: 14px;
  cursor: pointer;
  background: white;
  border: 1px solid rgb(168, 168, 168);
  border-radius: 5px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    border-color: grey;
  }

  & span {
    font-size: 14px;
  }
`;

export const MainContentSubHeader = styled.div`
  background-color: #f5f4f0;
  min-height: 56px;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  margin-bottom: 20px;
`;

export const FilterContainer = styled.div``;

export const ListingSectionTitle = styled.div`
  margin-bottom: 20px;
`;

export const ListingSectionContainer = styled.div`
  width: 100%;
  /* margin-right: 35px; */
  /* margin-bottom: 35px; */

  /* display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem; */
  transition: 0.5s all ease-in-out;

  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;
