import React from 'react';
import { useContext } from 'react';
import { myContext } from './components/Context';
import { Route, Switch } from 'react-router-dom';
import SignInPage from './components/pages/sign-in/SignInPage';
import SignUpPage from './components/pages/sign-up/SignUpPage';
import UserHome from './components/pages/user-home/UserHome';
import Home from './components/pages/home/Home';

const Routes = () => {
  const currUser = useContext(myContext);

  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/login' component={SignInPage} />
      <Route path='/register' component={SignUpPage} />
      {currUser && <Route exact path='/account' component={UserHome} />}
    </Switch>
  );
};

export default Routes;
