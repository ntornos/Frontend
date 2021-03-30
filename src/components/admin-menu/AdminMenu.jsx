import React from 'react';
import { Option } from '../navbar/NavBar.styles';
import UserIcon from '../user-icon/UserIcon';

const AdminMenu = () => {
  return (
    <>
      <Option to='/dashboard'>Dashboard</Option>
      <UserIcon hasEvent={true} />
    </>
  );
};

export default AdminMenu;
