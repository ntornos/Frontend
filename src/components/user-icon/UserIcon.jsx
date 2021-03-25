import React, { useContext } from 'react';

import { myContext } from '../Context';
import { Image, UserIconContainer } from './UserIcon.styles';

const UserIcon = ({ toggleDropdown, dropdownHidden }) => {
  const currUser = useContext(myContext);

  return (
    <UserIconContainer onClick={() => toggleDropdown(!dropdownHidden)}>
      <Image alt='default user' src={currUser.profilePicture} />
    </UserIconContainer>
  );
};

export default UserIcon;
