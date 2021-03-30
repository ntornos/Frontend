import React from 'react';
import { Option } from '../navbar/NavBar.styles';

const GuestMenu = () => {
  return (
    <>
      <Option to='/login'>Sign in</Option>
      <Option to='/register'>Sign up</Option>
    </>
  );
};

export default GuestMenu;
