import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import FormInput from '../form-input/FormInput';
import FormButton from '../form-button/FormButton';
import { Container } from '../UtilityComponents';
import { signupUser, clearState, selectUser, operations } from '../../redux/user/user.slice';
import { StyledErrorMessage } from '../select-formik/SelectOption.styles';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const { status, errorMessage, operation } = useSelector(selectUser);

  useEffect(() => {
    console.log('useEffect signUpForm');
    if (errorMessage) {
      setError(errorMessage);
      dispatch(clearState());
    }
  }, [errorMessage, dispatch]);

  if (status === 'success' && operation === operations.SIGN_UP) return <Redirect to='/login' />;

  const formInitialValues = {
    email: '',
    password: '',
  };

  return (
    <>
      <Formik
        initialValues={formInitialValues}
        validationSchema={Yup.object().shape({
          email: Yup.string().email('Invalid email').required('Email is required'),
          password: Yup.string()
            .required('Password is required')
            .min(6, 'Password too short - should be 6 characters minimum'),
        })}
        onSubmit={({ email, password }, helpers) => {
          dispatch(signupUser({ email, password }));
          helpers.setSubmitting(false);
        }}>
        {({ errors, touched, handleChange }) => (
          <Form>
            <FormInput
              label='Email Address'
              handleChange={handleChange}
              onFocus={() => setError(null)}
              name='email'
            />
            {errors.email && touched.email && (
              <StyledErrorMessage>{errors.email}</StyledErrorMessage>
            )}

            {error && <StyledErrorMessage>{error}</StyledErrorMessage>}
            <FormInput
              label='Password'
              handleChange={handleChange}
              name='password'
              type='password'
            />
            {errors.password && touched.password && (
              <StyledErrorMessage>{errors.password}</StyledErrorMessage>
            )}
            <Container justify='space-between' align='center' margin='20px 0'>
              <FormButton width='30%'>Continue</FormButton>
            </Container>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SignUpForm;
