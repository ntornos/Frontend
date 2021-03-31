import React, { useState } from 'react';

import FormInput from '../form-input/FormInput';
import { Text, Container, Image } from '../UtilityComponents';
import { CreateListingCard, CreateListingInput } from './CreateListing.styles';
import forSale from '../../assets/for-sale.png';
import forRent from '../../assets/rent.png';

const CreateListing = () => {
  const [listingStatus, setListingStatus] = useState('RENT');
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

      {/* <Container display='flex' width='25%' justify='space-around'>
      </Container> */}

      <Container width='45%' display='flex' direction='column'>
        <Container display='inherit' justify='space-around'>
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
        </Container>

        <FormInput />
        <FormInput />
        <FormInput />
        <FormInput />
      </Container>
    </CreateListingCard>
  );
};

export default CreateListing;
