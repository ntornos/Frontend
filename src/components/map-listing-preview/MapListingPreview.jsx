import React from 'react';
import { Container, Text } from '../UtilityComponents';
import { MapListingPreviewContainer } from './MapListingPreview.styles';

const MapListingPreview = ({ item }) => {
  console.log(item);
  const { address } = item;

  return (
    <MapListingPreviewContainer>
      <Container>
        <Text fontSize='0.8rem'>{address}</Text>
      </Container>
    </MapListingPreviewContainer>
  );
};

export default MapListingPreview;
