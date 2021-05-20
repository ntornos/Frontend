import React from 'react';

import FormButton from '../../components/form-button/FormButton';
import SignInForm from '../../components/sign-in/SignInForm';
import SignUpForm from '../../components/sign-up/SignUpForm';
import { Container, GlobalWrapper } from '../../components/UtilityComponents';
import { EmptySpace } from './SignInSignUp.styles';
import Divider from '../../components/divider/Divider';
import googleLogo from '../../assets/googleLogo.png';
import NavBar from '../../components/navbar/NavBar';
import { Link } from 'react-router-dom';

const SignInSignUpPage = ({ location }) => {
  const googleLogin = () => {
    window.open(`${process.env.REACT_APP_SERVER_URL}/auth/google`, '_self');
  };

  return (
    <GlobalWrapper>
      <NavBar />
      <Container display='flex'>
        {location.pathname === '/login' && (
          <>
            <Container
              display='flex'
              align='center'
              width='35%'
              height='calc(100vh - 70px)'
              direction='column'>
              <h2>Log in to your account</h2>
              <FormButton imageUrl={googleLogo} name='Google' onClick={googleLogin}>
                Sign in with Google
              </FormButton>
              <Divider children='or' />
              <SignInForm />
              <p>
                Have an account? <Link to='/register'>Sign up</Link>
              </p>
            </Container>
            <EmptySpace background='#555' width='65%' />
          </>
        )}
        {location.pathname === '/register' && (
          <>
            <EmptySpace background='#555' width='35%' />
            <Container
              display='flex'
              align='center'
              width='35%'
              height='calc(100vh - 70px)'
              direction='column'>
              <h2>Create your account</h2>
              <FormButton imageUrl={googleLogo} name='Google' onClick={() => {}}>
                Sign up with Google
              </FormButton>
              <Divider children='or' />
              <SignUpForm />
              <p>
                Have an account? <Link to='/login'>Log in</Link>{' '}
              </p>
            </Container>
          </>
        )}
      </Container>
    </GlobalWrapper>
  );
};

export default SignInSignUpPage;
