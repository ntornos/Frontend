import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MainContent = styled.div`
  background: #fff;
  min-height: 500px;
  /* float: left; */
  width: calc(100% - 250px);
  /* margin-left: 250px; */
  /* position: relative; */
  /* z-index: 0; */
  border-top: #cacaca solid 1px;
`;

export const MainContentHeader = styled.div`
  padding: 20px 20px;
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
  margin: 0px 20px;
  margin-bottom: 20px;
`;

export const FilterContainer = styled.div``;

export const ListingSectionTitle = styled.div`
  padding: 0px 20px;
`;
