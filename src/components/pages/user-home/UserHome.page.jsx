import React, { useContext } from 'react';
import { myContext } from '../../Context';
const UserHome = () => {
  const currUser = useContext(myContext);

  return <div>Welcome back, {currUser.email}!</div>;
};

export default UserHome;
