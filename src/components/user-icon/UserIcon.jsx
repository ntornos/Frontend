import React, { useContext } from 'react';

import { myContext } from '../Context';
import { Image, UserIconContainer } from './UserIcon.styles';
import { CardArrow } from './UserIcon.styles';

const UserIcon = ({ toggleDropdown, dropdownHidden }) => {
  const currUser = useContext(myContext);

  return (
    <UserIconContainer onClick={() => toggleDropdown(!dropdownHidden)}>
      <Image alt='default user' src={currUser.profilePicture} />

      {dropdownHidden && <CardArrow />}
    </UserIconContainer>
  );
};

export default UserIcon;
