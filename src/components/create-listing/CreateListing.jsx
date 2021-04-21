import React from 'react';
import { useDispatch } from 'react-redux';
import GooglePlacesAutoComplete, { geocodeByPlaceId } from 'react-google-places-autocomplete';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { CreateListingCard, CreateListingForm } from './CreateListing.styles';

import { Text, Container } from '../UtilityComponents';
import FormInputIcons from '../form-input-icons/FormInputIcons';
import SelectOption from '../select-formik/SelectOption';
import Checkbox from '../checkbox-formik/Checkbox';
import { StyledErrorMessage } from '../select-formik/SelectOption.styles';
import { addNewListingThunk } from '../../redux/listings/listings.actions';

const CreateListing = props => {
  const formInitialValues = {
    acceptedTerms: false, // added for our checkbox
    listingStatus: '',
    listingType: '',
    address: '',
  };

  const dispatch = useDispatch();

  const onSubmit = (values, helpers) => {
    // create a new listing, redirect to that listing.
    dispatch(addNewListingThunk(values));
    setTimeout(() => helpers.setSubmitting(false), 2000);
  };

  const handleChangeAndGeoCode = async (e, action, setFieldValue) => {
    const placeId = e.value.place_id;
    const geoCoded = await geocodeByPlaceId(placeId);
    const formattedAddress = geoCoded[0].formatted_address;
    setFieldValue('address', formattedAddress);
  };

  return (
    <CreateListingCard>
      <Container display='flex' direction='column' align='center'>
        <Text fontSize='28px' padding='10px 0px'>
          Add Your Property
        </Text>
        <Text fontSize='18px' fontColor='#888888'>
          Reach the largest Dominican renting/selling community{' '}
        </Text>
      </Container>

      <Formik
        initialValues={formInitialValues}
        validate={values => {
          const errors = {};

          if (!values.address) errors.address = 'Required';
          if (!values.listingStatus) errors.listingStatus = 'Required';
          return errors;
        }}
        validationSchema={Yup.object({
          acceptedTerms: Yup.boolean()
            .required('Required')
            .oneOf([true], 'You must accept the terms and conditions.'),

          listingType: Yup.string()
            .oneOf(['building', 'house', 'warehouse'], 'Required')
            .required('Required'),
        })}
        onSubmit={onSubmit}>
        {({ values, errors, touched, setFieldValue }) => (
          <CreateListingForm>
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
            {errors.listingStatus && touched.listingStatus && (
              <StyledErrorMessage>Required</StyledErrorMessage>
            )}

            <Container margin='1.5em 0px'>
              <Text lineHeight='1.8em'>Address</Text>
              <GooglePlacesAutoComplete
                key='address'
                selectProps={{
                  name: 'address',
                  onChange: (e, action) => handleChangeAndGeoCode(e, action, setFieldValue),
                }}
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
                    country: ['do'],
                  },
                }}
              />
              {touched.address && errors.address && (
                <StyledErrorMessage>Please input a correct address or sector</StyledErrorMessage>
              )}
            </Container>

            <Container display='flex' justify='space-between' margin='1.5em 0px'>
              <SelectOption label='Listing type' name='listingType' width='100%'>
                <option value=''>Select...</option>
                <option value='house'>House</option>
                <option value='building'>Building</option>
                <option value='warehouse'>Warehouse</option>
              </SelectOption>
            </Container>

            <Checkbox name='acceptedTerms'>I accept the terms and conditions</Checkbox>

            <button type='submit'>Submit</button>
          </CreateListingForm>
        )}
      </Formik>
    </CreateListingCard>
  );
};

export default CreateListing;
