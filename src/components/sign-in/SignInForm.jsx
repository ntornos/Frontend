import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import FormInput from '../form-input/FormInput';
import FormButton from '../form-button/FormButton';
import { Container } from '../UtilityComponents';
import { signInSignUp } from '../../authFuncs';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
          <FormButton onClick={() => signInSignUp(email, password, 'login')} width='30%'>
            Continue
          </FormButton>
          <p>
            No account? <Link to='/register'>Create one</Link>{' '}
          </p>
        </Container>
      </form>
    </>
  );
};

export default SignInForm;
