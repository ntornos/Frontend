import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import FormInput from '../form-input/FormInput';
import FormButton from '../form-button/FormButton';
import { Container } from '../UtilityComponents';
import { useDispatch, useSelector } from 'react-redux';
import { signinUser, selectUser, clearState, operations } from '../../redux/user/user.slice';
import { StyledErrorMessage } from '../select-formik/SelectOption.styles';

const SignInForm = () => {
  const { status, errorMessage, operation } = useSelector(selectUser);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('useEffect signInForm');
    if (errorMessage) {
      setError(errorMessage);
      dispatch(clearState());
    }
  }, [errorMessage, dispatch]);

  if (status === 'success' && operation === operations.SIGN_IN) window.location.href = '/';

  const formInitialValues = {
    email: '',
    password: '',
  };

  return (
    <>
      <Formik
        initialValues={formInitialValues}
        validationSchema={Yup.object().shape({
          email: Yup.string().email().required('Email is required'),
          password: Yup.string().required('Password is required'),
        })}
        onSubmit={({ email, password }, helpers) => {
          dispatch(signinUser({ email, password }));
          helpers.setSubmitting(false);
        }}>
        {({ values, handleChange, errors, touched, isValid, dirty }) => (
          <Form>
            <FormInput label='Email Address' handleChange={handleChange} name='email' />

            {errors.email && touched.email && (
              <StyledErrorMessage>{errors.email}</StyledErrorMessage>
            )}
            <FormInput
              label='Password'
              handleChange={handleChange}
              name='password'
              type='password'
              onFocus={() => setError(null)}
            />
            {errors.password && touched.password && (
              <StyledErrorMessage>{errors.password}</StyledErrorMessage>
            )}

            {error && <StyledErrorMessage>{error}</StyledErrorMessage>}

            <Container justify='space-between' align='center' margin='20px 0'>
              {/* disable while not valid disabled={!(dirty && isValid)} */}
              <FormButton width='30%'>Continue</FormButton>
            </Container>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SignInForm;
