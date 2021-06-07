import React, { useEffect, useState } from 'react';

import SantoDomingobg from '../../assets/santo-domingo.jpg';
import PlacesAutocomplete from '../places-autocomplete/PlacesAutoComplete';
import { PlacesAutoCompleteButton } from '../places-autocomplete/PlacesAutoComplete.styles';
import { useHistory } from 'react-router-dom';

import { Text } from '../UtilityComponents';
import {
  BackgroundImage,
  DarkHeroOverlay,
  Hero,
  HeroBackground,
  MainSearchContainer,
} from './HomepageHero.styles';

const HomepageHero = () => {
  const history = useHistory();
  const [searchValue, setSearchValue] = useState('');
  const [latLng, setLatLng] = useState(null);

  useEffect(() => {
    if (searchValue && latLng)
      return history.push({ pathname: '/search', state: { searchValue, latLng } });
  }, [history, searchValue, latLng]);

  return (
    <Hero>
      <MainSearchContainer>
        <Text fontSize='2rem' fontColor='#FFF'>
          Find Your New Home
        </Text>
        <Text fontWeight='200' fontColor='#FFF' fontSize='1.4rem'>
          Helping the Dominican community find the perfect fit.
        </Text>

        <PlacesAutocomplete
          setLatLng={setLatLng}
          setSearchValue={setSearchValue}
          className='homepage'>
          <PlacesAutoCompleteButton>Search</PlacesAutoCompleteButton>
        </PlacesAutocomplete>
      </MainSearchContainer>

      <HeroBackground>
        <BackgroundImage imageUrl={SantoDomingobg} />
      </HeroBackground>

      <DarkHeroOverlay />
    </Hero>
  );
};

export default HomepageHero;
