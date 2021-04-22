import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';

import { myContext } from './components/Context';
import SignInSignUpPage from './pages/sign-in-sign-up/SignInSignUp.page';
import UserHome from './pages/user-home/UserHome.page';
import Home from './pages/home/Home.page';
import Dashboard from './pages/dashboard/Dashboard.page';
import Account from './pages/account/Account.page';
import CreateListing from './components/create-listing/CreateListing';
import ListingsManager from './pages/listings-manager/ListingsManager';

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
          <Route path='/myntornos/listings-manager' component={ListingsManager} />
        </>
      )}
    </Switch>
  );
};

export default Routes;
