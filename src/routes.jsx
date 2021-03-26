import React from 'react';
import { useContext } from 'react';
import { myContext } from './components/Context';
import { Route, Switch } from 'react-router-dom';
import SignInSignUpPage from './components/pages/sign-in-sign-up/SignInSignUp.page';
import UserHome from './components/pages/user-home/UserHome.page';
import Home from './components/pages/home/Home.page';
import Dashboard from './components/pages/dashboard/Dashboard.page';
import Account from './components/pages/account/Account.page';
import CreateListing from './components/create-listing/CreateListing';

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
          <Route exact path='myntornos/user-home' component={UserHome} />
          <Route path='/myntornos/dashboard' component={Dashboard} />
          <Route path='/myntornos/account' component={Account} />
          <Route path='/myntornos/create-listing' component={CreateListing} />
          {/* <Route path='/myntornos/my-listings' component={CreateNewListing} /> */}
        </>
      )}
    </Switch>
  );
};

export default Routes;
