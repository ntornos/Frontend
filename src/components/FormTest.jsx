import React from 'react';
import './FormTest.css';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import SelectOption from './select-formik/SelectOption';
import Checkbox from './checkbox-formik/Checkbox';

// And now we can use these
const FormTest = () => {
  return (
    <>
      <Formik
        initialValues={{
          acceptedTerms: false, // added for our checkbox
          numOfBedrooms: 0, // added for our select
          numOfBathrooms: 0,
        }}
        validationSchema={Yup.object({
          acceptedTerms: Yup.boolean()
            .required('Required')
            .oneOf([true], 'You must accept the terms and conditions.'),
          numOfBedrooms: Yup.number()
            // specify the set of valid values for job type
            // @see http://bit.ly/yup-mixed-oneOf
            .oneOf(['1.0', '2.0', '3.0', '4.0'], 'Invalid')
            .required('Required'),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          await new Promise(r => setTimeout(r, 500));
          setSubmitting(false);
        }}>
        <Form>
          <SelectOption label='Bedrooms' name='numOfBedrooms'>
            <option value=''>Select</option>
            <option value={1.0}>1.0</option>
            <option value={2.0}>2.0</option>
            <option value={3.0}>3.0</option>
            <option value={4.0}>4</option>
          </SelectOption>
          <SelectOption label='Bathrooms' name='numOfBathrooms'>
            <option value=''>Select</option>
            <option value={0.5}>0.5</option>
            <option value={1.0}>1.0</option>
            <option value={1.5}>1.5</option>
            <option value={2.0}>2.0</option>
          </SelectOption>
          <Checkbox name='acceptedTerms'>I accept the terms and conditions</Checkbox>

          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </>
  );
};

export default FormTest;
