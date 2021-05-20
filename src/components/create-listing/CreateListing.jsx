import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';

import GooglePlacesAutoComplete, {
  getLatLng,
  geocodeByAddress,
} from 'react-google-places-autocomplete';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { CreateListingCard, CreateListingForm } from './CreateListing.styles';

import NavBar from '../../components/navbar/NavBar';
import { GlobalWrapper } from '../../components/UtilityComponents';
import { Text, Container } from '../UtilityComponents';
import FormInputIcons from '../form-input-icons/FormInputIcons';
import SelectOption from '../select-formik/SelectOption';
import Checkbox from '../checkbox-formik/Checkbox';
import { StyledErrorMessage } from '../select-formik/SelectOption.styles';
import { createListing } from '../../redux/listing/userListing.slice';
import StaticMap from '../map/StaticMap';
import Map from '../map/Map';

const CreateListing = props => {
  const [showMap, setShowMap] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [mapImgUrl, setMapImgUrl] = useState(null);

  const formInitialValues = {
    acceptedTerms: false, // added for our checkbox
    listingStatus: '',
    listingType: '',
    address: '',
    latLng: null,
  };

  const dispatch = useDispatch();

  const onSubmit = async (values, helpers) => {
    await dispatch(createListing({ ...values, mapImg: mapImgUrl }));

    // set Submitting to false to finish the cycle.
    helpers.setSubmitting(false);

    // instead of having local state locate if the form is submitted, maybe formik provides that value.
    setFormSubmitted(true);
  };

  if (formSubmitted) return <Redirect to='/myntornos/listings-manager/my-listings' />;

  const handleAddress = async address => {
    const location = await geocodeByAddress(address);
    const latLng = await getLatLng(location[0]);
    return latLng;
  };

  const handleChange = async (e, action, setFieldValue) => {
    setShowMap(true);
    const latLng = await handleAddress(e.label);
    // Since we need latLng to marker the map, we're setting the field latLng to current selected address coordinates.
    setFieldValue('address', e.label);
    setFieldValue('latLng', latLng);
  };

  return (
    <GlobalWrapper>
      <NavBar />
      <CreateListingCard>
        <Container display='flex' direction='column' align='center' margin='0 0 2rem 0'>
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

              <Container margin='1.7rem 0px'>
                <Text lineHeight='1.8em'>Address</Text>
                <GooglePlacesAutoComplete
                  key='address'
                  selectProps={{
                    name: 'address',
                    onChange: (e, action) => handleChange(e, action, setFieldValue),
                    onFocus: () => setShowMap(false),
                    placeholder: 'Search your neighborhood...',
                  }}
                  apiKey={process.env.REACT_APP_GOOGLE_PLACES_AUTOCOMPLETE_KEY}
                  apiOptions={{
                    language: 'en',
                  }}
                  autocompletionRequest={{
                    types: ['locality'],
                    componentRestrictions: {
                      country: ['DO'],
                    },
                  }}
                />
                {touched.address && errors.address && (
                  <StyledErrorMessage>Please input a correct address or sector</StyledErrorMessage>
                )}

                {/* {values.latLng && showMap && } */}
                {values.latLng && showMap && (
                  <Map latLng={values.latLng} />
                  // <StaticMap latLng={values.latLng} setMapImage={setMapImgUrl} />
                )}
              </Container>

              <Container display='flex' justify='space-between' margin='1.5rem 0px'>
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
    </GlobalWrapper>
  );
};

export default CreateListing;
