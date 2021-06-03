import React from 'react';

import { GlobalWrapper } from '../../components/UtilityComponents';
import {} from './Home.styles';

import NavBar from '../../components/navbar/NavBar';
import HomepageHero from '../../components/homepage-hero/HomepageHero';

const Home = () => {
  return (
    <GlobalWrapper>
      <NavBar />

      <HomepageHero />
    </GlobalWrapper>
  );
};

export default Home;
