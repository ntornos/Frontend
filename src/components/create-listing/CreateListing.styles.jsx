import styled from 'styled-components';
import Card from '../card/Card';

export const CreateListingCard = styled(Card)`
  width: 95%;
  height: 80%;
  min-height: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 0.0625rem solid hsla(0, 0%, 74.9%, 0.7);
  box-shadow: 0 0 0.3125rem 0 rgb(0 0 0 / 20%);
`;
