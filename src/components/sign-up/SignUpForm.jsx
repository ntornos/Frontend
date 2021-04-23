import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import FormInput from '../form-input/FormInput';
import FormButton from '../form-button/FormButton';
import { Container } from '../UtilityComponents';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserStatus, signupUser } from '../../redux/user/user.slice';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const userStatus = useSelector(selectUserStatus);

  const onSubmit = () => {
    dispatch(signupUser({ email, password }));
  };

  if (userStatus === 'signup success') window.location.href = '/login';

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
          <FormButton onClick={onSubmit} width='30%'>
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
