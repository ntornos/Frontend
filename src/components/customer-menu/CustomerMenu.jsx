import React from 'react';

import UserIcon from '../user-icon/UserIcon';

const CustomerMenu = ({ dropDownShow }) => {
  return <UserIcon hasEvent={true} toggleDropdown={dropDownShow} />;
};

export default CustomerMenu;
