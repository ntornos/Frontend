import React, { useContext } from 'react';

import { myContext } from '../Context';
import { Image, UserIconContainer } from './UserIcon.styles';
import { UserIconArrow } from './UserIcon.styles';

const UserIcon = ({ dropdownHidden }) => {
  const currUser = useContext(myContext);

  return (
    <UserIconContainer>
      <Image alt='default user' src={currUser.profilePicture} />
      {dropdownHidden && <UserIconArrow />}
    </UserIconContainer>
  );
};

export default UserIcon;
