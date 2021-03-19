import React from 'react';

import SignInForm from '../../sign-in-form/SignInForm';
import { LeftSideContainer } from './SignInpage.styles';

const SignInPage = () => {
  return (
    <LeftSideContainer align='center'>
      <h2>Log in to your account</h2>
      <SignInForm />
    </LeftSideContainer>
  );
};

export default SignInPage;
