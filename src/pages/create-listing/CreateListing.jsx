import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import { CreateListingCard, CreateListingForm, ModalWrapper } from './CreateListing.styles';
import { GlobalWrapper } from '../../components/UtilityComponents';
import { StyledErrorMessage } from '../../components/select-formik/SelectOption.styles';

import {
  createListing,
  selectListingInProcess,
  selectListingInProcessId,
} from '../../redux/listing/userListing.slice';

import NavBar from '../../components/navbar/NavBar';
import { Text, Container } from '../../components/UtilityComponents';
import FormInputIcons from '../../components/form-input-icons-formik/FormInputIconsFormik';
import SelectOption from '../../components/select-formik/SelectOption';
import Checkbox from '../../components/checkbox-formik/Checkbox';
import Map from '../../components/map/Map';
import AlertModal from '../../components/alert-modal/AlertModal';
import PlacesAutocomplete from '../../components/places-autocomplete/PlacesAutoComplete';
import { getGeocode, getLatLng } from 'use-places-autocomplete';

const CreateListing = props => {
  const mapStyles = {
    // map styles on create listing
    position: 'sticky',
    minHeight: '150px',
    margin: '5px 0',
  };

  const dispatch = useDispatch();

  const [showMap, setShowMap] = useState(false);
  const listingInProcessId = useSelector(selectListingInProcessId);
  const listingInProcess = useSelector(selectListingInProcess);

  // write an modal that pops up alerting the user he's been redirected to that listing edit page, so he can fill up the rest of the listing requirements.
  const [toggleRedirectAlert, setToggleRedirectAlert] = useState(false);

  const formInitialValues = {
    acceptedTerms: false, // added for our checkbox
    listingStatus: '',
    listingType: '',
    address: '',
    latLng: null,
  };

  const handleLatLng = async (description, setFieldValue) => {
    setShowMap(true);

    const results = await getGeocode({ address: description });
    const latLng = await getLatLng(results[0]);

    setFieldValue('latLng', latLng);
  };

  const onSubmit = async (values, helpers) => {
    const { meta } = await dispatch(createListing({ ...values }));

    // setSubmitting to false to finish the submitting cycle cycle.
    helpers.setSubmitting(false);

    // toggle modal if create listing was successful
    if (meta.requestStatus === 'fulfilled') setToggleRedirectAlert(true);
  };

  return toggleRedirectAlert ? (
    <ModalWrapper>
      <AlertModal
        onSubmit={() =>
          props.history.push({
            pathname: `/myntornos/listings-manager/my-listings/edit-listing/${listingInProcessId}`,
            state: listingInProcess,
          })
        }
        onCancel={() => props.history.push(`/myntornos/listings-manager/my-listings/`)}>
        Click continue to complete this listing information.
      </AlertModal>
    </ModalWrapper>
  ) : (
    <GlobalWrapper>
      <NavBar />
      <CreateListingCard className={toggleRedirectAlert && 'hideCard'}>
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
              .oneOf(['Building', 'House', 'Warehouse'], 'Required')
              .required('Required'),
          })}
          onSubmit={onSubmit}>
          {({ values, errors, touched, setFieldValue, handleChange }) => (
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
              {errors.listingStatus && touched.listingStatus && (
                <StyledErrorMessage>Required</StyledErrorMessage>
              )}

              <Container margin='1.7rem 0px'>
                <Text lineHeight='1.8em'>Neighborhood</Text>
                <PlacesAutocomplete
                  key='address'
                  setFieldValue={setFieldValue}
                  handleLatLng={handleLatLng}
                  handleChange={handleChange}
                  className='create-listing'
                  name='address'
                />
                {touched.address && errors.address && (
                  <StyledErrorMessage>Please input a correct address or address</StyledErrorMessage>
                )}

                {/* {values.latLng && showMap && } */}
                {values.latLng && showMap && (
                  <Map mapStyles={mapStyles} latLng={values.latLng} />
                  // <StaticMap latLng={values.latLng} setMapImage={setMapImgUrl} />
                )}
              </Container>

              <Container display='flex' justify='space-between' margin='1.5rem 0px'>
                <SelectOption label='Listing type' name='listingType' width='100%'>
                  <option value=''>Select...</option>
                  <option value='House'>House</option>
                  <option value='Building'>Building</option>
                  <option value='Warehouse'>Warehouse</option>
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
