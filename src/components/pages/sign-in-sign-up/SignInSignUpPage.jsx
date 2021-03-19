import React from 'react';

import SignInForm from '../../sign-in/SignInForm';
import SignUpForm from '../../sign-up/SignUpForm';
import { Container } from '../../UtilityComponents';
import { LeftSideContainer, RightSideContainer, EmptySpace } from './SignInSignUpPage.styles';

const SignInSignUpPage = ({ location }) => {
  return (
    <Container>
      {location.pathname === '/login' && (
        <>
          <LeftSideContainer align='center'>
            <h2>Log in to your account</h2>
            <SignInForm />
          </LeftSideContainer>
          <EmptySpace background='#555' width='70%' />
        </>
      )}
      {location.pathname === '/register' && (
        <>
          <EmptySpace background='#555' width='30%' />
          <RightSideContainer align='center'>
            <h2>Create your account</h2>
            <SignUpForm />
          </RightSideContainer>
        </>
      )}
    </Container>
  );
};

export default SignInSignUpPage;
