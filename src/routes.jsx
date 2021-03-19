import React from 'react';
import { useContext } from 'react';
import { myContext } from './components/Context';
import { Route, Switch } from 'react-router-dom';
import SignInSignUpPage from './components/pages/sign-in-sign-up/SignInSignUpPage';
import UserHome from './components/pages/user-home/UserHome';
import Home from './components/pages/home/Home';

const Routes = () => {
  const currUser = useContext(myContext);

  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/login' component={SignInSignUpPage} />
      <Route path='/register' component={SignInSignUpPage} />
      {currUser && <Route exact path='/account' component={UserHome} />}
    </Switch>
  );
};

export default Routes;
