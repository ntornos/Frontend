import React from 'react';
import FormInputText from '../form-input-text/FormInputText';
import SelectOption from '../select-formik/SelectOption';
import { ListingEditFormMainContainer } from './ListingEditForm.styles';

import { Form, Formik } from 'formik';
import * as Yup from 'yup';

const ListingEditRentForm = ({ handleChange, handleOnInput, listingStatus }) => {
  const formInitialValuesRent = {
    listingStatus: listingStatus,
    bedrooms: 0,
    bathrooms: 0,
    leaseLength: '',
    squareFootage: '',
  };

  return (
    <Formik
      initialValues={formInitialValuesRent}
      validate={values => {
        const errors = {};

        if (!values.listingStatus) errors.listingStatus = 'Required';
        return errors;
      }}
      validationSchema={Yup.object({
        bedrooms: Yup.number()
          .required('Required')
          .oneOf([0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0], 'Required'),
        bathrooms: Yup.number()
          .required('Required')
          .oneOf([0, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], 'Required'),
        leaseLength: Yup.string().required('Required').oneOf(['1 Year', '1+ Years'], 'Required'),
      })}>
      {({ values, errors, touched, handleChange }) => (
        <Form>
          {console.log(values)}
          <ListingEditFormMainContainer>
            <SelectOption label='Bedrooms' name='bedrooms' width='16%'>
              <option value=''>0</option>
              <option value={1.0}>1.0</option>
              <option value={2.0}>2.0</option>
              <option value={3.0}>3.0</option>
            </SelectOption>
            <SelectOption label='Bathrooms' name='bathrooms' width='16%'>
              <option value=''>0</option>
              <option value={1.0}>1.0</option>
              <option value={2.0}>2.0</option>
              <option value={3.0}>3.0</option>
            </SelectOption>
            <SelectOption label='Lease Length' name='leaseLength' width='16%'>
              <option value='1 Year'>1 Year</option>
              <option value='1+ Years'>1+ Years</option>
            </SelectOption>

            <FormInputText label='Sq Ft' name='squareFootage' placeholder='SF' />
          </ListingEditFormMainContainer>
        </Form>
      )}
    </Formik>
  );
};

export default ListingEditRentForm;
