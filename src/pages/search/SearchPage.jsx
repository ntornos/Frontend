import React, { useState } from 'react';
import Map from '../../components/map/Map';
import NavBar from '../../components/navbar/NavBar';
import TogglableSidebar from '../../components/map-sidebar/MapSidebar';

import { Container, GlobalWrapper, Text } from '../../components/UtilityComponents';
import {
  MainContainer,
  MapContainer,
  PageContentContainer,
  FilterContainer,
} from './SearchPage.styles';

const SearchPage = ({ location }) => {
  const [showSidebar, setShowSidebar] = useState(true);
  const { searchValue, latLng } = location.state;
  return (
    <GlobalWrapper overflow='hidden'>
      <NavBar />

      <MainContainer>
        {/* FILTERS */}
        <FilterContainer>
          <Text>Filters</Text>
        </FilterContainer>

        <PageContentContainer>
          {/* SIDEBAR */}
          {showSidebar && (
            <TogglableSidebar>
              <Container padding='1rem'>
                <Text fontSize='1.25rem' fontWeight='bold'>
                  {searchValue}
                </Text>
              </Container>
            </TogglableSidebar>
          )}

          {/* MAP */}
          <MapContainer>
            <Map latLng={latLng} zoom={14} />
          </MapContainer>
        </PageContentContainer>
      </MainContainer>
    </GlobalWrapper>
  );
};

export default SearchPage;
