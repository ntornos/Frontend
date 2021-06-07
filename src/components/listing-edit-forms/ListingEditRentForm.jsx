import React from 'react';
import FormInputText from '../form-input-text/FormInputText';
import SelectOption from '../select-formik/SelectOption';
import { ListingEditFormMainContainer } from './ListingEditForm.styles';

import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { ListingEditDivider } from '../../pages/listing-edit/ListingEdit.styles';
import { useDispatch, useSelector } from 'react-redux';
import { editListing, selectListingInProcessId } from '../../redux/listing/userListing.slice';

const ListingEditRentForm = ({ listing, listingStatus }) => {
  const { bathrooms, bedrooms, depositAmount, leaseLength, rentPrice, squareFoot } = listing;

  const formInitialValuesRent = {
    listingStatus: listingStatus,
    bedrooms: 0 || bedrooms,
    bathrooms: 0 || bathrooms,
    leaseLength: '' || leaseLength,
    squareFoot: '' || squareFoot,
    rentPrice: '' || rentPrice,
    depositAmount: '' || depositAmount,
  };

  const transformToFormatted = (values, field, setFieldValue) => {
    // formattedValue: '1 Months'
    // floatValue: 1
    // value: '1'
    const { formattedValue, value, floatValue } = values;
    console.log(values);
    setFieldValue(field, value);
  };

  const dispatch = useDispatch();
  const listingInProcessId = useSelector(selectListingInProcessId);

  const onSubmit = async (values, helpers) => {
    await dispatch(editListing({ id: listingInProcessId, values }));

    helpers.setSubmitting(false);
  };

  return (
    <Formik
      initialValues={formInitialValuesRent}
      onSubmit={onSubmit}
      validate={({ listingStatus, leaseLength, squareFoot }) => {
        const errors = {};

        if (!listingStatus) errors.listingStatus = 'Required';

        if (leaseLength && leaseLength < 12) errors.leaseLength = 'Minimum 12 Months';

        if (squareFoot && squareFoot < 50) errors.squareFoot = 'Minimum 50 SF';

        return errors;
      }}
      validationSchema={Yup.object({
        bedrooms: Yup.number()
          .required('Required')
          .oneOf([1.0, 2.0, 3.0, 4.0, 5.0, 6.0], 'Required'),
        bathrooms: Yup.number()
          .required('Required')
          .oneOf([1.0, 1.5, 2.0, 2.5, 3.0, 3.5], 'Required'),
        leaseLength: Yup.string().required('Required'),
        squareFoot: Yup.string().required('Required'),
        rentPrice: Yup.string().required('Required'),
        depositAmount: Yup.string().required('Required'),
      })}>
      {({ values, errors, touched, setFieldValue }) => (
        <Form>
          <ListingEditFormMainContainer>
            <SelectOption padding='1rem' label='Bedrooms' name='bedrooms' width='14%'>
              <option value=''>0</option>
              <option value={1.0}>1.0</option>
              <option value={2.0}>2.0</option>
              <option value={3.0}>3.0</option>
            </SelectOption>
            <SelectOption padding='1rem' label='Bathrooms' name='bathrooms' width='16%'>
              <option value=''>0</option>
              <option value={1.0}>1.0</option>
              <option value={2.0}>2.0</option>
              <option value={3.0}>3.0</option>
            </SelectOption>

            <FormInputText
              name='leaseLength'
              label='Lease Length'
              suffix=' Months'
              placeholder='Months'
              padding='1rem'
              capNumber={100}
              onValueChange={transformToFormatted}
              setFieldValue={setFieldValue}
            />

            <FormInputText
              name='squareFoot'
              label='Sq Ft'
              suffix=' SF'
              placeholder='SF'
              padding='1rem'
              capNumber={12000}
              onValueChange={transformToFormatted}
              setFieldValue={setFieldValue}
              thousandSeparator={true}
            />

            <FormInputText
              name='rentPrice'
              label='Rent'
              suffix='/mo'
              prefix='$'
              placeholder='$/mo'
              padding='1rem'
              capNumber={100000}
              onValueChange={transformToFormatted}
              setFieldValue={setFieldValue}
              thousandSeparator={true}
            />

            <FormInputText
              name='depositAmount'
              label='Deposit'
              prefix='$'
              placeholder='$0'
              padding='1rem'
              capNumber={10000}
              onValueChange={transformToFormatted}
              setFieldValue={setFieldValue}
              thousandSeparator={true}
            />
          </ListingEditFormMainContainer>
          <ListingEditDivider />
          <button type='submit'>Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default ListingEditRentForm;
