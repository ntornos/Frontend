import React, { useState } from 'react';
import GooglePlacesAutoComplete from 'react-google-places-autocomplete';
import PlacesAutoComplete from 'react-places-autocomplete';

import SantoDomingobg from '../../assets/santo-domingo.jpg';
import PlacesAutocomplete from '../places-autocomplete/PlacesAutoComplete';

import { Text } from '../UtilityComponents';
import {
  BackgroundImage,
  DarkHeroOverlay,
  Hero,
  HeroBackground,
  MainSearchContainer,
} from './HomepageHero.styles';

const googlePlacesAutoCompleteStyles = {
  dropdownIndicator: false,
  container: provided => ({
    ...provided,
    width: '35%',
    marginTop: '1rem',
  }),
};

const HomepageHero = () => {
  const [searchValue, setSearchValue] = useState('');
  console.log(searchValue);

  return (
    <Hero>
      <MainSearchContainer>
        <Text fontSize='2rem' fontColor='#FFF'>
          Find Your New Home
        </Text>
        <Text fontWeight='200' fontColor='#FFF' fontSize='1.4rem'>
          Helping the Dominican community find the perfect fit.
        </Text>

        <PlacesAutocomplete />
      </MainSearchContainer>

      <HeroBackground>
        <BackgroundImage imageUrl={SantoDomingobg} />
      </HeroBackground>

      <DarkHeroOverlay />
    </Hero>
  );
};

export default HomepageHero;
