import React from 'react';
import { Container, Text } from '../UtilityComponents';
import {
  MapListingPreviewContainer,
  ListCard,
  ListCardInfo,
  ListCardTop,
  ListCardImg,
  ListCardLink,
} from './MapListingPreview.styles';
import testImg from '../../assets/santo-domingo.jpg';
import { numberWithCommas } from '../../utils';

const MapListingPreview = ({ item }) => {
  console.log(item);
  const { address } = item;

  return (
    <MapListingPreviewContainer>
      <ListCard>
        {/* TOP */}
        <ListCardTop>
          <ListCardLink to='/'>
            <ListCardImg src={testImg} alt='listing looks' />
          </ListCardLink>
        </ListCardTop>

        {/* BOTTOM */}
        <ListCardInfo>
          <Text fontSize='1.25rem' fontWeight='bold'>
            {item.status === 'RENT'
              ? numberWithCommas(item.rentPrice, true)
              : numberWithCommas(item.salePrice, true)}
          </Text>
          <Container margin='0.25rem 0' display='flex' width='75%' justify='space-between'>
            <Text fontSize='14px'>{item.bedrooms} Bds</Text> |
            <Text fontSize='14px'>{item.bathrooms} Ba</Text> |
            <Text fontSize='14px'>{numberWithCommas(item.squareFoot)} Sqf</Text> |
            <Text fontSize='14px'>{item.type} </Text>
          </Container>
          <Text textOverflow='ellipsis' whiteSpace='nowrap' fontSize='0.9rem'>
            {address}
          </Text>
        </ListCardInfo>
      </ListCard>
    </MapListingPreviewContainer>
  );
};

export default MapListingPreview;
