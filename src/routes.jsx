import React from 'react';
import { useContext } from 'react';
import { myContext } from './components/Context';
import { Route, Switch } from 'react-router-dom';
import SignInSignUpPage from './components/pages/sign-in-sign-up/SignInSignUp.page';
import UserHome from './components/pages/user-home/UserHome.page';
import Home from './components/pages/home/Home.page';
import Dashboard from './components/pages/dashboard/Dashboard.page';
import MyAccount from './components/pages/my-account/MyAccount.page';

const Routes = () => {
  const currUser = useContext(myContext);

  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/login' component={SignInSignUpPage} />
      <Route path='/register' component={SignInSignUpPage} />
      {/* login routes below, we have a current user! */}
      {currUser && (
        <>
          <Route exact path='/user-home' component={UserHome} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/my-account' component={MyAccount} />
        </>
      )}
    </Switch>
  );
};

export default Routes;
