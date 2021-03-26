import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import FormInput from '../form-input/FormInput';
import FormButton from '../form-button/FormButton';
import { Container } from '../UtilityComponents';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = async () => {
    await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/account/register`,
      {
        email,
        password,
      },
      { withCredentials: true }
    );
    window.location.href = '/';
  };

  return (
    <>
      <form onSubmit={e => e.preventDefault()}>
        <FormInput
          label='Email Address'
          handleChange={e => setEmail(e.target.value)}
          value={email}
          name='email'
          type='email'
          required
        />
        <FormInput
          label='Password'
          handleChange={e => setPassword(e.target.value)}
          value={password}
          name='password'
          type='password'
          required
        />

        <Container justify='space-between' align='center'>
          <FormButton onClick={signUp} width='30%'>
            Continue
          </FormButton>
          <p>
            Have an account? <Link to='/login'>Log in</Link>{' '}
          </p>
        </Container>
      </form>
    </>
  );
};

export default SignUpForm;
