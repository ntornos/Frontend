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
        width='35px'
        height='35px'
        border='2px solid #bababa'
        borderRadius='30px'
      />
    </UserIconContainer>
  );
};

export default UserIcon;
