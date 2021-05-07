import React from 'react';
import { Option } from '../navbar/NavBar.styles';
import UserIcon from '../user-icon/UserIcon';

const AdminMenu = ({ dropDownShow }) => {
  return (
    <>
      {/* <Option to='/dashboard' onClick={toggleDropdown}>
        Dashboard
      </Option> */}
      <UserIcon hasEvent={true} toggleDropdown={dropDownShow} />
    </>
  );
};

export default AdminMenu;
