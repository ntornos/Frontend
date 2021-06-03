import styled from 'styled-components';
import { Container } from '../../components/UtilityComponents';

export const Hero = styled(Container)`
  /* margin-top: 3rem; */
  /* padding: 0.25rem 0.5rem; */
  background-color: #f4f4f4;
  height: 27.125rem;
  position: relative;

  /* overflow: hidden; */
`;

export const HeroBackground = styled.div`
  width: 100%;
  height: 100%;
`;

export const BackgroundImage = styled.img`
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  height: 100%;
  width: 100%;
  background-position: center;
  background-size: cover;
`;

export const MainSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  position: absolute;
  margin: 0 auto;
  top: 30%;
  left: 0;
  bottom: 0;
  right: 0;
`;

export const DarkHeroOverlay = styled.div`
  margin: 0 auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
`;
