import React from 'react';
import FormButton from '../../form-button/FormButton';

import SignInForm from '../../sign-in/SignInForm';
import SignUpForm from '../../sign-up/SignUpForm';
import { Container } from '../../UtilityComponents';
import { LeftSideContainer, RightSideContainer, EmptySpace } from './SignInSignUp.styles';
import Divider from '../../divider/Divider';
import googleLogo from '../../../assets/googleLogo.png';

const SignInSignUpPage = ({ location }) => {
  const googleLogin = () => {
    window.open(`${process.env.REACT_APP_SERVER_URL}/auth/google`, '_self');
  };

  return (
    <Container>
      {location.pathname === '/login' && (
        <>
          <LeftSideContainer align='center'>
            <h2>Log in to your account</h2>
            <FormButton imageUrl={googleLogo} name='Google' onClick={googleLogin}>
              Sign in with Google
            </FormButton>
            <Divider children='or' />
            <SignInForm />
          </LeftSideContainer>
          <EmptySpace background='#555' width='65%' />
        </>
      )}
      {location.pathname === '/register' && (
        <>
          <EmptySpace background='#555' width='35%' />
          <RightSideContainer align='center'>
            <h2>Create your account</h2>
            <FormButton imageUrl={googleLogo} name='Google' onClick={googleLogin}>
              Sign up with Google
            </FormButton>
            <Divider children='or' />
            <SignUpForm />
          </RightSideContainer>
        </>
      )}
    </Container>
  );
};

export default SignInSignUpPage;
