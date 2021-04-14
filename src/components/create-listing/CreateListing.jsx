import React, { useState } from 'react';

import { Text, Container } from '../UtilityComponents';
import { CreateListingCard } from './CreateListing.styles';
import FormInputIcons from '../form-input-icons/FormInputIcons';
import RentForm from '../rent-form/RentForm';
import SaleForm from '../sale-form/SaleForm';
import FormInput from '../form-input/FormInput';

const CreateListing = () => {
  const [listingStatus, setListingStatus] = useState('');
  const [address, setAddress] = useState('');
  console.log(address);

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
        {/* <div> */}
        <Container display='flex'>
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
        </Container>

        <Container>
          <FormInput
            label='Address'
            handleChange={e => setAddress(e.target.value)}
            required
            name='address'
          />
        </Container>

        {/* {listingStatus === 'RENT' ? <RentForm /> : <SaleForm />} */}
        {/* </div> */}
      </form>
    </CreateListingCard>
  );
};

export default CreateListing;
