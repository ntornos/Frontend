import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { myContext } from '../Context';
import { UserIconContainer } from './UserIcon.styles';
import { Image } from '../UtilityComponents';

import { toggleMenu } from '../../redux/user-interface/userInterface.actions';

const UserIcon = ({ hasEvent }) => {
  const currUser = useContext(myContext);
  const dispatch = useDispatch();

  const dropdownHidden = useSelector(state => state.userInterface.dropdownHidden);

  const toggleMenuHandler = () => dispatch(toggleMenu());

  const hasEventHandler = () => {
    if (hasEvent && dropdownHidden) toggleMenuHandler();
    return () => {};
  };

  return (
    <UserIconContainer onMouseEnter={hasEventHandler}>
      <Image
        alt='default user'
        src={currUser.profilePicture}
        width='30px'
        height='30px'
        border='2px solid rgba(230, 230, 230, 1)'
        borderRadius='30px'
      />
    </UserIconContainer>
  );
};

export default UserIcon;
