import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import FormInput from '../form-input/FormInput';
import FormButton from '../form-button/FormButton';
import { Container } from '../UtilityComponents';

const SignInForm = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async () => {
    const { data } = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/account/login`,
      {
        email,
        password,
      },
      { withCredentials: true }
    );

    if (data.status) {
      // setEmail('');
      // setPassword('');
      window.location.href = '/account';
    }
  };

  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault();
          // return signIn();
        }}>
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
          <FormButton onClick={signIn} width='30%'>
            Continue
          </FormButton>
          <span>
            No account? <Link to='/register'>Create one</Link>{' '}
          </span>
        </Container>
      </form>
    </>
  );
};

export default SignInForm;
