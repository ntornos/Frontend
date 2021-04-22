import styled from 'styled-components';
import { Container } from '../../components/UtilityComponents';

export const EmptySpace = styled(Container)`
  width: ${props => props.width};
  background: ${props => props.background};
`;
