import React, { useState } from 'react';

import { Text, Container } from '../UtilityComponents';
import { CreateListingCard } from './CreateListing.styles';
import FormInputIcons from '../form-input-icons/FormInputIcons';

const CreateListing = () => {
  const [listingStatus, setListingStatus] = useState('RENT');
  console.log(`listingStatus`, listingStatus);
  return (
    <CreateListingCard>
      <Container
        display='flex'
        direction='column'
        justify='space-around'
        align='center'
        height='50px'>
        <Text fontSize='28px' padding='10px 0px'>
          Add Your Property
        </Text>
        <Text fontSize='18px' fontColor='#888888'>
          Reach the largest Dominican renting/selling community{' '}
        </Text>
      </Container>

      <form>
        <FormInputIcons
          value='RENT'
          handleChange={e => setListingStatus(e.target.value)}
          iconName='forRent'
          name='listingStatusConnector'
          checked={listingStatus === 'RENT'}
        />
        <FormInputIcons
          value='SALE'
          handleChange={e => setListingStatus(e.target.value)}
          iconName='forSale'
          name='listingStatusConnector'
          checked={listingStatus === 'SALE'}
        />
      </form>
    </CreateListingCard>
  );
};

export default CreateListing;

{
  /* <Container display='inherit' justify='space-around'>
  <Image
    onClick={() => setListingStatus('FOR_SALE')}
    className={listingStatus === 'FOR_SALE' && 'selected'}
    src={forSale}
    alt='house for sale icon'
    width='75px'
    height='75px'
    border='1px solid black'
  />

  <Image
    src={forRent}
    onClick={() => setListingStatus('FOR_RENT')}
    className={listingStatus === 'FOR_RENT' && 'selected'}
    alt='house for sale icon'
    width='75px'
    height='75px'
  />
</Container> */
}
