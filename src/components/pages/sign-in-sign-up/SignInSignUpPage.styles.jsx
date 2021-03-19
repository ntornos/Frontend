import styled from 'styled-components';
import { Container } from '../../UtilityComponents';

export const LeftSideContainer = styled(Container)`
  width: 30%;
  height: calc(100vh - 70px);
  flex-direction: column;
  background: ${props => props.background};
`;

export const RightSideContainer = styled(Container)`
  width: 30%;
  height: calc(100vh - 70px);
  flex-direction: column;
  background: ${props => props.background};
`;

export const EmptySpace = styled(Container)`
  width: ${props => props.width};
  background: ${props => props.background};
`;
