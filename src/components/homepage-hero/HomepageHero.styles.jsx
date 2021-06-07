import styled from 'styled-components';
import { Container } from '../../components/UtilityComponents';

export const Hero = styled(Container)`
  background-color: #f4f4f4;
  height: 27.125rem;
  position: relative;
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
  width: 50%;
  flex-direction: column;
  align-items: center;

  // we add z-index 1 for styling purposes, we want the image to be dark. But, the text to remain white.
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
