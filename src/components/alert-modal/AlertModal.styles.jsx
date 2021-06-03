import styled from 'styled-components';
import Card from '../card/Card';

export const AlertModalCard = styled(Card)`
  position: absolute;
  width: 70%;
  height: 60%;
  left: 0;
  top: 0;
  margin: 15% auto;
  z-index: 100;
  background: white;
  right: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
`;

export const Button = styled.button`
  width: ${props => props.width};
  height: 40px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 18px;
  cursor: pointer;
  /* margin: 5px 0px; */
  margin: 0 1rem;
  background: white;
  border: 1px solid rgb(168, 168, 168);
  border-radius: 6px;

  background-color: ${props => props.theme.body};
  color: ${props => props.theme.fontColor};

  &:hover {
    border-color: grey;
  }
`;
