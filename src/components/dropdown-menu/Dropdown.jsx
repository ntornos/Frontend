import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  DropdownContainer,
  MenuItem,
  DropdownDivider,
  DropdownUserIconContainer,
} from './Dropdown.styles';

import UserIcon from '../user-icon/UserIcon';
import { Text } from '../UtilityComponents';
import { UserIconArrow, DropdownCard } from './Dropdown.styles';
import useResize from '../../hooks/dimensions.hook';
import { selectCurrentUser, signoutUser } from '../../redux/user/user.slice';
import { signOutClearListingState } from '../../redux/listing/userListing.slice';

const Dropdown = ({ toggleDropdown }) => {
  const { width } = useResize();
  const currUser = useSelector(selectCurrentUser);

  const dispatch = useDispatch();

  const handleLogout = async () => {
    toggleDropdown();
    await dispatch(signoutUser());
    dispatch(signOutClearListingState());
  };

  return (
    <DropdownCard width={width}>
      <DropdownContainer onMouseLeave={toggleDropdown}>
        <UserIconArrow />
        <DropdownUserIconContainer>
          <UserIcon />
          <DropdownContainer>
            <Text fontColor='#292929'>{currUser.username}</Text>
            <Text fontSize='14px' fontColor='#757575'>
              @{currUser.email.split('@')[0]}
            </Text>
          </DropdownContainer>
        </DropdownUserIconContainer>
        <DropdownDivider />
        <MenuItem to='/myntornos/create-listing' onClick={toggleDropdown}>
          Upload
        </MenuItem>
        {/* to be added later: */}
        <MenuItem to='/myntornos/saved-homes' onClick={toggleDropdown}>
          Saved Homes
        </MenuItem>
        <MenuItem to='/myntornos/listings-manager' onClick={toggleDropdown}>
          Listings Manager
        </MenuItem>
        <MenuItem to='/myntornos/account' onClick={toggleDropdown}>
          Account Settings
        </MenuItem>
        <DropdownDivider />
        <MenuItem to='/' onClick={handleLogout}>
          Sign out
        </MenuItem>
      </DropdownContainer>
    </DropdownCard>
  );
};

export default Dropdown;
