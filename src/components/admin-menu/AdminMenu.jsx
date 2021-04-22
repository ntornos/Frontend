import React from 'react';
import { Option } from '../navbar/NavBar.styles';
import UserIcon from '../user-icon/UserIcon';

const AdminMenu = ({ toggleDropdown }) => {
  return (
    <>
      <Option to='/dashboard'>Dashboard</Option>
      <UserIcon hasEvent={true} toggleDropdown={toggleDropdown} />
    </>
  );
};

export default AdminMenu;
