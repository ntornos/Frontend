import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { myContext } from '../Context';
import { UserIconContainer } from './UserIcon.styles';
import { Image } from '../UtilityComponents';

const UserIcon = ({ toggleDropdown }) => {
  const currUser = useContext(myContext);

  return (
    <UserIconContainer onMouseEnter={toggleDropdown}>
      <Image
        alt='default user'
        src={currUser.profilePicture}
        width='35px'
        height='35px'
        border='2px solid #bababa'
        borderRadius='30px'
      />
    </UserIconContainer>
  );
};

export default UserIcon;
