import React, { useState } from 'react';
import GooglePlacesAutoComplete from 'react-google-places-autocomplete';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { CreateListingCard, CreateListingForm } from './CreateListing.styles';

import { Text, Container } from '../UtilityComponents';
import FormInputIcons from '../form-input-icons/FormInputIcons';
import SelectOption from '../select-formik/SelectOption';
import Checkbox from '../checkbox-formik/Checkbox';

const CreateListing = () => {
  const [address, setAddress] = useState('');

  const handleSubmit = values => {
    console.log(values);
  };

  return (
    <CreateListingCard>
      <Container display='flex' direction='column' margin='3em 0px' align='center'>
        <Text fontSize='28px' padding='10px 0px'>
          Add Your Property
        </Text>
        <Text fontSize='18px' fontColor='#888888'>
          Reach the largest Dominican renting/selling community{' '}
        </Text>
      </Container>

      <Formik
        initialValues={{
          acceptedTerms: false, // added for our checkbox
          numOfBedrooms: 0, // added for our select
          numOfBathrooms: 0,
          listingStatus: '',
        }}
        validationSchema={Yup.object({
          acceptedTerms: Yup.boolean()
            .required('Required')
            .oneOf([true], 'You must accept the terms and conditions.'),
          numOfBedrooms: Yup.number()
            // specify the set of valid values for job type
            // @see http://bit.ly/yup-mixed-oneOf
            .oneOf([1.0, 2.0, 3.0, 4.0], 'Required')
            .required('Required'),
          numOfBathrooms: Yup.number()

            .oneOf([0.5, 1.0, 1.5, 2.0], 'Required')
            .required('Required'),

          SaleOrRent: Yup.string().oneOf(['RENT', 'SALE'], 'Required').required('Required'),
        })}
        onSubmit={handleSubmit}>
        {({ values }) => (
          <CreateListingForm>
            {/* {console.log(values)} */}
            <Container display='flex' justify='space-between'>
              <FormInputIcons
                value='RENT'
                iconName='forRent'
                name='listingStatus'
                label='Rent'
                checked={values.listingStatus === 'RENT'}
              />
              <FormInputIcons
                value='SALE'
                iconName='forSale'
                name='listingStatus'
                label='Sale'
                checked={values.listingStatus === 'SALE'}
              />
            </Container>
            {/*
            <Container margin='1.5em 0px'>
              <Text lineHeight='1.8em'>Address</Text>
              <GooglePlacesAutoComplete
                selectProps={{ value: address, onChange: setAddress }}
                apiKey='AIzaSyA1u8vY_EHRR8d3GQk9jNsjwvhDqM8QURk'
                apiOptions={{
                  language: 'en',
                  region: 'do',
                }}
                autocompletionRequest={{
                  bounds: [
                    { lat: 50, lng: 50 },
                    { lat: 100, lng: 100 },
                  ],
                  componentRestrictions: {
                    country: ['DO'],
                  },
                }}
              />
            </Container> */}

            <Container display='flex' justify='space-between' margin='1.5em 0px'>
              <SelectOption label='Bedrooms' name='numOfBedrooms' width={'40%'}>
                <option value=''>Select</option>
                <option value={1.0}>1.0</option>
                <option value={2.0}>2.0</option>
                <option value={3.0}>3.0</option>
                <option value={4.0}>4</option>
              </SelectOption>
              <SelectOption label='Bathrooms' name='numOfBathrooms' width={'40%'}>
                <option value=''>Select</option>
                <option value={0.5}>0.5</option>
                <option value={1.0}>1.0</option>
                <option value={1.5}>1.5</option>
                <option value={2.0}>2.0</option>
              </SelectOption>
            </Container>

            <Container
              display='flex'
              direction='column'
              align='center'
              justify='space-evenly'
              height='5em'>
              <Checkbox name='acceptedTerms'>I accept the terms and conditions</Checkbox>
              <button type='submit'>Submit</button>
            </Container>
          </CreateListingForm>
        )}
      </Formik>
    </CreateListingCard>
  );
};

export default CreateListing;
