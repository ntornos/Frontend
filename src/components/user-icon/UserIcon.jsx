import React from 'react';

import { UserIconContainer } from './UserIcon.styles';
import { Image } from '../UtilityComponents';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.slice';
import defaultPic from '../../assets/defaultImg.png';
const UserIcon = ({ toggleDropdown }) => {
  const currUser = useSelector(selectCurrentUser);
  return (
    <UserIconContainer onMouseEnter={toggleDropdown}>
      <Image
        alt='default user'
        src={currUser.profilePicture ? currUser.profilePicture : defaultPic}
        width='35px'
        height='35px'
        border='2px solid #bababa'
        borderRadius='30px'
      />
    </UserIconContainer>
  );
};

export default UserIcon;
