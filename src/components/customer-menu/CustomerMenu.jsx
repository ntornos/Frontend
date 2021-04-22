import React from 'react';

import UserIcon from '../user-icon/UserIcon';

const CustomerMenu = ({ toggleDropdown }) => {
  return <UserIcon hasEvent={true} toggleDropdown={toggleDropdown} />;
};

export default CustomerMenu;
