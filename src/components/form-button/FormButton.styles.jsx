import styled from 'styled-components';

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

  & img {
    width: 13.5%;
    object-fit: contain;
    /* margin-left: 3%; */
  }
`;
