import styled from 'styled-components';

export const MainContent = styled.div`
  background: #fff;
  min-height: 500px;
  /* float: left; */
  width: calc(100% - 250px);
  /* margin-left: 250px; */
  /* position: relative; */
  /* z-index: 0; */
`;

export const MainContentHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 20px;
  border-top: #15171c solid 1px;
`;

export const Button = styled.button`
  width: ${props => props.width};
  height: 40px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
  margin: 5px 0px;
  background: white;
  border: 1px solid rgb(168, 168, 168);
  border-radius: 5px;

  background-color: ${props => props.theme.body};
  color: ${props => props.theme.fontColor};

  &:hover {
    border-color: grey;
  }

  & span {
    font-size: 14px;
  }
`;
