import React, { useState } from 'react';

import { Text, Container } from '../UtilityComponents';
import { CreateListingCard } from './CreateListing.styles';
import FormInputIcons from '../form-input-icons/FormInputIcons';
import RentForm from '../rent-form/RentForm';
import SaleForm from '../sale-form/SaleForm';

const CreateListing = () => {
  const [listingStatus, setListingStatus] = useState('');
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
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex' }}>
            <FormInputIcons
              value='RENT'
              handleChange={e => setListingStatus(e.target.value)}
              iconName='forRent'
              name='listingStatusConnector'
              label='Rent'
              iconColor=''
              checked={listingStatus === 'RENT'}
            />
            <FormInputIcons
              value='SALE'
              handleChange={e => setListingStatus(e.target.value)}
              iconName='forSale'
              name='listingStatusConnector'
              label='Sale'
              checked={listingStatus === 'SALE'}
            />
          </div>

          {listingStatus === 'RENT' ? <RentForm /> : <SaleForm />}
        </div>
      </form>
    </CreateListingCard>
  );
};

export default CreateListing;
