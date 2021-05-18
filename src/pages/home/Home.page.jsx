import React from 'react';
import NavBar from '../../components/navbar/NavBar';
import { GlobalWrapper } from '../../components/UtilityComponents';

const Home = () => {
  return (
    <GlobalWrapper>
      <NavBar />
      <div>Welcome to the homepage!</div>
    </GlobalWrapper>
  );
};

export default Home;
