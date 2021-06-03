import styled from 'styled-components';
import { Container } from '../../components/UtilityComponents';

export const ListingEditDivider = styled.hr`
  width: 100%;
  border: none;
  border-top: 0.0625rem solid #d5d5d5;
  margin-top: 2rem;
`;

export const ListingEditContainer = styled(Container)`
  box-sizing: border-box;
  margin: 0 2rem 2rem;
  max-width: calc(100% - 4rem);
`;
